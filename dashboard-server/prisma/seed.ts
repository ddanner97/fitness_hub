import { PrismaClient } from '../app/generated/prisma';
const prisma = new PrismaClient();

async function main() {
  const now = new Date();

  // 1. Create an admin user
  console.log('Creating admin user...')
  const admin = await prisma.users.create({
    data: {
      first_name: 'Admin',
      last_name: 'User',
      email: 'admin@example.com',
      is_admin: true,
      created_at: now,
    },
  });

  // 2. Create an address and a school
  console.log('Creating address')
  const address = await prisma.addresses.create({
    data: {
      country: 'US',
      administrative_area: 'CA',
      locality: 'Los Angeles',
      postal_code: '90001',
      thoroughfare: '123 Fitness Ave',
      created_at: now,
    },
  });

  console.log('Creating School')
  const school = await prisma.schools.create({
    data: {
      school_name: 'Performance High',
      address_id: address.id,
      created_at: now,
    },
  });

  // 3. Create a sport
  const sport = await prisma.sports.create({
    data: {
      name: 'Football',
      created_at: now,
    },
  });

  // 4. Create a team and connect it to school and sport
  const team = await prisma.teams.create({
    data: {
      name: 'Blue Springs Wild Cats Football',
      is_school_team: true,
      school_id: school.id,
      sport_id: sport.id,
      created_at: now,
      user_teams: {
        create: {
          user_id: admin.id,
          role: 'admin',
          start_date: now,
        },
      },
      team_primary_contacts: {
        create: {
          user_id: admin.id,
        },
      },
    },
  });

  // 5. Create a few exercises
  const squat = await prisma.exercises.create({
    data: {
      exercise_name: 'Back Squat',
      muscle_group: 'Legs',
      description: 'Barbell back squat focusing on quadriceps and glutes.',
      created_at: now,
    },
  });

  const bench = await prisma.exercises.create({
    data: {
      exercise_name: 'Bench Press',
      muscle_group: 'Chest',
      description: 'Flat barbell bench press for pectorals.',
      created_at: now,
    },
  });

  // 6. Create a workout and connect the exercises
  const workout = await prisma.workouts.create({
    data: {
      workout_name: 'Full Body Strength',
      description: 'Foundational compound movements',
      created_by: admin.id,
      created_at: now,
      workout_exercises: {
        create: [
          {
            exercise_id: squat.id,
            sets: 4,
            reps: 8,
            rest_interval: 90,
          },
          {
            exercise_id: bench.id,
            sets: 3,
            reps: 10,
            rest_interval: 60,
          },
        ],
      },
    },
  });

  // 7. Assign workout to the admin user
  await prisma.workout_assignments.create({
    data: {
      workout_id: workout.id,
      assignee_type: 'user',
      assignee_id: admin.id,
      start_date: now,
    },
  });

  console.log('Seed complete 🚀');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
