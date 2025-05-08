
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model addresses
 * 
 */
export type addresses = $Result.DefaultSelection<Prisma.$addressesPayload>
/**
 * Model exercises
 * 
 */
export type exercises = $Result.DefaultSelection<Prisma.$exercisesPayload>
/**
 * Model player_exercise_progress
 * 
 */
export type player_exercise_progress = $Result.DefaultSelection<Prisma.$player_exercise_progressPayload>
/**
 * Model schools
 * 
 */
export type schools = $Result.DefaultSelection<Prisma.$schoolsPayload>
/**
 * Model sports
 * 
 */
export type sports = $Result.DefaultSelection<Prisma.$sportsPayload>
/**
 * Model team_primary_contacts
 * 
 */
export type team_primary_contacts = $Result.DefaultSelection<Prisma.$team_primary_contactsPayload>
/**
 * Model teams
 * 
 */
export type teams = $Result.DefaultSelection<Prisma.$teamsPayload>
/**
 * Model user_teams
 * 
 */
export type user_teams = $Result.DefaultSelection<Prisma.$user_teamsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model workout_assignments
 * 
 */
export type workout_assignments = $Result.DefaultSelection<Prisma.$workout_assignmentsPayload>
/**
 * Model workout_exercises
 * 
 */
export type workout_exercises = $Result.DefaultSelection<Prisma.$workout_exercisesPayload>
/**
 * Model workouts
 * 
 */
export type workouts = $Result.DefaultSelection<Prisma.$workoutsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const assignee_type_enum: {
  team: 'team',
  user: 'user'
};

export type assignee_type_enum = (typeof assignee_type_enum)[keyof typeof assignee_type_enum]


export const user_team_role: {
  admin: 'admin',
  trainer: 'trainer',
  coach: 'coach',
  athlete: 'athlete'
};

export type user_team_role = (typeof user_team_role)[keyof typeof user_team_role]

}

export type assignee_type_enum = $Enums.assignee_type_enum

export const assignee_type_enum: typeof $Enums.assignee_type_enum

export type user_team_role = $Enums.user_team_role

export const user_team_role: typeof $Enums.user_team_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.addresses.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.addresses.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.addresses`: Exposes CRUD operations for the **addresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.addresses.findMany()
    * ```
    */
  get addresses(): Prisma.addressesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercises`: Exposes CRUD operations for the **exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercises.findMany()
    * ```
    */
  get exercises(): Prisma.exercisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player_exercise_progress`: Exposes CRUD operations for the **player_exercise_progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Player_exercise_progresses
    * const player_exercise_progresses = await prisma.player_exercise_progress.findMany()
    * ```
    */
  get player_exercise_progress(): Prisma.player_exercise_progressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schools`: Exposes CRUD operations for the **schools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.schools.findMany()
    * ```
    */
  get schools(): Prisma.schoolsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sports`: Exposes CRUD operations for the **sports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports
    * const sports = await prisma.sports.findMany()
    * ```
    */
  get sports(): Prisma.sportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team_primary_contacts`: Exposes CRUD operations for the **team_primary_contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Team_primary_contacts
    * const team_primary_contacts = await prisma.team_primary_contacts.findMany()
    * ```
    */
  get team_primary_contacts(): Prisma.team_primary_contactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.teamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_teams`: Exposes CRUD operations for the **user_teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_teams
    * const user_teams = await prisma.user_teams.findMany()
    * ```
    */
  get user_teams(): Prisma.user_teamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout_assignments`: Exposes CRUD operations for the **workout_assignments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workout_assignments
    * const workout_assignments = await prisma.workout_assignments.findMany()
    * ```
    */
  get workout_assignments(): Prisma.workout_assignmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout_exercises`: Exposes CRUD operations for the **workout_exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workout_exercises
    * const workout_exercises = await prisma.workout_exercises.findMany()
    * ```
    */
  get workout_exercises(): Prisma.workout_exercisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workouts`: Exposes CRUD operations for the **workouts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workouts.findMany()
    * ```
    */
  get workouts(): Prisma.workoutsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    addresses: 'addresses',
    exercises: 'exercises',
    player_exercise_progress: 'player_exercise_progress',
    schools: 'schools',
    sports: 'sports',
    team_primary_contacts: 'team_primary_contacts',
    teams: 'teams',
    user_teams: 'user_teams',
    users: 'users',
    workout_assignments: 'workout_assignments',
    workout_exercises: 'workout_exercises',
    workouts: 'workouts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "addresses" | "exercises" | "player_exercise_progress" | "schools" | "sports" | "team_primary_contacts" | "teams" | "user_teams" | "users" | "workout_assignments" | "workout_exercises" | "workouts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      addresses: {
        payload: Prisma.$addressesPayload<ExtArgs>
        fields: Prisma.addressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findFirst: {
            args: Prisma.addressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findMany: {
            args: Prisma.addressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          create: {
            args: Prisma.addressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          createMany: {
            args: Prisma.addressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addressesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          delete: {
            args: Prisma.addressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          update: {
            args: Prisma.addressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          deleteMany: {
            args: Prisma.addressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.addressesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          upsert: {
            args: Prisma.addressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          aggregate: {
            args: Prisma.AddressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddresses>
          }
          groupBy: {
            args: Prisma.addressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressesCountArgs<ExtArgs>
            result: $Utils.Optional<AddressesCountAggregateOutputType> | number
          }
        }
      }
      exercises: {
        payload: Prisma.$exercisesPayload<ExtArgs>
        fields: Prisma.exercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          findFirst: {
            args: Prisma.exercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          findMany: {
            args: Prisma.exercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>[]
          }
          create: {
            args: Prisma.exercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          createMany: {
            args: Prisma.exercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.exercisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>[]
          }
          delete: {
            args: Prisma.exercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          update: {
            args: Prisma.exercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          deleteMany: {
            args: Prisma.exercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.exercisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>[]
          }
          upsert: {
            args: Prisma.exercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          aggregate: {
            args: Prisma.ExercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercises>
          }
          groupBy: {
            args: Prisma.exercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.exercisesCountArgs<ExtArgs>
            result: $Utils.Optional<ExercisesCountAggregateOutputType> | number
          }
        }
      }
      player_exercise_progress: {
        payload: Prisma.$player_exercise_progressPayload<ExtArgs>
        fields: Prisma.player_exercise_progressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.player_exercise_progressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.player_exercise_progressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload>
          }
          findFirst: {
            args: Prisma.player_exercise_progressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.player_exercise_progressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload>
          }
          findMany: {
            args: Prisma.player_exercise_progressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload>[]
          }
          create: {
            args: Prisma.player_exercise_progressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload>
          }
          createMany: {
            args: Prisma.player_exercise_progressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.player_exercise_progressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload>[]
          }
          delete: {
            args: Prisma.player_exercise_progressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload>
          }
          update: {
            args: Prisma.player_exercise_progressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload>
          }
          deleteMany: {
            args: Prisma.player_exercise_progressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.player_exercise_progressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.player_exercise_progressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload>[]
          }
          upsert: {
            args: Prisma.player_exercise_progressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$player_exercise_progressPayload>
          }
          aggregate: {
            args: Prisma.Player_exercise_progressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer_exercise_progress>
          }
          groupBy: {
            args: Prisma.player_exercise_progressGroupByArgs<ExtArgs>
            result: $Utils.Optional<Player_exercise_progressGroupByOutputType>[]
          }
          count: {
            args: Prisma.player_exercise_progressCountArgs<ExtArgs>
            result: $Utils.Optional<Player_exercise_progressCountAggregateOutputType> | number
          }
        }
      }
      schools: {
        payload: Prisma.$schoolsPayload<ExtArgs>
        fields: Prisma.schoolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.schoolsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.schoolsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          findFirst: {
            args: Prisma.schoolsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.schoolsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          findMany: {
            args: Prisma.schoolsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>[]
          }
          create: {
            args: Prisma.schoolsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          createMany: {
            args: Prisma.schoolsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.schoolsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>[]
          }
          delete: {
            args: Prisma.schoolsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          update: {
            args: Prisma.schoolsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          deleteMany: {
            args: Prisma.schoolsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.schoolsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.schoolsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>[]
          }
          upsert: {
            args: Prisma.schoolsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          aggregate: {
            args: Prisma.SchoolsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchools>
          }
          groupBy: {
            args: Prisma.schoolsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.schoolsCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolsCountAggregateOutputType> | number
          }
        }
      }
      sports: {
        payload: Prisma.$sportsPayload<ExtArgs>
        fields: Prisma.sportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload>
          }
          findFirst: {
            args: Prisma.sportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload>
          }
          findMany: {
            args: Prisma.sportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload>[]
          }
          create: {
            args: Prisma.sportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload>
          }
          createMany: {
            args: Prisma.sportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload>[]
          }
          delete: {
            args: Prisma.sportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload>
          }
          update: {
            args: Prisma.sportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload>
          }
          deleteMany: {
            args: Prisma.sportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload>[]
          }
          upsert: {
            args: Prisma.sportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportsPayload>
          }
          aggregate: {
            args: Prisma.SportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSports>
          }
          groupBy: {
            args: Prisma.sportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sportsCountArgs<ExtArgs>
            result: $Utils.Optional<SportsCountAggregateOutputType> | number
          }
        }
      }
      team_primary_contacts: {
        payload: Prisma.$team_primary_contactsPayload<ExtArgs>
        fields: Prisma.team_primary_contactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.team_primary_contactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.team_primary_contactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload>
          }
          findFirst: {
            args: Prisma.team_primary_contactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.team_primary_contactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload>
          }
          findMany: {
            args: Prisma.team_primary_contactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload>[]
          }
          create: {
            args: Prisma.team_primary_contactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload>
          }
          createMany: {
            args: Prisma.team_primary_contactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.team_primary_contactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload>[]
          }
          delete: {
            args: Prisma.team_primary_contactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload>
          }
          update: {
            args: Prisma.team_primary_contactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload>
          }
          deleteMany: {
            args: Prisma.team_primary_contactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.team_primary_contactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.team_primary_contactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload>[]
          }
          upsert: {
            args: Prisma.team_primary_contactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_primary_contactsPayload>
          }
          aggregate: {
            args: Prisma.Team_primary_contactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam_primary_contacts>
          }
          groupBy: {
            args: Prisma.team_primary_contactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Team_primary_contactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.team_primary_contactsCountArgs<ExtArgs>
            result: $Utils.Optional<Team_primary_contactsCountAggregateOutputType> | number
          }
        }
      }
      teams: {
        payload: Prisma.$teamsPayload<ExtArgs>
        fields: Prisma.teamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          findFirst: {
            args: Prisma.teamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          findMany: {
            args: Prisma.teamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          create: {
            args: Prisma.teamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          createMany: {
            args: Prisma.teamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          delete: {
            args: Prisma.teamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          update: {
            args: Prisma.teamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          deleteMany: {
            args: Prisma.teamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.teamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          upsert: {
            args: Prisma.teamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.teamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
      user_teams: {
        payload: Prisma.$user_teamsPayload<ExtArgs>
        fields: Prisma.user_teamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_teamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_teamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload>
          }
          findFirst: {
            args: Prisma.user_teamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_teamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload>
          }
          findMany: {
            args: Prisma.user_teamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload>[]
          }
          create: {
            args: Prisma.user_teamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload>
          }
          createMany: {
            args: Prisma.user_teamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_teamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload>[]
          }
          delete: {
            args: Prisma.user_teamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload>
          }
          update: {
            args: Prisma.user_teamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload>
          }
          deleteMany: {
            args: Prisma.user_teamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_teamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_teamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload>[]
          }
          upsert: {
            args: Prisma.user_teamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_teamsPayload>
          }
          aggregate: {
            args: Prisma.User_teamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_teams>
          }
          groupBy: {
            args: Prisma.user_teamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_teamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_teamsCountArgs<ExtArgs>
            result: $Utils.Optional<User_teamsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      workout_assignments: {
        payload: Prisma.$workout_assignmentsPayload<ExtArgs>
        fields: Prisma.workout_assignmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workout_assignmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workout_assignmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload>
          }
          findFirst: {
            args: Prisma.workout_assignmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workout_assignmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload>
          }
          findMany: {
            args: Prisma.workout_assignmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload>[]
          }
          create: {
            args: Prisma.workout_assignmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload>
          }
          createMany: {
            args: Prisma.workout_assignmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workout_assignmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload>[]
          }
          delete: {
            args: Prisma.workout_assignmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload>
          }
          update: {
            args: Prisma.workout_assignmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload>
          }
          deleteMany: {
            args: Prisma.workout_assignmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workout_assignmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workout_assignmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload>[]
          }
          upsert: {
            args: Prisma.workout_assignmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_assignmentsPayload>
          }
          aggregate: {
            args: Prisma.Workout_assignmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout_assignments>
          }
          groupBy: {
            args: Prisma.workout_assignmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Workout_assignmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.workout_assignmentsCountArgs<ExtArgs>
            result: $Utils.Optional<Workout_assignmentsCountAggregateOutputType> | number
          }
        }
      }
      workout_exercises: {
        payload: Prisma.$workout_exercisesPayload<ExtArgs>
        fields: Prisma.workout_exercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workout_exercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workout_exercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          findFirst: {
            args: Prisma.workout_exercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workout_exercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          findMany: {
            args: Prisma.workout_exercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>[]
          }
          create: {
            args: Prisma.workout_exercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          createMany: {
            args: Prisma.workout_exercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workout_exercisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>[]
          }
          delete: {
            args: Prisma.workout_exercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          update: {
            args: Prisma.workout_exercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          deleteMany: {
            args: Prisma.workout_exercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workout_exercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workout_exercisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>[]
          }
          upsert: {
            args: Prisma.workout_exercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          aggregate: {
            args: Prisma.Workout_exercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout_exercises>
          }
          groupBy: {
            args: Prisma.workout_exercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Workout_exercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.workout_exercisesCountArgs<ExtArgs>
            result: $Utils.Optional<Workout_exercisesCountAggregateOutputType> | number
          }
        }
      }
      workouts: {
        payload: Prisma.$workoutsPayload<ExtArgs>
        fields: Prisma.workoutsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workoutsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workoutsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          findFirst: {
            args: Prisma.workoutsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workoutsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          findMany: {
            args: Prisma.workoutsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>[]
          }
          create: {
            args: Prisma.workoutsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          createMany: {
            args: Prisma.workoutsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workoutsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>[]
          }
          delete: {
            args: Prisma.workoutsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          update: {
            args: Prisma.workoutsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          deleteMany: {
            args: Prisma.workoutsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workoutsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workoutsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>[]
          }
          upsert: {
            args: Prisma.workoutsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          aggregate: {
            args: Prisma.WorkoutsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkouts>
          }
          groupBy: {
            args: Prisma.workoutsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutsGroupByOutputType>[]
          }
          count: {
            args: Prisma.workoutsCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    addresses?: addressesOmit
    exercises?: exercisesOmit
    player_exercise_progress?: player_exercise_progressOmit
    schools?: schoolsOmit
    sports?: sportsOmit
    team_primary_contacts?: team_primary_contactsOmit
    teams?: teamsOmit
    user_teams?: user_teamsOmit
    users?: usersOmit
    workout_assignments?: workout_assignmentsOmit
    workout_exercises?: workout_exercisesOmit
    workouts?: workoutsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExercisesCountOutputType
   */

  export type ExercisesCountOutputType = {
    player_exercise_progress: number
    workout_exercises: number
  }

  export type ExercisesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_exercise_progress?: boolean | ExercisesCountOutputTypeCountPlayer_exercise_progressArgs
    workout_exercises?: boolean | ExercisesCountOutputTypeCountWorkout_exercisesArgs
  }

  // Custom InputTypes
  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExercisesCountOutputType
     */
    select?: ExercisesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeCountPlayer_exercise_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_exercise_progressWhereInput
  }

  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeCountWorkout_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_exercisesWhereInput
  }


  /**
   * Count Type SchoolsCountOutputType
   */

  export type SchoolsCountOutputType = {
    teams: number
  }

  export type SchoolsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | SchoolsCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * SchoolsCountOutputType without action
   */
  export type SchoolsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolsCountOutputType
     */
    select?: SchoolsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolsCountOutputType without action
   */
  export type SchoolsCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamsWhereInput
  }


  /**
   * Count Type SportsCountOutputType
   */

  export type SportsCountOutputType = {
    teams: number
  }

  export type SportsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | SportsCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * SportsCountOutputType without action
   */
  export type SportsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsCountOutputType
     */
    select?: SportsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportsCountOutputType without action
   */
  export type SportsCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamsWhereInput
  }


  /**
   * Count Type TeamsCountOutputType
   */

  export type TeamsCountOutputType = {
    team_primary_contacts: number
    user_teams: number
  }

  export type TeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_primary_contacts?: boolean | TeamsCountOutputTypeCountTeam_primary_contactsArgs
    user_teams?: boolean | TeamsCountOutputTypeCountUser_teamsArgs
  }

  // Custom InputTypes
  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     */
    select?: TeamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountTeam_primary_contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_primary_contactsWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountUser_teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_teamsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    team_primary_contacts: number
    user_teams: number
    workouts: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_primary_contacts?: boolean | UsersCountOutputTypeCountTeam_primary_contactsArgs
    user_teams?: boolean | UsersCountOutputTypeCountUser_teamsArgs
    workouts?: boolean | UsersCountOutputTypeCountWorkoutsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTeam_primary_contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_primary_contactsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_teamsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workoutsWhereInput
  }


  /**
   * Count Type Workout_assignmentsCountOutputType
   */

  export type Workout_assignmentsCountOutputType = {
    player_exercise_progress: number
  }

  export type Workout_assignmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_exercise_progress?: boolean | Workout_assignmentsCountOutputTypeCountPlayer_exercise_progressArgs
  }

  // Custom InputTypes
  /**
   * Workout_assignmentsCountOutputType without action
   */
  export type Workout_assignmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout_assignmentsCountOutputType
     */
    select?: Workout_assignmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Workout_assignmentsCountOutputType without action
   */
  export type Workout_assignmentsCountOutputTypeCountPlayer_exercise_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_exercise_progressWhereInput
  }


  /**
   * Count Type WorkoutsCountOutputType
   */

  export type WorkoutsCountOutputType = {
    workout_assignments: number
    workout_exercises: number
  }

  export type WorkoutsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_assignments?: boolean | WorkoutsCountOutputTypeCountWorkout_assignmentsArgs
    workout_exercises?: boolean | WorkoutsCountOutputTypeCountWorkout_exercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutsCountOutputType without action
   */
  export type WorkoutsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutsCountOutputType
     */
    select?: WorkoutsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutsCountOutputType without action
   */
  export type WorkoutsCountOutputTypeCountWorkout_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_assignmentsWhereInput
  }

  /**
   * WorkoutsCountOutputType without action
   */
  export type WorkoutsCountOutputTypeCountWorkout_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_exercisesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model addresses
   */

  export type AggregateAddresses = {
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  export type AddressesAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressesSumAggregateOutputType = {
    id: number | null
  }

  export type AddressesMinAggregateOutputType = {
    id: number | null
    country: string | null
    administrative_area: string | null
    sub_administrative_area: string | null
    locality: string | null
    dependent_locality: string | null
    postal_code: string | null
    thoroughfare: string | null
    premise: string | null
    sub_premise: string | null
    organisation_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesMaxAggregateOutputType = {
    id: number | null
    country: string | null
    administrative_area: string | null
    sub_administrative_area: string | null
    locality: string | null
    dependent_locality: string | null
    postal_code: string | null
    thoroughfare: string | null
    premise: string | null
    sub_premise: string | null
    organisation_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesCountAggregateOutputType = {
    id: number
    country: number
    administrative_area: number
    sub_administrative_area: number
    locality: number
    dependent_locality: number
    postal_code: number
    thoroughfare: number
    premise: number
    sub_premise: number
    organisation_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AddressesAvgAggregateInputType = {
    id?: true
  }

  export type AddressesSumAggregateInputType = {
    id?: true
  }

  export type AddressesMinAggregateInputType = {
    id?: true
    country?: true
    administrative_area?: true
    sub_administrative_area?: true
    locality?: true
    dependent_locality?: true
    postal_code?: true
    thoroughfare?: true
    premise?: true
    sub_premise?: true
    organisation_name?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesMaxAggregateInputType = {
    id?: true
    country?: true
    administrative_area?: true
    sub_administrative_area?: true
    locality?: true
    dependent_locality?: true
    postal_code?: true
    thoroughfare?: true
    premise?: true
    sub_premise?: true
    organisation_name?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesCountAggregateInputType = {
    id?: true
    country?: true
    administrative_area?: true
    sub_administrative_area?: true
    locality?: true
    dependent_locality?: true
    postal_code?: true
    thoroughfare?: true
    premise?: true
    sub_premise?: true
    organisation_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AddressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to aggregate.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressesMaxAggregateInputType
  }

  export type GetAddressesAggregateType<T extends AddressesAggregateArgs> = {
        [P in keyof T & keyof AggregateAddresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddresses[P]>
      : GetScalarType<T[P], AggregateAddresses[P]>
  }




  export type addressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithAggregationInput | addressesOrderByWithAggregationInput[]
    by: AddressesScalarFieldEnum[] | AddressesScalarFieldEnum
    having?: addressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressesCountAggregateInputType | true
    _avg?: AddressesAvgAggregateInputType
    _sum?: AddressesSumAggregateInputType
    _min?: AddressesMinAggregateInputType
    _max?: AddressesMaxAggregateInputType
  }

  export type AddressesGroupByOutputType = {
    id: number
    country: string
    administrative_area: string
    sub_administrative_area: string | null
    locality: string
    dependent_locality: string | null
    postal_code: string
    thoroughfare: string
    premise: string | null
    sub_premise: string | null
    organisation_name: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  type GetAddressesGroupByPayload<T extends addressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressesGroupByOutputType[P]>
            : GetScalarType<T[P], AddressesGroupByOutputType[P]>
        }
      >
    >


  export type addressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    administrative_area?: boolean
    sub_administrative_area?: boolean
    locality?: boolean
    dependent_locality?: boolean
    postal_code?: boolean
    thoroughfare?: boolean
    premise?: boolean
    sub_premise?: boolean
    organisation_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    schools?: boolean | addresses$schoolsArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    administrative_area?: boolean
    sub_administrative_area?: boolean
    locality?: boolean
    dependent_locality?: boolean
    postal_code?: boolean
    thoroughfare?: boolean
    premise?: boolean
    sub_premise?: boolean
    organisation_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    administrative_area?: boolean
    sub_administrative_area?: boolean
    locality?: boolean
    dependent_locality?: boolean
    postal_code?: boolean
    thoroughfare?: boolean
    premise?: boolean
    sub_premise?: boolean
    organisation_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectScalar = {
    id?: boolean
    country?: boolean
    administrative_area?: boolean
    sub_administrative_area?: boolean
    locality?: boolean
    dependent_locality?: boolean
    postal_code?: boolean
    thoroughfare?: boolean
    premise?: boolean
    sub_premise?: boolean
    organisation_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type addressesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "administrative_area" | "sub_administrative_area" | "locality" | "dependent_locality" | "postal_code" | "thoroughfare" | "premise" | "sub_premise" | "organisation_name" | "created_at" | "updated_at", ExtArgs["result"]["addresses"]>
  export type addressesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | addresses$schoolsArgs<ExtArgs>
  }
  export type addressesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type addressesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $addressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "addresses"
    objects: {
      schools: Prisma.$schoolsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string
      administrative_area: string
      sub_administrative_area: string | null
      locality: string
      dependent_locality: string | null
      postal_code: string
      thoroughfare: string
      premise: string | null
      sub_premise: string | null
      organisation_name: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["addresses"]>
    composites: {}
  }

  type addressesGetPayload<S extends boolean | null | undefined | addressesDefaultArgs> = $Result.GetResult<Prisma.$addressesPayload, S>

  type addressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressesCountAggregateInputType | true
    }

  export interface addressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['addresses'], meta: { name: 'addresses' } }
    /**
     * Find zero or one Addresses that matches the filter.
     * @param {addressesFindUniqueArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressesFindUniqueArgs>(args: SelectSubset<T, addressesFindUniqueArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Addresses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressesFindUniqueOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressesFindUniqueOrThrowArgs>(args: SelectSubset<T, addressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressesFindFirstArgs>(args?: SelectSubset<T, addressesFindFirstArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressesFindFirstOrThrowArgs>(args?: SelectSubset<T, addressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.addresses.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.addresses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressesWithIdOnly = await prisma.addresses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addressesFindManyArgs>(args?: SelectSubset<T, addressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Addresses.
     * @param {addressesCreateArgs} args - Arguments to create a Addresses.
     * @example
     * // Create one Addresses
     * const Addresses = await prisma.addresses.create({
     *   data: {
     *     // ... data to create a Addresses
     *   }
     * })
     * 
     */
    create<T extends addressesCreateArgs>(args: SelectSubset<T, addressesCreateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressesCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressesCreateManyArgs>(args?: SelectSubset<T, addressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {addressesCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressesWithIdOnly = await prisma.addresses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addressesCreateManyAndReturnArgs>(args?: SelectSubset<T, addressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Addresses.
     * @param {addressesDeleteArgs} args - Arguments to delete one Addresses.
     * @example
     * // Delete one Addresses
     * const Addresses = await prisma.addresses.delete({
     *   where: {
     *     // ... filter to delete one Addresses
     *   }
     * })
     * 
     */
    delete<T extends addressesDeleteArgs>(args: SelectSubset<T, addressesDeleteArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Addresses.
     * @param {addressesUpdateArgs} args - Arguments to update one Addresses.
     * @example
     * // Update one Addresses
     * const addresses = await prisma.addresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressesUpdateArgs>(args: SelectSubset<T, addressesUpdateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressesDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.addresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressesDeleteManyArgs>(args?: SelectSubset<T, addressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressesUpdateManyArgs>(args: SelectSubset<T, addressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {addressesUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressesWithIdOnly = await prisma.addresses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends addressesUpdateManyAndReturnArgs>(args: SelectSubset<T, addressesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Addresses.
     * @param {addressesUpsertArgs} args - Arguments to update or create a Addresses.
     * @example
     * // Update or create a Addresses
     * const addresses = await prisma.addresses.upsert({
     *   create: {
     *     // ... data to create a Addresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addresses we want to update
     *   }
     * })
     */
    upsert<T extends addressesUpsertArgs>(args: SelectSubset<T, addressesUpsertArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.addresses.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressesCountArgs>(
      args?: Subset<T, addressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressesAggregateArgs>(args: Subset<T, AddressesAggregateArgs>): Prisma.PrismaPromise<GetAddressesAggregateType<T>>

    /**
     * Group by Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends addressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressesGroupByArgs['orderBy'] }
        : { orderBy?: addressesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, addressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the addresses model
   */
  readonly fields: addressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for addresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schools<T extends addresses$schoolsArgs<ExtArgs> = {}>(args?: Subset<T, addresses$schoolsArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the addresses model
   */
  interface addressesFieldRefs {
    readonly id: FieldRef<"addresses", 'Int'>
    readonly country: FieldRef<"addresses", 'String'>
    readonly administrative_area: FieldRef<"addresses", 'String'>
    readonly sub_administrative_area: FieldRef<"addresses", 'String'>
    readonly locality: FieldRef<"addresses", 'String'>
    readonly dependent_locality: FieldRef<"addresses", 'String'>
    readonly postal_code: FieldRef<"addresses", 'String'>
    readonly thoroughfare: FieldRef<"addresses", 'String'>
    readonly premise: FieldRef<"addresses", 'String'>
    readonly sub_premise: FieldRef<"addresses", 'String'>
    readonly organisation_name: FieldRef<"addresses", 'String'>
    readonly created_at: FieldRef<"addresses", 'DateTime'>
    readonly updated_at: FieldRef<"addresses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * addresses findUnique
   */
  export type addressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findUniqueOrThrow
   */
  export type addressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findFirst
   */
  export type addressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findFirstOrThrow
   */
  export type addressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findMany
   */
  export type addressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses create
   */
  export type addressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to create a addresses.
     */
    data: XOR<addressesCreateInput, addressesUncheckedCreateInput>
  }

  /**
   * addresses createMany
   */
  export type addressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * addresses createManyAndReturn
   */
  export type addressesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * addresses update
   */
  export type addressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to update a addresses.
     */
    data: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
    /**
     * Choose, which addresses to update.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses updateMany
   */
  export type addressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * addresses updateManyAndReturn
   */
  export type addressesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * addresses upsert
   */
  export type addressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The filter to search for the addresses to update in case it exists.
     */
    where: addressesWhereUniqueInput
    /**
     * In case the addresses found by the `where` argument doesn't exist, create a new addresses with this data.
     */
    create: XOR<addressesCreateInput, addressesUncheckedCreateInput>
    /**
     * In case the addresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
  }

  /**
   * addresses delete
   */
  export type addressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter which addresses to delete.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses deleteMany
   */
  export type addressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * addresses.schools
   */
  export type addresses$schoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    where?: schoolsWhereInput
  }

  /**
   * addresses without action
   */
  export type addressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
  }


  /**
   * Model exercises
   */

  export type AggregateExercises = {
    _count: ExercisesCountAggregateOutputType | null
    _avg: ExercisesAvgAggregateOutputType | null
    _sum: ExercisesSumAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  export type ExercisesAvgAggregateOutputType = {
    id: number | null
  }

  export type ExercisesSumAggregateOutputType = {
    id: number | null
  }

  export type ExercisesMinAggregateOutputType = {
    id: number | null
    exercise_name: string | null
    description: string | null
    muscle_group: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExercisesMaxAggregateOutputType = {
    id: number | null
    exercise_name: string | null
    description: string | null
    muscle_group: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExercisesCountAggregateOutputType = {
    id: number
    exercise_name: number
    description: number
    muscle_group: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExercisesAvgAggregateInputType = {
    id?: true
  }

  export type ExercisesSumAggregateInputType = {
    id?: true
  }

  export type ExercisesMinAggregateInputType = {
    id?: true
    exercise_name?: true
    description?: true
    muscle_group?: true
    created_at?: true
    updated_at?: true
  }

  export type ExercisesMaxAggregateInputType = {
    id?: true
    exercise_name?: true
    description?: true
    muscle_group?: true
    created_at?: true
    updated_at?: true
  }

  export type ExercisesCountAggregateInputType = {
    id?: true
    exercise_name?: true
    description?: true
    muscle_group?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ExercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercises to aggregate.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exercises
    **/
    _count?: true | ExercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExercisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExercisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExercisesMaxAggregateInputType
  }

  export type GetExercisesAggregateType<T extends ExercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateExercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercises[P]>
      : GetScalarType<T[P], AggregateExercises[P]>
  }




  export type exercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exercisesWhereInput
    orderBy?: exercisesOrderByWithAggregationInput | exercisesOrderByWithAggregationInput[]
    by: ExercisesScalarFieldEnum[] | ExercisesScalarFieldEnum
    having?: exercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExercisesCountAggregateInputType | true
    _avg?: ExercisesAvgAggregateInputType
    _sum?: ExercisesSumAggregateInputType
    _min?: ExercisesMinAggregateInputType
    _max?: ExercisesMaxAggregateInputType
  }

  export type ExercisesGroupByOutputType = {
    id: number
    exercise_name: string
    description: string | null
    muscle_group: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ExercisesCountAggregateOutputType | null
    _avg: ExercisesAvgAggregateOutputType | null
    _sum: ExercisesSumAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  type GetExercisesGroupByPayload<T extends exercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
            : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
        }
      >
    >


  export type exercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exercise_name?: boolean
    description?: boolean
    muscle_group?: boolean
    created_at?: boolean
    updated_at?: boolean
    player_exercise_progress?: boolean | exercises$player_exercise_progressArgs<ExtArgs>
    workout_exercises?: boolean | exercises$workout_exercisesArgs<ExtArgs>
    _count?: boolean | ExercisesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercises"]>

  export type exercisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exercise_name?: boolean
    description?: boolean
    muscle_group?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["exercises"]>

  export type exercisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exercise_name?: boolean
    description?: boolean
    muscle_group?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["exercises"]>

  export type exercisesSelectScalar = {
    id?: boolean
    exercise_name?: boolean
    description?: boolean
    muscle_group?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type exercisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exercise_name" | "description" | "muscle_group" | "created_at" | "updated_at", ExtArgs["result"]["exercises"]>
  export type exercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_exercise_progress?: boolean | exercises$player_exercise_progressArgs<ExtArgs>
    workout_exercises?: boolean | exercises$workout_exercisesArgs<ExtArgs>
    _count?: boolean | ExercisesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type exercisesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type exercisesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $exercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exercises"
    objects: {
      player_exercise_progress: Prisma.$player_exercise_progressPayload<ExtArgs>[]
      workout_exercises: Prisma.$workout_exercisesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      exercise_name: string
      description: string | null
      muscle_group: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["exercises"]>
    composites: {}
  }

  type exercisesGetPayload<S extends boolean | null | undefined | exercisesDefaultArgs> = $Result.GetResult<Prisma.$exercisesPayload, S>

  type exercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExercisesCountAggregateInputType | true
    }

  export interface exercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exercises'], meta: { name: 'exercises' } }
    /**
     * Find zero or one Exercises that matches the filter.
     * @param {exercisesFindUniqueArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exercisesFindUniqueArgs>(args: SelectSubset<T, exercisesFindUniqueArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exercisesFindUniqueOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindFirstArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exercisesFindFirstArgs>(args?: SelectSubset<T, exercisesFindFirstArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindFirstOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercises.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exercisesWithIdOnly = await prisma.exercises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends exercisesFindManyArgs>(args?: SelectSubset<T, exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercises.
     * @param {exercisesCreateArgs} args - Arguments to create a Exercises.
     * @example
     * // Create one Exercises
     * const Exercises = await prisma.exercises.create({
     *   data: {
     *     // ... data to create a Exercises
     *   }
     * })
     * 
     */
    create<T extends exercisesCreateArgs>(args: SelectSubset<T, exercisesCreateArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {exercisesCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exercisesCreateManyArgs>(args?: SelectSubset<T, exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {exercisesCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exercisesWithIdOnly = await prisma.exercises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends exercisesCreateManyAndReturnArgs>(args?: SelectSubset<T, exercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercises.
     * @param {exercisesDeleteArgs} args - Arguments to delete one Exercises.
     * @example
     * // Delete one Exercises
     * const Exercises = await prisma.exercises.delete({
     *   where: {
     *     // ... filter to delete one Exercises
     *   }
     * })
     * 
     */
    delete<T extends exercisesDeleteArgs>(args: SelectSubset<T, exercisesDeleteArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercises.
     * @param {exercisesUpdateArgs} args - Arguments to update one Exercises.
     * @example
     * // Update one Exercises
     * const exercises = await prisma.exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exercisesUpdateArgs>(args: SelectSubset<T, exercisesUpdateArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {exercisesDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exercisesDeleteManyArgs>(args?: SelectSubset<T, exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exercisesUpdateManyArgs>(args: SelectSubset<T, exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {exercisesUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exercisesWithIdOnly = await prisma.exercises.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends exercisesUpdateManyAndReturnArgs>(args: SelectSubset<T, exercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercises.
     * @param {exercisesUpsertArgs} args - Arguments to update or create a Exercises.
     * @example
     * // Update or create a Exercises
     * const exercises = await prisma.exercises.upsert({
     *   create: {
     *     // ... data to create a Exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercises we want to update
     *   }
     * })
     */
    upsert<T extends exercisesUpsertArgs>(args: SelectSubset<T, exercisesUpsertArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercises.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends exercisesCountArgs>(
      args?: Subset<T, exercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExercisesAggregateArgs>(args: Subset<T, ExercisesAggregateArgs>): Prisma.PrismaPromise<GetExercisesAggregateType<T>>

    /**
     * Group by Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exercisesGroupByArgs['orderBy'] }
        : { orderBy?: exercisesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exercises model
   */
  readonly fields: exercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player_exercise_progress<T extends exercises$player_exercise_progressArgs<ExtArgs> = {}>(args?: Subset<T, exercises$player_exercise_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workout_exercises<T extends exercises$workout_exercisesArgs<ExtArgs> = {}>(args?: Subset<T, exercises$workout_exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exercises model
   */
  interface exercisesFieldRefs {
    readonly id: FieldRef<"exercises", 'Int'>
    readonly exercise_name: FieldRef<"exercises", 'String'>
    readonly description: FieldRef<"exercises", 'String'>
    readonly muscle_group: FieldRef<"exercises", 'String'>
    readonly created_at: FieldRef<"exercises", 'DateTime'>
    readonly updated_at: FieldRef<"exercises", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * exercises findUnique
   */
  export type exercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises findUniqueOrThrow
   */
  export type exercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises findFirst
   */
  export type exercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises findFirstOrThrow
   */
  export type exercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises findMany
   */
  export type exercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises create
   */
  export type exercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a exercises.
     */
    data: XOR<exercisesCreateInput, exercisesUncheckedCreateInput>
  }

  /**
   * exercises createMany
   */
  export type exercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exercises.
     */
    data: exercisesCreateManyInput | exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercises createManyAndReturn
   */
  export type exercisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * The data used to create many exercises.
     */
    data: exercisesCreateManyInput | exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercises update
   */
  export type exercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a exercises.
     */
    data: XOR<exercisesUpdateInput, exercisesUncheckedUpdateInput>
    /**
     * Choose, which exercises to update.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises updateMany
   */
  export type exercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exercises.
     */
    data: XOR<exercisesUpdateManyMutationInput, exercisesUncheckedUpdateManyInput>
    /**
     * Filter which exercises to update
     */
    where?: exercisesWhereInput
    /**
     * Limit how many exercises to update.
     */
    limit?: number
  }

  /**
   * exercises updateManyAndReturn
   */
  export type exercisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * The data used to update exercises.
     */
    data: XOR<exercisesUpdateManyMutationInput, exercisesUncheckedUpdateManyInput>
    /**
     * Filter which exercises to update
     */
    where?: exercisesWhereInput
    /**
     * Limit how many exercises to update.
     */
    limit?: number
  }

  /**
   * exercises upsert
   */
  export type exercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the exercises to update in case it exists.
     */
    where: exercisesWhereUniqueInput
    /**
     * In case the exercises found by the `where` argument doesn't exist, create a new exercises with this data.
     */
    create: XOR<exercisesCreateInput, exercisesUncheckedCreateInput>
    /**
     * In case the exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exercisesUpdateInput, exercisesUncheckedUpdateInput>
  }

  /**
   * exercises delete
   */
  export type exercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter which exercises to delete.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises deleteMany
   */
  export type exercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercises to delete
     */
    where?: exercisesWhereInput
    /**
     * Limit how many exercises to delete.
     */
    limit?: number
  }

  /**
   * exercises.player_exercise_progress
   */
  export type exercises$player_exercise_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    where?: player_exercise_progressWhereInput
    orderBy?: player_exercise_progressOrderByWithRelationInput | player_exercise_progressOrderByWithRelationInput[]
    cursor?: player_exercise_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Player_exercise_progressScalarFieldEnum | Player_exercise_progressScalarFieldEnum[]
  }

  /**
   * exercises.workout_exercises
   */
  export type exercises$workout_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    where?: workout_exercisesWhereInput
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    cursor?: workout_exercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workout_exercisesScalarFieldEnum | Workout_exercisesScalarFieldEnum[]
  }

  /**
   * exercises without action
   */
  export type exercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercises
     */
    omit?: exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
  }


  /**
   * Model player_exercise_progress
   */

  export type AggregatePlayer_exercise_progress = {
    _count: Player_exercise_progressCountAggregateOutputType | null
    _avg: Player_exercise_progressAvgAggregateOutputType | null
    _sum: Player_exercise_progressSumAggregateOutputType | null
    _min: Player_exercise_progressMinAggregateOutputType | null
    _max: Player_exercise_progressMaxAggregateOutputType | null
  }

  export type Player_exercise_progressAvgAggregateOutputType = {
    id: number | null
    workout_assignment_id: number | null
    exercise_id: number | null
    completed_sets: number | null
    completed_reps: number | null
    weight_used: number | null
  }

  export type Player_exercise_progressSumAggregateOutputType = {
    id: number | null
    workout_assignment_id: number | null
    exercise_id: number | null
    completed_sets: number | null
    completed_reps: number | null
    weight_used: number | null
  }

  export type Player_exercise_progressMinAggregateOutputType = {
    id: number | null
    workout_assignment_id: number | null
    exercise_id: number | null
    completed_sets: number | null
    completed_reps: number | null
    weight_used: number | null
    notes: string | null
    recorded_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Player_exercise_progressMaxAggregateOutputType = {
    id: number | null
    workout_assignment_id: number | null
    exercise_id: number | null
    completed_sets: number | null
    completed_reps: number | null
    weight_used: number | null
    notes: string | null
    recorded_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Player_exercise_progressCountAggregateOutputType = {
    id: number
    workout_assignment_id: number
    exercise_id: number
    completed_sets: number
    completed_reps: number
    weight_used: number
    notes: number
    recorded_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Player_exercise_progressAvgAggregateInputType = {
    id?: true
    workout_assignment_id?: true
    exercise_id?: true
    completed_sets?: true
    completed_reps?: true
    weight_used?: true
  }

  export type Player_exercise_progressSumAggregateInputType = {
    id?: true
    workout_assignment_id?: true
    exercise_id?: true
    completed_sets?: true
    completed_reps?: true
    weight_used?: true
  }

  export type Player_exercise_progressMinAggregateInputType = {
    id?: true
    workout_assignment_id?: true
    exercise_id?: true
    completed_sets?: true
    completed_reps?: true
    weight_used?: true
    notes?: true
    recorded_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Player_exercise_progressMaxAggregateInputType = {
    id?: true
    workout_assignment_id?: true
    exercise_id?: true
    completed_sets?: true
    completed_reps?: true
    weight_used?: true
    notes?: true
    recorded_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Player_exercise_progressCountAggregateInputType = {
    id?: true
    workout_assignment_id?: true
    exercise_id?: true
    completed_sets?: true
    completed_reps?: true
    weight_used?: true
    notes?: true
    recorded_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Player_exercise_progressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_exercise_progress to aggregate.
     */
    where?: player_exercise_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_exercise_progresses to fetch.
     */
    orderBy?: player_exercise_progressOrderByWithRelationInput | player_exercise_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: player_exercise_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_exercise_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_exercise_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned player_exercise_progresses
    **/
    _count?: true | Player_exercise_progressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Player_exercise_progressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Player_exercise_progressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Player_exercise_progressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Player_exercise_progressMaxAggregateInputType
  }

  export type GetPlayer_exercise_progressAggregateType<T extends Player_exercise_progressAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer_exercise_progress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer_exercise_progress[P]>
      : GetScalarType<T[P], AggregatePlayer_exercise_progress[P]>
  }




  export type player_exercise_progressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: player_exercise_progressWhereInput
    orderBy?: player_exercise_progressOrderByWithAggregationInput | player_exercise_progressOrderByWithAggregationInput[]
    by: Player_exercise_progressScalarFieldEnum[] | Player_exercise_progressScalarFieldEnum
    having?: player_exercise_progressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Player_exercise_progressCountAggregateInputType | true
    _avg?: Player_exercise_progressAvgAggregateInputType
    _sum?: Player_exercise_progressSumAggregateInputType
    _min?: Player_exercise_progressMinAggregateInputType
    _max?: Player_exercise_progressMaxAggregateInputType
  }

  export type Player_exercise_progressGroupByOutputType = {
    id: number
    workout_assignment_id: number
    exercise_id: number
    completed_sets: number
    completed_reps: number
    weight_used: number | null
    notes: string | null
    recorded_at: Date
    created_at: Date | null
    updated_at: Date | null
    _count: Player_exercise_progressCountAggregateOutputType | null
    _avg: Player_exercise_progressAvgAggregateOutputType | null
    _sum: Player_exercise_progressSumAggregateOutputType | null
    _min: Player_exercise_progressMinAggregateOutputType | null
    _max: Player_exercise_progressMaxAggregateOutputType | null
  }

  type GetPlayer_exercise_progressGroupByPayload<T extends player_exercise_progressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Player_exercise_progressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Player_exercise_progressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Player_exercise_progressGroupByOutputType[P]>
            : GetScalarType<T[P], Player_exercise_progressGroupByOutputType[P]>
        }
      >
    >


  export type player_exercise_progressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_assignment_id?: boolean
    exercise_id?: boolean
    completed_sets?: boolean
    completed_reps?: boolean
    weight_used?: boolean
    notes?: boolean
    recorded_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workout_assignments?: boolean | workout_assignmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player_exercise_progress"]>

  export type player_exercise_progressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_assignment_id?: boolean
    exercise_id?: boolean
    completed_sets?: boolean
    completed_reps?: boolean
    weight_used?: boolean
    notes?: boolean
    recorded_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workout_assignments?: boolean | workout_assignmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player_exercise_progress"]>

  export type player_exercise_progressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_assignment_id?: boolean
    exercise_id?: boolean
    completed_sets?: boolean
    completed_reps?: boolean
    weight_used?: boolean
    notes?: boolean
    recorded_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workout_assignments?: boolean | workout_assignmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player_exercise_progress"]>

  export type player_exercise_progressSelectScalar = {
    id?: boolean
    workout_assignment_id?: boolean
    exercise_id?: boolean
    completed_sets?: boolean
    completed_reps?: boolean
    weight_used?: boolean
    notes?: boolean
    recorded_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type player_exercise_progressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workout_assignment_id" | "exercise_id" | "completed_sets" | "completed_reps" | "weight_used" | "notes" | "recorded_at" | "created_at" | "updated_at", ExtArgs["result"]["player_exercise_progress"]>
  export type player_exercise_progressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workout_assignments?: boolean | workout_assignmentsDefaultArgs<ExtArgs>
  }
  export type player_exercise_progressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workout_assignments?: boolean | workout_assignmentsDefaultArgs<ExtArgs>
  }
  export type player_exercise_progressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workout_assignments?: boolean | workout_assignmentsDefaultArgs<ExtArgs>
  }

  export type $player_exercise_progressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "player_exercise_progress"
    objects: {
      exercises: Prisma.$exercisesPayload<ExtArgs>
      workout_assignments: Prisma.$workout_assignmentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workout_assignment_id: number
      exercise_id: number
      completed_sets: number
      completed_reps: number
      weight_used: number | null
      notes: string | null
      recorded_at: Date
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["player_exercise_progress"]>
    composites: {}
  }

  type player_exercise_progressGetPayload<S extends boolean | null | undefined | player_exercise_progressDefaultArgs> = $Result.GetResult<Prisma.$player_exercise_progressPayload, S>

  type player_exercise_progressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<player_exercise_progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Player_exercise_progressCountAggregateInputType | true
    }

  export interface player_exercise_progressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['player_exercise_progress'], meta: { name: 'player_exercise_progress' } }
    /**
     * Find zero or one Player_exercise_progress that matches the filter.
     * @param {player_exercise_progressFindUniqueArgs} args - Arguments to find a Player_exercise_progress
     * @example
     * // Get one Player_exercise_progress
     * const player_exercise_progress = await prisma.player_exercise_progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends player_exercise_progressFindUniqueArgs>(args: SelectSubset<T, player_exercise_progressFindUniqueArgs<ExtArgs>>): Prisma__player_exercise_progressClient<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player_exercise_progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {player_exercise_progressFindUniqueOrThrowArgs} args - Arguments to find a Player_exercise_progress
     * @example
     * // Get one Player_exercise_progress
     * const player_exercise_progress = await prisma.player_exercise_progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends player_exercise_progressFindUniqueOrThrowArgs>(args: SelectSubset<T, player_exercise_progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__player_exercise_progressClient<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_exercise_progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_exercise_progressFindFirstArgs} args - Arguments to find a Player_exercise_progress
     * @example
     * // Get one Player_exercise_progress
     * const player_exercise_progress = await prisma.player_exercise_progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends player_exercise_progressFindFirstArgs>(args?: SelectSubset<T, player_exercise_progressFindFirstArgs<ExtArgs>>): Prisma__player_exercise_progressClient<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_exercise_progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_exercise_progressFindFirstOrThrowArgs} args - Arguments to find a Player_exercise_progress
     * @example
     * // Get one Player_exercise_progress
     * const player_exercise_progress = await prisma.player_exercise_progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends player_exercise_progressFindFirstOrThrowArgs>(args?: SelectSubset<T, player_exercise_progressFindFirstOrThrowArgs<ExtArgs>>): Prisma__player_exercise_progressClient<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Player_exercise_progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_exercise_progressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Player_exercise_progresses
     * const player_exercise_progresses = await prisma.player_exercise_progress.findMany()
     * 
     * // Get first 10 Player_exercise_progresses
     * const player_exercise_progresses = await prisma.player_exercise_progress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const player_exercise_progressWithIdOnly = await prisma.player_exercise_progress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends player_exercise_progressFindManyArgs>(args?: SelectSubset<T, player_exercise_progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player_exercise_progress.
     * @param {player_exercise_progressCreateArgs} args - Arguments to create a Player_exercise_progress.
     * @example
     * // Create one Player_exercise_progress
     * const Player_exercise_progress = await prisma.player_exercise_progress.create({
     *   data: {
     *     // ... data to create a Player_exercise_progress
     *   }
     * })
     * 
     */
    create<T extends player_exercise_progressCreateArgs>(args: SelectSubset<T, player_exercise_progressCreateArgs<ExtArgs>>): Prisma__player_exercise_progressClient<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Player_exercise_progresses.
     * @param {player_exercise_progressCreateManyArgs} args - Arguments to create many Player_exercise_progresses.
     * @example
     * // Create many Player_exercise_progresses
     * const player_exercise_progress = await prisma.player_exercise_progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends player_exercise_progressCreateManyArgs>(args?: SelectSubset<T, player_exercise_progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Player_exercise_progresses and returns the data saved in the database.
     * @param {player_exercise_progressCreateManyAndReturnArgs} args - Arguments to create many Player_exercise_progresses.
     * @example
     * // Create many Player_exercise_progresses
     * const player_exercise_progress = await prisma.player_exercise_progress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Player_exercise_progresses and only return the `id`
     * const player_exercise_progressWithIdOnly = await prisma.player_exercise_progress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends player_exercise_progressCreateManyAndReturnArgs>(args?: SelectSubset<T, player_exercise_progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player_exercise_progress.
     * @param {player_exercise_progressDeleteArgs} args - Arguments to delete one Player_exercise_progress.
     * @example
     * // Delete one Player_exercise_progress
     * const Player_exercise_progress = await prisma.player_exercise_progress.delete({
     *   where: {
     *     // ... filter to delete one Player_exercise_progress
     *   }
     * })
     * 
     */
    delete<T extends player_exercise_progressDeleteArgs>(args: SelectSubset<T, player_exercise_progressDeleteArgs<ExtArgs>>): Prisma__player_exercise_progressClient<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player_exercise_progress.
     * @param {player_exercise_progressUpdateArgs} args - Arguments to update one Player_exercise_progress.
     * @example
     * // Update one Player_exercise_progress
     * const player_exercise_progress = await prisma.player_exercise_progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends player_exercise_progressUpdateArgs>(args: SelectSubset<T, player_exercise_progressUpdateArgs<ExtArgs>>): Prisma__player_exercise_progressClient<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Player_exercise_progresses.
     * @param {player_exercise_progressDeleteManyArgs} args - Arguments to filter Player_exercise_progresses to delete.
     * @example
     * // Delete a few Player_exercise_progresses
     * const { count } = await prisma.player_exercise_progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends player_exercise_progressDeleteManyArgs>(args?: SelectSubset<T, player_exercise_progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_exercise_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_exercise_progressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Player_exercise_progresses
     * const player_exercise_progress = await prisma.player_exercise_progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends player_exercise_progressUpdateManyArgs>(args: SelectSubset<T, player_exercise_progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_exercise_progresses and returns the data updated in the database.
     * @param {player_exercise_progressUpdateManyAndReturnArgs} args - Arguments to update many Player_exercise_progresses.
     * @example
     * // Update many Player_exercise_progresses
     * const player_exercise_progress = await prisma.player_exercise_progress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Player_exercise_progresses and only return the `id`
     * const player_exercise_progressWithIdOnly = await prisma.player_exercise_progress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends player_exercise_progressUpdateManyAndReturnArgs>(args: SelectSubset<T, player_exercise_progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player_exercise_progress.
     * @param {player_exercise_progressUpsertArgs} args - Arguments to update or create a Player_exercise_progress.
     * @example
     * // Update or create a Player_exercise_progress
     * const player_exercise_progress = await prisma.player_exercise_progress.upsert({
     *   create: {
     *     // ... data to create a Player_exercise_progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player_exercise_progress we want to update
     *   }
     * })
     */
    upsert<T extends player_exercise_progressUpsertArgs>(args: SelectSubset<T, player_exercise_progressUpsertArgs<ExtArgs>>): Prisma__player_exercise_progressClient<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Player_exercise_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_exercise_progressCountArgs} args - Arguments to filter Player_exercise_progresses to count.
     * @example
     * // Count the number of Player_exercise_progresses
     * const count = await prisma.player_exercise_progress.count({
     *   where: {
     *     // ... the filter for the Player_exercise_progresses we want to count
     *   }
     * })
    **/
    count<T extends player_exercise_progressCountArgs>(
      args?: Subset<T, player_exercise_progressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Player_exercise_progressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player_exercise_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_exercise_progressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Player_exercise_progressAggregateArgs>(args: Subset<T, Player_exercise_progressAggregateArgs>): Prisma.PrismaPromise<GetPlayer_exercise_progressAggregateType<T>>

    /**
     * Group by Player_exercise_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {player_exercise_progressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends player_exercise_progressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: player_exercise_progressGroupByArgs['orderBy'] }
        : { orderBy?: player_exercise_progressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, player_exercise_progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayer_exercise_progressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the player_exercise_progress model
   */
  readonly fields: player_exercise_progressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for player_exercise_progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__player_exercise_progressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends exercisesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exercisesDefaultArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workout_assignments<T extends workout_assignmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workout_assignmentsDefaultArgs<ExtArgs>>): Prisma__workout_assignmentsClient<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the player_exercise_progress model
   */
  interface player_exercise_progressFieldRefs {
    readonly id: FieldRef<"player_exercise_progress", 'Int'>
    readonly workout_assignment_id: FieldRef<"player_exercise_progress", 'Int'>
    readonly exercise_id: FieldRef<"player_exercise_progress", 'Int'>
    readonly completed_sets: FieldRef<"player_exercise_progress", 'Int'>
    readonly completed_reps: FieldRef<"player_exercise_progress", 'Int'>
    readonly weight_used: FieldRef<"player_exercise_progress", 'Float'>
    readonly notes: FieldRef<"player_exercise_progress", 'String'>
    readonly recorded_at: FieldRef<"player_exercise_progress", 'DateTime'>
    readonly created_at: FieldRef<"player_exercise_progress", 'DateTime'>
    readonly updated_at: FieldRef<"player_exercise_progress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * player_exercise_progress findUnique
   */
  export type player_exercise_progressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    /**
     * Filter, which player_exercise_progress to fetch.
     */
    where: player_exercise_progressWhereUniqueInput
  }

  /**
   * player_exercise_progress findUniqueOrThrow
   */
  export type player_exercise_progressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    /**
     * Filter, which player_exercise_progress to fetch.
     */
    where: player_exercise_progressWhereUniqueInput
  }

  /**
   * player_exercise_progress findFirst
   */
  export type player_exercise_progressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    /**
     * Filter, which player_exercise_progress to fetch.
     */
    where?: player_exercise_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_exercise_progresses to fetch.
     */
    orderBy?: player_exercise_progressOrderByWithRelationInput | player_exercise_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_exercise_progresses.
     */
    cursor?: player_exercise_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_exercise_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_exercise_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_exercise_progresses.
     */
    distinct?: Player_exercise_progressScalarFieldEnum | Player_exercise_progressScalarFieldEnum[]
  }

  /**
   * player_exercise_progress findFirstOrThrow
   */
  export type player_exercise_progressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    /**
     * Filter, which player_exercise_progress to fetch.
     */
    where?: player_exercise_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_exercise_progresses to fetch.
     */
    orderBy?: player_exercise_progressOrderByWithRelationInput | player_exercise_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for player_exercise_progresses.
     */
    cursor?: player_exercise_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_exercise_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_exercise_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of player_exercise_progresses.
     */
    distinct?: Player_exercise_progressScalarFieldEnum | Player_exercise_progressScalarFieldEnum[]
  }

  /**
   * player_exercise_progress findMany
   */
  export type player_exercise_progressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    /**
     * Filter, which player_exercise_progresses to fetch.
     */
    where?: player_exercise_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of player_exercise_progresses to fetch.
     */
    orderBy?: player_exercise_progressOrderByWithRelationInput | player_exercise_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing player_exercise_progresses.
     */
    cursor?: player_exercise_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` player_exercise_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` player_exercise_progresses.
     */
    skip?: number
    distinct?: Player_exercise_progressScalarFieldEnum | Player_exercise_progressScalarFieldEnum[]
  }

  /**
   * player_exercise_progress create
   */
  export type player_exercise_progressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    /**
     * The data needed to create a player_exercise_progress.
     */
    data: XOR<player_exercise_progressCreateInput, player_exercise_progressUncheckedCreateInput>
  }

  /**
   * player_exercise_progress createMany
   */
  export type player_exercise_progressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many player_exercise_progresses.
     */
    data: player_exercise_progressCreateManyInput | player_exercise_progressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * player_exercise_progress createManyAndReturn
   */
  export type player_exercise_progressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * The data used to create many player_exercise_progresses.
     */
    data: player_exercise_progressCreateManyInput | player_exercise_progressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * player_exercise_progress update
   */
  export type player_exercise_progressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    /**
     * The data needed to update a player_exercise_progress.
     */
    data: XOR<player_exercise_progressUpdateInput, player_exercise_progressUncheckedUpdateInput>
    /**
     * Choose, which player_exercise_progress to update.
     */
    where: player_exercise_progressWhereUniqueInput
  }

  /**
   * player_exercise_progress updateMany
   */
  export type player_exercise_progressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update player_exercise_progresses.
     */
    data: XOR<player_exercise_progressUpdateManyMutationInput, player_exercise_progressUncheckedUpdateManyInput>
    /**
     * Filter which player_exercise_progresses to update
     */
    where?: player_exercise_progressWhereInput
    /**
     * Limit how many player_exercise_progresses to update.
     */
    limit?: number
  }

  /**
   * player_exercise_progress updateManyAndReturn
   */
  export type player_exercise_progressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * The data used to update player_exercise_progresses.
     */
    data: XOR<player_exercise_progressUpdateManyMutationInput, player_exercise_progressUncheckedUpdateManyInput>
    /**
     * Filter which player_exercise_progresses to update
     */
    where?: player_exercise_progressWhereInput
    /**
     * Limit how many player_exercise_progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * player_exercise_progress upsert
   */
  export type player_exercise_progressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    /**
     * The filter to search for the player_exercise_progress to update in case it exists.
     */
    where: player_exercise_progressWhereUniqueInput
    /**
     * In case the player_exercise_progress found by the `where` argument doesn't exist, create a new player_exercise_progress with this data.
     */
    create: XOR<player_exercise_progressCreateInput, player_exercise_progressUncheckedCreateInput>
    /**
     * In case the player_exercise_progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<player_exercise_progressUpdateInput, player_exercise_progressUncheckedUpdateInput>
  }

  /**
   * player_exercise_progress delete
   */
  export type player_exercise_progressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    /**
     * Filter which player_exercise_progress to delete.
     */
    where: player_exercise_progressWhereUniqueInput
  }

  /**
   * player_exercise_progress deleteMany
   */
  export type player_exercise_progressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player_exercise_progresses to delete
     */
    where?: player_exercise_progressWhereInput
    /**
     * Limit how many player_exercise_progresses to delete.
     */
    limit?: number
  }

  /**
   * player_exercise_progress without action
   */
  export type player_exercise_progressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
  }


  /**
   * Model schools
   */

  export type AggregateSchools = {
    _count: SchoolsCountAggregateOutputType | null
    _avg: SchoolsAvgAggregateOutputType | null
    _sum: SchoolsSumAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  export type SchoolsAvgAggregateOutputType = {
    id: number | null
    address_id: number | null
  }

  export type SchoolsSumAggregateOutputType = {
    id: number | null
    address_id: number | null
  }

  export type SchoolsMinAggregateOutputType = {
    id: number | null
    school_name: string | null
    address_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SchoolsMaxAggregateOutputType = {
    id: number | null
    school_name: string | null
    address_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SchoolsCountAggregateOutputType = {
    id: number
    school_name: number
    address_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SchoolsAvgAggregateInputType = {
    id?: true
    address_id?: true
  }

  export type SchoolsSumAggregateInputType = {
    id?: true
    address_id?: true
  }

  export type SchoolsMinAggregateInputType = {
    id?: true
    school_name?: true
    address_id?: true
    created_at?: true
    updated_at?: true
  }

  export type SchoolsMaxAggregateInputType = {
    id?: true
    school_name?: true
    address_id?: true
    created_at?: true
    updated_at?: true
  }

  export type SchoolsCountAggregateInputType = {
    id?: true
    school_name?: true
    address_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SchoolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to aggregate.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schools
    **/
    _count?: true | SchoolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolsMaxAggregateInputType
  }

  export type GetSchoolsAggregateType<T extends SchoolsAggregateArgs> = {
        [P in keyof T & keyof AggregateSchools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchools[P]>
      : GetScalarType<T[P], AggregateSchools[P]>
  }




  export type schoolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolsWhereInput
    orderBy?: schoolsOrderByWithAggregationInput | schoolsOrderByWithAggregationInput[]
    by: SchoolsScalarFieldEnum[] | SchoolsScalarFieldEnum
    having?: schoolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolsCountAggregateInputType | true
    _avg?: SchoolsAvgAggregateInputType
    _sum?: SchoolsSumAggregateInputType
    _min?: SchoolsMinAggregateInputType
    _max?: SchoolsMaxAggregateInputType
  }

  export type SchoolsGroupByOutputType = {
    id: number
    school_name: string
    address_id: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: SchoolsCountAggregateOutputType | null
    _avg: SchoolsAvgAggregateOutputType | null
    _sum: SchoolsSumAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  type GetSchoolsGroupByPayload<T extends schoolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
        }
      >
    >


  export type schoolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    school_name?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses?: boolean | schools$addressesArgs<ExtArgs>
    teams?: boolean | schools$teamsArgs<ExtArgs>
    _count?: boolean | SchoolsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schools"]>

  export type schoolsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    school_name?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses?: boolean | schools$addressesArgs<ExtArgs>
  }, ExtArgs["result"]["schools"]>

  export type schoolsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    school_name?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses?: boolean | schools$addressesArgs<ExtArgs>
  }, ExtArgs["result"]["schools"]>

  export type schoolsSelectScalar = {
    id?: boolean
    school_name?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type schoolsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "school_name" | "address_id" | "created_at" | "updated_at", ExtArgs["result"]["schools"]>
  export type schoolsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | schools$addressesArgs<ExtArgs>
    teams?: boolean | schools$teamsArgs<ExtArgs>
    _count?: boolean | SchoolsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type schoolsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | schools$addressesArgs<ExtArgs>
  }
  export type schoolsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | schools$addressesArgs<ExtArgs>
  }

  export type $schoolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schools"
    objects: {
      addresses: Prisma.$addressesPayload<ExtArgs> | null
      teams: Prisma.$teamsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      school_name: string
      address_id: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["schools"]>
    composites: {}
  }

  type schoolsGetPayload<S extends boolean | null | undefined | schoolsDefaultArgs> = $Result.GetResult<Prisma.$schoolsPayload, S>

  type schoolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<schoolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolsCountAggregateInputType | true
    }

  export interface schoolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schools'], meta: { name: 'schools' } }
    /**
     * Find zero or one Schools that matches the filter.
     * @param {schoolsFindUniqueArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends schoolsFindUniqueArgs>(args: SelectSubset<T, schoolsFindUniqueArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {schoolsFindUniqueOrThrowArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends schoolsFindUniqueOrThrowArgs>(args: SelectSubset<T, schoolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindFirstArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends schoolsFindFirstArgs>(args?: SelectSubset<T, schoolsFindFirstArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindFirstOrThrowArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends schoolsFindFirstOrThrowArgs>(args?: SelectSubset<T, schoolsFindFirstOrThrowArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.schools.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.schools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolsWithIdOnly = await prisma.schools.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends schoolsFindManyArgs>(args?: SelectSubset<T, schoolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schools.
     * @param {schoolsCreateArgs} args - Arguments to create a Schools.
     * @example
     * // Create one Schools
     * const Schools = await prisma.schools.create({
     *   data: {
     *     // ... data to create a Schools
     *   }
     * })
     * 
     */
    create<T extends schoolsCreateArgs>(args: SelectSubset<T, schoolsCreateArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {schoolsCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const schools = await prisma.schools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends schoolsCreateManyArgs>(args?: SelectSubset<T, schoolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {schoolsCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const schools = await prisma.schools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolsWithIdOnly = await prisma.schools.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends schoolsCreateManyAndReturnArgs>(args?: SelectSubset<T, schoolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schools.
     * @param {schoolsDeleteArgs} args - Arguments to delete one Schools.
     * @example
     * // Delete one Schools
     * const Schools = await prisma.schools.delete({
     *   where: {
     *     // ... filter to delete one Schools
     *   }
     * })
     * 
     */
    delete<T extends schoolsDeleteArgs>(args: SelectSubset<T, schoolsDeleteArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schools.
     * @param {schoolsUpdateArgs} args - Arguments to update one Schools.
     * @example
     * // Update one Schools
     * const schools = await prisma.schools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends schoolsUpdateArgs>(args: SelectSubset<T, schoolsUpdateArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {schoolsDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.schools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends schoolsDeleteManyArgs>(args?: SelectSubset<T, schoolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const schools = await prisma.schools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends schoolsUpdateManyArgs>(args: SelectSubset<T, schoolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {schoolsUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const schools = await prisma.schools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolsWithIdOnly = await prisma.schools.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends schoolsUpdateManyAndReturnArgs>(args: SelectSubset<T, schoolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schools.
     * @param {schoolsUpsertArgs} args - Arguments to update or create a Schools.
     * @example
     * // Update or create a Schools
     * const schools = await prisma.schools.upsert({
     *   create: {
     *     // ... data to create a Schools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schools we want to update
     *   }
     * })
     */
    upsert<T extends schoolsUpsertArgs>(args: SelectSubset<T, schoolsUpsertArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.schools.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends schoolsCountArgs>(
      args?: Subset<T, schoolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolsAggregateArgs>(args: Subset<T, SchoolsAggregateArgs>): Prisma.PrismaPromise<GetSchoolsAggregateType<T>>

    /**
     * Group by Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends schoolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schoolsGroupByArgs['orderBy'] }
        : { orderBy?: schoolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, schoolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schools model
   */
  readonly fields: schoolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schoolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends schools$addressesArgs<ExtArgs> = {}>(args?: Subset<T, schools$addressesArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teams<T extends schools$teamsArgs<ExtArgs> = {}>(args?: Subset<T, schools$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the schools model
   */
  interface schoolsFieldRefs {
    readonly id: FieldRef<"schools", 'Int'>
    readonly school_name: FieldRef<"schools", 'String'>
    readonly address_id: FieldRef<"schools", 'Int'>
    readonly created_at: FieldRef<"schools", 'DateTime'>
    readonly updated_at: FieldRef<"schools", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * schools findUnique
   */
  export type schoolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools findUniqueOrThrow
   */
  export type schoolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools findFirst
   */
  export type schoolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools findFirstOrThrow
   */
  export type schoolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools findMany
   */
  export type schoolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools create
   */
  export type schoolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * The data needed to create a schools.
     */
    data: XOR<schoolsCreateInput, schoolsUncheckedCreateInput>
  }

  /**
   * schools createMany
   */
  export type schoolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schools.
     */
    data: schoolsCreateManyInput | schoolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schools createManyAndReturn
   */
  export type schoolsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * The data used to create many schools.
     */
    data: schoolsCreateManyInput | schoolsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * schools update
   */
  export type schoolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * The data needed to update a schools.
     */
    data: XOR<schoolsUpdateInput, schoolsUncheckedUpdateInput>
    /**
     * Choose, which schools to update.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools updateMany
   */
  export type schoolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schools.
     */
    data: XOR<schoolsUpdateManyMutationInput, schoolsUncheckedUpdateManyInput>
    /**
     * Filter which schools to update
     */
    where?: schoolsWhereInput
    /**
     * Limit how many schools to update.
     */
    limit?: number
  }

  /**
   * schools updateManyAndReturn
   */
  export type schoolsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * The data used to update schools.
     */
    data: XOR<schoolsUpdateManyMutationInput, schoolsUncheckedUpdateManyInput>
    /**
     * Filter which schools to update
     */
    where?: schoolsWhereInput
    /**
     * Limit how many schools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * schools upsert
   */
  export type schoolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * The filter to search for the schools to update in case it exists.
     */
    where: schoolsWhereUniqueInput
    /**
     * In case the schools found by the `where` argument doesn't exist, create a new schools with this data.
     */
    create: XOR<schoolsCreateInput, schoolsUncheckedCreateInput>
    /**
     * In case the schools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schoolsUpdateInput, schoolsUncheckedUpdateInput>
  }

  /**
   * schools delete
   */
  export type schoolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter which schools to delete.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools deleteMany
   */
  export type schoolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to delete
     */
    where?: schoolsWhereInput
    /**
     * Limit how many schools to delete.
     */
    limit?: number
  }

  /**
   * schools.addresses
   */
  export type schools$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    where?: addressesWhereInput
  }

  /**
   * schools.teams
   */
  export type schools$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    where?: teamsWhereInput
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    cursor?: teamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * schools without action
   */
  export type schoolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
  }


  /**
   * Model sports
   */

  export type AggregateSports = {
    _count: SportsCountAggregateOutputType | null
    _avg: SportsAvgAggregateOutputType | null
    _sum: SportsSumAggregateOutputType | null
    _min: SportsMinAggregateOutputType | null
    _max: SportsMaxAggregateOutputType | null
  }

  export type SportsAvgAggregateOutputType = {
    id: number | null
  }

  export type SportsSumAggregateOutputType = {
    id: number | null
  }

  export type SportsMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SportsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SportsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SportsAvgAggregateInputType = {
    id?: true
  }

  export type SportsSumAggregateInputType = {
    id?: true
  }

  export type SportsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type SportsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type SportsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sports to aggregate.
     */
    where?: sportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sports to fetch.
     */
    orderBy?: sportsOrderByWithRelationInput | sportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sports
    **/
    _count?: true | SportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportsMaxAggregateInputType
  }

  export type GetSportsAggregateType<T extends SportsAggregateArgs> = {
        [P in keyof T & keyof AggregateSports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSports[P]>
      : GetScalarType<T[P], AggregateSports[P]>
  }




  export type sportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sportsWhereInput
    orderBy?: sportsOrderByWithAggregationInput | sportsOrderByWithAggregationInput[]
    by: SportsScalarFieldEnum[] | SportsScalarFieldEnum
    having?: sportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportsCountAggregateInputType | true
    _avg?: SportsAvgAggregateInputType
    _sum?: SportsSumAggregateInputType
    _min?: SportsMinAggregateInputType
    _max?: SportsMaxAggregateInputType
  }

  export type SportsGroupByOutputType = {
    id: number
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: SportsCountAggregateOutputType | null
    _avg: SportsAvgAggregateOutputType | null
    _sum: SportsSumAggregateOutputType | null
    _min: SportsMinAggregateOutputType | null
    _max: SportsMaxAggregateOutputType | null
  }

  type GetSportsGroupByPayload<T extends sportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportsGroupByOutputType[P]>
            : GetScalarType<T[P], SportsGroupByOutputType[P]>
        }
      >
    >


  export type sportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    teams?: boolean | sports$teamsArgs<ExtArgs>
    _count?: boolean | SportsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sports"]>

  export type sportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["sports"]>

  export type sportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["sports"]>

  export type sportsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type sportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["sports"]>
  export type sportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | sports$teamsArgs<ExtArgs>
    _count?: boolean | SportsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type sportsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $sportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sports"
    objects: {
      teams: Prisma.$teamsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["sports"]>
    composites: {}
  }

  type sportsGetPayload<S extends boolean | null | undefined | sportsDefaultArgs> = $Result.GetResult<Prisma.$sportsPayload, S>

  type sportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportsCountAggregateInputType | true
    }

  export interface sportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sports'], meta: { name: 'sports' } }
    /**
     * Find zero or one Sports that matches the filter.
     * @param {sportsFindUniqueArgs} args - Arguments to find a Sports
     * @example
     * // Get one Sports
     * const sports = await prisma.sports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sportsFindUniqueArgs>(args: SelectSubset<T, sportsFindUniqueArgs<ExtArgs>>): Prisma__sportsClient<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sportsFindUniqueOrThrowArgs} args - Arguments to find a Sports
     * @example
     * // Get one Sports
     * const sports = await prisma.sports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sportsFindUniqueOrThrowArgs>(args: SelectSubset<T, sportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sportsClient<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportsFindFirstArgs} args - Arguments to find a Sports
     * @example
     * // Get one Sports
     * const sports = await prisma.sports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sportsFindFirstArgs>(args?: SelectSubset<T, sportsFindFirstArgs<ExtArgs>>): Prisma__sportsClient<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportsFindFirstOrThrowArgs} args - Arguments to find a Sports
     * @example
     * // Get one Sports
     * const sports = await prisma.sports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sportsFindFirstOrThrowArgs>(args?: SelectSubset<T, sportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sportsClient<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports
     * const sports = await prisma.sports.findMany()
     * 
     * // Get first 10 Sports
     * const sports = await prisma.sports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportsWithIdOnly = await prisma.sports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sportsFindManyArgs>(args?: SelectSubset<T, sportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sports.
     * @param {sportsCreateArgs} args - Arguments to create a Sports.
     * @example
     * // Create one Sports
     * const Sports = await prisma.sports.create({
     *   data: {
     *     // ... data to create a Sports
     *   }
     * })
     * 
     */
    create<T extends sportsCreateArgs>(args: SelectSubset<T, sportsCreateArgs<ExtArgs>>): Prisma__sportsClient<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sports.
     * @param {sportsCreateManyArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sports = await prisma.sports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sportsCreateManyArgs>(args?: SelectSubset<T, sportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sports and returns the data saved in the database.
     * @param {sportsCreateManyAndReturnArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sports = await prisma.sports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sports and only return the `id`
     * const sportsWithIdOnly = await prisma.sports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sportsCreateManyAndReturnArgs>(args?: SelectSubset<T, sportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sports.
     * @param {sportsDeleteArgs} args - Arguments to delete one Sports.
     * @example
     * // Delete one Sports
     * const Sports = await prisma.sports.delete({
     *   where: {
     *     // ... filter to delete one Sports
     *   }
     * })
     * 
     */
    delete<T extends sportsDeleteArgs>(args: SelectSubset<T, sportsDeleteArgs<ExtArgs>>): Prisma__sportsClient<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sports.
     * @param {sportsUpdateArgs} args - Arguments to update one Sports.
     * @example
     * // Update one Sports
     * const sports = await prisma.sports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sportsUpdateArgs>(args: SelectSubset<T, sportsUpdateArgs<ExtArgs>>): Prisma__sportsClient<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sports.
     * @param {sportsDeleteManyArgs} args - Arguments to filter Sports to delete.
     * @example
     * // Delete a few Sports
     * const { count } = await prisma.sports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sportsDeleteManyArgs>(args?: SelectSubset<T, sportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports
     * const sports = await prisma.sports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sportsUpdateManyArgs>(args: SelectSubset<T, sportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports and returns the data updated in the database.
     * @param {sportsUpdateManyAndReturnArgs} args - Arguments to update many Sports.
     * @example
     * // Update many Sports
     * const sports = await prisma.sports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sports and only return the `id`
     * const sportsWithIdOnly = await prisma.sports.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sportsUpdateManyAndReturnArgs>(args: SelectSubset<T, sportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sports.
     * @param {sportsUpsertArgs} args - Arguments to update or create a Sports.
     * @example
     * // Update or create a Sports
     * const sports = await prisma.sports.upsert({
     *   create: {
     *     // ... data to create a Sports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sports we want to update
     *   }
     * })
     */
    upsert<T extends sportsUpsertArgs>(args: SelectSubset<T, sportsUpsertArgs<ExtArgs>>): Prisma__sportsClient<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportsCountArgs} args - Arguments to filter Sports to count.
     * @example
     * // Count the number of Sports
     * const count = await prisma.sports.count({
     *   where: {
     *     // ... the filter for the Sports we want to count
     *   }
     * })
    **/
    count<T extends sportsCountArgs>(
      args?: Subset<T, sportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SportsAggregateArgs>(args: Subset<T, SportsAggregateArgs>): Prisma.PrismaPromise<GetSportsAggregateType<T>>

    /**
     * Group by Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sportsGroupByArgs['orderBy'] }
        : { orderBy?: sportsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sports model
   */
  readonly fields: sportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends sports$teamsArgs<ExtArgs> = {}>(args?: Subset<T, sports$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sports model
   */
  interface sportsFieldRefs {
    readonly id: FieldRef<"sports", 'Int'>
    readonly name: FieldRef<"sports", 'String'>
    readonly created_at: FieldRef<"sports", 'DateTime'>
    readonly updated_at: FieldRef<"sports", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sports findUnique
   */
  export type sportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportsInclude<ExtArgs> | null
    /**
     * Filter, which sports to fetch.
     */
    where: sportsWhereUniqueInput
  }

  /**
   * sports findUniqueOrThrow
   */
  export type sportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportsInclude<ExtArgs> | null
    /**
     * Filter, which sports to fetch.
     */
    where: sportsWhereUniqueInput
  }

  /**
   * sports findFirst
   */
  export type sportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportsInclude<ExtArgs> | null
    /**
     * Filter, which sports to fetch.
     */
    where?: sportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sports to fetch.
     */
    orderBy?: sportsOrderByWithRelationInput | sportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sports.
     */
    cursor?: sportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sports.
     */
    distinct?: SportsScalarFieldEnum | SportsScalarFieldEnum[]
  }

  /**
   * sports findFirstOrThrow
   */
  export type sportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportsInclude<ExtArgs> | null
    /**
     * Filter, which sports to fetch.
     */
    where?: sportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sports to fetch.
     */
    orderBy?: sportsOrderByWithRelationInput | sportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sports.
     */
    cursor?: sportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sports.
     */
    distinct?: SportsScalarFieldEnum | SportsScalarFieldEnum[]
  }

  /**
   * sports findMany
   */
  export type sportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportsInclude<ExtArgs> | null
    /**
     * Filter, which sports to fetch.
     */
    where?: sportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sports to fetch.
     */
    orderBy?: sportsOrderByWithRelationInput | sportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sports.
     */
    cursor?: sportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sports.
     */
    skip?: number
    distinct?: SportsScalarFieldEnum | SportsScalarFieldEnum[]
  }

  /**
   * sports create
   */
  export type sportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportsInclude<ExtArgs> | null
    /**
     * The data needed to create a sports.
     */
    data: XOR<sportsCreateInput, sportsUncheckedCreateInput>
  }

  /**
   * sports createMany
   */
  export type sportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sports.
     */
    data: sportsCreateManyInput | sportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sports createManyAndReturn
   */
  export type sportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * The data used to create many sports.
     */
    data: sportsCreateManyInput | sportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sports update
   */
  export type sportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportsInclude<ExtArgs> | null
    /**
     * The data needed to update a sports.
     */
    data: XOR<sportsUpdateInput, sportsUncheckedUpdateInput>
    /**
     * Choose, which sports to update.
     */
    where: sportsWhereUniqueInput
  }

  /**
   * sports updateMany
   */
  export type sportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sports.
     */
    data: XOR<sportsUpdateManyMutationInput, sportsUncheckedUpdateManyInput>
    /**
     * Filter which sports to update
     */
    where?: sportsWhereInput
    /**
     * Limit how many sports to update.
     */
    limit?: number
  }

  /**
   * sports updateManyAndReturn
   */
  export type sportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * The data used to update sports.
     */
    data: XOR<sportsUpdateManyMutationInput, sportsUncheckedUpdateManyInput>
    /**
     * Filter which sports to update
     */
    where?: sportsWhereInput
    /**
     * Limit how many sports to update.
     */
    limit?: number
  }

  /**
   * sports upsert
   */
  export type sportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportsInclude<ExtArgs> | null
    /**
     * The filter to search for the sports to update in case it exists.
     */
    where: sportsWhereUniqueInput
    /**
     * In case the sports found by the `where` argument doesn't exist, create a new sports with this data.
     */
    create: XOR<sportsCreateInput, sportsUncheckedCreateInput>
    /**
     * In case the sports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sportsUpdateInput, sportsUncheckedUpdateInput>
  }

  /**
   * sports delete
   */
  export type sportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportsInclude<ExtArgs> | null
    /**
     * Filter which sports to delete.
     */
    where: sportsWhereUniqueInput
  }

  /**
   * sports deleteMany
   */
  export type sportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sports to delete
     */
    where?: sportsWhereInput
    /**
     * Limit how many sports to delete.
     */
    limit?: number
  }

  /**
   * sports.teams
   */
  export type sports$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    where?: teamsWhereInput
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    cursor?: teamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * sports without action
   */
  export type sportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sports
     */
    select?: sportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sports
     */
    omit?: sportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportsInclude<ExtArgs> | null
  }


  /**
   * Model team_primary_contacts
   */

  export type AggregateTeam_primary_contacts = {
    _count: Team_primary_contactsCountAggregateOutputType | null
    _avg: Team_primary_contactsAvgAggregateOutputType | null
    _sum: Team_primary_contactsSumAggregateOutputType | null
    _min: Team_primary_contactsMinAggregateOutputType | null
    _max: Team_primary_contactsMaxAggregateOutputType | null
  }

  export type Team_primary_contactsAvgAggregateOutputType = {
    team_id: number | null
    user_id: number | null
  }

  export type Team_primary_contactsSumAggregateOutputType = {
    team_id: number | null
    user_id: number | null
  }

  export type Team_primary_contactsMinAggregateOutputType = {
    team_id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Team_primary_contactsMaxAggregateOutputType = {
    team_id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Team_primary_contactsCountAggregateOutputType = {
    team_id: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Team_primary_contactsAvgAggregateInputType = {
    team_id?: true
    user_id?: true
  }

  export type Team_primary_contactsSumAggregateInputType = {
    team_id?: true
    user_id?: true
  }

  export type Team_primary_contactsMinAggregateInputType = {
    team_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Team_primary_contactsMaxAggregateInputType = {
    team_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Team_primary_contactsCountAggregateInputType = {
    team_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Team_primary_contactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_primary_contacts to aggregate.
     */
    where?: team_primary_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_primary_contacts to fetch.
     */
    orderBy?: team_primary_contactsOrderByWithRelationInput | team_primary_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: team_primary_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_primary_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_primary_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned team_primary_contacts
    **/
    _count?: true | Team_primary_contactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Team_primary_contactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Team_primary_contactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Team_primary_contactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Team_primary_contactsMaxAggregateInputType
  }

  export type GetTeam_primary_contactsAggregateType<T extends Team_primary_contactsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam_primary_contacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_primary_contacts[P]>
      : GetScalarType<T[P], AggregateTeam_primary_contacts[P]>
  }




  export type team_primary_contactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_primary_contactsWhereInput
    orderBy?: team_primary_contactsOrderByWithAggregationInput | team_primary_contactsOrderByWithAggregationInput[]
    by: Team_primary_contactsScalarFieldEnum[] | Team_primary_contactsScalarFieldEnum
    having?: team_primary_contactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Team_primary_contactsCountAggregateInputType | true
    _avg?: Team_primary_contactsAvgAggregateInputType
    _sum?: Team_primary_contactsSumAggregateInputType
    _min?: Team_primary_contactsMinAggregateInputType
    _max?: Team_primary_contactsMaxAggregateInputType
  }

  export type Team_primary_contactsGroupByOutputType = {
    team_id: number
    user_id: number
    created_at: Date | null
    updated_at: Date | null
    _count: Team_primary_contactsCountAggregateOutputType | null
    _avg: Team_primary_contactsAvgAggregateOutputType | null
    _sum: Team_primary_contactsSumAggregateOutputType | null
    _min: Team_primary_contactsMinAggregateOutputType | null
    _max: Team_primary_contactsMaxAggregateOutputType | null
  }

  type GetTeam_primary_contactsGroupByPayload<T extends team_primary_contactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_primary_contactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Team_primary_contactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Team_primary_contactsGroupByOutputType[P]>
            : GetScalarType<T[P], Team_primary_contactsGroupByOutputType[P]>
        }
      >
    >


  export type team_primary_contactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_primary_contacts"]>

  export type team_primary_contactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_primary_contacts"]>

  export type team_primary_contactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_primary_contacts"]>

  export type team_primary_contactsSelectScalar = {
    team_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type team_primary_contactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"team_id" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["team_primary_contacts"]>
  export type team_primary_contactsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type team_primary_contactsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type team_primary_contactsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $team_primary_contactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team_primary_contacts"
    objects: {
      teams: Prisma.$teamsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      team_id: number
      user_id: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["team_primary_contacts"]>
    composites: {}
  }

  type team_primary_contactsGetPayload<S extends boolean | null | undefined | team_primary_contactsDefaultArgs> = $Result.GetResult<Prisma.$team_primary_contactsPayload, S>

  type team_primary_contactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<team_primary_contactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Team_primary_contactsCountAggregateInputType | true
    }

  export interface team_primary_contactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_primary_contacts'], meta: { name: 'team_primary_contacts' } }
    /**
     * Find zero or one Team_primary_contacts that matches the filter.
     * @param {team_primary_contactsFindUniqueArgs} args - Arguments to find a Team_primary_contacts
     * @example
     * // Get one Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends team_primary_contactsFindUniqueArgs>(args: SelectSubset<T, team_primary_contactsFindUniqueArgs<ExtArgs>>): Prisma__team_primary_contactsClient<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team_primary_contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {team_primary_contactsFindUniqueOrThrowArgs} args - Arguments to find a Team_primary_contacts
     * @example
     * // Get one Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends team_primary_contactsFindUniqueOrThrowArgs>(args: SelectSubset<T, team_primary_contactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__team_primary_contactsClient<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_primary_contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_primary_contactsFindFirstArgs} args - Arguments to find a Team_primary_contacts
     * @example
     * // Get one Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends team_primary_contactsFindFirstArgs>(args?: SelectSubset<T, team_primary_contactsFindFirstArgs<ExtArgs>>): Prisma__team_primary_contactsClient<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_primary_contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_primary_contactsFindFirstOrThrowArgs} args - Arguments to find a Team_primary_contacts
     * @example
     * // Get one Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends team_primary_contactsFindFirstOrThrowArgs>(args?: SelectSubset<T, team_primary_contactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__team_primary_contactsClient<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Team_primary_contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_primary_contactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.findMany()
     * 
     * // Get first 10 Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.findMany({ take: 10 })
     * 
     * // Only select the `team_id`
     * const team_primary_contactsWithTeam_idOnly = await prisma.team_primary_contacts.findMany({ select: { team_id: true } })
     * 
     */
    findMany<T extends team_primary_contactsFindManyArgs>(args?: SelectSubset<T, team_primary_contactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team_primary_contacts.
     * @param {team_primary_contactsCreateArgs} args - Arguments to create a Team_primary_contacts.
     * @example
     * // Create one Team_primary_contacts
     * const Team_primary_contacts = await prisma.team_primary_contacts.create({
     *   data: {
     *     // ... data to create a Team_primary_contacts
     *   }
     * })
     * 
     */
    create<T extends team_primary_contactsCreateArgs>(args: SelectSubset<T, team_primary_contactsCreateArgs<ExtArgs>>): Prisma__team_primary_contactsClient<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Team_primary_contacts.
     * @param {team_primary_contactsCreateManyArgs} args - Arguments to create many Team_primary_contacts.
     * @example
     * // Create many Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends team_primary_contactsCreateManyArgs>(args?: SelectSubset<T, team_primary_contactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Team_primary_contacts and returns the data saved in the database.
     * @param {team_primary_contactsCreateManyAndReturnArgs} args - Arguments to create many Team_primary_contacts.
     * @example
     * // Create many Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Team_primary_contacts and only return the `team_id`
     * const team_primary_contactsWithTeam_idOnly = await prisma.team_primary_contacts.createManyAndReturn({
     *   select: { team_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends team_primary_contactsCreateManyAndReturnArgs>(args?: SelectSubset<T, team_primary_contactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team_primary_contacts.
     * @param {team_primary_contactsDeleteArgs} args - Arguments to delete one Team_primary_contacts.
     * @example
     * // Delete one Team_primary_contacts
     * const Team_primary_contacts = await prisma.team_primary_contacts.delete({
     *   where: {
     *     // ... filter to delete one Team_primary_contacts
     *   }
     * })
     * 
     */
    delete<T extends team_primary_contactsDeleteArgs>(args: SelectSubset<T, team_primary_contactsDeleteArgs<ExtArgs>>): Prisma__team_primary_contactsClient<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team_primary_contacts.
     * @param {team_primary_contactsUpdateArgs} args - Arguments to update one Team_primary_contacts.
     * @example
     * // Update one Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends team_primary_contactsUpdateArgs>(args: SelectSubset<T, team_primary_contactsUpdateArgs<ExtArgs>>): Prisma__team_primary_contactsClient<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Team_primary_contacts.
     * @param {team_primary_contactsDeleteManyArgs} args - Arguments to filter Team_primary_contacts to delete.
     * @example
     * // Delete a few Team_primary_contacts
     * const { count } = await prisma.team_primary_contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends team_primary_contactsDeleteManyArgs>(args?: SelectSubset<T, team_primary_contactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_primary_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_primary_contactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends team_primary_contactsUpdateManyArgs>(args: SelectSubset<T, team_primary_contactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_primary_contacts and returns the data updated in the database.
     * @param {team_primary_contactsUpdateManyAndReturnArgs} args - Arguments to update many Team_primary_contacts.
     * @example
     * // Update many Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Team_primary_contacts and only return the `team_id`
     * const team_primary_contactsWithTeam_idOnly = await prisma.team_primary_contacts.updateManyAndReturn({
     *   select: { team_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends team_primary_contactsUpdateManyAndReturnArgs>(args: SelectSubset<T, team_primary_contactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team_primary_contacts.
     * @param {team_primary_contactsUpsertArgs} args - Arguments to update or create a Team_primary_contacts.
     * @example
     * // Update or create a Team_primary_contacts
     * const team_primary_contacts = await prisma.team_primary_contacts.upsert({
     *   create: {
     *     // ... data to create a Team_primary_contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_primary_contacts we want to update
     *   }
     * })
     */
    upsert<T extends team_primary_contactsUpsertArgs>(args: SelectSubset<T, team_primary_contactsUpsertArgs<ExtArgs>>): Prisma__team_primary_contactsClient<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Team_primary_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_primary_contactsCountArgs} args - Arguments to filter Team_primary_contacts to count.
     * @example
     * // Count the number of Team_primary_contacts
     * const count = await prisma.team_primary_contacts.count({
     *   where: {
     *     // ... the filter for the Team_primary_contacts we want to count
     *   }
     * })
    **/
    count<T extends team_primary_contactsCountArgs>(
      args?: Subset<T, team_primary_contactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_primary_contactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team_primary_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_primary_contactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Team_primary_contactsAggregateArgs>(args: Subset<T, Team_primary_contactsAggregateArgs>): Prisma.PrismaPromise<GetTeam_primary_contactsAggregateType<T>>

    /**
     * Group by Team_primary_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_primary_contactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends team_primary_contactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_primary_contactsGroupByArgs['orderBy'] }
        : { orderBy?: team_primary_contactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, team_primary_contactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeam_primary_contactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team_primary_contacts model
   */
  readonly fields: team_primary_contactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_primary_contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_primary_contactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends teamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamsDefaultArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the team_primary_contacts model
   */
  interface team_primary_contactsFieldRefs {
    readonly team_id: FieldRef<"team_primary_contacts", 'Int'>
    readonly user_id: FieldRef<"team_primary_contacts", 'Int'>
    readonly created_at: FieldRef<"team_primary_contacts", 'DateTime'>
    readonly updated_at: FieldRef<"team_primary_contacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * team_primary_contacts findUnique
   */
  export type team_primary_contactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    /**
     * Filter, which team_primary_contacts to fetch.
     */
    where: team_primary_contactsWhereUniqueInput
  }

  /**
   * team_primary_contacts findUniqueOrThrow
   */
  export type team_primary_contactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    /**
     * Filter, which team_primary_contacts to fetch.
     */
    where: team_primary_contactsWhereUniqueInput
  }

  /**
   * team_primary_contacts findFirst
   */
  export type team_primary_contactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    /**
     * Filter, which team_primary_contacts to fetch.
     */
    where?: team_primary_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_primary_contacts to fetch.
     */
    orderBy?: team_primary_contactsOrderByWithRelationInput | team_primary_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_primary_contacts.
     */
    cursor?: team_primary_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_primary_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_primary_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_primary_contacts.
     */
    distinct?: Team_primary_contactsScalarFieldEnum | Team_primary_contactsScalarFieldEnum[]
  }

  /**
   * team_primary_contacts findFirstOrThrow
   */
  export type team_primary_contactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    /**
     * Filter, which team_primary_contacts to fetch.
     */
    where?: team_primary_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_primary_contacts to fetch.
     */
    orderBy?: team_primary_contactsOrderByWithRelationInput | team_primary_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_primary_contacts.
     */
    cursor?: team_primary_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_primary_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_primary_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_primary_contacts.
     */
    distinct?: Team_primary_contactsScalarFieldEnum | Team_primary_contactsScalarFieldEnum[]
  }

  /**
   * team_primary_contacts findMany
   */
  export type team_primary_contactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    /**
     * Filter, which team_primary_contacts to fetch.
     */
    where?: team_primary_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_primary_contacts to fetch.
     */
    orderBy?: team_primary_contactsOrderByWithRelationInput | team_primary_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing team_primary_contacts.
     */
    cursor?: team_primary_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_primary_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_primary_contacts.
     */
    skip?: number
    distinct?: Team_primary_contactsScalarFieldEnum | Team_primary_contactsScalarFieldEnum[]
  }

  /**
   * team_primary_contacts create
   */
  export type team_primary_contactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    /**
     * The data needed to create a team_primary_contacts.
     */
    data: XOR<team_primary_contactsCreateInput, team_primary_contactsUncheckedCreateInput>
  }

  /**
   * team_primary_contacts createMany
   */
  export type team_primary_contactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_primary_contacts.
     */
    data: team_primary_contactsCreateManyInput | team_primary_contactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team_primary_contacts createManyAndReturn
   */
  export type team_primary_contactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * The data used to create many team_primary_contacts.
     */
    data: team_primary_contactsCreateManyInput | team_primary_contactsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * team_primary_contacts update
   */
  export type team_primary_contactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    /**
     * The data needed to update a team_primary_contacts.
     */
    data: XOR<team_primary_contactsUpdateInput, team_primary_contactsUncheckedUpdateInput>
    /**
     * Choose, which team_primary_contacts to update.
     */
    where: team_primary_contactsWhereUniqueInput
  }

  /**
   * team_primary_contacts updateMany
   */
  export type team_primary_contactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_primary_contacts.
     */
    data: XOR<team_primary_contactsUpdateManyMutationInput, team_primary_contactsUncheckedUpdateManyInput>
    /**
     * Filter which team_primary_contacts to update
     */
    where?: team_primary_contactsWhereInput
    /**
     * Limit how many team_primary_contacts to update.
     */
    limit?: number
  }

  /**
   * team_primary_contacts updateManyAndReturn
   */
  export type team_primary_contactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * The data used to update team_primary_contacts.
     */
    data: XOR<team_primary_contactsUpdateManyMutationInput, team_primary_contactsUncheckedUpdateManyInput>
    /**
     * Filter which team_primary_contacts to update
     */
    where?: team_primary_contactsWhereInput
    /**
     * Limit how many team_primary_contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * team_primary_contacts upsert
   */
  export type team_primary_contactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    /**
     * The filter to search for the team_primary_contacts to update in case it exists.
     */
    where: team_primary_contactsWhereUniqueInput
    /**
     * In case the team_primary_contacts found by the `where` argument doesn't exist, create a new team_primary_contacts with this data.
     */
    create: XOR<team_primary_contactsCreateInput, team_primary_contactsUncheckedCreateInput>
    /**
     * In case the team_primary_contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_primary_contactsUpdateInput, team_primary_contactsUncheckedUpdateInput>
  }

  /**
   * team_primary_contacts delete
   */
  export type team_primary_contactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    /**
     * Filter which team_primary_contacts to delete.
     */
    where: team_primary_contactsWhereUniqueInput
  }

  /**
   * team_primary_contacts deleteMany
   */
  export type team_primary_contactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_primary_contacts to delete
     */
    where?: team_primary_contactsWhereInput
    /**
     * Limit how many team_primary_contacts to delete.
     */
    limit?: number
  }

  /**
   * team_primary_contacts without action
   */
  export type team_primary_contactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
  }


  /**
   * Model teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _avg: TeamsAvgAggregateOutputType | null
    _sum: TeamsSumAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsAvgAggregateOutputType = {
    id: number | null
    school_id: number | null
    sport_id: number | null
  }

  export type TeamsSumAggregateOutputType = {
    id: number | null
    school_id: number | null
    sport_id: number | null
  }

  export type TeamsMinAggregateOutputType = {
    id: number | null
    name: string | null
    is_school_team: boolean | null
    school_id: number | null
    sport_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    is_school_team: boolean | null
    school_id: number | null
    sport_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    name: number
    is_school_team: number
    school_id: number
    sport_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TeamsAvgAggregateInputType = {
    id?: true
    school_id?: true
    sport_id?: true
  }

  export type TeamsSumAggregateInputType = {
    id?: true
    school_id?: true
    sport_id?: true
  }

  export type TeamsMinAggregateInputType = {
    id?: true
    name?: true
    is_school_team?: true
    school_id?: true
    sport_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    name?: true
    is_school_team?: true
    school_id?: true
    sport_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    name?: true
    is_school_team?: true
    school_id?: true
    sport_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to aggregate.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type teamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamsWhereInput
    orderBy?: teamsOrderByWithAggregationInput | teamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: teamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _avg?: TeamsAvgAggregateInputType
    _sum?: TeamsSumAggregateInputType
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    id: number
    name: string
    is_school_team: boolean
    school_id: number | null
    sport_id: number
    created_at: Date | null
    updated_at: Date | null
    _count: TeamsCountAggregateOutputType | null
    _avg: TeamsAvgAggregateOutputType | null
    _sum: TeamsSumAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends teamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type teamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_school_team?: boolean
    school_id?: boolean
    sport_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_primary_contacts?: boolean | teams$team_primary_contactsArgs<ExtArgs>
    schools?: boolean | teams$schoolsArgs<ExtArgs>
    sports?: boolean | sportsDefaultArgs<ExtArgs>
    user_teams?: boolean | teams$user_teamsArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_school_team?: boolean
    school_id?: boolean
    sport_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    schools?: boolean | teams$schoolsArgs<ExtArgs>
    sports?: boolean | sportsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_school_team?: boolean
    school_id?: boolean
    sport_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    schools?: boolean | teams$schoolsArgs<ExtArgs>
    sports?: boolean | sportsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectScalar = {
    id?: boolean
    name?: boolean
    is_school_team?: boolean
    school_id?: boolean
    sport_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type teamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_school_team" | "school_id" | "sport_id" | "created_at" | "updated_at", ExtArgs["result"]["teams"]>
  export type teamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_primary_contacts?: boolean | teams$team_primary_contactsArgs<ExtArgs>
    schools?: boolean | teams$schoolsArgs<ExtArgs>
    sports?: boolean | sportsDefaultArgs<ExtArgs>
    user_teams?: boolean | teams$user_teamsArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type teamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | teams$schoolsArgs<ExtArgs>
    sports?: boolean | sportsDefaultArgs<ExtArgs>
  }
  export type teamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | teams$schoolsArgs<ExtArgs>
    sports?: boolean | sportsDefaultArgs<ExtArgs>
  }

  export type $teamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teams"
    objects: {
      team_primary_contacts: Prisma.$team_primary_contactsPayload<ExtArgs>[]
      schools: Prisma.$schoolsPayload<ExtArgs> | null
      sports: Prisma.$sportsPayload<ExtArgs>
      user_teams: Prisma.$user_teamsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      is_school_team: boolean
      school_id: number | null
      sport_id: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }

  type teamsGetPayload<S extends boolean | null | undefined | teamsDefaultArgs> = $Result.GetResult<Prisma.$teamsPayload, S>

  type teamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface teamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teams'], meta: { name: 'teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {teamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teamsFindUniqueArgs>(args: SelectSubset<T, teamsFindUniqueArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teamsFindUniqueOrThrowArgs>(args: SelectSubset<T, teamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teamsFindFirstArgs>(args?: SelectSubset<T, teamsFindFirstArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teamsFindFirstOrThrowArgs>(args?: SelectSubset<T, teamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teamsFindManyArgs>(args?: SelectSubset<T, teamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teams.
     * @param {teamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
     */
    create<T extends teamsCreateArgs>(args: SelectSubset<T, teamsCreateArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {teamsCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teamsCreateManyArgs>(args?: SelectSubset<T, teamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {teamsCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teamsCreateManyAndReturnArgs>(args?: SelectSubset<T, teamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teams.
     * @param {teamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
     */
    delete<T extends teamsDeleteArgs>(args: SelectSubset<T, teamsDeleteArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teams.
     * @param {teamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teamsUpdateArgs>(args: SelectSubset<T, teamsUpdateArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {teamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teamsDeleteManyArgs>(args?: SelectSubset<T, teamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teamsUpdateManyArgs>(args: SelectSubset<T, teamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {teamsUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends teamsUpdateManyAndReturnArgs>(args: SelectSubset<T, teamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teams.
     * @param {teamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
     */
    upsert<T extends teamsUpsertArgs>(args: SelectSubset<T, teamsUpsertArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends teamsCountArgs>(
      args?: Subset<T, teamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamsGroupByArgs['orderBy'] }
        : { orderBy?: teamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teams model
   */
  readonly fields: teamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team_primary_contacts<T extends teams$team_primary_contactsArgs<ExtArgs> = {}>(args?: Subset<T, teams$team_primary_contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schools<T extends teams$schoolsArgs<ExtArgs> = {}>(args?: Subset<T, teams$schoolsArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sports<T extends sportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sportsDefaultArgs<ExtArgs>>): Prisma__sportsClient<$Result.GetResult<Prisma.$sportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_teams<T extends teams$user_teamsArgs<ExtArgs> = {}>(args?: Subset<T, teams$user_teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teams model
   */
  interface teamsFieldRefs {
    readonly id: FieldRef<"teams", 'Int'>
    readonly name: FieldRef<"teams", 'String'>
    readonly is_school_team: FieldRef<"teams", 'Boolean'>
    readonly school_id: FieldRef<"teams", 'Int'>
    readonly sport_id: FieldRef<"teams", 'Int'>
    readonly created_at: FieldRef<"teams", 'DateTime'>
    readonly updated_at: FieldRef<"teams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * teams findUnique
   */
  export type teamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams findUniqueOrThrow
   */
  export type teamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams findFirst
   */
  export type teamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams findFirstOrThrow
   */
  export type teamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams findMany
   */
  export type teamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams create
   */
  export type teamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The data needed to create a teams.
     */
    data: XOR<teamsCreateInput, teamsUncheckedCreateInput>
  }

  /**
   * teams createMany
   */
  export type teamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamsCreateManyInput | teamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teams createManyAndReturn
   */
  export type teamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The data used to create many teams.
     */
    data: teamsCreateManyInput | teamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * teams update
   */
  export type teamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The data needed to update a teams.
     */
    data: XOR<teamsUpdateInput, teamsUncheckedUpdateInput>
    /**
     * Choose, which teams to update.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams updateMany
   */
  export type teamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * teams updateManyAndReturn
   */
  export type teamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The data used to update teams.
     */
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * teams upsert
   */
  export type teamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The filter to search for the teams to update in case it exists.
     */
    where: teamsWhereUniqueInput
    /**
     * In case the teams found by the `where` argument doesn't exist, create a new teams with this data.
     */
    create: XOR<teamsCreateInput, teamsUncheckedCreateInput>
    /**
     * In case the teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamsUpdateInput, teamsUncheckedUpdateInput>
  }

  /**
   * teams delete
   */
  export type teamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter which teams to delete.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams deleteMany
   */
  export type teamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to delete.
     */
    limit?: number
  }

  /**
   * teams.team_primary_contacts
   */
  export type teams$team_primary_contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    where?: team_primary_contactsWhereInput
    orderBy?: team_primary_contactsOrderByWithRelationInput | team_primary_contactsOrderByWithRelationInput[]
    cursor?: team_primary_contactsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_primary_contactsScalarFieldEnum | Team_primary_contactsScalarFieldEnum[]
  }

  /**
   * teams.schools
   */
  export type teams$schoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    where?: schoolsWhereInput
  }

  /**
   * teams.user_teams
   */
  export type teams$user_teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    where?: user_teamsWhereInput
    orderBy?: user_teamsOrderByWithRelationInput | user_teamsOrderByWithRelationInput[]
    cursor?: user_teamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_teamsScalarFieldEnum | User_teamsScalarFieldEnum[]
  }

  /**
   * teams without action
   */
  export type teamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
  }


  /**
   * Model user_teams
   */

  export type AggregateUser_teams = {
    _count: User_teamsCountAggregateOutputType | null
    _avg: User_teamsAvgAggregateOutputType | null
    _sum: User_teamsSumAggregateOutputType | null
    _min: User_teamsMinAggregateOutputType | null
    _max: User_teamsMaxAggregateOutputType | null
  }

  export type User_teamsAvgAggregateOutputType = {
    team_id: number | null
    user_id: number | null
  }

  export type User_teamsSumAggregateOutputType = {
    team_id: number | null
    user_id: number | null
  }

  export type User_teamsMinAggregateOutputType = {
    team_id: number | null
    user_id: number | null
    role: $Enums.user_team_role | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_teamsMaxAggregateOutputType = {
    team_id: number | null
    user_id: number | null
    role: $Enums.user_team_role | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_teamsCountAggregateOutputType = {
    team_id: number
    user_id: number
    role: number
    start_date: number
    end_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_teamsAvgAggregateInputType = {
    team_id?: true
    user_id?: true
  }

  export type User_teamsSumAggregateInputType = {
    team_id?: true
    user_id?: true
  }

  export type User_teamsMinAggregateInputType = {
    team_id?: true
    user_id?: true
    role?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type User_teamsMaxAggregateInputType = {
    team_id?: true
    user_id?: true
    role?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type User_teamsCountAggregateInputType = {
    team_id?: true
    user_id?: true
    role?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_teamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_teams to aggregate.
     */
    where?: user_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_teams to fetch.
     */
    orderBy?: user_teamsOrderByWithRelationInput | user_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_teams
    **/
    _count?: true | User_teamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_teamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_teamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_teamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_teamsMaxAggregateInputType
  }

  export type GetUser_teamsAggregateType<T extends User_teamsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_teams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_teams[P]>
      : GetScalarType<T[P], AggregateUser_teams[P]>
  }




  export type user_teamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_teamsWhereInput
    orderBy?: user_teamsOrderByWithAggregationInput | user_teamsOrderByWithAggregationInput[]
    by: User_teamsScalarFieldEnum[] | User_teamsScalarFieldEnum
    having?: user_teamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_teamsCountAggregateInputType | true
    _avg?: User_teamsAvgAggregateInputType
    _sum?: User_teamsSumAggregateInputType
    _min?: User_teamsMinAggregateInputType
    _max?: User_teamsMaxAggregateInputType
  }

  export type User_teamsGroupByOutputType = {
    team_id: number
    user_id: number
    role: $Enums.user_team_role
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: User_teamsCountAggregateOutputType | null
    _avg: User_teamsAvgAggregateOutputType | null
    _sum: User_teamsSumAggregateOutputType | null
    _min: User_teamsMinAggregateOutputType | null
    _max: User_teamsMaxAggregateOutputType | null
  }

  type GetUser_teamsGroupByPayload<T extends user_teamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_teamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_teamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_teamsGroupByOutputType[P]>
            : GetScalarType<T[P], User_teamsGroupByOutputType[P]>
        }
      >
    >


  export type user_teamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    user_id?: boolean
    role?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_teams"]>

  export type user_teamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    user_id?: boolean
    role?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_teams"]>

  export type user_teamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    user_id?: boolean
    role?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_teams"]>

  export type user_teamsSelectScalar = {
    team_id?: boolean
    user_id?: boolean
    role?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_teamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"team_id" | "user_id" | "role" | "start_date" | "end_date" | "created_at" | "updated_at", ExtArgs["result"]["user_teams"]>
  export type user_teamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_teamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_teamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_teamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_teams"
    objects: {
      teams: Prisma.$teamsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      team_id: number
      user_id: number
      role: $Enums.user_team_role
      start_date: Date | null
      end_date: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user_teams"]>
    composites: {}
  }

  type user_teamsGetPayload<S extends boolean | null | undefined | user_teamsDefaultArgs> = $Result.GetResult<Prisma.$user_teamsPayload, S>

  type user_teamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_teamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_teamsCountAggregateInputType | true
    }

  export interface user_teamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_teams'], meta: { name: 'user_teams' } }
    /**
     * Find zero or one User_teams that matches the filter.
     * @param {user_teamsFindUniqueArgs} args - Arguments to find a User_teams
     * @example
     * // Get one User_teams
     * const user_teams = await prisma.user_teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_teamsFindUniqueArgs>(args: SelectSubset<T, user_teamsFindUniqueArgs<ExtArgs>>): Prisma__user_teamsClient<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_teamsFindUniqueOrThrowArgs} args - Arguments to find a User_teams
     * @example
     * // Get one User_teams
     * const user_teams = await prisma.user_teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_teamsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_teamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_teamsClient<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamsFindFirstArgs} args - Arguments to find a User_teams
     * @example
     * // Get one User_teams
     * const user_teams = await prisma.user_teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_teamsFindFirstArgs>(args?: SelectSubset<T, user_teamsFindFirstArgs<ExtArgs>>): Prisma__user_teamsClient<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamsFindFirstOrThrowArgs} args - Arguments to find a User_teams
     * @example
     * // Get one User_teams
     * const user_teams = await prisma.user_teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_teamsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_teamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_teamsClient<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_teams
     * const user_teams = await prisma.user_teams.findMany()
     * 
     * // Get first 10 User_teams
     * const user_teams = await prisma.user_teams.findMany({ take: 10 })
     * 
     * // Only select the `team_id`
     * const user_teamsWithTeam_idOnly = await prisma.user_teams.findMany({ select: { team_id: true } })
     * 
     */
    findMany<T extends user_teamsFindManyArgs>(args?: SelectSubset<T, user_teamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_teams.
     * @param {user_teamsCreateArgs} args - Arguments to create a User_teams.
     * @example
     * // Create one User_teams
     * const User_teams = await prisma.user_teams.create({
     *   data: {
     *     // ... data to create a User_teams
     *   }
     * })
     * 
     */
    create<T extends user_teamsCreateArgs>(args: SelectSubset<T, user_teamsCreateArgs<ExtArgs>>): Prisma__user_teamsClient<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_teams.
     * @param {user_teamsCreateManyArgs} args - Arguments to create many User_teams.
     * @example
     * // Create many User_teams
     * const user_teams = await prisma.user_teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_teamsCreateManyArgs>(args?: SelectSubset<T, user_teamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_teams and returns the data saved in the database.
     * @param {user_teamsCreateManyAndReturnArgs} args - Arguments to create many User_teams.
     * @example
     * // Create many User_teams
     * const user_teams = await prisma.user_teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_teams and only return the `team_id`
     * const user_teamsWithTeam_idOnly = await prisma.user_teams.createManyAndReturn({
     *   select: { team_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_teamsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_teamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_teams.
     * @param {user_teamsDeleteArgs} args - Arguments to delete one User_teams.
     * @example
     * // Delete one User_teams
     * const User_teams = await prisma.user_teams.delete({
     *   where: {
     *     // ... filter to delete one User_teams
     *   }
     * })
     * 
     */
    delete<T extends user_teamsDeleteArgs>(args: SelectSubset<T, user_teamsDeleteArgs<ExtArgs>>): Prisma__user_teamsClient<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_teams.
     * @param {user_teamsUpdateArgs} args - Arguments to update one User_teams.
     * @example
     * // Update one User_teams
     * const user_teams = await prisma.user_teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_teamsUpdateArgs>(args: SelectSubset<T, user_teamsUpdateArgs<ExtArgs>>): Prisma__user_teamsClient<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_teams.
     * @param {user_teamsDeleteManyArgs} args - Arguments to filter User_teams to delete.
     * @example
     * // Delete a few User_teams
     * const { count } = await prisma.user_teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_teamsDeleteManyArgs>(args?: SelectSubset<T, user_teamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_teams
     * const user_teams = await prisma.user_teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_teamsUpdateManyArgs>(args: SelectSubset<T, user_teamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_teams and returns the data updated in the database.
     * @param {user_teamsUpdateManyAndReturnArgs} args - Arguments to update many User_teams.
     * @example
     * // Update many User_teams
     * const user_teams = await prisma.user_teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_teams and only return the `team_id`
     * const user_teamsWithTeam_idOnly = await prisma.user_teams.updateManyAndReturn({
     *   select: { team_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_teamsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_teamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_teams.
     * @param {user_teamsUpsertArgs} args - Arguments to update or create a User_teams.
     * @example
     * // Update or create a User_teams
     * const user_teams = await prisma.user_teams.upsert({
     *   create: {
     *     // ... data to create a User_teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_teams we want to update
     *   }
     * })
     */
    upsert<T extends user_teamsUpsertArgs>(args: SelectSubset<T, user_teamsUpsertArgs<ExtArgs>>): Prisma__user_teamsClient<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamsCountArgs} args - Arguments to filter User_teams to count.
     * @example
     * // Count the number of User_teams
     * const count = await prisma.user_teams.count({
     *   where: {
     *     // ... the filter for the User_teams we want to count
     *   }
     * })
    **/
    count<T extends user_teamsCountArgs>(
      args?: Subset<T, user_teamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_teamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_teamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_teamsAggregateArgs>(args: Subset<T, User_teamsAggregateArgs>): Prisma.PrismaPromise<GetUser_teamsAggregateType<T>>

    /**
     * Group by User_teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_teamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_teamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_teamsGroupByArgs['orderBy'] }
        : { orderBy?: user_teamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_teamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_teamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_teams model
   */
  readonly fields: user_teamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_teamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends teamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamsDefaultArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_teams model
   */
  interface user_teamsFieldRefs {
    readonly team_id: FieldRef<"user_teams", 'Int'>
    readonly user_id: FieldRef<"user_teams", 'Int'>
    readonly role: FieldRef<"user_teams", 'user_team_role'>
    readonly start_date: FieldRef<"user_teams", 'DateTime'>
    readonly end_date: FieldRef<"user_teams", 'DateTime'>
    readonly created_at: FieldRef<"user_teams", 'DateTime'>
    readonly updated_at: FieldRef<"user_teams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_teams findUnique
   */
  export type user_teamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    /**
     * Filter, which user_teams to fetch.
     */
    where: user_teamsWhereUniqueInput
  }

  /**
   * user_teams findUniqueOrThrow
   */
  export type user_teamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    /**
     * Filter, which user_teams to fetch.
     */
    where: user_teamsWhereUniqueInput
  }

  /**
   * user_teams findFirst
   */
  export type user_teamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    /**
     * Filter, which user_teams to fetch.
     */
    where?: user_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_teams to fetch.
     */
    orderBy?: user_teamsOrderByWithRelationInput | user_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_teams.
     */
    cursor?: user_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_teams.
     */
    distinct?: User_teamsScalarFieldEnum | User_teamsScalarFieldEnum[]
  }

  /**
   * user_teams findFirstOrThrow
   */
  export type user_teamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    /**
     * Filter, which user_teams to fetch.
     */
    where?: user_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_teams to fetch.
     */
    orderBy?: user_teamsOrderByWithRelationInput | user_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_teams.
     */
    cursor?: user_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_teams.
     */
    distinct?: User_teamsScalarFieldEnum | User_teamsScalarFieldEnum[]
  }

  /**
   * user_teams findMany
   */
  export type user_teamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    /**
     * Filter, which user_teams to fetch.
     */
    where?: user_teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_teams to fetch.
     */
    orderBy?: user_teamsOrderByWithRelationInput | user_teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_teams.
     */
    cursor?: user_teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_teams.
     */
    skip?: number
    distinct?: User_teamsScalarFieldEnum | User_teamsScalarFieldEnum[]
  }

  /**
   * user_teams create
   */
  export type user_teamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_teams.
     */
    data: XOR<user_teamsCreateInput, user_teamsUncheckedCreateInput>
  }

  /**
   * user_teams createMany
   */
  export type user_teamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_teams.
     */
    data: user_teamsCreateManyInput | user_teamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_teams createManyAndReturn
   */
  export type user_teamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * The data used to create many user_teams.
     */
    data: user_teamsCreateManyInput | user_teamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_teams update
   */
  export type user_teamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_teams.
     */
    data: XOR<user_teamsUpdateInput, user_teamsUncheckedUpdateInput>
    /**
     * Choose, which user_teams to update.
     */
    where: user_teamsWhereUniqueInput
  }

  /**
   * user_teams updateMany
   */
  export type user_teamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_teams.
     */
    data: XOR<user_teamsUpdateManyMutationInput, user_teamsUncheckedUpdateManyInput>
    /**
     * Filter which user_teams to update
     */
    where?: user_teamsWhereInput
    /**
     * Limit how many user_teams to update.
     */
    limit?: number
  }

  /**
   * user_teams updateManyAndReturn
   */
  export type user_teamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * The data used to update user_teams.
     */
    data: XOR<user_teamsUpdateManyMutationInput, user_teamsUncheckedUpdateManyInput>
    /**
     * Filter which user_teams to update
     */
    where?: user_teamsWhereInput
    /**
     * Limit how many user_teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_teams upsert
   */
  export type user_teamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_teams to update in case it exists.
     */
    where: user_teamsWhereUniqueInput
    /**
     * In case the user_teams found by the `where` argument doesn't exist, create a new user_teams with this data.
     */
    create: XOR<user_teamsCreateInput, user_teamsUncheckedCreateInput>
    /**
     * In case the user_teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_teamsUpdateInput, user_teamsUncheckedUpdateInput>
  }

  /**
   * user_teams delete
   */
  export type user_teamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    /**
     * Filter which user_teams to delete.
     */
    where: user_teamsWhereUniqueInput
  }

  /**
   * user_teams deleteMany
   */
  export type user_teamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_teams to delete
     */
    where?: user_teamsWhereInput
    /**
     * Limit how many user_teams to delete.
     */
    limit?: number
  }

  /**
   * user_teams without action
   */
  export type user_teamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    is_admin: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    is_admin: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    is_admin: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    is_admin: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_primary_contacts?: boolean | users$team_primary_contactsArgs<ExtArgs>
    user_teams?: boolean | users$user_teamsArgs<ExtArgs>
    workouts?: boolean | users$workoutsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "is_admin" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_primary_contacts?: boolean | users$team_primary_contactsArgs<ExtArgs>
    user_teams?: boolean | users$user_teamsArgs<ExtArgs>
    workouts?: boolean | users$workoutsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      team_primary_contacts: Prisma.$team_primary_contactsPayload<ExtArgs>[]
      user_teams: Prisma.$user_teamsPayload<ExtArgs>[]
      workouts: Prisma.$workoutsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      is_admin: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team_primary_contacts<T extends users$team_primary_contactsArgs<ExtArgs> = {}>(args?: Subset<T, users$team_primary_contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_primary_contactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_teams<T extends users$user_teamsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workouts<T extends users$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, users$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly is_admin: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.team_primary_contacts
   */
  export type users$team_primary_contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_primary_contacts
     */
    select?: team_primary_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_primary_contacts
     */
    omit?: team_primary_contactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_primary_contactsInclude<ExtArgs> | null
    where?: team_primary_contactsWhereInput
    orderBy?: team_primary_contactsOrderByWithRelationInput | team_primary_contactsOrderByWithRelationInput[]
    cursor?: team_primary_contactsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_primary_contactsScalarFieldEnum | Team_primary_contactsScalarFieldEnum[]
  }

  /**
   * users.user_teams
   */
  export type users$user_teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_teams
     */
    select?: user_teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_teams
     */
    omit?: user_teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_teamsInclude<ExtArgs> | null
    where?: user_teamsWhereInput
    orderBy?: user_teamsOrderByWithRelationInput | user_teamsOrderByWithRelationInput[]
    cursor?: user_teamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_teamsScalarFieldEnum | User_teamsScalarFieldEnum[]
  }

  /**
   * users.workouts
   */
  export type users$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    where?: workoutsWhereInput
    orderBy?: workoutsOrderByWithRelationInput | workoutsOrderByWithRelationInput[]
    cursor?: workoutsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model workout_assignments
   */

  export type AggregateWorkout_assignments = {
    _count: Workout_assignmentsCountAggregateOutputType | null
    _avg: Workout_assignmentsAvgAggregateOutputType | null
    _sum: Workout_assignmentsSumAggregateOutputType | null
    _min: Workout_assignmentsMinAggregateOutputType | null
    _max: Workout_assignmentsMaxAggregateOutputType | null
  }

  export type Workout_assignmentsAvgAggregateOutputType = {
    id: number | null
    workout_id: number | null
    assignee_id: number | null
  }

  export type Workout_assignmentsSumAggregateOutputType = {
    id: number | null
    workout_id: number | null
    assignee_id: number | null
  }

  export type Workout_assignmentsMinAggregateOutputType = {
    id: number | null
    workout_id: number | null
    assignee_type: $Enums.assignee_type_enum | null
    assignee_id: number | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Workout_assignmentsMaxAggregateOutputType = {
    id: number | null
    workout_id: number | null
    assignee_type: $Enums.assignee_type_enum | null
    assignee_id: number | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Workout_assignmentsCountAggregateOutputType = {
    id: number
    workout_id: number
    assignee_type: number
    assignee_id: number
    start_date: number
    end_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Workout_assignmentsAvgAggregateInputType = {
    id?: true
    workout_id?: true
    assignee_id?: true
  }

  export type Workout_assignmentsSumAggregateInputType = {
    id?: true
    workout_id?: true
    assignee_id?: true
  }

  export type Workout_assignmentsMinAggregateInputType = {
    id?: true
    workout_id?: true
    assignee_type?: true
    assignee_id?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type Workout_assignmentsMaxAggregateInputType = {
    id?: true
    workout_id?: true
    assignee_type?: true
    assignee_id?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type Workout_assignmentsCountAggregateInputType = {
    id?: true
    workout_id?: true
    assignee_type?: true
    assignee_id?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Workout_assignmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_assignments to aggregate.
     */
    where?: workout_assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_assignments to fetch.
     */
    orderBy?: workout_assignmentsOrderByWithRelationInput | workout_assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workout_assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workout_assignments
    **/
    _count?: true | Workout_assignmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Workout_assignmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Workout_assignmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Workout_assignmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Workout_assignmentsMaxAggregateInputType
  }

  export type GetWorkout_assignmentsAggregateType<T extends Workout_assignmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout_assignments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout_assignments[P]>
      : GetScalarType<T[P], AggregateWorkout_assignments[P]>
  }




  export type workout_assignmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_assignmentsWhereInput
    orderBy?: workout_assignmentsOrderByWithAggregationInput | workout_assignmentsOrderByWithAggregationInput[]
    by: Workout_assignmentsScalarFieldEnum[] | Workout_assignmentsScalarFieldEnum
    having?: workout_assignmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Workout_assignmentsCountAggregateInputType | true
    _avg?: Workout_assignmentsAvgAggregateInputType
    _sum?: Workout_assignmentsSumAggregateInputType
    _min?: Workout_assignmentsMinAggregateInputType
    _max?: Workout_assignmentsMaxAggregateInputType
  }

  export type Workout_assignmentsGroupByOutputType = {
    id: number
    workout_id: number
    assignee_type: $Enums.assignee_type_enum
    assignee_id: number
    start_date: Date
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: Workout_assignmentsCountAggregateOutputType | null
    _avg: Workout_assignmentsAvgAggregateOutputType | null
    _sum: Workout_assignmentsSumAggregateOutputType | null
    _min: Workout_assignmentsMinAggregateOutputType | null
    _max: Workout_assignmentsMaxAggregateOutputType | null
  }

  type GetWorkout_assignmentsGroupByPayload<T extends workout_assignmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Workout_assignmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Workout_assignmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Workout_assignmentsGroupByOutputType[P]>
            : GetScalarType<T[P], Workout_assignmentsGroupByOutputType[P]>
        }
      >
    >


  export type workout_assignmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_id?: boolean
    assignee_type?: boolean
    assignee_id?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    player_exercise_progress?: boolean | workout_assignments$player_exercise_progressArgs<ExtArgs>
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
    _count?: boolean | Workout_assignmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_assignments"]>

  export type workout_assignmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_id?: boolean
    assignee_type?: boolean
    assignee_id?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_assignments"]>

  export type workout_assignmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_id?: boolean
    assignee_type?: boolean
    assignee_id?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_assignments"]>

  export type workout_assignmentsSelectScalar = {
    id?: boolean
    workout_id?: boolean
    assignee_type?: boolean
    assignee_id?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type workout_assignmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workout_id" | "assignee_type" | "assignee_id" | "start_date" | "end_date" | "created_at" | "updated_at", ExtArgs["result"]["workout_assignments"]>
  export type workout_assignmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_exercise_progress?: boolean | workout_assignments$player_exercise_progressArgs<ExtArgs>
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
    _count?: boolean | Workout_assignmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workout_assignmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
  }
  export type workout_assignmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
  }

  export type $workout_assignmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workout_assignments"
    objects: {
      player_exercise_progress: Prisma.$player_exercise_progressPayload<ExtArgs>[]
      workouts: Prisma.$workoutsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workout_id: number
      assignee_type: $Enums.assignee_type_enum
      assignee_id: number
      start_date: Date
      end_date: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["workout_assignments"]>
    composites: {}
  }

  type workout_assignmentsGetPayload<S extends boolean | null | undefined | workout_assignmentsDefaultArgs> = $Result.GetResult<Prisma.$workout_assignmentsPayload, S>

  type workout_assignmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workout_assignmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Workout_assignmentsCountAggregateInputType | true
    }

  export interface workout_assignmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workout_assignments'], meta: { name: 'workout_assignments' } }
    /**
     * Find zero or one Workout_assignments that matches the filter.
     * @param {workout_assignmentsFindUniqueArgs} args - Arguments to find a Workout_assignments
     * @example
     * // Get one Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workout_assignmentsFindUniqueArgs>(args: SelectSubset<T, workout_assignmentsFindUniqueArgs<ExtArgs>>): Prisma__workout_assignmentsClient<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout_assignments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workout_assignmentsFindUniqueOrThrowArgs} args - Arguments to find a Workout_assignments
     * @example
     * // Get one Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workout_assignmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, workout_assignmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workout_assignmentsClient<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout_assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_assignmentsFindFirstArgs} args - Arguments to find a Workout_assignments
     * @example
     * // Get one Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workout_assignmentsFindFirstArgs>(args?: SelectSubset<T, workout_assignmentsFindFirstArgs<ExtArgs>>): Prisma__workout_assignmentsClient<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout_assignments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_assignmentsFindFirstOrThrowArgs} args - Arguments to find a Workout_assignments
     * @example
     * // Get one Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workout_assignmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, workout_assignmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__workout_assignmentsClient<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workout_assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_assignmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.findMany()
     * 
     * // Get first 10 Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workout_assignmentsWithIdOnly = await prisma.workout_assignments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workout_assignmentsFindManyArgs>(args?: SelectSubset<T, workout_assignmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout_assignments.
     * @param {workout_assignmentsCreateArgs} args - Arguments to create a Workout_assignments.
     * @example
     * // Create one Workout_assignments
     * const Workout_assignments = await prisma.workout_assignments.create({
     *   data: {
     *     // ... data to create a Workout_assignments
     *   }
     * })
     * 
     */
    create<T extends workout_assignmentsCreateArgs>(args: SelectSubset<T, workout_assignmentsCreateArgs<ExtArgs>>): Prisma__workout_assignmentsClient<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workout_assignments.
     * @param {workout_assignmentsCreateManyArgs} args - Arguments to create many Workout_assignments.
     * @example
     * // Create many Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workout_assignmentsCreateManyArgs>(args?: SelectSubset<T, workout_assignmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workout_assignments and returns the data saved in the database.
     * @param {workout_assignmentsCreateManyAndReturnArgs} args - Arguments to create many Workout_assignments.
     * @example
     * // Create many Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workout_assignments and only return the `id`
     * const workout_assignmentsWithIdOnly = await prisma.workout_assignments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workout_assignmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, workout_assignmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout_assignments.
     * @param {workout_assignmentsDeleteArgs} args - Arguments to delete one Workout_assignments.
     * @example
     * // Delete one Workout_assignments
     * const Workout_assignments = await prisma.workout_assignments.delete({
     *   where: {
     *     // ... filter to delete one Workout_assignments
     *   }
     * })
     * 
     */
    delete<T extends workout_assignmentsDeleteArgs>(args: SelectSubset<T, workout_assignmentsDeleteArgs<ExtArgs>>): Prisma__workout_assignmentsClient<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout_assignments.
     * @param {workout_assignmentsUpdateArgs} args - Arguments to update one Workout_assignments.
     * @example
     * // Update one Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workout_assignmentsUpdateArgs>(args: SelectSubset<T, workout_assignmentsUpdateArgs<ExtArgs>>): Prisma__workout_assignmentsClient<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workout_assignments.
     * @param {workout_assignmentsDeleteManyArgs} args - Arguments to filter Workout_assignments to delete.
     * @example
     * // Delete a few Workout_assignments
     * const { count } = await prisma.workout_assignments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workout_assignmentsDeleteManyArgs>(args?: SelectSubset<T, workout_assignmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_assignmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workout_assignmentsUpdateManyArgs>(args: SelectSubset<T, workout_assignmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_assignments and returns the data updated in the database.
     * @param {workout_assignmentsUpdateManyAndReturnArgs} args - Arguments to update many Workout_assignments.
     * @example
     * // Update many Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workout_assignments and only return the `id`
     * const workout_assignmentsWithIdOnly = await prisma.workout_assignments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workout_assignmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, workout_assignmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout_assignments.
     * @param {workout_assignmentsUpsertArgs} args - Arguments to update or create a Workout_assignments.
     * @example
     * // Update or create a Workout_assignments
     * const workout_assignments = await prisma.workout_assignments.upsert({
     *   create: {
     *     // ... data to create a Workout_assignments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout_assignments we want to update
     *   }
     * })
     */
    upsert<T extends workout_assignmentsUpsertArgs>(args: SelectSubset<T, workout_assignmentsUpsertArgs<ExtArgs>>): Prisma__workout_assignmentsClient<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workout_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_assignmentsCountArgs} args - Arguments to filter Workout_assignments to count.
     * @example
     * // Count the number of Workout_assignments
     * const count = await prisma.workout_assignments.count({
     *   where: {
     *     // ... the filter for the Workout_assignments we want to count
     *   }
     * })
    **/
    count<T extends workout_assignmentsCountArgs>(
      args?: Subset<T, workout_assignmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Workout_assignmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workout_assignmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Workout_assignmentsAggregateArgs>(args: Subset<T, Workout_assignmentsAggregateArgs>): Prisma.PrismaPromise<GetWorkout_assignmentsAggregateType<T>>

    /**
     * Group by Workout_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_assignmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workout_assignmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workout_assignmentsGroupByArgs['orderBy'] }
        : { orderBy?: workout_assignmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workout_assignmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkout_assignmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workout_assignments model
   */
  readonly fields: workout_assignmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workout_assignments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workout_assignmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player_exercise_progress<T extends workout_assignments$player_exercise_progressArgs<ExtArgs> = {}>(args?: Subset<T, workout_assignments$player_exercise_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$player_exercise_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workouts<T extends workoutsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workoutsDefaultArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workout_assignments model
   */
  interface workout_assignmentsFieldRefs {
    readonly id: FieldRef<"workout_assignments", 'Int'>
    readonly workout_id: FieldRef<"workout_assignments", 'Int'>
    readonly assignee_type: FieldRef<"workout_assignments", 'assignee_type_enum'>
    readonly assignee_id: FieldRef<"workout_assignments", 'Int'>
    readonly start_date: FieldRef<"workout_assignments", 'DateTime'>
    readonly end_date: FieldRef<"workout_assignments", 'DateTime'>
    readonly created_at: FieldRef<"workout_assignments", 'DateTime'>
    readonly updated_at: FieldRef<"workout_assignments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workout_assignments findUnique
   */
  export type workout_assignmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which workout_assignments to fetch.
     */
    where: workout_assignmentsWhereUniqueInput
  }

  /**
   * workout_assignments findUniqueOrThrow
   */
  export type workout_assignmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which workout_assignments to fetch.
     */
    where: workout_assignmentsWhereUniqueInput
  }

  /**
   * workout_assignments findFirst
   */
  export type workout_assignmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which workout_assignments to fetch.
     */
    where?: workout_assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_assignments to fetch.
     */
    orderBy?: workout_assignmentsOrderByWithRelationInput | workout_assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_assignments.
     */
    cursor?: workout_assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_assignments.
     */
    distinct?: Workout_assignmentsScalarFieldEnum | Workout_assignmentsScalarFieldEnum[]
  }

  /**
   * workout_assignments findFirstOrThrow
   */
  export type workout_assignmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which workout_assignments to fetch.
     */
    where?: workout_assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_assignments to fetch.
     */
    orderBy?: workout_assignmentsOrderByWithRelationInput | workout_assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_assignments.
     */
    cursor?: workout_assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_assignments.
     */
    distinct?: Workout_assignmentsScalarFieldEnum | Workout_assignmentsScalarFieldEnum[]
  }

  /**
   * workout_assignments findMany
   */
  export type workout_assignmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
    /**
     * Filter, which workout_assignments to fetch.
     */
    where?: workout_assignmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_assignments to fetch.
     */
    orderBy?: workout_assignmentsOrderByWithRelationInput | workout_assignmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workout_assignments.
     */
    cursor?: workout_assignmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_assignments.
     */
    skip?: number
    distinct?: Workout_assignmentsScalarFieldEnum | Workout_assignmentsScalarFieldEnum[]
  }

  /**
   * workout_assignments create
   */
  export type workout_assignmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a workout_assignments.
     */
    data: XOR<workout_assignmentsCreateInput, workout_assignmentsUncheckedCreateInput>
  }

  /**
   * workout_assignments createMany
   */
  export type workout_assignmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workout_assignments.
     */
    data: workout_assignmentsCreateManyInput | workout_assignmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workout_assignments createManyAndReturn
   */
  export type workout_assignmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * The data used to create many workout_assignments.
     */
    data: workout_assignmentsCreateManyInput | workout_assignmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workout_assignments update
   */
  export type workout_assignmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a workout_assignments.
     */
    data: XOR<workout_assignmentsUpdateInput, workout_assignmentsUncheckedUpdateInput>
    /**
     * Choose, which workout_assignments to update.
     */
    where: workout_assignmentsWhereUniqueInput
  }

  /**
   * workout_assignments updateMany
   */
  export type workout_assignmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workout_assignments.
     */
    data: XOR<workout_assignmentsUpdateManyMutationInput, workout_assignmentsUncheckedUpdateManyInput>
    /**
     * Filter which workout_assignments to update
     */
    where?: workout_assignmentsWhereInput
    /**
     * Limit how many workout_assignments to update.
     */
    limit?: number
  }

  /**
   * workout_assignments updateManyAndReturn
   */
  export type workout_assignmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * The data used to update workout_assignments.
     */
    data: XOR<workout_assignmentsUpdateManyMutationInput, workout_assignmentsUncheckedUpdateManyInput>
    /**
     * Filter which workout_assignments to update
     */
    where?: workout_assignmentsWhereInput
    /**
     * Limit how many workout_assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workout_assignments upsert
   */
  export type workout_assignmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the workout_assignments to update in case it exists.
     */
    where: workout_assignmentsWhereUniqueInput
    /**
     * In case the workout_assignments found by the `where` argument doesn't exist, create a new workout_assignments with this data.
     */
    create: XOR<workout_assignmentsCreateInput, workout_assignmentsUncheckedCreateInput>
    /**
     * In case the workout_assignments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workout_assignmentsUpdateInput, workout_assignmentsUncheckedUpdateInput>
  }

  /**
   * workout_assignments delete
   */
  export type workout_assignmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
    /**
     * Filter which workout_assignments to delete.
     */
    where: workout_assignmentsWhereUniqueInput
  }

  /**
   * workout_assignments deleteMany
   */
  export type workout_assignmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_assignments to delete
     */
    where?: workout_assignmentsWhereInput
    /**
     * Limit how many workout_assignments to delete.
     */
    limit?: number
  }

  /**
   * workout_assignments.player_exercise_progress
   */
  export type workout_assignments$player_exercise_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player_exercise_progress
     */
    select?: player_exercise_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the player_exercise_progress
     */
    omit?: player_exercise_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: player_exercise_progressInclude<ExtArgs> | null
    where?: player_exercise_progressWhereInput
    orderBy?: player_exercise_progressOrderByWithRelationInput | player_exercise_progressOrderByWithRelationInput[]
    cursor?: player_exercise_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Player_exercise_progressScalarFieldEnum | Player_exercise_progressScalarFieldEnum[]
  }

  /**
   * workout_assignments without action
   */
  export type workout_assignmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
  }


  /**
   * Model workout_exercises
   */

  export type AggregateWorkout_exercises = {
    _count: Workout_exercisesCountAggregateOutputType | null
    _avg: Workout_exercisesAvgAggregateOutputType | null
    _sum: Workout_exercisesSumAggregateOutputType | null
    _min: Workout_exercisesMinAggregateOutputType | null
    _max: Workout_exercisesMaxAggregateOutputType | null
  }

  export type Workout_exercisesAvgAggregateOutputType = {
    id: number | null
    workout_id: number | null
    exercise_id: number | null
    sets: number | null
    reps: number | null
    rest_interval: number | null
    rpe: number | null
  }

  export type Workout_exercisesSumAggregateOutputType = {
    id: number | null
    workout_id: number | null
    exercise_id: number | null
    sets: number | null
    reps: number | null
    rest_interval: number | null
    rpe: number | null
  }

  export type Workout_exercisesMinAggregateOutputType = {
    id: number | null
    workout_id: number | null
    exercise_id: number | null
    sets: number | null
    reps: number | null
    rest_interval: number | null
    rpe: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Workout_exercisesMaxAggregateOutputType = {
    id: number | null
    workout_id: number | null
    exercise_id: number | null
    sets: number | null
    reps: number | null
    rest_interval: number | null
    rpe: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Workout_exercisesCountAggregateOutputType = {
    id: number
    workout_id: number
    exercise_id: number
    sets: number
    reps: number
    rest_interval: number
    rpe: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Workout_exercisesAvgAggregateInputType = {
    id?: true
    workout_id?: true
    exercise_id?: true
    sets?: true
    reps?: true
    rest_interval?: true
    rpe?: true
  }

  export type Workout_exercisesSumAggregateInputType = {
    id?: true
    workout_id?: true
    exercise_id?: true
    sets?: true
    reps?: true
    rest_interval?: true
    rpe?: true
  }

  export type Workout_exercisesMinAggregateInputType = {
    id?: true
    workout_id?: true
    exercise_id?: true
    sets?: true
    reps?: true
    rest_interval?: true
    rpe?: true
    created_at?: true
    updated_at?: true
  }

  export type Workout_exercisesMaxAggregateInputType = {
    id?: true
    workout_id?: true
    exercise_id?: true
    sets?: true
    reps?: true
    rest_interval?: true
    rpe?: true
    created_at?: true
    updated_at?: true
  }

  export type Workout_exercisesCountAggregateInputType = {
    id?: true
    workout_id?: true
    exercise_id?: true
    sets?: true
    reps?: true
    rest_interval?: true
    rpe?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Workout_exercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_exercises to aggregate.
     */
    where?: workout_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_exercises to fetch.
     */
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workout_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workout_exercises
    **/
    _count?: true | Workout_exercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Workout_exercisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Workout_exercisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Workout_exercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Workout_exercisesMaxAggregateInputType
  }

  export type GetWorkout_exercisesAggregateType<T extends Workout_exercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout_exercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout_exercises[P]>
      : GetScalarType<T[P], AggregateWorkout_exercises[P]>
  }




  export type workout_exercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_exercisesWhereInput
    orderBy?: workout_exercisesOrderByWithAggregationInput | workout_exercisesOrderByWithAggregationInput[]
    by: Workout_exercisesScalarFieldEnum[] | Workout_exercisesScalarFieldEnum
    having?: workout_exercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Workout_exercisesCountAggregateInputType | true
    _avg?: Workout_exercisesAvgAggregateInputType
    _sum?: Workout_exercisesSumAggregateInputType
    _min?: Workout_exercisesMinAggregateInputType
    _max?: Workout_exercisesMaxAggregateInputType
  }

  export type Workout_exercisesGroupByOutputType = {
    id: number
    workout_id: number
    exercise_id: number
    sets: number
    reps: number
    rest_interval: number
    rpe: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: Workout_exercisesCountAggregateOutputType | null
    _avg: Workout_exercisesAvgAggregateOutputType | null
    _sum: Workout_exercisesSumAggregateOutputType | null
    _min: Workout_exercisesMinAggregateOutputType | null
    _max: Workout_exercisesMaxAggregateOutputType | null
  }

  type GetWorkout_exercisesGroupByPayload<T extends workout_exercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Workout_exercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Workout_exercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Workout_exercisesGroupByOutputType[P]>
            : GetScalarType<T[P], Workout_exercisesGroupByOutputType[P]>
        }
      >
    >


  export type workout_exercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_id?: boolean
    exercise_id?: boolean
    sets?: boolean
    reps?: boolean
    rest_interval?: boolean
    rpe?: boolean
    created_at?: boolean
    updated_at?: boolean
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_exercises"]>

  export type workout_exercisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_id?: boolean
    exercise_id?: boolean
    sets?: boolean
    reps?: boolean
    rest_interval?: boolean
    rpe?: boolean
    created_at?: boolean
    updated_at?: boolean
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_exercises"]>

  export type workout_exercisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_id?: boolean
    exercise_id?: boolean
    sets?: boolean
    reps?: boolean
    rest_interval?: boolean
    rpe?: boolean
    created_at?: boolean
    updated_at?: boolean
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_exercises"]>

  export type workout_exercisesSelectScalar = {
    id?: boolean
    workout_id?: boolean
    exercise_id?: boolean
    sets?: boolean
    reps?: boolean
    rest_interval?: boolean
    rpe?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type workout_exercisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workout_id" | "exercise_id" | "sets" | "reps" | "rest_interval" | "rpe" | "created_at" | "updated_at", ExtArgs["result"]["workout_exercises"]>
  export type workout_exercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
  }
  export type workout_exercisesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
  }
  export type workout_exercisesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | exercisesDefaultArgs<ExtArgs>
    workouts?: boolean | workoutsDefaultArgs<ExtArgs>
  }

  export type $workout_exercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workout_exercises"
    objects: {
      exercises: Prisma.$exercisesPayload<ExtArgs>
      workouts: Prisma.$workoutsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workout_id: number
      exercise_id: number
      sets: number
      reps: number
      rest_interval: number
      rpe: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["workout_exercises"]>
    composites: {}
  }

  type workout_exercisesGetPayload<S extends boolean | null | undefined | workout_exercisesDefaultArgs> = $Result.GetResult<Prisma.$workout_exercisesPayload, S>

  type workout_exercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workout_exercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Workout_exercisesCountAggregateInputType | true
    }

  export interface workout_exercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workout_exercises'], meta: { name: 'workout_exercises' } }
    /**
     * Find zero or one Workout_exercises that matches the filter.
     * @param {workout_exercisesFindUniqueArgs} args - Arguments to find a Workout_exercises
     * @example
     * // Get one Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workout_exercisesFindUniqueArgs>(args: SelectSubset<T, workout_exercisesFindUniqueArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout_exercises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workout_exercisesFindUniqueOrThrowArgs} args - Arguments to find a Workout_exercises
     * @example
     * // Get one Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workout_exercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, workout_exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout_exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesFindFirstArgs} args - Arguments to find a Workout_exercises
     * @example
     * // Get one Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workout_exercisesFindFirstArgs>(args?: SelectSubset<T, workout_exercisesFindFirstArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout_exercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesFindFirstOrThrowArgs} args - Arguments to find a Workout_exercises
     * @example
     * // Get one Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workout_exercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, workout_exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workout_exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findMany()
     * 
     * // Get first 10 Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workout_exercisesWithIdOnly = await prisma.workout_exercises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workout_exercisesFindManyArgs>(args?: SelectSubset<T, workout_exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout_exercises.
     * @param {workout_exercisesCreateArgs} args - Arguments to create a Workout_exercises.
     * @example
     * // Create one Workout_exercises
     * const Workout_exercises = await prisma.workout_exercises.create({
     *   data: {
     *     // ... data to create a Workout_exercises
     *   }
     * })
     * 
     */
    create<T extends workout_exercisesCreateArgs>(args: SelectSubset<T, workout_exercisesCreateArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workout_exercises.
     * @param {workout_exercisesCreateManyArgs} args - Arguments to create many Workout_exercises.
     * @example
     * // Create many Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workout_exercisesCreateManyArgs>(args?: SelectSubset<T, workout_exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workout_exercises and returns the data saved in the database.
     * @param {workout_exercisesCreateManyAndReturnArgs} args - Arguments to create many Workout_exercises.
     * @example
     * // Create many Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workout_exercises and only return the `id`
     * const workout_exercisesWithIdOnly = await prisma.workout_exercises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workout_exercisesCreateManyAndReturnArgs>(args?: SelectSubset<T, workout_exercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout_exercises.
     * @param {workout_exercisesDeleteArgs} args - Arguments to delete one Workout_exercises.
     * @example
     * // Delete one Workout_exercises
     * const Workout_exercises = await prisma.workout_exercises.delete({
     *   where: {
     *     // ... filter to delete one Workout_exercises
     *   }
     * })
     * 
     */
    delete<T extends workout_exercisesDeleteArgs>(args: SelectSubset<T, workout_exercisesDeleteArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout_exercises.
     * @param {workout_exercisesUpdateArgs} args - Arguments to update one Workout_exercises.
     * @example
     * // Update one Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workout_exercisesUpdateArgs>(args: SelectSubset<T, workout_exercisesUpdateArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workout_exercises.
     * @param {workout_exercisesDeleteManyArgs} args - Arguments to filter Workout_exercises to delete.
     * @example
     * // Delete a few Workout_exercises
     * const { count } = await prisma.workout_exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workout_exercisesDeleteManyArgs>(args?: SelectSubset<T, workout_exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workout_exercisesUpdateManyArgs>(args: SelectSubset<T, workout_exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_exercises and returns the data updated in the database.
     * @param {workout_exercisesUpdateManyAndReturnArgs} args - Arguments to update many Workout_exercises.
     * @example
     * // Update many Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workout_exercises and only return the `id`
     * const workout_exercisesWithIdOnly = await prisma.workout_exercises.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workout_exercisesUpdateManyAndReturnArgs>(args: SelectSubset<T, workout_exercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout_exercises.
     * @param {workout_exercisesUpsertArgs} args - Arguments to update or create a Workout_exercises.
     * @example
     * // Update or create a Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.upsert({
     *   create: {
     *     // ... data to create a Workout_exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout_exercises we want to update
     *   }
     * })
     */
    upsert<T extends workout_exercisesUpsertArgs>(args: SelectSubset<T, workout_exercisesUpsertArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workout_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesCountArgs} args - Arguments to filter Workout_exercises to count.
     * @example
     * // Count the number of Workout_exercises
     * const count = await prisma.workout_exercises.count({
     *   where: {
     *     // ... the filter for the Workout_exercises we want to count
     *   }
     * })
    **/
    count<T extends workout_exercisesCountArgs>(
      args?: Subset<T, workout_exercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Workout_exercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workout_exercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Workout_exercisesAggregateArgs>(args: Subset<T, Workout_exercisesAggregateArgs>): Prisma.PrismaPromise<GetWorkout_exercisesAggregateType<T>>

    /**
     * Group by Workout_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workout_exercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workout_exercisesGroupByArgs['orderBy'] }
        : { orderBy?: workout_exercisesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workout_exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkout_exercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workout_exercises model
   */
  readonly fields: workout_exercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workout_exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workout_exercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends exercisesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exercisesDefaultArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workouts<T extends workoutsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workoutsDefaultArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workout_exercises model
   */
  interface workout_exercisesFieldRefs {
    readonly id: FieldRef<"workout_exercises", 'Int'>
    readonly workout_id: FieldRef<"workout_exercises", 'Int'>
    readonly exercise_id: FieldRef<"workout_exercises", 'Int'>
    readonly sets: FieldRef<"workout_exercises", 'Int'>
    readonly reps: FieldRef<"workout_exercises", 'Int'>
    readonly rest_interval: FieldRef<"workout_exercises", 'Int'>
    readonly rpe: FieldRef<"workout_exercises", 'Int'>
    readonly created_at: FieldRef<"workout_exercises", 'DateTime'>
    readonly updated_at: FieldRef<"workout_exercises", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workout_exercises findUnique
   */
  export type workout_exercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_exercises to fetch.
     */
    where: workout_exercisesWhereUniqueInput
  }

  /**
   * workout_exercises findUniqueOrThrow
   */
  export type workout_exercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_exercises to fetch.
     */
    where: workout_exercisesWhereUniqueInput
  }

  /**
   * workout_exercises findFirst
   */
  export type workout_exercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_exercises to fetch.
     */
    where?: workout_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_exercises to fetch.
     */
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_exercises.
     */
    cursor?: workout_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_exercises.
     */
    distinct?: Workout_exercisesScalarFieldEnum | Workout_exercisesScalarFieldEnum[]
  }

  /**
   * workout_exercises findFirstOrThrow
   */
  export type workout_exercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_exercises to fetch.
     */
    where?: workout_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_exercises to fetch.
     */
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_exercises.
     */
    cursor?: workout_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_exercises.
     */
    distinct?: Workout_exercisesScalarFieldEnum | Workout_exercisesScalarFieldEnum[]
  }

  /**
   * workout_exercises findMany
   */
  export type workout_exercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_exercises to fetch.
     */
    where?: workout_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_exercises to fetch.
     */
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workout_exercises.
     */
    cursor?: workout_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_exercises.
     */
    skip?: number
    distinct?: Workout_exercisesScalarFieldEnum | Workout_exercisesScalarFieldEnum[]
  }

  /**
   * workout_exercises create
   */
  export type workout_exercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a workout_exercises.
     */
    data: XOR<workout_exercisesCreateInput, workout_exercisesUncheckedCreateInput>
  }

  /**
   * workout_exercises createMany
   */
  export type workout_exercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workout_exercises.
     */
    data: workout_exercisesCreateManyInput | workout_exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workout_exercises createManyAndReturn
   */
  export type workout_exercisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * The data used to create many workout_exercises.
     */
    data: workout_exercisesCreateManyInput | workout_exercisesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workout_exercises update
   */
  export type workout_exercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a workout_exercises.
     */
    data: XOR<workout_exercisesUpdateInput, workout_exercisesUncheckedUpdateInput>
    /**
     * Choose, which workout_exercises to update.
     */
    where: workout_exercisesWhereUniqueInput
  }

  /**
   * workout_exercises updateMany
   */
  export type workout_exercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workout_exercises.
     */
    data: XOR<workout_exercisesUpdateManyMutationInput, workout_exercisesUncheckedUpdateManyInput>
    /**
     * Filter which workout_exercises to update
     */
    where?: workout_exercisesWhereInput
    /**
     * Limit how many workout_exercises to update.
     */
    limit?: number
  }

  /**
   * workout_exercises updateManyAndReturn
   */
  export type workout_exercisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * The data used to update workout_exercises.
     */
    data: XOR<workout_exercisesUpdateManyMutationInput, workout_exercisesUncheckedUpdateManyInput>
    /**
     * Filter which workout_exercises to update
     */
    where?: workout_exercisesWhereInput
    /**
     * Limit how many workout_exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workout_exercises upsert
   */
  export type workout_exercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the workout_exercises to update in case it exists.
     */
    where: workout_exercisesWhereUniqueInput
    /**
     * In case the workout_exercises found by the `where` argument doesn't exist, create a new workout_exercises with this data.
     */
    create: XOR<workout_exercisesCreateInput, workout_exercisesUncheckedCreateInput>
    /**
     * In case the workout_exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workout_exercisesUpdateInput, workout_exercisesUncheckedUpdateInput>
  }

  /**
   * workout_exercises delete
   */
  export type workout_exercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter which workout_exercises to delete.
     */
    where: workout_exercisesWhereUniqueInput
  }

  /**
   * workout_exercises deleteMany
   */
  export type workout_exercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_exercises to delete
     */
    where?: workout_exercisesWhereInput
    /**
     * Limit how many workout_exercises to delete.
     */
    limit?: number
  }

  /**
   * workout_exercises without action
   */
  export type workout_exercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
  }


  /**
   * Model workouts
   */

  export type AggregateWorkouts = {
    _count: WorkoutsCountAggregateOutputType | null
    _avg: WorkoutsAvgAggregateOutputType | null
    _sum: WorkoutsSumAggregateOutputType | null
    _min: WorkoutsMinAggregateOutputType | null
    _max: WorkoutsMaxAggregateOutputType | null
  }

  export type WorkoutsAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
  }

  export type WorkoutsSumAggregateOutputType = {
    id: number | null
    created_by: number | null
  }

  export type WorkoutsMinAggregateOutputType = {
    id: number | null
    created_by: number | null
    workout_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorkoutsMaxAggregateOutputType = {
    id: number | null
    created_by: number | null
    workout_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorkoutsCountAggregateOutputType = {
    id: number
    created_by: number
    workout_name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WorkoutsAvgAggregateInputType = {
    id?: true
    created_by?: true
  }

  export type WorkoutsSumAggregateInputType = {
    id?: true
    created_by?: true
  }

  export type WorkoutsMinAggregateInputType = {
    id?: true
    created_by?: true
    workout_name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type WorkoutsMaxAggregateInputType = {
    id?: true
    created_by?: true
    workout_name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type WorkoutsCountAggregateInputType = {
    id?: true
    created_by?: true
    workout_name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WorkoutsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workouts to aggregate.
     */
    where?: workoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workouts to fetch.
     */
    orderBy?: workoutsOrderByWithRelationInput | workoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workouts
    **/
    _count?: true | WorkoutsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutsMaxAggregateInputType
  }

  export type GetWorkoutsAggregateType<T extends WorkoutsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkouts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkouts[P]>
      : GetScalarType<T[P], AggregateWorkouts[P]>
  }




  export type workoutsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workoutsWhereInput
    orderBy?: workoutsOrderByWithAggregationInput | workoutsOrderByWithAggregationInput[]
    by: WorkoutsScalarFieldEnum[] | WorkoutsScalarFieldEnum
    having?: workoutsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutsCountAggregateInputType | true
    _avg?: WorkoutsAvgAggregateInputType
    _sum?: WorkoutsSumAggregateInputType
    _min?: WorkoutsMinAggregateInputType
    _max?: WorkoutsMaxAggregateInputType
  }

  export type WorkoutsGroupByOutputType = {
    id: number
    created_by: number
    workout_name: string
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: WorkoutsCountAggregateOutputType | null
    _avg: WorkoutsAvgAggregateOutputType | null
    _sum: WorkoutsSumAggregateOutputType | null
    _min: WorkoutsMinAggregateOutputType | null
    _max: WorkoutsMaxAggregateOutputType | null
  }

  type GetWorkoutsGroupByPayload<T extends workoutsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutsGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutsGroupByOutputType[P]>
        }
      >
    >


  export type workoutsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_by?: boolean
    workout_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    workout_assignments?: boolean | workouts$workout_assignmentsArgs<ExtArgs>
    workout_exercises?: boolean | workouts$workout_exercisesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | WorkoutsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workouts"]>

  export type workoutsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_by?: boolean
    workout_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workouts"]>

  export type workoutsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_by?: boolean
    workout_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workouts"]>

  export type workoutsSelectScalar = {
    id?: boolean
    created_by?: boolean
    workout_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type workoutsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_by" | "workout_name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["workouts"]>
  export type workoutsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_assignments?: boolean | workouts$workout_assignmentsArgs<ExtArgs>
    workout_exercises?: boolean | workouts$workout_exercisesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | WorkoutsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workoutsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type workoutsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $workoutsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workouts"
    objects: {
      workout_assignments: Prisma.$workout_assignmentsPayload<ExtArgs>[]
      workout_exercises: Prisma.$workout_exercisesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_by: number
      workout_name: string
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["workouts"]>
    composites: {}
  }

  type workoutsGetPayload<S extends boolean | null | undefined | workoutsDefaultArgs> = $Result.GetResult<Prisma.$workoutsPayload, S>

  type workoutsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workoutsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutsCountAggregateInputType | true
    }

  export interface workoutsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workouts'], meta: { name: 'workouts' } }
    /**
     * Find zero or one Workouts that matches the filter.
     * @param {workoutsFindUniqueArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workoutsFindUniqueArgs>(args: SelectSubset<T, workoutsFindUniqueArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workouts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workoutsFindUniqueOrThrowArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workoutsFindUniqueOrThrowArgs>(args: SelectSubset<T, workoutsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsFindFirstArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workoutsFindFirstArgs>(args?: SelectSubset<T, workoutsFindFirstArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workouts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsFindFirstOrThrowArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workoutsFindFirstOrThrowArgs>(args?: SelectSubset<T, workoutsFindFirstOrThrowArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workouts.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workouts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutsWithIdOnly = await prisma.workouts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workoutsFindManyArgs>(args?: SelectSubset<T, workoutsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workouts.
     * @param {workoutsCreateArgs} args - Arguments to create a Workouts.
     * @example
     * // Create one Workouts
     * const Workouts = await prisma.workouts.create({
     *   data: {
     *     // ... data to create a Workouts
     *   }
     * })
     * 
     */
    create<T extends workoutsCreateArgs>(args: SelectSubset<T, workoutsCreateArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {workoutsCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workouts = await prisma.workouts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workoutsCreateManyArgs>(args?: SelectSubset<T, workoutsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {workoutsCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workouts = await prisma.workouts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutsWithIdOnly = await prisma.workouts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workoutsCreateManyAndReturnArgs>(args?: SelectSubset<T, workoutsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workouts.
     * @param {workoutsDeleteArgs} args - Arguments to delete one Workouts.
     * @example
     * // Delete one Workouts
     * const Workouts = await prisma.workouts.delete({
     *   where: {
     *     // ... filter to delete one Workouts
     *   }
     * })
     * 
     */
    delete<T extends workoutsDeleteArgs>(args: SelectSubset<T, workoutsDeleteArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workouts.
     * @param {workoutsUpdateArgs} args - Arguments to update one Workouts.
     * @example
     * // Update one Workouts
     * const workouts = await prisma.workouts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workoutsUpdateArgs>(args: SelectSubset<T, workoutsUpdateArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {workoutsDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workouts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workoutsDeleteManyArgs>(args?: SelectSubset<T, workoutsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workouts = await prisma.workouts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workoutsUpdateManyArgs>(args: SelectSubset<T, workoutsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {workoutsUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workouts = await prisma.workouts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutsWithIdOnly = await prisma.workouts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workoutsUpdateManyAndReturnArgs>(args: SelectSubset<T, workoutsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workouts.
     * @param {workoutsUpsertArgs} args - Arguments to update or create a Workouts.
     * @example
     * // Update or create a Workouts
     * const workouts = await prisma.workouts.upsert({
     *   create: {
     *     // ... data to create a Workouts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workouts we want to update
     *   }
     * })
     */
    upsert<T extends workoutsUpsertArgs>(args: SelectSubset<T, workoutsUpsertArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workouts.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends workoutsCountArgs>(
      args?: Subset<T, workoutsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutsAggregateArgs>(args: Subset<T, WorkoutsAggregateArgs>): Prisma.PrismaPromise<GetWorkoutsAggregateType<T>>

    /**
     * Group by Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workoutsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workoutsGroupByArgs['orderBy'] }
        : { orderBy?: workoutsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workoutsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workouts model
   */
  readonly fields: workoutsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workouts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workoutsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout_assignments<T extends workouts$workout_assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, workouts$workout_assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_assignmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workout_exercises<T extends workouts$workout_exercisesArgs<ExtArgs> = {}>(args?: Subset<T, workouts$workout_exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workouts model
   */
  interface workoutsFieldRefs {
    readonly id: FieldRef<"workouts", 'Int'>
    readonly created_by: FieldRef<"workouts", 'Int'>
    readonly workout_name: FieldRef<"workouts", 'String'>
    readonly description: FieldRef<"workouts", 'String'>
    readonly created_at: FieldRef<"workouts", 'DateTime'>
    readonly updated_at: FieldRef<"workouts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workouts findUnique
   */
  export type workoutsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter, which workouts to fetch.
     */
    where: workoutsWhereUniqueInput
  }

  /**
   * workouts findUniqueOrThrow
   */
  export type workoutsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter, which workouts to fetch.
     */
    where: workoutsWhereUniqueInput
  }

  /**
   * workouts findFirst
   */
  export type workoutsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter, which workouts to fetch.
     */
    where?: workoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workouts to fetch.
     */
    orderBy?: workoutsOrderByWithRelationInput | workoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workouts.
     */
    cursor?: workoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workouts.
     */
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * workouts findFirstOrThrow
   */
  export type workoutsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter, which workouts to fetch.
     */
    where?: workoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workouts to fetch.
     */
    orderBy?: workoutsOrderByWithRelationInput | workoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workouts.
     */
    cursor?: workoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workouts.
     */
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * workouts findMany
   */
  export type workoutsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter, which workouts to fetch.
     */
    where?: workoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workouts to fetch.
     */
    orderBy?: workoutsOrderByWithRelationInput | workoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workouts.
     */
    cursor?: workoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workouts.
     */
    skip?: number
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * workouts create
   */
  export type workoutsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * The data needed to create a workouts.
     */
    data: XOR<workoutsCreateInput, workoutsUncheckedCreateInput>
  }

  /**
   * workouts createMany
   */
  export type workoutsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workouts.
     */
    data: workoutsCreateManyInput | workoutsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workouts createManyAndReturn
   */
  export type workoutsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * The data used to create many workouts.
     */
    data: workoutsCreateManyInput | workoutsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workouts update
   */
  export type workoutsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * The data needed to update a workouts.
     */
    data: XOR<workoutsUpdateInput, workoutsUncheckedUpdateInput>
    /**
     * Choose, which workouts to update.
     */
    where: workoutsWhereUniqueInput
  }

  /**
   * workouts updateMany
   */
  export type workoutsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workouts.
     */
    data: XOR<workoutsUpdateManyMutationInput, workoutsUncheckedUpdateManyInput>
    /**
     * Filter which workouts to update
     */
    where?: workoutsWhereInput
    /**
     * Limit how many workouts to update.
     */
    limit?: number
  }

  /**
   * workouts updateManyAndReturn
   */
  export type workoutsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * The data used to update workouts.
     */
    data: XOR<workoutsUpdateManyMutationInput, workoutsUncheckedUpdateManyInput>
    /**
     * Filter which workouts to update
     */
    where?: workoutsWhereInput
    /**
     * Limit how many workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workouts upsert
   */
  export type workoutsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * The filter to search for the workouts to update in case it exists.
     */
    where: workoutsWhereUniqueInput
    /**
     * In case the workouts found by the `where` argument doesn't exist, create a new workouts with this data.
     */
    create: XOR<workoutsCreateInput, workoutsUncheckedCreateInput>
    /**
     * In case the workouts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workoutsUpdateInput, workoutsUncheckedUpdateInput>
  }

  /**
   * workouts delete
   */
  export type workoutsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter which workouts to delete.
     */
    where: workoutsWhereUniqueInput
  }

  /**
   * workouts deleteMany
   */
  export type workoutsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workouts to delete
     */
    where?: workoutsWhereInput
    /**
     * Limit how many workouts to delete.
     */
    limit?: number
  }

  /**
   * workouts.workout_assignments
   */
  export type workouts$workout_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_assignments
     */
    select?: workout_assignmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_assignments
     */
    omit?: workout_assignmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_assignmentsInclude<ExtArgs> | null
    where?: workout_assignmentsWhereInput
    orderBy?: workout_assignmentsOrderByWithRelationInput | workout_assignmentsOrderByWithRelationInput[]
    cursor?: workout_assignmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workout_assignmentsScalarFieldEnum | Workout_assignmentsScalarFieldEnum[]
  }

  /**
   * workouts.workout_exercises
   */
  export type workouts$workout_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workout_exercises
     */
    omit?: workout_exercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    where?: workout_exercisesWhereInput
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    cursor?: workout_exercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workout_exercisesScalarFieldEnum | Workout_exercisesScalarFieldEnum[]
  }

  /**
   * workouts without action
   */
  export type workoutsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workouts
     */
    omit?: workoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressesScalarFieldEnum: {
    id: 'id',
    country: 'country',
    administrative_area: 'administrative_area',
    sub_administrative_area: 'sub_administrative_area',
    locality: 'locality',
    dependent_locality: 'dependent_locality',
    postal_code: 'postal_code',
    thoroughfare: 'thoroughfare',
    premise: 'premise',
    sub_premise: 'sub_premise',
    organisation_name: 'organisation_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum]


  export const ExercisesScalarFieldEnum: {
    id: 'id',
    exercise_name: 'exercise_name',
    description: 'description',
    muscle_group: 'muscle_group',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExercisesScalarFieldEnum = (typeof ExercisesScalarFieldEnum)[keyof typeof ExercisesScalarFieldEnum]


  export const Player_exercise_progressScalarFieldEnum: {
    id: 'id',
    workout_assignment_id: 'workout_assignment_id',
    exercise_id: 'exercise_id',
    completed_sets: 'completed_sets',
    completed_reps: 'completed_reps',
    weight_used: 'weight_used',
    notes: 'notes',
    recorded_at: 'recorded_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Player_exercise_progressScalarFieldEnum = (typeof Player_exercise_progressScalarFieldEnum)[keyof typeof Player_exercise_progressScalarFieldEnum]


  export const SchoolsScalarFieldEnum: {
    id: 'id',
    school_name: 'school_name',
    address_id: 'address_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SchoolsScalarFieldEnum = (typeof SchoolsScalarFieldEnum)[keyof typeof SchoolsScalarFieldEnum]


  export const SportsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SportsScalarFieldEnum = (typeof SportsScalarFieldEnum)[keyof typeof SportsScalarFieldEnum]


  export const Team_primary_contactsScalarFieldEnum: {
    team_id: 'team_id',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Team_primary_contactsScalarFieldEnum = (typeof Team_primary_contactsScalarFieldEnum)[keyof typeof Team_primary_contactsScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_school_team: 'is_school_team',
    school_id: 'school_id',
    sport_id: 'sport_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const User_teamsScalarFieldEnum: {
    team_id: 'team_id',
    user_id: 'user_id',
    role: 'role',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_teamsScalarFieldEnum = (typeof User_teamsScalarFieldEnum)[keyof typeof User_teamsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    is_admin: 'is_admin',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Workout_assignmentsScalarFieldEnum: {
    id: 'id',
    workout_id: 'workout_id',
    assignee_type: 'assignee_type',
    assignee_id: 'assignee_id',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Workout_assignmentsScalarFieldEnum = (typeof Workout_assignmentsScalarFieldEnum)[keyof typeof Workout_assignmentsScalarFieldEnum]


  export const Workout_exercisesScalarFieldEnum: {
    id: 'id',
    workout_id: 'workout_id',
    exercise_id: 'exercise_id',
    sets: 'sets',
    reps: 'reps',
    rest_interval: 'rest_interval',
    rpe: 'rpe',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Workout_exercisesScalarFieldEnum = (typeof Workout_exercisesScalarFieldEnum)[keyof typeof Workout_exercisesScalarFieldEnum]


  export const WorkoutsScalarFieldEnum: {
    id: 'id',
    created_by: 'created_by',
    workout_name: 'workout_name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WorkoutsScalarFieldEnum = (typeof WorkoutsScalarFieldEnum)[keyof typeof WorkoutsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'user_team_role'
   */
  export type Enumuser_team_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_team_role'>
    


  /**
   * Reference to a field of type 'user_team_role[]'
   */
  export type ListEnumuser_team_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_team_role[]'>
    


  /**
   * Reference to a field of type 'assignee_type_enum'
   */
  export type Enumassignee_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'assignee_type_enum'>
    


  /**
   * Reference to a field of type 'assignee_type_enum[]'
   */
  export type ListEnumassignee_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'assignee_type_enum[]'>
    
  /**
   * Deep Input Types
   */


  export type addressesWhereInput = {
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    id?: IntFilter<"addresses"> | number
    country?: StringFilter<"addresses"> | string
    administrative_area?: StringFilter<"addresses"> | string
    sub_administrative_area?: StringNullableFilter<"addresses"> | string | null
    locality?: StringFilter<"addresses"> | string
    dependent_locality?: StringNullableFilter<"addresses"> | string | null
    postal_code?: StringFilter<"addresses"> | string
    thoroughfare?: StringFilter<"addresses"> | string
    premise?: StringNullableFilter<"addresses"> | string | null
    sub_premise?: StringNullableFilter<"addresses"> | string | null
    organisation_name?: StringNullableFilter<"addresses"> | string | null
    created_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    schools?: XOR<SchoolsNullableScalarRelationFilter, schoolsWhereInput> | null
  }

  export type addressesOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    administrative_area?: SortOrder
    sub_administrative_area?: SortOrderInput | SortOrder
    locality?: SortOrder
    dependent_locality?: SortOrderInput | SortOrder
    postal_code?: SortOrder
    thoroughfare?: SortOrder
    premise?: SortOrderInput | SortOrder
    sub_premise?: SortOrderInput | SortOrder
    organisation_name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    schools?: schoolsOrderByWithRelationInput
  }

  export type addressesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    country?: StringFilter<"addresses"> | string
    administrative_area?: StringFilter<"addresses"> | string
    sub_administrative_area?: StringNullableFilter<"addresses"> | string | null
    locality?: StringFilter<"addresses"> | string
    dependent_locality?: StringNullableFilter<"addresses"> | string | null
    postal_code?: StringFilter<"addresses"> | string
    thoroughfare?: StringFilter<"addresses"> | string
    premise?: StringNullableFilter<"addresses"> | string | null
    sub_premise?: StringNullableFilter<"addresses"> | string | null
    organisation_name?: StringNullableFilter<"addresses"> | string | null
    created_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    schools?: XOR<SchoolsNullableScalarRelationFilter, schoolsWhereInput> | null
  }, "id">

  export type addressesOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    administrative_area?: SortOrder
    sub_administrative_area?: SortOrderInput | SortOrder
    locality?: SortOrder
    dependent_locality?: SortOrderInput | SortOrder
    postal_code?: SortOrder
    thoroughfare?: SortOrder
    premise?: SortOrderInput | SortOrder
    sub_premise?: SortOrderInput | SortOrder
    organisation_name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: addressesCountOrderByAggregateInput
    _avg?: addressesAvgOrderByAggregateInput
    _max?: addressesMaxOrderByAggregateInput
    _min?: addressesMinOrderByAggregateInput
    _sum?: addressesSumOrderByAggregateInput
  }

  export type addressesScalarWhereWithAggregatesInput = {
    AND?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    OR?: addressesScalarWhereWithAggregatesInput[]
    NOT?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"addresses"> | number
    country?: StringWithAggregatesFilter<"addresses"> | string
    administrative_area?: StringWithAggregatesFilter<"addresses"> | string
    sub_administrative_area?: StringNullableWithAggregatesFilter<"addresses"> | string | null
    locality?: StringWithAggregatesFilter<"addresses"> | string
    dependent_locality?: StringNullableWithAggregatesFilter<"addresses"> | string | null
    postal_code?: StringWithAggregatesFilter<"addresses"> | string
    thoroughfare?: StringWithAggregatesFilter<"addresses"> | string
    premise?: StringNullableWithAggregatesFilter<"addresses"> | string | null
    sub_premise?: StringNullableWithAggregatesFilter<"addresses"> | string | null
    organisation_name?: StringNullableWithAggregatesFilter<"addresses"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"addresses"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"addresses"> | Date | string | null
  }

  export type exercisesWhereInput = {
    AND?: exercisesWhereInput | exercisesWhereInput[]
    OR?: exercisesWhereInput[]
    NOT?: exercisesWhereInput | exercisesWhereInput[]
    id?: IntFilter<"exercises"> | number
    exercise_name?: StringFilter<"exercises"> | string
    description?: StringNullableFilter<"exercises"> | string | null
    muscle_group?: StringNullableFilter<"exercises"> | string | null
    created_at?: DateTimeNullableFilter<"exercises"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"exercises"> | Date | string | null
    player_exercise_progress?: Player_exercise_progressListRelationFilter
    workout_exercises?: Workout_exercisesListRelationFilter
  }

  export type exercisesOrderByWithRelationInput = {
    id?: SortOrder
    exercise_name?: SortOrder
    description?: SortOrderInput | SortOrder
    muscle_group?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    player_exercise_progress?: player_exercise_progressOrderByRelationAggregateInput
    workout_exercises?: workout_exercisesOrderByRelationAggregateInput
  }

  export type exercisesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    exercise_name?: string
    AND?: exercisesWhereInput | exercisesWhereInput[]
    OR?: exercisesWhereInput[]
    NOT?: exercisesWhereInput | exercisesWhereInput[]
    description?: StringNullableFilter<"exercises"> | string | null
    muscle_group?: StringNullableFilter<"exercises"> | string | null
    created_at?: DateTimeNullableFilter<"exercises"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"exercises"> | Date | string | null
    player_exercise_progress?: Player_exercise_progressListRelationFilter
    workout_exercises?: Workout_exercisesListRelationFilter
  }, "id" | "exercise_name">

  export type exercisesOrderByWithAggregationInput = {
    id?: SortOrder
    exercise_name?: SortOrder
    description?: SortOrderInput | SortOrder
    muscle_group?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: exercisesCountOrderByAggregateInput
    _avg?: exercisesAvgOrderByAggregateInput
    _max?: exercisesMaxOrderByAggregateInput
    _min?: exercisesMinOrderByAggregateInput
    _sum?: exercisesSumOrderByAggregateInput
  }

  export type exercisesScalarWhereWithAggregatesInput = {
    AND?: exercisesScalarWhereWithAggregatesInput | exercisesScalarWhereWithAggregatesInput[]
    OR?: exercisesScalarWhereWithAggregatesInput[]
    NOT?: exercisesScalarWhereWithAggregatesInput | exercisesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"exercises"> | number
    exercise_name?: StringWithAggregatesFilter<"exercises"> | string
    description?: StringNullableWithAggregatesFilter<"exercises"> | string | null
    muscle_group?: StringNullableWithAggregatesFilter<"exercises"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"exercises"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"exercises"> | Date | string | null
  }

  export type player_exercise_progressWhereInput = {
    AND?: player_exercise_progressWhereInput | player_exercise_progressWhereInput[]
    OR?: player_exercise_progressWhereInput[]
    NOT?: player_exercise_progressWhereInput | player_exercise_progressWhereInput[]
    id?: IntFilter<"player_exercise_progress"> | number
    workout_assignment_id?: IntFilter<"player_exercise_progress"> | number
    exercise_id?: IntFilter<"player_exercise_progress"> | number
    completed_sets?: IntFilter<"player_exercise_progress"> | number
    completed_reps?: IntFilter<"player_exercise_progress"> | number
    weight_used?: FloatNullableFilter<"player_exercise_progress"> | number | null
    notes?: StringNullableFilter<"player_exercise_progress"> | string | null
    recorded_at?: DateTimeFilter<"player_exercise_progress"> | Date | string
    created_at?: DateTimeNullableFilter<"player_exercise_progress"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"player_exercise_progress"> | Date | string | null
    exercises?: XOR<ExercisesScalarRelationFilter, exercisesWhereInput>
    workout_assignments?: XOR<Workout_assignmentsScalarRelationFilter, workout_assignmentsWhereInput>
  }

  export type player_exercise_progressOrderByWithRelationInput = {
    id?: SortOrder
    workout_assignment_id?: SortOrder
    exercise_id?: SortOrder
    completed_sets?: SortOrder
    completed_reps?: SortOrder
    weight_used?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    recorded_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    exercises?: exercisesOrderByWithRelationInput
    workout_assignments?: workout_assignmentsOrderByWithRelationInput
  }

  export type player_exercise_progressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: player_exercise_progressWhereInput | player_exercise_progressWhereInput[]
    OR?: player_exercise_progressWhereInput[]
    NOT?: player_exercise_progressWhereInput | player_exercise_progressWhereInput[]
    workout_assignment_id?: IntFilter<"player_exercise_progress"> | number
    exercise_id?: IntFilter<"player_exercise_progress"> | number
    completed_sets?: IntFilter<"player_exercise_progress"> | number
    completed_reps?: IntFilter<"player_exercise_progress"> | number
    weight_used?: FloatNullableFilter<"player_exercise_progress"> | number | null
    notes?: StringNullableFilter<"player_exercise_progress"> | string | null
    recorded_at?: DateTimeFilter<"player_exercise_progress"> | Date | string
    created_at?: DateTimeNullableFilter<"player_exercise_progress"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"player_exercise_progress"> | Date | string | null
    exercises?: XOR<ExercisesScalarRelationFilter, exercisesWhereInput>
    workout_assignments?: XOR<Workout_assignmentsScalarRelationFilter, workout_assignmentsWhereInput>
  }, "id">

  export type player_exercise_progressOrderByWithAggregationInput = {
    id?: SortOrder
    workout_assignment_id?: SortOrder
    exercise_id?: SortOrder
    completed_sets?: SortOrder
    completed_reps?: SortOrder
    weight_used?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    recorded_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: player_exercise_progressCountOrderByAggregateInput
    _avg?: player_exercise_progressAvgOrderByAggregateInput
    _max?: player_exercise_progressMaxOrderByAggregateInput
    _min?: player_exercise_progressMinOrderByAggregateInput
    _sum?: player_exercise_progressSumOrderByAggregateInput
  }

  export type player_exercise_progressScalarWhereWithAggregatesInput = {
    AND?: player_exercise_progressScalarWhereWithAggregatesInput | player_exercise_progressScalarWhereWithAggregatesInput[]
    OR?: player_exercise_progressScalarWhereWithAggregatesInput[]
    NOT?: player_exercise_progressScalarWhereWithAggregatesInput | player_exercise_progressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"player_exercise_progress"> | number
    workout_assignment_id?: IntWithAggregatesFilter<"player_exercise_progress"> | number
    exercise_id?: IntWithAggregatesFilter<"player_exercise_progress"> | number
    completed_sets?: IntWithAggregatesFilter<"player_exercise_progress"> | number
    completed_reps?: IntWithAggregatesFilter<"player_exercise_progress"> | number
    weight_used?: FloatNullableWithAggregatesFilter<"player_exercise_progress"> | number | null
    notes?: StringNullableWithAggregatesFilter<"player_exercise_progress"> | string | null
    recorded_at?: DateTimeWithAggregatesFilter<"player_exercise_progress"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"player_exercise_progress"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"player_exercise_progress"> | Date | string | null
  }

  export type schoolsWhereInput = {
    AND?: schoolsWhereInput | schoolsWhereInput[]
    OR?: schoolsWhereInput[]
    NOT?: schoolsWhereInput | schoolsWhereInput[]
    id?: IntFilter<"schools"> | number
    school_name?: StringFilter<"schools"> | string
    address_id?: IntNullableFilter<"schools"> | number | null
    created_at?: DateTimeNullableFilter<"schools"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"schools"> | Date | string | null
    addresses?: XOR<AddressesNullableScalarRelationFilter, addressesWhereInput> | null
    teams?: TeamsListRelationFilter
  }

  export type schoolsOrderByWithRelationInput = {
    id?: SortOrder
    school_name?: SortOrder
    address_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    addresses?: addressesOrderByWithRelationInput
    teams?: teamsOrderByRelationAggregateInput
  }

  export type schoolsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    school_name?: string
    address_id?: number
    AND?: schoolsWhereInput | schoolsWhereInput[]
    OR?: schoolsWhereInput[]
    NOT?: schoolsWhereInput | schoolsWhereInput[]
    created_at?: DateTimeNullableFilter<"schools"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"schools"> | Date | string | null
    addresses?: XOR<AddressesNullableScalarRelationFilter, addressesWhereInput> | null
    teams?: TeamsListRelationFilter
  }, "id" | "school_name" | "address_id">

  export type schoolsOrderByWithAggregationInput = {
    id?: SortOrder
    school_name?: SortOrder
    address_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: schoolsCountOrderByAggregateInput
    _avg?: schoolsAvgOrderByAggregateInput
    _max?: schoolsMaxOrderByAggregateInput
    _min?: schoolsMinOrderByAggregateInput
    _sum?: schoolsSumOrderByAggregateInput
  }

  export type schoolsScalarWhereWithAggregatesInput = {
    AND?: schoolsScalarWhereWithAggregatesInput | schoolsScalarWhereWithAggregatesInput[]
    OR?: schoolsScalarWhereWithAggregatesInput[]
    NOT?: schoolsScalarWhereWithAggregatesInput | schoolsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"schools"> | number
    school_name?: StringWithAggregatesFilter<"schools"> | string
    address_id?: IntNullableWithAggregatesFilter<"schools"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"schools"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"schools"> | Date | string | null
  }

  export type sportsWhereInput = {
    AND?: sportsWhereInput | sportsWhereInput[]
    OR?: sportsWhereInput[]
    NOT?: sportsWhereInput | sportsWhereInput[]
    id?: IntFilter<"sports"> | number
    name?: StringFilter<"sports"> | string
    created_at?: DateTimeNullableFilter<"sports"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"sports"> | Date | string | null
    teams?: TeamsListRelationFilter
  }

  export type sportsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    teams?: teamsOrderByRelationAggregateInput
  }

  export type sportsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: sportsWhereInput | sportsWhereInput[]
    OR?: sportsWhereInput[]
    NOT?: sportsWhereInput | sportsWhereInput[]
    created_at?: DateTimeNullableFilter<"sports"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"sports"> | Date | string | null
    teams?: TeamsListRelationFilter
  }, "id" | "name">

  export type sportsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: sportsCountOrderByAggregateInput
    _avg?: sportsAvgOrderByAggregateInput
    _max?: sportsMaxOrderByAggregateInput
    _min?: sportsMinOrderByAggregateInput
    _sum?: sportsSumOrderByAggregateInput
  }

  export type sportsScalarWhereWithAggregatesInput = {
    AND?: sportsScalarWhereWithAggregatesInput | sportsScalarWhereWithAggregatesInput[]
    OR?: sportsScalarWhereWithAggregatesInput[]
    NOT?: sportsScalarWhereWithAggregatesInput | sportsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sports"> | number
    name?: StringWithAggregatesFilter<"sports"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"sports"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"sports"> | Date | string | null
  }

  export type team_primary_contactsWhereInput = {
    AND?: team_primary_contactsWhereInput | team_primary_contactsWhereInput[]
    OR?: team_primary_contactsWhereInput[]
    NOT?: team_primary_contactsWhereInput | team_primary_contactsWhereInput[]
    team_id?: IntFilter<"team_primary_contacts"> | number
    user_id?: IntFilter<"team_primary_contacts"> | number
    created_at?: DateTimeNullableFilter<"team_primary_contacts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"team_primary_contacts"> | Date | string | null
    teams?: XOR<TeamsScalarRelationFilter, teamsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type team_primary_contactsOrderByWithRelationInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    teams?: teamsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type team_primary_contactsWhereUniqueInput = Prisma.AtLeast<{
    team_id_user_id?: team_primary_contactsTeam_idUser_idCompoundUniqueInput
    AND?: team_primary_contactsWhereInput | team_primary_contactsWhereInput[]
    OR?: team_primary_contactsWhereInput[]
    NOT?: team_primary_contactsWhereInput | team_primary_contactsWhereInput[]
    team_id?: IntFilter<"team_primary_contacts"> | number
    user_id?: IntFilter<"team_primary_contacts"> | number
    created_at?: DateTimeNullableFilter<"team_primary_contacts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"team_primary_contacts"> | Date | string | null
    teams?: XOR<TeamsScalarRelationFilter, teamsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "team_id_user_id">

  export type team_primary_contactsOrderByWithAggregationInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: team_primary_contactsCountOrderByAggregateInput
    _avg?: team_primary_contactsAvgOrderByAggregateInput
    _max?: team_primary_contactsMaxOrderByAggregateInput
    _min?: team_primary_contactsMinOrderByAggregateInput
    _sum?: team_primary_contactsSumOrderByAggregateInput
  }

  export type team_primary_contactsScalarWhereWithAggregatesInput = {
    AND?: team_primary_contactsScalarWhereWithAggregatesInput | team_primary_contactsScalarWhereWithAggregatesInput[]
    OR?: team_primary_contactsScalarWhereWithAggregatesInput[]
    NOT?: team_primary_contactsScalarWhereWithAggregatesInput | team_primary_contactsScalarWhereWithAggregatesInput[]
    team_id?: IntWithAggregatesFilter<"team_primary_contacts"> | number
    user_id?: IntWithAggregatesFilter<"team_primary_contacts"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"team_primary_contacts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"team_primary_contacts"> | Date | string | null
  }

  export type teamsWhereInput = {
    AND?: teamsWhereInput | teamsWhereInput[]
    OR?: teamsWhereInput[]
    NOT?: teamsWhereInput | teamsWhereInput[]
    id?: IntFilter<"teams"> | number
    name?: StringFilter<"teams"> | string
    is_school_team?: BoolFilter<"teams"> | boolean
    school_id?: IntNullableFilter<"teams"> | number | null
    sport_id?: IntFilter<"teams"> | number
    created_at?: DateTimeNullableFilter<"teams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"teams"> | Date | string | null
    team_primary_contacts?: Team_primary_contactsListRelationFilter
    schools?: XOR<SchoolsNullableScalarRelationFilter, schoolsWhereInput> | null
    sports?: XOR<SportsScalarRelationFilter, sportsWhereInput>
    user_teams?: User_teamsListRelationFilter
  }

  export type teamsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_school_team?: SortOrder
    school_id?: SortOrderInput | SortOrder
    sport_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    team_primary_contacts?: team_primary_contactsOrderByRelationAggregateInput
    schools?: schoolsOrderByWithRelationInput
    sports?: sportsOrderByWithRelationInput
    user_teams?: user_teamsOrderByRelationAggregateInput
  }

  export type teamsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: teamsWhereInput | teamsWhereInput[]
    OR?: teamsWhereInput[]
    NOT?: teamsWhereInput | teamsWhereInput[]
    name?: StringFilter<"teams"> | string
    is_school_team?: BoolFilter<"teams"> | boolean
    school_id?: IntNullableFilter<"teams"> | number | null
    sport_id?: IntFilter<"teams"> | number
    created_at?: DateTimeNullableFilter<"teams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"teams"> | Date | string | null
    team_primary_contacts?: Team_primary_contactsListRelationFilter
    schools?: XOR<SchoolsNullableScalarRelationFilter, schoolsWhereInput> | null
    sports?: XOR<SportsScalarRelationFilter, sportsWhereInput>
    user_teams?: User_teamsListRelationFilter
  }, "id">

  export type teamsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_school_team?: SortOrder
    school_id?: SortOrderInput | SortOrder
    sport_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: teamsCountOrderByAggregateInput
    _avg?: teamsAvgOrderByAggregateInput
    _max?: teamsMaxOrderByAggregateInput
    _min?: teamsMinOrderByAggregateInput
    _sum?: teamsSumOrderByAggregateInput
  }

  export type teamsScalarWhereWithAggregatesInput = {
    AND?: teamsScalarWhereWithAggregatesInput | teamsScalarWhereWithAggregatesInput[]
    OR?: teamsScalarWhereWithAggregatesInput[]
    NOT?: teamsScalarWhereWithAggregatesInput | teamsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teams"> | number
    name?: StringWithAggregatesFilter<"teams"> | string
    is_school_team?: BoolWithAggregatesFilter<"teams"> | boolean
    school_id?: IntNullableWithAggregatesFilter<"teams"> | number | null
    sport_id?: IntWithAggregatesFilter<"teams"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"teams"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"teams"> | Date | string | null
  }

  export type user_teamsWhereInput = {
    AND?: user_teamsWhereInput | user_teamsWhereInput[]
    OR?: user_teamsWhereInput[]
    NOT?: user_teamsWhereInput | user_teamsWhereInput[]
    team_id?: IntFilter<"user_teams"> | number
    user_id?: IntFilter<"user_teams"> | number
    role?: Enumuser_team_roleFilter<"user_teams"> | $Enums.user_team_role
    start_date?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    end_date?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    created_at?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    teams?: XOR<TeamsScalarRelationFilter, teamsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_teamsOrderByWithRelationInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    teams?: teamsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_teamsWhereUniqueInput = Prisma.AtLeast<{
    team_id_user_id?: user_teamsTeam_idUser_idCompoundUniqueInput
    AND?: user_teamsWhereInput | user_teamsWhereInput[]
    OR?: user_teamsWhereInput[]
    NOT?: user_teamsWhereInput | user_teamsWhereInput[]
    team_id?: IntFilter<"user_teams"> | number
    user_id?: IntFilter<"user_teams"> | number
    role?: Enumuser_team_roleFilter<"user_teams"> | $Enums.user_team_role
    start_date?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    end_date?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    created_at?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    teams?: XOR<TeamsScalarRelationFilter, teamsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "team_id_user_id">

  export type user_teamsOrderByWithAggregationInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: user_teamsCountOrderByAggregateInput
    _avg?: user_teamsAvgOrderByAggregateInput
    _max?: user_teamsMaxOrderByAggregateInput
    _min?: user_teamsMinOrderByAggregateInput
    _sum?: user_teamsSumOrderByAggregateInput
  }

  export type user_teamsScalarWhereWithAggregatesInput = {
    AND?: user_teamsScalarWhereWithAggregatesInput | user_teamsScalarWhereWithAggregatesInput[]
    OR?: user_teamsScalarWhereWithAggregatesInput[]
    NOT?: user_teamsScalarWhereWithAggregatesInput | user_teamsScalarWhereWithAggregatesInput[]
    team_id?: IntWithAggregatesFilter<"user_teams"> | number
    user_id?: IntWithAggregatesFilter<"user_teams"> | number
    role?: Enumuser_team_roleWithAggregatesFilter<"user_teams"> | $Enums.user_team_role
    start_date?: DateTimeNullableWithAggregatesFilter<"user_teams"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"user_teams"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user_teams"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_teams"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    is_admin?: BoolFilter<"users"> | boolean
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    team_primary_contacts?: Team_primary_contactsListRelationFilter
    user_teams?: User_teamsListRelationFilter
    workouts?: WorkoutsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    team_primary_contacts?: team_primary_contactsOrderByRelationAggregateInput
    user_teams?: user_teamsOrderByRelationAggregateInput
    workouts?: workoutsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    is_admin?: BoolFilter<"users"> | boolean
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    team_primary_contacts?: Team_primary_contactsListRelationFilter
    user_teams?: User_teamsListRelationFilter
    workouts?: WorkoutsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    is_admin?: BoolWithAggregatesFilter<"users"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type workout_assignmentsWhereInput = {
    AND?: workout_assignmentsWhereInput | workout_assignmentsWhereInput[]
    OR?: workout_assignmentsWhereInput[]
    NOT?: workout_assignmentsWhereInput | workout_assignmentsWhereInput[]
    id?: IntFilter<"workout_assignments"> | number
    workout_id?: IntFilter<"workout_assignments"> | number
    assignee_type?: Enumassignee_type_enumFilter<"workout_assignments"> | $Enums.assignee_type_enum
    assignee_id?: IntFilter<"workout_assignments"> | number
    start_date?: DateTimeFilter<"workout_assignments"> | Date | string
    end_date?: DateTimeNullableFilter<"workout_assignments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"workout_assignments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_assignments"> | Date | string | null
    player_exercise_progress?: Player_exercise_progressListRelationFilter
    workouts?: XOR<WorkoutsScalarRelationFilter, workoutsWhereInput>
  }

  export type workout_assignmentsOrderByWithRelationInput = {
    id?: SortOrder
    workout_id?: SortOrder
    assignee_type?: SortOrder
    assignee_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    player_exercise_progress?: player_exercise_progressOrderByRelationAggregateInput
    workouts?: workoutsOrderByWithRelationInput
  }

  export type workout_assignmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: workout_assignmentsWhereInput | workout_assignmentsWhereInput[]
    OR?: workout_assignmentsWhereInput[]
    NOT?: workout_assignmentsWhereInput | workout_assignmentsWhereInput[]
    workout_id?: IntFilter<"workout_assignments"> | number
    assignee_type?: Enumassignee_type_enumFilter<"workout_assignments"> | $Enums.assignee_type_enum
    assignee_id?: IntFilter<"workout_assignments"> | number
    start_date?: DateTimeFilter<"workout_assignments"> | Date | string
    end_date?: DateTimeNullableFilter<"workout_assignments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"workout_assignments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_assignments"> | Date | string | null
    player_exercise_progress?: Player_exercise_progressListRelationFilter
    workouts?: XOR<WorkoutsScalarRelationFilter, workoutsWhereInput>
  }, "id">

  export type workout_assignmentsOrderByWithAggregationInput = {
    id?: SortOrder
    workout_id?: SortOrder
    assignee_type?: SortOrder
    assignee_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: workout_assignmentsCountOrderByAggregateInput
    _avg?: workout_assignmentsAvgOrderByAggregateInput
    _max?: workout_assignmentsMaxOrderByAggregateInput
    _min?: workout_assignmentsMinOrderByAggregateInput
    _sum?: workout_assignmentsSumOrderByAggregateInput
  }

  export type workout_assignmentsScalarWhereWithAggregatesInput = {
    AND?: workout_assignmentsScalarWhereWithAggregatesInput | workout_assignmentsScalarWhereWithAggregatesInput[]
    OR?: workout_assignmentsScalarWhereWithAggregatesInput[]
    NOT?: workout_assignmentsScalarWhereWithAggregatesInput | workout_assignmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"workout_assignments"> | number
    workout_id?: IntWithAggregatesFilter<"workout_assignments"> | number
    assignee_type?: Enumassignee_type_enumWithAggregatesFilter<"workout_assignments"> | $Enums.assignee_type_enum
    assignee_id?: IntWithAggregatesFilter<"workout_assignments"> | number
    start_date?: DateTimeWithAggregatesFilter<"workout_assignments"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"workout_assignments"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"workout_assignments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"workout_assignments"> | Date | string | null
  }

  export type workout_exercisesWhereInput = {
    AND?: workout_exercisesWhereInput | workout_exercisesWhereInput[]
    OR?: workout_exercisesWhereInput[]
    NOT?: workout_exercisesWhereInput | workout_exercisesWhereInput[]
    id?: IntFilter<"workout_exercises"> | number
    workout_id?: IntFilter<"workout_exercises"> | number
    exercise_id?: IntFilter<"workout_exercises"> | number
    sets?: IntFilter<"workout_exercises"> | number
    reps?: IntFilter<"workout_exercises"> | number
    rest_interval?: IntFilter<"workout_exercises"> | number
    rpe?: IntNullableFilter<"workout_exercises"> | number | null
    created_at?: DateTimeNullableFilter<"workout_exercises"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_exercises"> | Date | string | null
    exercises?: XOR<ExercisesScalarRelationFilter, exercisesWhereInput>
    workouts?: XOR<WorkoutsScalarRelationFilter, workoutsWhereInput>
  }

  export type workout_exercisesOrderByWithRelationInput = {
    id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rest_interval?: SortOrder
    rpe?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    exercises?: exercisesOrderByWithRelationInput
    workouts?: workoutsOrderByWithRelationInput
  }

  export type workout_exercisesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: workout_exercisesWhereInput | workout_exercisesWhereInput[]
    OR?: workout_exercisesWhereInput[]
    NOT?: workout_exercisesWhereInput | workout_exercisesWhereInput[]
    workout_id?: IntFilter<"workout_exercises"> | number
    exercise_id?: IntFilter<"workout_exercises"> | number
    sets?: IntFilter<"workout_exercises"> | number
    reps?: IntFilter<"workout_exercises"> | number
    rest_interval?: IntFilter<"workout_exercises"> | number
    rpe?: IntNullableFilter<"workout_exercises"> | number | null
    created_at?: DateTimeNullableFilter<"workout_exercises"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_exercises"> | Date | string | null
    exercises?: XOR<ExercisesScalarRelationFilter, exercisesWhereInput>
    workouts?: XOR<WorkoutsScalarRelationFilter, workoutsWhereInput>
  }, "id">

  export type workout_exercisesOrderByWithAggregationInput = {
    id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rest_interval?: SortOrder
    rpe?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: workout_exercisesCountOrderByAggregateInput
    _avg?: workout_exercisesAvgOrderByAggregateInput
    _max?: workout_exercisesMaxOrderByAggregateInput
    _min?: workout_exercisesMinOrderByAggregateInput
    _sum?: workout_exercisesSumOrderByAggregateInput
  }

  export type workout_exercisesScalarWhereWithAggregatesInput = {
    AND?: workout_exercisesScalarWhereWithAggregatesInput | workout_exercisesScalarWhereWithAggregatesInput[]
    OR?: workout_exercisesScalarWhereWithAggregatesInput[]
    NOT?: workout_exercisesScalarWhereWithAggregatesInput | workout_exercisesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"workout_exercises"> | number
    workout_id?: IntWithAggregatesFilter<"workout_exercises"> | number
    exercise_id?: IntWithAggregatesFilter<"workout_exercises"> | number
    sets?: IntWithAggregatesFilter<"workout_exercises"> | number
    reps?: IntWithAggregatesFilter<"workout_exercises"> | number
    rest_interval?: IntWithAggregatesFilter<"workout_exercises"> | number
    rpe?: IntNullableWithAggregatesFilter<"workout_exercises"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"workout_exercises"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"workout_exercises"> | Date | string | null
  }

  export type workoutsWhereInput = {
    AND?: workoutsWhereInput | workoutsWhereInput[]
    OR?: workoutsWhereInput[]
    NOT?: workoutsWhereInput | workoutsWhereInput[]
    id?: IntFilter<"workouts"> | number
    created_by?: IntFilter<"workouts"> | number
    workout_name?: StringFilter<"workouts"> | string
    description?: StringNullableFilter<"workouts"> | string | null
    created_at?: DateTimeNullableFilter<"workouts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workouts"> | Date | string | null
    workout_assignments?: Workout_assignmentsListRelationFilter
    workout_exercises?: Workout_exercisesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type workoutsOrderByWithRelationInput = {
    id?: SortOrder
    created_by?: SortOrder
    workout_name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    workout_assignments?: workout_assignmentsOrderByRelationAggregateInput
    workout_exercises?: workout_exercisesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type workoutsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: workoutsWhereInput | workoutsWhereInput[]
    OR?: workoutsWhereInput[]
    NOT?: workoutsWhereInput | workoutsWhereInput[]
    created_by?: IntFilter<"workouts"> | number
    workout_name?: StringFilter<"workouts"> | string
    description?: StringNullableFilter<"workouts"> | string | null
    created_at?: DateTimeNullableFilter<"workouts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workouts"> | Date | string | null
    workout_assignments?: Workout_assignmentsListRelationFilter
    workout_exercises?: Workout_exercisesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type workoutsOrderByWithAggregationInput = {
    id?: SortOrder
    created_by?: SortOrder
    workout_name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: workoutsCountOrderByAggregateInput
    _avg?: workoutsAvgOrderByAggregateInput
    _max?: workoutsMaxOrderByAggregateInput
    _min?: workoutsMinOrderByAggregateInput
    _sum?: workoutsSumOrderByAggregateInput
  }

  export type workoutsScalarWhereWithAggregatesInput = {
    AND?: workoutsScalarWhereWithAggregatesInput | workoutsScalarWhereWithAggregatesInput[]
    OR?: workoutsScalarWhereWithAggregatesInput[]
    NOT?: workoutsScalarWhereWithAggregatesInput | workoutsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"workouts"> | number
    created_by?: IntWithAggregatesFilter<"workouts"> | number
    workout_name?: StringWithAggregatesFilter<"workouts"> | string
    description?: StringNullableWithAggregatesFilter<"workouts"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"workouts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"workouts"> | Date | string | null
  }

  export type addressesCreateInput = {
    country: string
    administrative_area: string
    sub_administrative_area?: string | null
    locality: string
    dependent_locality?: string | null
    postal_code: string
    thoroughfare: string
    premise?: string | null
    sub_premise?: string | null
    organisation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    schools?: schoolsCreateNestedOneWithoutAddressesInput
  }

  export type addressesUncheckedCreateInput = {
    id?: number
    country: string
    administrative_area: string
    sub_administrative_area?: string | null
    locality: string
    dependent_locality?: string | null
    postal_code: string
    thoroughfare: string
    premise?: string | null
    sub_premise?: string | null
    organisation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    schools?: schoolsUncheckedCreateNestedOneWithoutAddressesInput
  }

  export type addressesUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    administrative_area?: StringFieldUpdateOperationsInput | string
    sub_administrative_area?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    dependent_locality?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    thoroughfare?: StringFieldUpdateOperationsInput | string
    premise?: NullableStringFieldUpdateOperationsInput | string | null
    sub_premise?: NullableStringFieldUpdateOperationsInput | string | null
    organisation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schools?: schoolsUpdateOneWithoutAddressesNestedInput
  }

  export type addressesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    administrative_area?: StringFieldUpdateOperationsInput | string
    sub_administrative_area?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    dependent_locality?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    thoroughfare?: StringFieldUpdateOperationsInput | string
    premise?: NullableStringFieldUpdateOperationsInput | string | null
    sub_premise?: NullableStringFieldUpdateOperationsInput | string | null
    organisation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schools?: schoolsUncheckedUpdateOneWithoutAddressesNestedInput
  }

  export type addressesCreateManyInput = {
    id?: number
    country: string
    administrative_area: string
    sub_administrative_area?: string | null
    locality: string
    dependent_locality?: string | null
    postal_code: string
    thoroughfare: string
    premise?: string | null
    sub_premise?: string | null
    organisation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type addressesUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    administrative_area?: StringFieldUpdateOperationsInput | string
    sub_administrative_area?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    dependent_locality?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    thoroughfare?: StringFieldUpdateOperationsInput | string
    premise?: NullableStringFieldUpdateOperationsInput | string | null
    sub_premise?: NullableStringFieldUpdateOperationsInput | string | null
    organisation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type addressesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    administrative_area?: StringFieldUpdateOperationsInput | string
    sub_administrative_area?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    dependent_locality?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    thoroughfare?: StringFieldUpdateOperationsInput | string
    premise?: NullableStringFieldUpdateOperationsInput | string | null
    sub_premise?: NullableStringFieldUpdateOperationsInput | string | null
    organisation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exercisesCreateInput = {
    exercise_name: string
    description?: string | null
    muscle_group?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    player_exercise_progress?: player_exercise_progressCreateNestedManyWithoutExercisesInput
    workout_exercises?: workout_exercisesCreateNestedManyWithoutExercisesInput
  }

  export type exercisesUncheckedCreateInput = {
    id?: number
    exercise_name: string
    description?: string | null
    muscle_group?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    player_exercise_progress?: player_exercise_progressUncheckedCreateNestedManyWithoutExercisesInput
    workout_exercises?: workout_exercisesUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type exercisesUpdateInput = {
    exercise_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_exercise_progress?: player_exercise_progressUpdateManyWithoutExercisesNestedInput
    workout_exercises?: workout_exercisesUpdateManyWithoutExercisesNestedInput
  }

  export type exercisesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    exercise_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_exercise_progress?: player_exercise_progressUncheckedUpdateManyWithoutExercisesNestedInput
    workout_exercises?: workout_exercisesUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type exercisesCreateManyInput = {
    id?: number
    exercise_name: string
    description?: string | null
    muscle_group?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type exercisesUpdateManyMutationInput = {
    exercise_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exercisesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    exercise_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type player_exercise_progressCreateInput = {
    completed_sets?: number
    completed_reps?: number
    weight_used?: number | null
    notes?: string | null
    recorded_at: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercises: exercisesCreateNestedOneWithoutPlayer_exercise_progressInput
    workout_assignments: workout_assignmentsCreateNestedOneWithoutPlayer_exercise_progressInput
  }

  export type player_exercise_progressUncheckedCreateInput = {
    id?: number
    workout_assignment_id: number
    exercise_id: number
    completed_sets?: number
    completed_reps?: number
    weight_used?: number | null
    notes?: string | null
    recorded_at: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type player_exercise_progressUpdateInput = {
    completed_sets?: IntFieldUpdateOperationsInput | number
    completed_reps?: IntFieldUpdateOperationsInput | number
    weight_used?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercises?: exercisesUpdateOneRequiredWithoutPlayer_exercise_progressNestedInput
    workout_assignments?: workout_assignmentsUpdateOneRequiredWithoutPlayer_exercise_progressNestedInput
  }

  export type player_exercise_progressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_assignment_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    completed_sets?: IntFieldUpdateOperationsInput | number
    completed_reps?: IntFieldUpdateOperationsInput | number
    weight_used?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type player_exercise_progressCreateManyInput = {
    id?: number
    workout_assignment_id: number
    exercise_id: number
    completed_sets?: number
    completed_reps?: number
    weight_used?: number | null
    notes?: string | null
    recorded_at: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type player_exercise_progressUpdateManyMutationInput = {
    completed_sets?: IntFieldUpdateOperationsInput | number
    completed_reps?: IntFieldUpdateOperationsInput | number
    weight_used?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type player_exercise_progressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_assignment_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    completed_sets?: IntFieldUpdateOperationsInput | number
    completed_reps?: IntFieldUpdateOperationsInput | number
    weight_used?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type schoolsCreateInput = {
    school_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesCreateNestedOneWithoutSchoolsInput
    teams?: teamsCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsUncheckedCreateInput = {
    id?: number
    school_name: string
    address_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams?: teamsUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsUpdateInput = {
    school_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUpdateOneWithoutSchoolsNestedInput
    teams?: teamsUpdateManyWithoutSchoolsNestedInput
  }

  export type schoolsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    school_name?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type schoolsCreateManyInput = {
    id?: number
    school_name: string
    address_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type schoolsUpdateManyMutationInput = {
    school_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type schoolsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    school_name?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sportsCreateInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams?: teamsCreateNestedManyWithoutSportsInput
  }

  export type sportsUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams?: teamsUncheckedCreateNestedManyWithoutSportsInput
  }

  export type sportsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUpdateManyWithoutSportsNestedInput
  }

  export type sportsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUncheckedUpdateManyWithoutSportsNestedInput
  }

  export type sportsCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sportsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sportsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_primary_contactsCreateInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams: teamsCreateNestedOneWithoutTeam_primary_contactsInput
    users: usersCreateNestedOneWithoutTeam_primary_contactsInput
  }

  export type team_primary_contactsUncheckedCreateInput = {
    team_id: number
    user_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_primary_contactsUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUpdateOneRequiredWithoutTeam_primary_contactsNestedInput
    users?: usersUpdateOneRequiredWithoutTeam_primary_contactsNestedInput
  }

  export type team_primary_contactsUncheckedUpdateInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_primary_contactsCreateManyInput = {
    team_id: number
    user_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_primary_contactsUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_primary_contactsUncheckedUpdateManyInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type teamsCreateInput = {
    name: string
    is_school_team: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsCreateNestedManyWithoutTeamsInput
    schools?: schoolsCreateNestedOneWithoutTeamsInput
    sports: sportsCreateNestedOneWithoutTeamsInput
    user_teams?: user_teamsCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateInput = {
    id?: number
    name: string
    is_school_team: boolean
    school_id?: number | null
    sport_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedCreateNestedManyWithoutTeamsInput
    user_teams?: user_teamsUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUpdateManyWithoutTeamsNestedInput
    schools?: schoolsUpdateOneWithoutTeamsNestedInput
    sports?: sportsUpdateOneRequiredWithoutTeamsNestedInput
    user_teams?: user_teamsUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    school_id?: NullableIntFieldUpdateOperationsInput | number | null
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedUpdateManyWithoutTeamsNestedInput
    user_teams?: user_teamsUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type teamsCreateManyInput = {
    id?: number
    name: string
    is_school_team: boolean
    school_id?: number | null
    sport_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type teamsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type teamsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    school_id?: NullableIntFieldUpdateOperationsInput | number | null
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_teamsCreateInput = {
    role: $Enums.user_team_role
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams: teamsCreateNestedOneWithoutUser_teamsInput
    users: usersCreateNestedOneWithoutUser_teamsInput
  }

  export type user_teamsUncheckedCreateInput = {
    team_id: number
    user_id: number
    role: $Enums.user_team_role
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_teamsUpdateInput = {
    role?: Enumuser_team_roleFieldUpdateOperationsInput | $Enums.user_team_role
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUpdateOneRequiredWithoutUser_teamsNestedInput
    users?: usersUpdateOneRequiredWithoutUser_teamsNestedInput
  }

  export type user_teamsUncheckedUpdateInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    role?: Enumuser_team_roleFieldUpdateOperationsInput | $Enums.user_team_role
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_teamsCreateManyInput = {
    team_id: number
    user_id: number
    role: $Enums.user_team_role
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_teamsUpdateManyMutationInput = {
    role?: Enumuser_team_roleFieldUpdateOperationsInput | $Enums.user_team_role
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_teamsUncheckedUpdateManyInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    role?: Enumuser_team_roleFieldUpdateOperationsInput | $Enums.user_team_role
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    first_name: string
    last_name: string
    email: string
    is_admin: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsCreateNestedManyWithoutUsersInput
    user_teams?: user_teamsCreateNestedManyWithoutUsersInput
    workouts?: workoutsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    is_admin: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedCreateNestedManyWithoutUsersInput
    user_teams?: user_teamsUncheckedCreateNestedManyWithoutUsersInput
    workouts?: workoutsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUpdateManyWithoutUsersNestedInput
    user_teams?: user_teamsUpdateManyWithoutUsersNestedInput
    workouts?: workoutsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedUpdateManyWithoutUsersNestedInput
    user_teams?: user_teamsUncheckedUpdateManyWithoutUsersNestedInput
    workouts?: workoutsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    is_admin: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_assignmentsCreateInput = {
    assignee_type: $Enums.assignee_type_enum
    assignee_id: number
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    player_exercise_progress?: player_exercise_progressCreateNestedManyWithoutWorkout_assignmentsInput
    workouts: workoutsCreateNestedOneWithoutWorkout_assignmentsInput
  }

  export type workout_assignmentsUncheckedCreateInput = {
    id?: number
    workout_id: number
    assignee_type: $Enums.assignee_type_enum
    assignee_id: number
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    player_exercise_progress?: player_exercise_progressUncheckedCreateNestedManyWithoutWorkout_assignmentsInput
  }

  export type workout_assignmentsUpdateInput = {
    assignee_type?: Enumassignee_type_enumFieldUpdateOperationsInput | $Enums.assignee_type_enum
    assignee_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_exercise_progress?: player_exercise_progressUpdateManyWithoutWorkout_assignmentsNestedInput
    workouts?: workoutsUpdateOneRequiredWithoutWorkout_assignmentsNestedInput
  }

  export type workout_assignmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    assignee_type?: Enumassignee_type_enumFieldUpdateOperationsInput | $Enums.assignee_type_enum
    assignee_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_exercise_progress?: player_exercise_progressUncheckedUpdateManyWithoutWorkout_assignmentsNestedInput
  }

  export type workout_assignmentsCreateManyInput = {
    id?: number
    workout_id: number
    assignee_type: $Enums.assignee_type_enum
    assignee_id: number
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_assignmentsUpdateManyMutationInput = {
    assignee_type?: Enumassignee_type_enumFieldUpdateOperationsInput | $Enums.assignee_type_enum
    assignee_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_assignmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    assignee_type?: Enumassignee_type_enumFieldUpdateOperationsInput | $Enums.assignee_type_enum
    assignee_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_exercisesCreateInput = {
    sets: number
    reps: number
    rest_interval: number
    rpe?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercises: exercisesCreateNestedOneWithoutWorkout_exercisesInput
    workouts: workoutsCreateNestedOneWithoutWorkout_exercisesInput
  }

  export type workout_exercisesUncheckedCreateInput = {
    id?: number
    workout_id: number
    exercise_id: number
    sets: number
    reps: number
    rest_interval: number
    rpe?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_exercisesUpdateInput = {
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rest_interval?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercises?: exercisesUpdateOneRequiredWithoutWorkout_exercisesNestedInput
    workouts?: workoutsUpdateOneRequiredWithoutWorkout_exercisesNestedInput
  }

  export type workout_exercisesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rest_interval?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_exercisesCreateManyInput = {
    id?: number
    workout_id: number
    exercise_id: number
    sets: number
    reps: number
    rest_interval: number
    rpe?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_exercisesUpdateManyMutationInput = {
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rest_interval?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_exercisesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rest_interval?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workoutsCreateInput = {
    workout_name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_assignments?: workout_assignmentsCreateNestedManyWithoutWorkoutsInput
    workout_exercises?: workout_exercisesCreateNestedManyWithoutWorkoutsInput
    users: usersCreateNestedOneWithoutWorkoutsInput
  }

  export type workoutsUncheckedCreateInput = {
    id?: number
    created_by: number
    workout_name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_assignments?: workout_assignmentsUncheckedCreateNestedManyWithoutWorkoutsInput
    workout_exercises?: workout_exercisesUncheckedCreateNestedManyWithoutWorkoutsInput
  }

  export type workoutsUpdateInput = {
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_assignments?: workout_assignmentsUpdateManyWithoutWorkoutsNestedInput
    workout_exercises?: workout_exercisesUpdateManyWithoutWorkoutsNestedInput
    users?: usersUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type workoutsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_assignments?: workout_assignmentsUncheckedUpdateManyWithoutWorkoutsNestedInput
    workout_exercises?: workout_exercisesUncheckedUpdateManyWithoutWorkoutsNestedInput
  }

  export type workoutsCreateManyInput = {
    id?: number
    created_by: number
    workout_name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workoutsUpdateManyMutationInput = {
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workoutsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SchoolsNullableScalarRelationFilter = {
    is?: schoolsWhereInput | null
    isNot?: schoolsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type addressesCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    administrative_area?: SortOrder
    sub_administrative_area?: SortOrder
    locality?: SortOrder
    dependent_locality?: SortOrder
    postal_code?: SortOrder
    thoroughfare?: SortOrder
    premise?: SortOrder
    sub_premise?: SortOrder
    organisation_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type addressesMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    administrative_area?: SortOrder
    sub_administrative_area?: SortOrder
    locality?: SortOrder
    dependent_locality?: SortOrder
    postal_code?: SortOrder
    thoroughfare?: SortOrder
    premise?: SortOrder
    sub_premise?: SortOrder
    organisation_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    administrative_area?: SortOrder
    sub_administrative_area?: SortOrder
    locality?: SortOrder
    dependent_locality?: SortOrder
    postal_code?: SortOrder
    thoroughfare?: SortOrder
    premise?: SortOrder
    sub_premise?: SortOrder
    organisation_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Player_exercise_progressListRelationFilter = {
    every?: player_exercise_progressWhereInput
    some?: player_exercise_progressWhereInput
    none?: player_exercise_progressWhereInput
  }

  export type Workout_exercisesListRelationFilter = {
    every?: workout_exercisesWhereInput
    some?: workout_exercisesWhereInput
    none?: workout_exercisesWhereInput
  }

  export type player_exercise_progressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workout_exercisesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type exercisesCountOrderByAggregateInput = {
    id?: SortOrder
    exercise_name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type exercisesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type exercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    exercise_name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type exercisesMinOrderByAggregateInput = {
    id?: SortOrder
    exercise_name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type exercisesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExercisesScalarRelationFilter = {
    is?: exercisesWhereInput
    isNot?: exercisesWhereInput
  }

  export type Workout_assignmentsScalarRelationFilter = {
    is?: workout_assignmentsWhereInput
    isNot?: workout_assignmentsWhereInput
  }

  export type player_exercise_progressCountOrderByAggregateInput = {
    id?: SortOrder
    workout_assignment_id?: SortOrder
    exercise_id?: SortOrder
    completed_sets?: SortOrder
    completed_reps?: SortOrder
    weight_used?: SortOrder
    notes?: SortOrder
    recorded_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type player_exercise_progressAvgOrderByAggregateInput = {
    id?: SortOrder
    workout_assignment_id?: SortOrder
    exercise_id?: SortOrder
    completed_sets?: SortOrder
    completed_reps?: SortOrder
    weight_used?: SortOrder
  }

  export type player_exercise_progressMaxOrderByAggregateInput = {
    id?: SortOrder
    workout_assignment_id?: SortOrder
    exercise_id?: SortOrder
    completed_sets?: SortOrder
    completed_reps?: SortOrder
    weight_used?: SortOrder
    notes?: SortOrder
    recorded_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type player_exercise_progressMinOrderByAggregateInput = {
    id?: SortOrder
    workout_assignment_id?: SortOrder
    exercise_id?: SortOrder
    completed_sets?: SortOrder
    completed_reps?: SortOrder
    weight_used?: SortOrder
    notes?: SortOrder
    recorded_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type player_exercise_progressSumOrderByAggregateInput = {
    id?: SortOrder
    workout_assignment_id?: SortOrder
    exercise_id?: SortOrder
    completed_sets?: SortOrder
    completed_reps?: SortOrder
    weight_used?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AddressesNullableScalarRelationFilter = {
    is?: addressesWhereInput | null
    isNot?: addressesWhereInput | null
  }

  export type TeamsListRelationFilter = {
    every?: teamsWhereInput
    some?: teamsWhereInput
    none?: teamsWhereInput
  }

  export type teamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type schoolsCountOrderByAggregateInput = {
    id?: SortOrder
    school_name?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type schoolsAvgOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
  }

  export type schoolsMaxOrderByAggregateInput = {
    id?: SortOrder
    school_name?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type schoolsMinOrderByAggregateInput = {
    id?: SortOrder
    school_name?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type schoolsSumOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type sportsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type sportsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sportsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type sportsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type sportsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamsScalarRelationFilter = {
    is?: teamsWhereInput
    isNot?: teamsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type team_primary_contactsTeam_idUser_idCompoundUniqueInput = {
    team_id: number
    user_id: number
  }

  export type team_primary_contactsCountOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type team_primary_contactsAvgOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type team_primary_contactsMaxOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type team_primary_contactsMinOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type team_primary_contactsSumOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Team_primary_contactsListRelationFilter = {
    every?: team_primary_contactsWhereInput
    some?: team_primary_contactsWhereInput
    none?: team_primary_contactsWhereInput
  }

  export type SportsScalarRelationFilter = {
    is?: sportsWhereInput
    isNot?: sportsWhereInput
  }

  export type User_teamsListRelationFilter = {
    every?: user_teamsWhereInput
    some?: user_teamsWhereInput
    none?: user_teamsWhereInput
  }

  export type team_primary_contactsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_teamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_school_team?: SortOrder
    school_id?: SortOrder
    sport_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type teamsAvgOrderByAggregateInput = {
    id?: SortOrder
    school_id?: SortOrder
    sport_id?: SortOrder
  }

  export type teamsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_school_team?: SortOrder
    school_id?: SortOrder
    sport_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type teamsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_school_team?: SortOrder
    school_id?: SortOrder
    sport_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type teamsSumOrderByAggregateInput = {
    id?: SortOrder
    school_id?: SortOrder
    sport_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumuser_team_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_team_role | Enumuser_team_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_team_role[] | ListEnumuser_team_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_team_role[] | ListEnumuser_team_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_team_roleFilter<$PrismaModel> | $Enums.user_team_role
  }

  export type user_teamsTeam_idUser_idCompoundUniqueInput = {
    team_id: number
    user_id: number
  }

  export type user_teamsCountOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_teamsAvgOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type user_teamsMaxOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_teamsMinOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_teamsSumOrderByAggregateInput = {
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type Enumuser_team_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_team_role | Enumuser_team_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_team_role[] | ListEnumuser_team_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_team_role[] | ListEnumuser_team_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_team_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_team_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_team_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_team_roleFilter<$PrismaModel>
  }

  export type WorkoutsListRelationFilter = {
    every?: workoutsWhereInput
    some?: workoutsWhereInput
    none?: workoutsWhereInput
  }

  export type workoutsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumassignee_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.assignee_type_enum | Enumassignee_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.assignee_type_enum[] | ListEnumassignee_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.assignee_type_enum[] | ListEnumassignee_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumassignee_type_enumFilter<$PrismaModel> | $Enums.assignee_type_enum
  }

  export type WorkoutsScalarRelationFilter = {
    is?: workoutsWhereInput
    isNot?: workoutsWhereInput
  }

  export type workout_assignmentsCountOrderByAggregateInput = {
    id?: SortOrder
    workout_id?: SortOrder
    assignee_type?: SortOrder
    assignee_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_assignmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    workout_id?: SortOrder
    assignee_id?: SortOrder
  }

  export type workout_assignmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    workout_id?: SortOrder
    assignee_type?: SortOrder
    assignee_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_assignmentsMinOrderByAggregateInput = {
    id?: SortOrder
    workout_id?: SortOrder
    assignee_type?: SortOrder
    assignee_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_assignmentsSumOrderByAggregateInput = {
    id?: SortOrder
    workout_id?: SortOrder
    assignee_id?: SortOrder
  }

  export type Enumassignee_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.assignee_type_enum | Enumassignee_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.assignee_type_enum[] | ListEnumassignee_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.assignee_type_enum[] | ListEnumassignee_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumassignee_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.assignee_type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumassignee_type_enumFilter<$PrismaModel>
    _max?: NestedEnumassignee_type_enumFilter<$PrismaModel>
  }

  export type workout_exercisesCountOrderByAggregateInput = {
    id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rest_interval?: SortOrder
    rpe?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_exercisesAvgOrderByAggregateInput = {
    id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rest_interval?: SortOrder
    rpe?: SortOrder
  }

  export type workout_exercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rest_interval?: SortOrder
    rpe?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_exercisesMinOrderByAggregateInput = {
    id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rest_interval?: SortOrder
    rpe?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workout_exercisesSumOrderByAggregateInput = {
    id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    rest_interval?: SortOrder
    rpe?: SortOrder
  }

  export type Workout_assignmentsListRelationFilter = {
    every?: workout_assignmentsWhereInput
    some?: workout_assignmentsWhereInput
    none?: workout_assignmentsWhereInput
  }

  export type workout_assignmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workoutsCountOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    workout_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workoutsAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
  }

  export type workoutsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    workout_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workoutsMinOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    workout_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type workoutsSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
  }

  export type schoolsCreateNestedOneWithoutAddressesInput = {
    create?: XOR<schoolsCreateWithoutAddressesInput, schoolsUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutAddressesInput
    connect?: schoolsWhereUniqueInput
  }

  export type schoolsUncheckedCreateNestedOneWithoutAddressesInput = {
    create?: XOR<schoolsCreateWithoutAddressesInput, schoolsUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutAddressesInput
    connect?: schoolsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type schoolsUpdateOneWithoutAddressesNestedInput = {
    create?: XOR<schoolsCreateWithoutAddressesInput, schoolsUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutAddressesInput
    upsert?: schoolsUpsertWithoutAddressesInput
    disconnect?: schoolsWhereInput | boolean
    delete?: schoolsWhereInput | boolean
    connect?: schoolsWhereUniqueInput
    update?: XOR<XOR<schoolsUpdateToOneWithWhereWithoutAddressesInput, schoolsUpdateWithoutAddressesInput>, schoolsUncheckedUpdateWithoutAddressesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type schoolsUncheckedUpdateOneWithoutAddressesNestedInput = {
    create?: XOR<schoolsCreateWithoutAddressesInput, schoolsUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutAddressesInput
    upsert?: schoolsUpsertWithoutAddressesInput
    disconnect?: schoolsWhereInput | boolean
    delete?: schoolsWhereInput | boolean
    connect?: schoolsWhereUniqueInput
    update?: XOR<XOR<schoolsUpdateToOneWithWhereWithoutAddressesInput, schoolsUpdateWithoutAddressesInput>, schoolsUncheckedUpdateWithoutAddressesInput>
  }

  export type player_exercise_progressCreateNestedManyWithoutExercisesInput = {
    create?: XOR<player_exercise_progressCreateWithoutExercisesInput, player_exercise_progressUncheckedCreateWithoutExercisesInput> | player_exercise_progressCreateWithoutExercisesInput[] | player_exercise_progressUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: player_exercise_progressCreateOrConnectWithoutExercisesInput | player_exercise_progressCreateOrConnectWithoutExercisesInput[]
    createMany?: player_exercise_progressCreateManyExercisesInputEnvelope
    connect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
  }

  export type workout_exercisesCreateNestedManyWithoutExercisesInput = {
    create?: XOR<workout_exercisesCreateWithoutExercisesInput, workout_exercisesUncheckedCreateWithoutExercisesInput> | workout_exercisesCreateWithoutExercisesInput[] | workout_exercisesUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutExercisesInput | workout_exercisesCreateOrConnectWithoutExercisesInput[]
    createMany?: workout_exercisesCreateManyExercisesInputEnvelope
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
  }

  export type player_exercise_progressUncheckedCreateNestedManyWithoutExercisesInput = {
    create?: XOR<player_exercise_progressCreateWithoutExercisesInput, player_exercise_progressUncheckedCreateWithoutExercisesInput> | player_exercise_progressCreateWithoutExercisesInput[] | player_exercise_progressUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: player_exercise_progressCreateOrConnectWithoutExercisesInput | player_exercise_progressCreateOrConnectWithoutExercisesInput[]
    createMany?: player_exercise_progressCreateManyExercisesInputEnvelope
    connect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
  }

  export type workout_exercisesUncheckedCreateNestedManyWithoutExercisesInput = {
    create?: XOR<workout_exercisesCreateWithoutExercisesInput, workout_exercisesUncheckedCreateWithoutExercisesInput> | workout_exercisesCreateWithoutExercisesInput[] | workout_exercisesUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutExercisesInput | workout_exercisesCreateOrConnectWithoutExercisesInput[]
    createMany?: workout_exercisesCreateManyExercisesInputEnvelope
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
  }

  export type player_exercise_progressUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<player_exercise_progressCreateWithoutExercisesInput, player_exercise_progressUncheckedCreateWithoutExercisesInput> | player_exercise_progressCreateWithoutExercisesInput[] | player_exercise_progressUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: player_exercise_progressCreateOrConnectWithoutExercisesInput | player_exercise_progressCreateOrConnectWithoutExercisesInput[]
    upsert?: player_exercise_progressUpsertWithWhereUniqueWithoutExercisesInput | player_exercise_progressUpsertWithWhereUniqueWithoutExercisesInput[]
    createMany?: player_exercise_progressCreateManyExercisesInputEnvelope
    set?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    disconnect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    delete?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    connect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    update?: player_exercise_progressUpdateWithWhereUniqueWithoutExercisesInput | player_exercise_progressUpdateWithWhereUniqueWithoutExercisesInput[]
    updateMany?: player_exercise_progressUpdateManyWithWhereWithoutExercisesInput | player_exercise_progressUpdateManyWithWhereWithoutExercisesInput[]
    deleteMany?: player_exercise_progressScalarWhereInput | player_exercise_progressScalarWhereInput[]
  }

  export type workout_exercisesUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<workout_exercisesCreateWithoutExercisesInput, workout_exercisesUncheckedCreateWithoutExercisesInput> | workout_exercisesCreateWithoutExercisesInput[] | workout_exercisesUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutExercisesInput | workout_exercisesCreateOrConnectWithoutExercisesInput[]
    upsert?: workout_exercisesUpsertWithWhereUniqueWithoutExercisesInput | workout_exercisesUpsertWithWhereUniqueWithoutExercisesInput[]
    createMany?: workout_exercisesCreateManyExercisesInputEnvelope
    set?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    disconnect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    delete?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    update?: workout_exercisesUpdateWithWhereUniqueWithoutExercisesInput | workout_exercisesUpdateWithWhereUniqueWithoutExercisesInput[]
    updateMany?: workout_exercisesUpdateManyWithWhereWithoutExercisesInput | workout_exercisesUpdateManyWithWhereWithoutExercisesInput[]
    deleteMany?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
  }

  export type player_exercise_progressUncheckedUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<player_exercise_progressCreateWithoutExercisesInput, player_exercise_progressUncheckedCreateWithoutExercisesInput> | player_exercise_progressCreateWithoutExercisesInput[] | player_exercise_progressUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: player_exercise_progressCreateOrConnectWithoutExercisesInput | player_exercise_progressCreateOrConnectWithoutExercisesInput[]
    upsert?: player_exercise_progressUpsertWithWhereUniqueWithoutExercisesInput | player_exercise_progressUpsertWithWhereUniqueWithoutExercisesInput[]
    createMany?: player_exercise_progressCreateManyExercisesInputEnvelope
    set?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    disconnect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    delete?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    connect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    update?: player_exercise_progressUpdateWithWhereUniqueWithoutExercisesInput | player_exercise_progressUpdateWithWhereUniqueWithoutExercisesInput[]
    updateMany?: player_exercise_progressUpdateManyWithWhereWithoutExercisesInput | player_exercise_progressUpdateManyWithWhereWithoutExercisesInput[]
    deleteMany?: player_exercise_progressScalarWhereInput | player_exercise_progressScalarWhereInput[]
  }

  export type workout_exercisesUncheckedUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<workout_exercisesCreateWithoutExercisesInput, workout_exercisesUncheckedCreateWithoutExercisesInput> | workout_exercisesCreateWithoutExercisesInput[] | workout_exercisesUncheckedCreateWithoutExercisesInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutExercisesInput | workout_exercisesCreateOrConnectWithoutExercisesInput[]
    upsert?: workout_exercisesUpsertWithWhereUniqueWithoutExercisesInput | workout_exercisesUpsertWithWhereUniqueWithoutExercisesInput[]
    createMany?: workout_exercisesCreateManyExercisesInputEnvelope
    set?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    disconnect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    delete?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    update?: workout_exercisesUpdateWithWhereUniqueWithoutExercisesInput | workout_exercisesUpdateWithWhereUniqueWithoutExercisesInput[]
    updateMany?: workout_exercisesUpdateManyWithWhereWithoutExercisesInput | workout_exercisesUpdateManyWithWhereWithoutExercisesInput[]
    deleteMany?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
  }

  export type exercisesCreateNestedOneWithoutPlayer_exercise_progressInput = {
    create?: XOR<exercisesCreateWithoutPlayer_exercise_progressInput, exercisesUncheckedCreateWithoutPlayer_exercise_progressInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutPlayer_exercise_progressInput
    connect?: exercisesWhereUniqueInput
  }

  export type workout_assignmentsCreateNestedOneWithoutPlayer_exercise_progressInput = {
    create?: XOR<workout_assignmentsCreateWithoutPlayer_exercise_progressInput, workout_assignmentsUncheckedCreateWithoutPlayer_exercise_progressInput>
    connectOrCreate?: workout_assignmentsCreateOrConnectWithoutPlayer_exercise_progressInput
    connect?: workout_assignmentsWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type exercisesUpdateOneRequiredWithoutPlayer_exercise_progressNestedInput = {
    create?: XOR<exercisesCreateWithoutPlayer_exercise_progressInput, exercisesUncheckedCreateWithoutPlayer_exercise_progressInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutPlayer_exercise_progressInput
    upsert?: exercisesUpsertWithoutPlayer_exercise_progressInput
    connect?: exercisesWhereUniqueInput
    update?: XOR<XOR<exercisesUpdateToOneWithWhereWithoutPlayer_exercise_progressInput, exercisesUpdateWithoutPlayer_exercise_progressInput>, exercisesUncheckedUpdateWithoutPlayer_exercise_progressInput>
  }

  export type workout_assignmentsUpdateOneRequiredWithoutPlayer_exercise_progressNestedInput = {
    create?: XOR<workout_assignmentsCreateWithoutPlayer_exercise_progressInput, workout_assignmentsUncheckedCreateWithoutPlayer_exercise_progressInput>
    connectOrCreate?: workout_assignmentsCreateOrConnectWithoutPlayer_exercise_progressInput
    upsert?: workout_assignmentsUpsertWithoutPlayer_exercise_progressInput
    connect?: workout_assignmentsWhereUniqueInput
    update?: XOR<XOR<workout_assignmentsUpdateToOneWithWhereWithoutPlayer_exercise_progressInput, workout_assignmentsUpdateWithoutPlayer_exercise_progressInput>, workout_assignmentsUncheckedUpdateWithoutPlayer_exercise_progressInput>
  }

  export type addressesCreateNestedOneWithoutSchoolsInput = {
    create?: XOR<addressesCreateWithoutSchoolsInput, addressesUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: addressesCreateOrConnectWithoutSchoolsInput
    connect?: addressesWhereUniqueInput
  }

  export type teamsCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<teamsCreateWithoutSchoolsInput, teamsUncheckedCreateWithoutSchoolsInput> | teamsCreateWithoutSchoolsInput[] | teamsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutSchoolsInput | teamsCreateOrConnectWithoutSchoolsInput[]
    createMany?: teamsCreateManySchoolsInputEnvelope
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
  }

  export type teamsUncheckedCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<teamsCreateWithoutSchoolsInput, teamsUncheckedCreateWithoutSchoolsInput> | teamsCreateWithoutSchoolsInput[] | teamsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutSchoolsInput | teamsCreateOrConnectWithoutSchoolsInput[]
    createMany?: teamsCreateManySchoolsInputEnvelope
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
  }

  export type addressesUpdateOneWithoutSchoolsNestedInput = {
    create?: XOR<addressesCreateWithoutSchoolsInput, addressesUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: addressesCreateOrConnectWithoutSchoolsInput
    upsert?: addressesUpsertWithoutSchoolsInput
    disconnect?: addressesWhereInput | boolean
    delete?: addressesWhereInput | boolean
    connect?: addressesWhereUniqueInput
    update?: XOR<XOR<addressesUpdateToOneWithWhereWithoutSchoolsInput, addressesUpdateWithoutSchoolsInput>, addressesUncheckedUpdateWithoutSchoolsInput>
  }

  export type teamsUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<teamsCreateWithoutSchoolsInput, teamsUncheckedCreateWithoutSchoolsInput> | teamsCreateWithoutSchoolsInput[] | teamsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutSchoolsInput | teamsCreateOrConnectWithoutSchoolsInput[]
    upsert?: teamsUpsertWithWhereUniqueWithoutSchoolsInput | teamsUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: teamsCreateManySchoolsInputEnvelope
    set?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    disconnect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    delete?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    update?: teamsUpdateWithWhereUniqueWithoutSchoolsInput | teamsUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: teamsUpdateManyWithWhereWithoutSchoolsInput | teamsUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: teamsScalarWhereInput | teamsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type teamsUncheckedUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<teamsCreateWithoutSchoolsInput, teamsUncheckedCreateWithoutSchoolsInput> | teamsCreateWithoutSchoolsInput[] | teamsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutSchoolsInput | teamsCreateOrConnectWithoutSchoolsInput[]
    upsert?: teamsUpsertWithWhereUniqueWithoutSchoolsInput | teamsUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: teamsCreateManySchoolsInputEnvelope
    set?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    disconnect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    delete?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    update?: teamsUpdateWithWhereUniqueWithoutSchoolsInput | teamsUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: teamsUpdateManyWithWhereWithoutSchoolsInput | teamsUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: teamsScalarWhereInput | teamsScalarWhereInput[]
  }

  export type teamsCreateNestedManyWithoutSportsInput = {
    create?: XOR<teamsCreateWithoutSportsInput, teamsUncheckedCreateWithoutSportsInput> | teamsCreateWithoutSportsInput[] | teamsUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutSportsInput | teamsCreateOrConnectWithoutSportsInput[]
    createMany?: teamsCreateManySportsInputEnvelope
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
  }

  export type teamsUncheckedCreateNestedManyWithoutSportsInput = {
    create?: XOR<teamsCreateWithoutSportsInput, teamsUncheckedCreateWithoutSportsInput> | teamsCreateWithoutSportsInput[] | teamsUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutSportsInput | teamsCreateOrConnectWithoutSportsInput[]
    createMany?: teamsCreateManySportsInputEnvelope
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
  }

  export type teamsUpdateManyWithoutSportsNestedInput = {
    create?: XOR<teamsCreateWithoutSportsInput, teamsUncheckedCreateWithoutSportsInput> | teamsCreateWithoutSportsInput[] | teamsUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutSportsInput | teamsCreateOrConnectWithoutSportsInput[]
    upsert?: teamsUpsertWithWhereUniqueWithoutSportsInput | teamsUpsertWithWhereUniqueWithoutSportsInput[]
    createMany?: teamsCreateManySportsInputEnvelope
    set?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    disconnect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    delete?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    update?: teamsUpdateWithWhereUniqueWithoutSportsInput | teamsUpdateWithWhereUniqueWithoutSportsInput[]
    updateMany?: teamsUpdateManyWithWhereWithoutSportsInput | teamsUpdateManyWithWhereWithoutSportsInput[]
    deleteMany?: teamsScalarWhereInput | teamsScalarWhereInput[]
  }

  export type teamsUncheckedUpdateManyWithoutSportsNestedInput = {
    create?: XOR<teamsCreateWithoutSportsInput, teamsUncheckedCreateWithoutSportsInput> | teamsCreateWithoutSportsInput[] | teamsUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutSportsInput | teamsCreateOrConnectWithoutSportsInput[]
    upsert?: teamsUpsertWithWhereUniqueWithoutSportsInput | teamsUpsertWithWhereUniqueWithoutSportsInput[]
    createMany?: teamsCreateManySportsInputEnvelope
    set?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    disconnect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    delete?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    update?: teamsUpdateWithWhereUniqueWithoutSportsInput | teamsUpdateWithWhereUniqueWithoutSportsInput[]
    updateMany?: teamsUpdateManyWithWhereWithoutSportsInput | teamsUpdateManyWithWhereWithoutSportsInput[]
    deleteMany?: teamsScalarWhereInput | teamsScalarWhereInput[]
  }

  export type teamsCreateNestedOneWithoutTeam_primary_contactsInput = {
    create?: XOR<teamsCreateWithoutTeam_primary_contactsInput, teamsUncheckedCreateWithoutTeam_primary_contactsInput>
    connectOrCreate?: teamsCreateOrConnectWithoutTeam_primary_contactsInput
    connect?: teamsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTeam_primary_contactsInput = {
    create?: XOR<usersCreateWithoutTeam_primary_contactsInput, usersUncheckedCreateWithoutTeam_primary_contactsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTeam_primary_contactsInput
    connect?: usersWhereUniqueInput
  }

  export type teamsUpdateOneRequiredWithoutTeam_primary_contactsNestedInput = {
    create?: XOR<teamsCreateWithoutTeam_primary_contactsInput, teamsUncheckedCreateWithoutTeam_primary_contactsInput>
    connectOrCreate?: teamsCreateOrConnectWithoutTeam_primary_contactsInput
    upsert?: teamsUpsertWithoutTeam_primary_contactsInput
    connect?: teamsWhereUniqueInput
    update?: XOR<XOR<teamsUpdateToOneWithWhereWithoutTeam_primary_contactsInput, teamsUpdateWithoutTeam_primary_contactsInput>, teamsUncheckedUpdateWithoutTeam_primary_contactsInput>
  }

  export type usersUpdateOneRequiredWithoutTeam_primary_contactsNestedInput = {
    create?: XOR<usersCreateWithoutTeam_primary_contactsInput, usersUncheckedCreateWithoutTeam_primary_contactsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTeam_primary_contactsInput
    upsert?: usersUpsertWithoutTeam_primary_contactsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTeam_primary_contactsInput, usersUpdateWithoutTeam_primary_contactsInput>, usersUncheckedUpdateWithoutTeam_primary_contactsInput>
  }

  export type team_primary_contactsCreateNestedManyWithoutTeamsInput = {
    create?: XOR<team_primary_contactsCreateWithoutTeamsInput, team_primary_contactsUncheckedCreateWithoutTeamsInput> | team_primary_contactsCreateWithoutTeamsInput[] | team_primary_contactsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_primary_contactsCreateOrConnectWithoutTeamsInput | team_primary_contactsCreateOrConnectWithoutTeamsInput[]
    createMany?: team_primary_contactsCreateManyTeamsInputEnvelope
    connect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
  }

  export type schoolsCreateNestedOneWithoutTeamsInput = {
    create?: XOR<schoolsCreateWithoutTeamsInput, schoolsUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutTeamsInput
    connect?: schoolsWhereUniqueInput
  }

  export type sportsCreateNestedOneWithoutTeamsInput = {
    create?: XOR<sportsCreateWithoutTeamsInput, sportsUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: sportsCreateOrConnectWithoutTeamsInput
    connect?: sportsWhereUniqueInput
  }

  export type user_teamsCreateNestedManyWithoutTeamsInput = {
    create?: XOR<user_teamsCreateWithoutTeamsInput, user_teamsUncheckedCreateWithoutTeamsInput> | user_teamsCreateWithoutTeamsInput[] | user_teamsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_teamsCreateOrConnectWithoutTeamsInput | user_teamsCreateOrConnectWithoutTeamsInput[]
    createMany?: user_teamsCreateManyTeamsInputEnvelope
    connect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
  }

  export type team_primary_contactsUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<team_primary_contactsCreateWithoutTeamsInput, team_primary_contactsUncheckedCreateWithoutTeamsInput> | team_primary_contactsCreateWithoutTeamsInput[] | team_primary_contactsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_primary_contactsCreateOrConnectWithoutTeamsInput | team_primary_contactsCreateOrConnectWithoutTeamsInput[]
    createMany?: team_primary_contactsCreateManyTeamsInputEnvelope
    connect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
  }

  export type user_teamsUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<user_teamsCreateWithoutTeamsInput, user_teamsUncheckedCreateWithoutTeamsInput> | user_teamsCreateWithoutTeamsInput[] | user_teamsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_teamsCreateOrConnectWithoutTeamsInput | user_teamsCreateOrConnectWithoutTeamsInput[]
    createMany?: user_teamsCreateManyTeamsInputEnvelope
    connect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type team_primary_contactsUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<team_primary_contactsCreateWithoutTeamsInput, team_primary_contactsUncheckedCreateWithoutTeamsInput> | team_primary_contactsCreateWithoutTeamsInput[] | team_primary_contactsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_primary_contactsCreateOrConnectWithoutTeamsInput | team_primary_contactsCreateOrConnectWithoutTeamsInput[]
    upsert?: team_primary_contactsUpsertWithWhereUniqueWithoutTeamsInput | team_primary_contactsUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: team_primary_contactsCreateManyTeamsInputEnvelope
    set?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    disconnect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    delete?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    connect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    update?: team_primary_contactsUpdateWithWhereUniqueWithoutTeamsInput | team_primary_contactsUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: team_primary_contactsUpdateManyWithWhereWithoutTeamsInput | team_primary_contactsUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: team_primary_contactsScalarWhereInput | team_primary_contactsScalarWhereInput[]
  }

  export type schoolsUpdateOneWithoutTeamsNestedInput = {
    create?: XOR<schoolsCreateWithoutTeamsInput, schoolsUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutTeamsInput
    upsert?: schoolsUpsertWithoutTeamsInput
    disconnect?: schoolsWhereInput | boolean
    delete?: schoolsWhereInput | boolean
    connect?: schoolsWhereUniqueInput
    update?: XOR<XOR<schoolsUpdateToOneWithWhereWithoutTeamsInput, schoolsUpdateWithoutTeamsInput>, schoolsUncheckedUpdateWithoutTeamsInput>
  }

  export type sportsUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<sportsCreateWithoutTeamsInput, sportsUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: sportsCreateOrConnectWithoutTeamsInput
    upsert?: sportsUpsertWithoutTeamsInput
    connect?: sportsWhereUniqueInput
    update?: XOR<XOR<sportsUpdateToOneWithWhereWithoutTeamsInput, sportsUpdateWithoutTeamsInput>, sportsUncheckedUpdateWithoutTeamsInput>
  }

  export type user_teamsUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<user_teamsCreateWithoutTeamsInput, user_teamsUncheckedCreateWithoutTeamsInput> | user_teamsCreateWithoutTeamsInput[] | user_teamsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_teamsCreateOrConnectWithoutTeamsInput | user_teamsCreateOrConnectWithoutTeamsInput[]
    upsert?: user_teamsUpsertWithWhereUniqueWithoutTeamsInput | user_teamsUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: user_teamsCreateManyTeamsInputEnvelope
    set?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    disconnect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    delete?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    connect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    update?: user_teamsUpdateWithWhereUniqueWithoutTeamsInput | user_teamsUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: user_teamsUpdateManyWithWhereWithoutTeamsInput | user_teamsUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: user_teamsScalarWhereInput | user_teamsScalarWhereInput[]
  }

  export type team_primary_contactsUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<team_primary_contactsCreateWithoutTeamsInput, team_primary_contactsUncheckedCreateWithoutTeamsInput> | team_primary_contactsCreateWithoutTeamsInput[] | team_primary_contactsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_primary_contactsCreateOrConnectWithoutTeamsInput | team_primary_contactsCreateOrConnectWithoutTeamsInput[]
    upsert?: team_primary_contactsUpsertWithWhereUniqueWithoutTeamsInput | team_primary_contactsUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: team_primary_contactsCreateManyTeamsInputEnvelope
    set?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    disconnect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    delete?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    connect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    update?: team_primary_contactsUpdateWithWhereUniqueWithoutTeamsInput | team_primary_contactsUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: team_primary_contactsUpdateManyWithWhereWithoutTeamsInput | team_primary_contactsUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: team_primary_contactsScalarWhereInput | team_primary_contactsScalarWhereInput[]
  }

  export type user_teamsUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<user_teamsCreateWithoutTeamsInput, user_teamsUncheckedCreateWithoutTeamsInput> | user_teamsCreateWithoutTeamsInput[] | user_teamsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: user_teamsCreateOrConnectWithoutTeamsInput | user_teamsCreateOrConnectWithoutTeamsInput[]
    upsert?: user_teamsUpsertWithWhereUniqueWithoutTeamsInput | user_teamsUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: user_teamsCreateManyTeamsInputEnvelope
    set?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    disconnect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    delete?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    connect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    update?: user_teamsUpdateWithWhereUniqueWithoutTeamsInput | user_teamsUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: user_teamsUpdateManyWithWhereWithoutTeamsInput | user_teamsUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: user_teamsScalarWhereInput | user_teamsScalarWhereInput[]
  }

  export type teamsCreateNestedOneWithoutUser_teamsInput = {
    create?: XOR<teamsCreateWithoutUser_teamsInput, teamsUncheckedCreateWithoutUser_teamsInput>
    connectOrCreate?: teamsCreateOrConnectWithoutUser_teamsInput
    connect?: teamsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_teamsInput = {
    create?: XOR<usersCreateWithoutUser_teamsInput, usersUncheckedCreateWithoutUser_teamsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_teamsInput
    connect?: usersWhereUniqueInput
  }

  export type Enumuser_team_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_team_role
  }

  export type teamsUpdateOneRequiredWithoutUser_teamsNestedInput = {
    create?: XOR<teamsCreateWithoutUser_teamsInput, teamsUncheckedCreateWithoutUser_teamsInput>
    connectOrCreate?: teamsCreateOrConnectWithoutUser_teamsInput
    upsert?: teamsUpsertWithoutUser_teamsInput
    connect?: teamsWhereUniqueInput
    update?: XOR<XOR<teamsUpdateToOneWithWhereWithoutUser_teamsInput, teamsUpdateWithoutUser_teamsInput>, teamsUncheckedUpdateWithoutUser_teamsInput>
  }

  export type usersUpdateOneRequiredWithoutUser_teamsNestedInput = {
    create?: XOR<usersCreateWithoutUser_teamsInput, usersUncheckedCreateWithoutUser_teamsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_teamsInput
    upsert?: usersUpsertWithoutUser_teamsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_teamsInput, usersUpdateWithoutUser_teamsInput>, usersUncheckedUpdateWithoutUser_teamsInput>
  }

  export type team_primary_contactsCreateNestedManyWithoutUsersInput = {
    create?: XOR<team_primary_contactsCreateWithoutUsersInput, team_primary_contactsUncheckedCreateWithoutUsersInput> | team_primary_contactsCreateWithoutUsersInput[] | team_primary_contactsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_primary_contactsCreateOrConnectWithoutUsersInput | team_primary_contactsCreateOrConnectWithoutUsersInput[]
    createMany?: team_primary_contactsCreateManyUsersInputEnvelope
    connect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
  }

  export type user_teamsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_teamsCreateWithoutUsersInput, user_teamsUncheckedCreateWithoutUsersInput> | user_teamsCreateWithoutUsersInput[] | user_teamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_teamsCreateOrConnectWithoutUsersInput | user_teamsCreateOrConnectWithoutUsersInput[]
    createMany?: user_teamsCreateManyUsersInputEnvelope
    connect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
  }

  export type workoutsCreateNestedManyWithoutUsersInput = {
    create?: XOR<workoutsCreateWithoutUsersInput, workoutsUncheckedCreateWithoutUsersInput> | workoutsCreateWithoutUsersInput[] | workoutsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workoutsCreateOrConnectWithoutUsersInput | workoutsCreateOrConnectWithoutUsersInput[]
    createMany?: workoutsCreateManyUsersInputEnvelope
    connect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
  }

  export type team_primary_contactsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<team_primary_contactsCreateWithoutUsersInput, team_primary_contactsUncheckedCreateWithoutUsersInput> | team_primary_contactsCreateWithoutUsersInput[] | team_primary_contactsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_primary_contactsCreateOrConnectWithoutUsersInput | team_primary_contactsCreateOrConnectWithoutUsersInput[]
    createMany?: team_primary_contactsCreateManyUsersInputEnvelope
    connect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
  }

  export type user_teamsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_teamsCreateWithoutUsersInput, user_teamsUncheckedCreateWithoutUsersInput> | user_teamsCreateWithoutUsersInput[] | user_teamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_teamsCreateOrConnectWithoutUsersInput | user_teamsCreateOrConnectWithoutUsersInput[]
    createMany?: user_teamsCreateManyUsersInputEnvelope
    connect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
  }

  export type workoutsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<workoutsCreateWithoutUsersInput, workoutsUncheckedCreateWithoutUsersInput> | workoutsCreateWithoutUsersInput[] | workoutsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workoutsCreateOrConnectWithoutUsersInput | workoutsCreateOrConnectWithoutUsersInput[]
    createMany?: workoutsCreateManyUsersInputEnvelope
    connect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
  }

  export type team_primary_contactsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<team_primary_contactsCreateWithoutUsersInput, team_primary_contactsUncheckedCreateWithoutUsersInput> | team_primary_contactsCreateWithoutUsersInput[] | team_primary_contactsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_primary_contactsCreateOrConnectWithoutUsersInput | team_primary_contactsCreateOrConnectWithoutUsersInput[]
    upsert?: team_primary_contactsUpsertWithWhereUniqueWithoutUsersInput | team_primary_contactsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: team_primary_contactsCreateManyUsersInputEnvelope
    set?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    disconnect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    delete?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    connect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    update?: team_primary_contactsUpdateWithWhereUniqueWithoutUsersInput | team_primary_contactsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: team_primary_contactsUpdateManyWithWhereWithoutUsersInput | team_primary_contactsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: team_primary_contactsScalarWhereInput | team_primary_contactsScalarWhereInput[]
  }

  export type user_teamsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_teamsCreateWithoutUsersInput, user_teamsUncheckedCreateWithoutUsersInput> | user_teamsCreateWithoutUsersInput[] | user_teamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_teamsCreateOrConnectWithoutUsersInput | user_teamsCreateOrConnectWithoutUsersInput[]
    upsert?: user_teamsUpsertWithWhereUniqueWithoutUsersInput | user_teamsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_teamsCreateManyUsersInputEnvelope
    set?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    disconnect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    delete?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    connect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    update?: user_teamsUpdateWithWhereUniqueWithoutUsersInput | user_teamsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_teamsUpdateManyWithWhereWithoutUsersInput | user_teamsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_teamsScalarWhereInput | user_teamsScalarWhereInput[]
  }

  export type workoutsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workoutsCreateWithoutUsersInput, workoutsUncheckedCreateWithoutUsersInput> | workoutsCreateWithoutUsersInput[] | workoutsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workoutsCreateOrConnectWithoutUsersInput | workoutsCreateOrConnectWithoutUsersInput[]
    upsert?: workoutsUpsertWithWhereUniqueWithoutUsersInput | workoutsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workoutsCreateManyUsersInputEnvelope
    set?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    disconnect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    delete?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    connect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    update?: workoutsUpdateWithWhereUniqueWithoutUsersInput | workoutsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workoutsUpdateManyWithWhereWithoutUsersInput | workoutsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workoutsScalarWhereInput | workoutsScalarWhereInput[]
  }

  export type team_primary_contactsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<team_primary_contactsCreateWithoutUsersInput, team_primary_contactsUncheckedCreateWithoutUsersInput> | team_primary_contactsCreateWithoutUsersInput[] | team_primary_contactsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_primary_contactsCreateOrConnectWithoutUsersInput | team_primary_contactsCreateOrConnectWithoutUsersInput[]
    upsert?: team_primary_contactsUpsertWithWhereUniqueWithoutUsersInput | team_primary_contactsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: team_primary_contactsCreateManyUsersInputEnvelope
    set?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    disconnect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    delete?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    connect?: team_primary_contactsWhereUniqueInput | team_primary_contactsWhereUniqueInput[]
    update?: team_primary_contactsUpdateWithWhereUniqueWithoutUsersInput | team_primary_contactsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: team_primary_contactsUpdateManyWithWhereWithoutUsersInput | team_primary_contactsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: team_primary_contactsScalarWhereInput | team_primary_contactsScalarWhereInput[]
  }

  export type user_teamsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_teamsCreateWithoutUsersInput, user_teamsUncheckedCreateWithoutUsersInput> | user_teamsCreateWithoutUsersInput[] | user_teamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_teamsCreateOrConnectWithoutUsersInput | user_teamsCreateOrConnectWithoutUsersInput[]
    upsert?: user_teamsUpsertWithWhereUniqueWithoutUsersInput | user_teamsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_teamsCreateManyUsersInputEnvelope
    set?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    disconnect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    delete?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    connect?: user_teamsWhereUniqueInput | user_teamsWhereUniqueInput[]
    update?: user_teamsUpdateWithWhereUniqueWithoutUsersInput | user_teamsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_teamsUpdateManyWithWhereWithoutUsersInput | user_teamsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_teamsScalarWhereInput | user_teamsScalarWhereInput[]
  }

  export type workoutsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workoutsCreateWithoutUsersInput, workoutsUncheckedCreateWithoutUsersInput> | workoutsCreateWithoutUsersInput[] | workoutsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workoutsCreateOrConnectWithoutUsersInput | workoutsCreateOrConnectWithoutUsersInput[]
    upsert?: workoutsUpsertWithWhereUniqueWithoutUsersInput | workoutsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workoutsCreateManyUsersInputEnvelope
    set?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    disconnect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    delete?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    connect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    update?: workoutsUpdateWithWhereUniqueWithoutUsersInput | workoutsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workoutsUpdateManyWithWhereWithoutUsersInput | workoutsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workoutsScalarWhereInput | workoutsScalarWhereInput[]
  }

  export type player_exercise_progressCreateNestedManyWithoutWorkout_assignmentsInput = {
    create?: XOR<player_exercise_progressCreateWithoutWorkout_assignmentsInput, player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput> | player_exercise_progressCreateWithoutWorkout_assignmentsInput[] | player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput[]
    connectOrCreate?: player_exercise_progressCreateOrConnectWithoutWorkout_assignmentsInput | player_exercise_progressCreateOrConnectWithoutWorkout_assignmentsInput[]
    createMany?: player_exercise_progressCreateManyWorkout_assignmentsInputEnvelope
    connect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
  }

  export type workoutsCreateNestedOneWithoutWorkout_assignmentsInput = {
    create?: XOR<workoutsCreateWithoutWorkout_assignmentsInput, workoutsUncheckedCreateWithoutWorkout_assignmentsInput>
    connectOrCreate?: workoutsCreateOrConnectWithoutWorkout_assignmentsInput
    connect?: workoutsWhereUniqueInput
  }

  export type player_exercise_progressUncheckedCreateNestedManyWithoutWorkout_assignmentsInput = {
    create?: XOR<player_exercise_progressCreateWithoutWorkout_assignmentsInput, player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput> | player_exercise_progressCreateWithoutWorkout_assignmentsInput[] | player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput[]
    connectOrCreate?: player_exercise_progressCreateOrConnectWithoutWorkout_assignmentsInput | player_exercise_progressCreateOrConnectWithoutWorkout_assignmentsInput[]
    createMany?: player_exercise_progressCreateManyWorkout_assignmentsInputEnvelope
    connect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
  }

  export type Enumassignee_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.assignee_type_enum
  }

  export type player_exercise_progressUpdateManyWithoutWorkout_assignmentsNestedInput = {
    create?: XOR<player_exercise_progressCreateWithoutWorkout_assignmentsInput, player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput> | player_exercise_progressCreateWithoutWorkout_assignmentsInput[] | player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput[]
    connectOrCreate?: player_exercise_progressCreateOrConnectWithoutWorkout_assignmentsInput | player_exercise_progressCreateOrConnectWithoutWorkout_assignmentsInput[]
    upsert?: player_exercise_progressUpsertWithWhereUniqueWithoutWorkout_assignmentsInput | player_exercise_progressUpsertWithWhereUniqueWithoutWorkout_assignmentsInput[]
    createMany?: player_exercise_progressCreateManyWorkout_assignmentsInputEnvelope
    set?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    disconnect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    delete?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    connect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    update?: player_exercise_progressUpdateWithWhereUniqueWithoutWorkout_assignmentsInput | player_exercise_progressUpdateWithWhereUniqueWithoutWorkout_assignmentsInput[]
    updateMany?: player_exercise_progressUpdateManyWithWhereWithoutWorkout_assignmentsInput | player_exercise_progressUpdateManyWithWhereWithoutWorkout_assignmentsInput[]
    deleteMany?: player_exercise_progressScalarWhereInput | player_exercise_progressScalarWhereInput[]
  }

  export type workoutsUpdateOneRequiredWithoutWorkout_assignmentsNestedInput = {
    create?: XOR<workoutsCreateWithoutWorkout_assignmentsInput, workoutsUncheckedCreateWithoutWorkout_assignmentsInput>
    connectOrCreate?: workoutsCreateOrConnectWithoutWorkout_assignmentsInput
    upsert?: workoutsUpsertWithoutWorkout_assignmentsInput
    connect?: workoutsWhereUniqueInput
    update?: XOR<XOR<workoutsUpdateToOneWithWhereWithoutWorkout_assignmentsInput, workoutsUpdateWithoutWorkout_assignmentsInput>, workoutsUncheckedUpdateWithoutWorkout_assignmentsInput>
  }

  export type player_exercise_progressUncheckedUpdateManyWithoutWorkout_assignmentsNestedInput = {
    create?: XOR<player_exercise_progressCreateWithoutWorkout_assignmentsInput, player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput> | player_exercise_progressCreateWithoutWorkout_assignmentsInput[] | player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput[]
    connectOrCreate?: player_exercise_progressCreateOrConnectWithoutWorkout_assignmentsInput | player_exercise_progressCreateOrConnectWithoutWorkout_assignmentsInput[]
    upsert?: player_exercise_progressUpsertWithWhereUniqueWithoutWorkout_assignmentsInput | player_exercise_progressUpsertWithWhereUniqueWithoutWorkout_assignmentsInput[]
    createMany?: player_exercise_progressCreateManyWorkout_assignmentsInputEnvelope
    set?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    disconnect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    delete?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    connect?: player_exercise_progressWhereUniqueInput | player_exercise_progressWhereUniqueInput[]
    update?: player_exercise_progressUpdateWithWhereUniqueWithoutWorkout_assignmentsInput | player_exercise_progressUpdateWithWhereUniqueWithoutWorkout_assignmentsInput[]
    updateMany?: player_exercise_progressUpdateManyWithWhereWithoutWorkout_assignmentsInput | player_exercise_progressUpdateManyWithWhereWithoutWorkout_assignmentsInput[]
    deleteMany?: player_exercise_progressScalarWhereInput | player_exercise_progressScalarWhereInput[]
  }

  export type exercisesCreateNestedOneWithoutWorkout_exercisesInput = {
    create?: XOR<exercisesCreateWithoutWorkout_exercisesInput, exercisesUncheckedCreateWithoutWorkout_exercisesInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutWorkout_exercisesInput
    connect?: exercisesWhereUniqueInput
  }

  export type workoutsCreateNestedOneWithoutWorkout_exercisesInput = {
    create?: XOR<workoutsCreateWithoutWorkout_exercisesInput, workoutsUncheckedCreateWithoutWorkout_exercisesInput>
    connectOrCreate?: workoutsCreateOrConnectWithoutWorkout_exercisesInput
    connect?: workoutsWhereUniqueInput
  }

  export type exercisesUpdateOneRequiredWithoutWorkout_exercisesNestedInput = {
    create?: XOR<exercisesCreateWithoutWorkout_exercisesInput, exercisesUncheckedCreateWithoutWorkout_exercisesInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutWorkout_exercisesInput
    upsert?: exercisesUpsertWithoutWorkout_exercisesInput
    connect?: exercisesWhereUniqueInput
    update?: XOR<XOR<exercisesUpdateToOneWithWhereWithoutWorkout_exercisesInput, exercisesUpdateWithoutWorkout_exercisesInput>, exercisesUncheckedUpdateWithoutWorkout_exercisesInput>
  }

  export type workoutsUpdateOneRequiredWithoutWorkout_exercisesNestedInput = {
    create?: XOR<workoutsCreateWithoutWorkout_exercisesInput, workoutsUncheckedCreateWithoutWorkout_exercisesInput>
    connectOrCreate?: workoutsCreateOrConnectWithoutWorkout_exercisesInput
    upsert?: workoutsUpsertWithoutWorkout_exercisesInput
    connect?: workoutsWhereUniqueInput
    update?: XOR<XOR<workoutsUpdateToOneWithWhereWithoutWorkout_exercisesInput, workoutsUpdateWithoutWorkout_exercisesInput>, workoutsUncheckedUpdateWithoutWorkout_exercisesInput>
  }

  export type workout_assignmentsCreateNestedManyWithoutWorkoutsInput = {
    create?: XOR<workout_assignmentsCreateWithoutWorkoutsInput, workout_assignmentsUncheckedCreateWithoutWorkoutsInput> | workout_assignmentsCreateWithoutWorkoutsInput[] | workout_assignmentsUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: workout_assignmentsCreateOrConnectWithoutWorkoutsInput | workout_assignmentsCreateOrConnectWithoutWorkoutsInput[]
    createMany?: workout_assignmentsCreateManyWorkoutsInputEnvelope
    connect?: workout_assignmentsWhereUniqueInput | workout_assignmentsWhereUniqueInput[]
  }

  export type workout_exercisesCreateNestedManyWithoutWorkoutsInput = {
    create?: XOR<workout_exercisesCreateWithoutWorkoutsInput, workout_exercisesUncheckedCreateWithoutWorkoutsInput> | workout_exercisesCreateWithoutWorkoutsInput[] | workout_exercisesUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutWorkoutsInput | workout_exercisesCreateOrConnectWithoutWorkoutsInput[]
    createMany?: workout_exercisesCreateManyWorkoutsInputEnvelope
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<usersCreateWithoutWorkoutsInput, usersUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkoutsInput
    connect?: usersWhereUniqueInput
  }

  export type workout_assignmentsUncheckedCreateNestedManyWithoutWorkoutsInput = {
    create?: XOR<workout_assignmentsCreateWithoutWorkoutsInput, workout_assignmentsUncheckedCreateWithoutWorkoutsInput> | workout_assignmentsCreateWithoutWorkoutsInput[] | workout_assignmentsUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: workout_assignmentsCreateOrConnectWithoutWorkoutsInput | workout_assignmentsCreateOrConnectWithoutWorkoutsInput[]
    createMany?: workout_assignmentsCreateManyWorkoutsInputEnvelope
    connect?: workout_assignmentsWhereUniqueInput | workout_assignmentsWhereUniqueInput[]
  }

  export type workout_exercisesUncheckedCreateNestedManyWithoutWorkoutsInput = {
    create?: XOR<workout_exercisesCreateWithoutWorkoutsInput, workout_exercisesUncheckedCreateWithoutWorkoutsInput> | workout_exercisesCreateWithoutWorkoutsInput[] | workout_exercisesUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutWorkoutsInput | workout_exercisesCreateOrConnectWithoutWorkoutsInput[]
    createMany?: workout_exercisesCreateManyWorkoutsInputEnvelope
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
  }

  export type workout_assignmentsUpdateManyWithoutWorkoutsNestedInput = {
    create?: XOR<workout_assignmentsCreateWithoutWorkoutsInput, workout_assignmentsUncheckedCreateWithoutWorkoutsInput> | workout_assignmentsCreateWithoutWorkoutsInput[] | workout_assignmentsUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: workout_assignmentsCreateOrConnectWithoutWorkoutsInput | workout_assignmentsCreateOrConnectWithoutWorkoutsInput[]
    upsert?: workout_assignmentsUpsertWithWhereUniqueWithoutWorkoutsInput | workout_assignmentsUpsertWithWhereUniqueWithoutWorkoutsInput[]
    createMany?: workout_assignmentsCreateManyWorkoutsInputEnvelope
    set?: workout_assignmentsWhereUniqueInput | workout_assignmentsWhereUniqueInput[]
    disconnect?: workout_assignmentsWhereUniqueInput | workout_assignmentsWhereUniqueInput[]
    delete?: workout_assignmentsWhereUniqueInput | workout_assignmentsWhereUniqueInput[]
    connect?: workout_assignmentsWhereUniqueInput | workout_assignmentsWhereUniqueInput[]
    update?: workout_assignmentsUpdateWithWhereUniqueWithoutWorkoutsInput | workout_assignmentsUpdateWithWhereUniqueWithoutWorkoutsInput[]
    updateMany?: workout_assignmentsUpdateManyWithWhereWithoutWorkoutsInput | workout_assignmentsUpdateManyWithWhereWithoutWorkoutsInput[]
    deleteMany?: workout_assignmentsScalarWhereInput | workout_assignmentsScalarWhereInput[]
  }

  export type workout_exercisesUpdateManyWithoutWorkoutsNestedInput = {
    create?: XOR<workout_exercisesCreateWithoutWorkoutsInput, workout_exercisesUncheckedCreateWithoutWorkoutsInput> | workout_exercisesCreateWithoutWorkoutsInput[] | workout_exercisesUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutWorkoutsInput | workout_exercisesCreateOrConnectWithoutWorkoutsInput[]
    upsert?: workout_exercisesUpsertWithWhereUniqueWithoutWorkoutsInput | workout_exercisesUpsertWithWhereUniqueWithoutWorkoutsInput[]
    createMany?: workout_exercisesCreateManyWorkoutsInputEnvelope
    set?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    disconnect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    delete?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    update?: workout_exercisesUpdateWithWhereUniqueWithoutWorkoutsInput | workout_exercisesUpdateWithWhereUniqueWithoutWorkoutsInput[]
    updateMany?: workout_exercisesUpdateManyWithWhereWithoutWorkoutsInput | workout_exercisesUpdateManyWithWhereWithoutWorkoutsInput[]
    deleteMany?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<usersCreateWithoutWorkoutsInput, usersUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkoutsInput
    upsert?: usersUpsertWithoutWorkoutsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWorkoutsInput, usersUpdateWithoutWorkoutsInput>, usersUncheckedUpdateWithoutWorkoutsInput>
  }

  export type workout_assignmentsUncheckedUpdateManyWithoutWorkoutsNestedInput = {
    create?: XOR<workout_assignmentsCreateWithoutWorkoutsInput, workout_assignmentsUncheckedCreateWithoutWorkoutsInput> | workout_assignmentsCreateWithoutWorkoutsInput[] | workout_assignmentsUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: workout_assignmentsCreateOrConnectWithoutWorkoutsInput | workout_assignmentsCreateOrConnectWithoutWorkoutsInput[]
    upsert?: workout_assignmentsUpsertWithWhereUniqueWithoutWorkoutsInput | workout_assignmentsUpsertWithWhereUniqueWithoutWorkoutsInput[]
    createMany?: workout_assignmentsCreateManyWorkoutsInputEnvelope
    set?: workout_assignmentsWhereUniqueInput | workout_assignmentsWhereUniqueInput[]
    disconnect?: workout_assignmentsWhereUniqueInput | workout_assignmentsWhereUniqueInput[]
    delete?: workout_assignmentsWhereUniqueInput | workout_assignmentsWhereUniqueInput[]
    connect?: workout_assignmentsWhereUniqueInput | workout_assignmentsWhereUniqueInput[]
    update?: workout_assignmentsUpdateWithWhereUniqueWithoutWorkoutsInput | workout_assignmentsUpdateWithWhereUniqueWithoutWorkoutsInput[]
    updateMany?: workout_assignmentsUpdateManyWithWhereWithoutWorkoutsInput | workout_assignmentsUpdateManyWithWhereWithoutWorkoutsInput[]
    deleteMany?: workout_assignmentsScalarWhereInput | workout_assignmentsScalarWhereInput[]
  }

  export type workout_exercisesUncheckedUpdateManyWithoutWorkoutsNestedInput = {
    create?: XOR<workout_exercisesCreateWithoutWorkoutsInput, workout_exercisesUncheckedCreateWithoutWorkoutsInput> | workout_exercisesCreateWithoutWorkoutsInput[] | workout_exercisesUncheckedCreateWithoutWorkoutsInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutWorkoutsInput | workout_exercisesCreateOrConnectWithoutWorkoutsInput[]
    upsert?: workout_exercisesUpsertWithWhereUniqueWithoutWorkoutsInput | workout_exercisesUpsertWithWhereUniqueWithoutWorkoutsInput[]
    createMany?: workout_exercisesCreateManyWorkoutsInputEnvelope
    set?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    disconnect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    delete?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    update?: workout_exercisesUpdateWithWhereUniqueWithoutWorkoutsInput | workout_exercisesUpdateWithWhereUniqueWithoutWorkoutsInput[]
    updateMany?: workout_exercisesUpdateManyWithWhereWithoutWorkoutsInput | workout_exercisesUpdateManyWithWhereWithoutWorkoutsInput[]
    deleteMany?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumuser_team_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_team_role | Enumuser_team_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_team_role[] | ListEnumuser_team_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_team_role[] | ListEnumuser_team_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_team_roleFilter<$PrismaModel> | $Enums.user_team_role
  }

  export type NestedEnumuser_team_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_team_role | Enumuser_team_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_team_role[] | ListEnumuser_team_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_team_role[] | ListEnumuser_team_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_team_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_team_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_team_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_team_roleFilter<$PrismaModel>
  }

  export type NestedEnumassignee_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.assignee_type_enum | Enumassignee_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.assignee_type_enum[] | ListEnumassignee_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.assignee_type_enum[] | ListEnumassignee_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumassignee_type_enumFilter<$PrismaModel> | $Enums.assignee_type_enum
  }

  export type NestedEnumassignee_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.assignee_type_enum | Enumassignee_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.assignee_type_enum[] | ListEnumassignee_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.assignee_type_enum[] | ListEnumassignee_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumassignee_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.assignee_type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumassignee_type_enumFilter<$PrismaModel>
    _max?: NestedEnumassignee_type_enumFilter<$PrismaModel>
  }

  export type schoolsCreateWithoutAddressesInput = {
    school_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams?: teamsCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsUncheckedCreateWithoutAddressesInput = {
    id?: number
    school_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams?: teamsUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsCreateOrConnectWithoutAddressesInput = {
    where: schoolsWhereUniqueInput
    create: XOR<schoolsCreateWithoutAddressesInput, schoolsUncheckedCreateWithoutAddressesInput>
  }

  export type schoolsUpsertWithoutAddressesInput = {
    update: XOR<schoolsUpdateWithoutAddressesInput, schoolsUncheckedUpdateWithoutAddressesInput>
    create: XOR<schoolsCreateWithoutAddressesInput, schoolsUncheckedCreateWithoutAddressesInput>
    where?: schoolsWhereInput
  }

  export type schoolsUpdateToOneWithWhereWithoutAddressesInput = {
    where?: schoolsWhereInput
    data: XOR<schoolsUpdateWithoutAddressesInput, schoolsUncheckedUpdateWithoutAddressesInput>
  }

  export type schoolsUpdateWithoutAddressesInput = {
    school_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUpdateManyWithoutSchoolsNestedInput
  }

  export type schoolsUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    school_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type player_exercise_progressCreateWithoutExercisesInput = {
    completed_sets?: number
    completed_reps?: number
    weight_used?: number | null
    notes?: string | null
    recorded_at: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_assignments: workout_assignmentsCreateNestedOneWithoutPlayer_exercise_progressInput
  }

  export type player_exercise_progressUncheckedCreateWithoutExercisesInput = {
    id?: number
    workout_assignment_id: number
    completed_sets?: number
    completed_reps?: number
    weight_used?: number | null
    notes?: string | null
    recorded_at: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type player_exercise_progressCreateOrConnectWithoutExercisesInput = {
    where: player_exercise_progressWhereUniqueInput
    create: XOR<player_exercise_progressCreateWithoutExercisesInput, player_exercise_progressUncheckedCreateWithoutExercisesInput>
  }

  export type player_exercise_progressCreateManyExercisesInputEnvelope = {
    data: player_exercise_progressCreateManyExercisesInput | player_exercise_progressCreateManyExercisesInput[]
    skipDuplicates?: boolean
  }

  export type workout_exercisesCreateWithoutExercisesInput = {
    sets: number
    reps: number
    rest_interval: number
    rpe?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workouts: workoutsCreateNestedOneWithoutWorkout_exercisesInput
  }

  export type workout_exercisesUncheckedCreateWithoutExercisesInput = {
    id?: number
    workout_id: number
    sets: number
    reps: number
    rest_interval: number
    rpe?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_exercisesCreateOrConnectWithoutExercisesInput = {
    where: workout_exercisesWhereUniqueInput
    create: XOR<workout_exercisesCreateWithoutExercisesInput, workout_exercisesUncheckedCreateWithoutExercisesInput>
  }

  export type workout_exercisesCreateManyExercisesInputEnvelope = {
    data: workout_exercisesCreateManyExercisesInput | workout_exercisesCreateManyExercisesInput[]
    skipDuplicates?: boolean
  }

  export type player_exercise_progressUpsertWithWhereUniqueWithoutExercisesInput = {
    where: player_exercise_progressWhereUniqueInput
    update: XOR<player_exercise_progressUpdateWithoutExercisesInput, player_exercise_progressUncheckedUpdateWithoutExercisesInput>
    create: XOR<player_exercise_progressCreateWithoutExercisesInput, player_exercise_progressUncheckedCreateWithoutExercisesInput>
  }

  export type player_exercise_progressUpdateWithWhereUniqueWithoutExercisesInput = {
    where: player_exercise_progressWhereUniqueInput
    data: XOR<player_exercise_progressUpdateWithoutExercisesInput, player_exercise_progressUncheckedUpdateWithoutExercisesInput>
  }

  export type player_exercise_progressUpdateManyWithWhereWithoutExercisesInput = {
    where: player_exercise_progressScalarWhereInput
    data: XOR<player_exercise_progressUpdateManyMutationInput, player_exercise_progressUncheckedUpdateManyWithoutExercisesInput>
  }

  export type player_exercise_progressScalarWhereInput = {
    AND?: player_exercise_progressScalarWhereInput | player_exercise_progressScalarWhereInput[]
    OR?: player_exercise_progressScalarWhereInput[]
    NOT?: player_exercise_progressScalarWhereInput | player_exercise_progressScalarWhereInput[]
    id?: IntFilter<"player_exercise_progress"> | number
    workout_assignment_id?: IntFilter<"player_exercise_progress"> | number
    exercise_id?: IntFilter<"player_exercise_progress"> | number
    completed_sets?: IntFilter<"player_exercise_progress"> | number
    completed_reps?: IntFilter<"player_exercise_progress"> | number
    weight_used?: FloatNullableFilter<"player_exercise_progress"> | number | null
    notes?: StringNullableFilter<"player_exercise_progress"> | string | null
    recorded_at?: DateTimeFilter<"player_exercise_progress"> | Date | string
    created_at?: DateTimeNullableFilter<"player_exercise_progress"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"player_exercise_progress"> | Date | string | null
  }

  export type workout_exercisesUpsertWithWhereUniqueWithoutExercisesInput = {
    where: workout_exercisesWhereUniqueInput
    update: XOR<workout_exercisesUpdateWithoutExercisesInput, workout_exercisesUncheckedUpdateWithoutExercisesInput>
    create: XOR<workout_exercisesCreateWithoutExercisesInput, workout_exercisesUncheckedCreateWithoutExercisesInput>
  }

  export type workout_exercisesUpdateWithWhereUniqueWithoutExercisesInput = {
    where: workout_exercisesWhereUniqueInput
    data: XOR<workout_exercisesUpdateWithoutExercisesInput, workout_exercisesUncheckedUpdateWithoutExercisesInput>
  }

  export type workout_exercisesUpdateManyWithWhereWithoutExercisesInput = {
    where: workout_exercisesScalarWhereInput
    data: XOR<workout_exercisesUpdateManyMutationInput, workout_exercisesUncheckedUpdateManyWithoutExercisesInput>
  }

  export type workout_exercisesScalarWhereInput = {
    AND?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
    OR?: workout_exercisesScalarWhereInput[]
    NOT?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
    id?: IntFilter<"workout_exercises"> | number
    workout_id?: IntFilter<"workout_exercises"> | number
    exercise_id?: IntFilter<"workout_exercises"> | number
    sets?: IntFilter<"workout_exercises"> | number
    reps?: IntFilter<"workout_exercises"> | number
    rest_interval?: IntFilter<"workout_exercises"> | number
    rpe?: IntNullableFilter<"workout_exercises"> | number | null
    created_at?: DateTimeNullableFilter<"workout_exercises"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_exercises"> | Date | string | null
  }

  export type exercisesCreateWithoutPlayer_exercise_progressInput = {
    exercise_name: string
    description?: string | null
    muscle_group?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_exercises?: workout_exercisesCreateNestedManyWithoutExercisesInput
  }

  export type exercisesUncheckedCreateWithoutPlayer_exercise_progressInput = {
    id?: number
    exercise_name: string
    description?: string | null
    muscle_group?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_exercises?: workout_exercisesUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type exercisesCreateOrConnectWithoutPlayer_exercise_progressInput = {
    where: exercisesWhereUniqueInput
    create: XOR<exercisesCreateWithoutPlayer_exercise_progressInput, exercisesUncheckedCreateWithoutPlayer_exercise_progressInput>
  }

  export type workout_assignmentsCreateWithoutPlayer_exercise_progressInput = {
    assignee_type: $Enums.assignee_type_enum
    assignee_id: number
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workouts: workoutsCreateNestedOneWithoutWorkout_assignmentsInput
  }

  export type workout_assignmentsUncheckedCreateWithoutPlayer_exercise_progressInput = {
    id?: number
    workout_id: number
    assignee_type: $Enums.assignee_type_enum
    assignee_id: number
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_assignmentsCreateOrConnectWithoutPlayer_exercise_progressInput = {
    where: workout_assignmentsWhereUniqueInput
    create: XOR<workout_assignmentsCreateWithoutPlayer_exercise_progressInput, workout_assignmentsUncheckedCreateWithoutPlayer_exercise_progressInput>
  }

  export type exercisesUpsertWithoutPlayer_exercise_progressInput = {
    update: XOR<exercisesUpdateWithoutPlayer_exercise_progressInput, exercisesUncheckedUpdateWithoutPlayer_exercise_progressInput>
    create: XOR<exercisesCreateWithoutPlayer_exercise_progressInput, exercisesUncheckedCreateWithoutPlayer_exercise_progressInput>
    where?: exercisesWhereInput
  }

  export type exercisesUpdateToOneWithWhereWithoutPlayer_exercise_progressInput = {
    where?: exercisesWhereInput
    data: XOR<exercisesUpdateWithoutPlayer_exercise_progressInput, exercisesUncheckedUpdateWithoutPlayer_exercise_progressInput>
  }

  export type exercisesUpdateWithoutPlayer_exercise_progressInput = {
    exercise_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_exercises?: workout_exercisesUpdateManyWithoutExercisesNestedInput
  }

  export type exercisesUncheckedUpdateWithoutPlayer_exercise_progressInput = {
    id?: IntFieldUpdateOperationsInput | number
    exercise_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_exercises?: workout_exercisesUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type workout_assignmentsUpsertWithoutPlayer_exercise_progressInput = {
    update: XOR<workout_assignmentsUpdateWithoutPlayer_exercise_progressInput, workout_assignmentsUncheckedUpdateWithoutPlayer_exercise_progressInput>
    create: XOR<workout_assignmentsCreateWithoutPlayer_exercise_progressInput, workout_assignmentsUncheckedCreateWithoutPlayer_exercise_progressInput>
    where?: workout_assignmentsWhereInput
  }

  export type workout_assignmentsUpdateToOneWithWhereWithoutPlayer_exercise_progressInput = {
    where?: workout_assignmentsWhereInput
    data: XOR<workout_assignmentsUpdateWithoutPlayer_exercise_progressInput, workout_assignmentsUncheckedUpdateWithoutPlayer_exercise_progressInput>
  }

  export type workout_assignmentsUpdateWithoutPlayer_exercise_progressInput = {
    assignee_type?: Enumassignee_type_enumFieldUpdateOperationsInput | $Enums.assignee_type_enum
    assignee_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workouts?: workoutsUpdateOneRequiredWithoutWorkout_assignmentsNestedInput
  }

  export type workout_assignmentsUncheckedUpdateWithoutPlayer_exercise_progressInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    assignee_type?: Enumassignee_type_enumFieldUpdateOperationsInput | $Enums.assignee_type_enum
    assignee_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type addressesCreateWithoutSchoolsInput = {
    country: string
    administrative_area: string
    sub_administrative_area?: string | null
    locality: string
    dependent_locality?: string | null
    postal_code: string
    thoroughfare: string
    premise?: string | null
    sub_premise?: string | null
    organisation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type addressesUncheckedCreateWithoutSchoolsInput = {
    id?: number
    country: string
    administrative_area: string
    sub_administrative_area?: string | null
    locality: string
    dependent_locality?: string | null
    postal_code: string
    thoroughfare: string
    premise?: string | null
    sub_premise?: string | null
    organisation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type addressesCreateOrConnectWithoutSchoolsInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutSchoolsInput, addressesUncheckedCreateWithoutSchoolsInput>
  }

  export type teamsCreateWithoutSchoolsInput = {
    name: string
    is_school_team: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsCreateNestedManyWithoutTeamsInput
    sports: sportsCreateNestedOneWithoutTeamsInput
    user_teams?: user_teamsCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutSchoolsInput = {
    id?: number
    name: string
    is_school_team: boolean
    sport_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedCreateNestedManyWithoutTeamsInput
    user_teams?: user_teamsUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutSchoolsInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutSchoolsInput, teamsUncheckedCreateWithoutSchoolsInput>
  }

  export type teamsCreateManySchoolsInputEnvelope = {
    data: teamsCreateManySchoolsInput | teamsCreateManySchoolsInput[]
    skipDuplicates?: boolean
  }

  export type addressesUpsertWithoutSchoolsInput = {
    update: XOR<addressesUpdateWithoutSchoolsInput, addressesUncheckedUpdateWithoutSchoolsInput>
    create: XOR<addressesCreateWithoutSchoolsInput, addressesUncheckedCreateWithoutSchoolsInput>
    where?: addressesWhereInput
  }

  export type addressesUpdateToOneWithWhereWithoutSchoolsInput = {
    where?: addressesWhereInput
    data: XOR<addressesUpdateWithoutSchoolsInput, addressesUncheckedUpdateWithoutSchoolsInput>
  }

  export type addressesUpdateWithoutSchoolsInput = {
    country?: StringFieldUpdateOperationsInput | string
    administrative_area?: StringFieldUpdateOperationsInput | string
    sub_administrative_area?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    dependent_locality?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    thoroughfare?: StringFieldUpdateOperationsInput | string
    premise?: NullableStringFieldUpdateOperationsInput | string | null
    sub_premise?: NullableStringFieldUpdateOperationsInput | string | null
    organisation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type addressesUncheckedUpdateWithoutSchoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    administrative_area?: StringFieldUpdateOperationsInput | string
    sub_administrative_area?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    dependent_locality?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: StringFieldUpdateOperationsInput | string
    thoroughfare?: StringFieldUpdateOperationsInput | string
    premise?: NullableStringFieldUpdateOperationsInput | string | null
    sub_premise?: NullableStringFieldUpdateOperationsInput | string | null
    organisation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type teamsUpsertWithWhereUniqueWithoutSchoolsInput = {
    where: teamsWhereUniqueInput
    update: XOR<teamsUpdateWithoutSchoolsInput, teamsUncheckedUpdateWithoutSchoolsInput>
    create: XOR<teamsCreateWithoutSchoolsInput, teamsUncheckedCreateWithoutSchoolsInput>
  }

  export type teamsUpdateWithWhereUniqueWithoutSchoolsInput = {
    where: teamsWhereUniqueInput
    data: XOR<teamsUpdateWithoutSchoolsInput, teamsUncheckedUpdateWithoutSchoolsInput>
  }

  export type teamsUpdateManyWithWhereWithoutSchoolsInput = {
    where: teamsScalarWhereInput
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyWithoutSchoolsInput>
  }

  export type teamsScalarWhereInput = {
    AND?: teamsScalarWhereInput | teamsScalarWhereInput[]
    OR?: teamsScalarWhereInput[]
    NOT?: teamsScalarWhereInput | teamsScalarWhereInput[]
    id?: IntFilter<"teams"> | number
    name?: StringFilter<"teams"> | string
    is_school_team?: BoolFilter<"teams"> | boolean
    school_id?: IntNullableFilter<"teams"> | number | null
    sport_id?: IntFilter<"teams"> | number
    created_at?: DateTimeNullableFilter<"teams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"teams"> | Date | string | null
  }

  export type teamsCreateWithoutSportsInput = {
    name: string
    is_school_team: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsCreateNestedManyWithoutTeamsInput
    schools?: schoolsCreateNestedOneWithoutTeamsInput
    user_teams?: user_teamsCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutSportsInput = {
    id?: number
    name: string
    is_school_team: boolean
    school_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedCreateNestedManyWithoutTeamsInput
    user_teams?: user_teamsUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutSportsInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutSportsInput, teamsUncheckedCreateWithoutSportsInput>
  }

  export type teamsCreateManySportsInputEnvelope = {
    data: teamsCreateManySportsInput | teamsCreateManySportsInput[]
    skipDuplicates?: boolean
  }

  export type teamsUpsertWithWhereUniqueWithoutSportsInput = {
    where: teamsWhereUniqueInput
    update: XOR<teamsUpdateWithoutSportsInput, teamsUncheckedUpdateWithoutSportsInput>
    create: XOR<teamsCreateWithoutSportsInput, teamsUncheckedCreateWithoutSportsInput>
  }

  export type teamsUpdateWithWhereUniqueWithoutSportsInput = {
    where: teamsWhereUniqueInput
    data: XOR<teamsUpdateWithoutSportsInput, teamsUncheckedUpdateWithoutSportsInput>
  }

  export type teamsUpdateManyWithWhereWithoutSportsInput = {
    where: teamsScalarWhereInput
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyWithoutSportsInput>
  }

  export type teamsCreateWithoutTeam_primary_contactsInput = {
    name: string
    is_school_team: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    schools?: schoolsCreateNestedOneWithoutTeamsInput
    sports: sportsCreateNestedOneWithoutTeamsInput
    user_teams?: user_teamsCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutTeam_primary_contactsInput = {
    id?: number
    name: string
    is_school_team: boolean
    school_id?: number | null
    sport_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_teams?: user_teamsUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutTeam_primary_contactsInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutTeam_primary_contactsInput, teamsUncheckedCreateWithoutTeam_primary_contactsInput>
  }

  export type usersCreateWithoutTeam_primary_contactsInput = {
    first_name: string
    last_name: string
    email: string
    is_admin: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_teams?: user_teamsCreateNestedManyWithoutUsersInput
    workouts?: workoutsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTeam_primary_contactsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    is_admin: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_teams?: user_teamsUncheckedCreateNestedManyWithoutUsersInput
    workouts?: workoutsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTeam_primary_contactsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTeam_primary_contactsInput, usersUncheckedCreateWithoutTeam_primary_contactsInput>
  }

  export type teamsUpsertWithoutTeam_primary_contactsInput = {
    update: XOR<teamsUpdateWithoutTeam_primary_contactsInput, teamsUncheckedUpdateWithoutTeam_primary_contactsInput>
    create: XOR<teamsCreateWithoutTeam_primary_contactsInput, teamsUncheckedCreateWithoutTeam_primary_contactsInput>
    where?: teamsWhereInput
  }

  export type teamsUpdateToOneWithWhereWithoutTeam_primary_contactsInput = {
    where?: teamsWhereInput
    data: XOR<teamsUpdateWithoutTeam_primary_contactsInput, teamsUncheckedUpdateWithoutTeam_primary_contactsInput>
  }

  export type teamsUpdateWithoutTeam_primary_contactsInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schools?: schoolsUpdateOneWithoutTeamsNestedInput
    sports?: sportsUpdateOneRequiredWithoutTeamsNestedInput
    user_teams?: user_teamsUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutTeam_primary_contactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    school_id?: NullableIntFieldUpdateOperationsInput | number | null
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_teams?: user_teamsUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type usersUpsertWithoutTeam_primary_contactsInput = {
    update: XOR<usersUpdateWithoutTeam_primary_contactsInput, usersUncheckedUpdateWithoutTeam_primary_contactsInput>
    create: XOR<usersCreateWithoutTeam_primary_contactsInput, usersUncheckedCreateWithoutTeam_primary_contactsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTeam_primary_contactsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTeam_primary_contactsInput, usersUncheckedUpdateWithoutTeam_primary_contactsInput>
  }

  export type usersUpdateWithoutTeam_primary_contactsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_teams?: user_teamsUpdateManyWithoutUsersNestedInput
    workouts?: workoutsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTeam_primary_contactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_teams?: user_teamsUncheckedUpdateManyWithoutUsersNestedInput
    workouts?: workoutsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type team_primary_contactsCreateWithoutTeamsInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutTeam_primary_contactsInput
  }

  export type team_primary_contactsUncheckedCreateWithoutTeamsInput = {
    user_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_primary_contactsCreateOrConnectWithoutTeamsInput = {
    where: team_primary_contactsWhereUniqueInput
    create: XOR<team_primary_contactsCreateWithoutTeamsInput, team_primary_contactsUncheckedCreateWithoutTeamsInput>
  }

  export type team_primary_contactsCreateManyTeamsInputEnvelope = {
    data: team_primary_contactsCreateManyTeamsInput | team_primary_contactsCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type schoolsCreateWithoutTeamsInput = {
    school_name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesCreateNestedOneWithoutSchoolsInput
  }

  export type schoolsUncheckedCreateWithoutTeamsInput = {
    id?: number
    school_name: string
    address_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type schoolsCreateOrConnectWithoutTeamsInput = {
    where: schoolsWhereUniqueInput
    create: XOR<schoolsCreateWithoutTeamsInput, schoolsUncheckedCreateWithoutTeamsInput>
  }

  export type sportsCreateWithoutTeamsInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sportsUncheckedCreateWithoutTeamsInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sportsCreateOrConnectWithoutTeamsInput = {
    where: sportsWhereUniqueInput
    create: XOR<sportsCreateWithoutTeamsInput, sportsUncheckedCreateWithoutTeamsInput>
  }

  export type user_teamsCreateWithoutTeamsInput = {
    role: $Enums.user_team_role
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutUser_teamsInput
  }

  export type user_teamsUncheckedCreateWithoutTeamsInput = {
    user_id: number
    role: $Enums.user_team_role
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_teamsCreateOrConnectWithoutTeamsInput = {
    where: user_teamsWhereUniqueInput
    create: XOR<user_teamsCreateWithoutTeamsInput, user_teamsUncheckedCreateWithoutTeamsInput>
  }

  export type user_teamsCreateManyTeamsInputEnvelope = {
    data: user_teamsCreateManyTeamsInput | user_teamsCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type team_primary_contactsUpsertWithWhereUniqueWithoutTeamsInput = {
    where: team_primary_contactsWhereUniqueInput
    update: XOR<team_primary_contactsUpdateWithoutTeamsInput, team_primary_contactsUncheckedUpdateWithoutTeamsInput>
    create: XOR<team_primary_contactsCreateWithoutTeamsInput, team_primary_contactsUncheckedCreateWithoutTeamsInput>
  }

  export type team_primary_contactsUpdateWithWhereUniqueWithoutTeamsInput = {
    where: team_primary_contactsWhereUniqueInput
    data: XOR<team_primary_contactsUpdateWithoutTeamsInput, team_primary_contactsUncheckedUpdateWithoutTeamsInput>
  }

  export type team_primary_contactsUpdateManyWithWhereWithoutTeamsInput = {
    where: team_primary_contactsScalarWhereInput
    data: XOR<team_primary_contactsUpdateManyMutationInput, team_primary_contactsUncheckedUpdateManyWithoutTeamsInput>
  }

  export type team_primary_contactsScalarWhereInput = {
    AND?: team_primary_contactsScalarWhereInput | team_primary_contactsScalarWhereInput[]
    OR?: team_primary_contactsScalarWhereInput[]
    NOT?: team_primary_contactsScalarWhereInput | team_primary_contactsScalarWhereInput[]
    team_id?: IntFilter<"team_primary_contacts"> | number
    user_id?: IntFilter<"team_primary_contacts"> | number
    created_at?: DateTimeNullableFilter<"team_primary_contacts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"team_primary_contacts"> | Date | string | null
  }

  export type schoolsUpsertWithoutTeamsInput = {
    update: XOR<schoolsUpdateWithoutTeamsInput, schoolsUncheckedUpdateWithoutTeamsInput>
    create: XOR<schoolsCreateWithoutTeamsInput, schoolsUncheckedCreateWithoutTeamsInput>
    where?: schoolsWhereInput
  }

  export type schoolsUpdateToOneWithWhereWithoutTeamsInput = {
    where?: schoolsWhereInput
    data: XOR<schoolsUpdateWithoutTeamsInput, schoolsUncheckedUpdateWithoutTeamsInput>
  }

  export type schoolsUpdateWithoutTeamsInput = {
    school_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUpdateOneWithoutSchoolsNestedInput
  }

  export type schoolsUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    school_name?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sportsUpsertWithoutTeamsInput = {
    update: XOR<sportsUpdateWithoutTeamsInput, sportsUncheckedUpdateWithoutTeamsInput>
    create: XOR<sportsCreateWithoutTeamsInput, sportsUncheckedCreateWithoutTeamsInput>
    where?: sportsWhereInput
  }

  export type sportsUpdateToOneWithWhereWithoutTeamsInput = {
    where?: sportsWhereInput
    data: XOR<sportsUpdateWithoutTeamsInput, sportsUncheckedUpdateWithoutTeamsInput>
  }

  export type sportsUpdateWithoutTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sportsUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_teamsUpsertWithWhereUniqueWithoutTeamsInput = {
    where: user_teamsWhereUniqueInput
    update: XOR<user_teamsUpdateWithoutTeamsInput, user_teamsUncheckedUpdateWithoutTeamsInput>
    create: XOR<user_teamsCreateWithoutTeamsInput, user_teamsUncheckedCreateWithoutTeamsInput>
  }

  export type user_teamsUpdateWithWhereUniqueWithoutTeamsInput = {
    where: user_teamsWhereUniqueInput
    data: XOR<user_teamsUpdateWithoutTeamsInput, user_teamsUncheckedUpdateWithoutTeamsInput>
  }

  export type user_teamsUpdateManyWithWhereWithoutTeamsInput = {
    where: user_teamsScalarWhereInput
    data: XOR<user_teamsUpdateManyMutationInput, user_teamsUncheckedUpdateManyWithoutTeamsInput>
  }

  export type user_teamsScalarWhereInput = {
    AND?: user_teamsScalarWhereInput | user_teamsScalarWhereInput[]
    OR?: user_teamsScalarWhereInput[]
    NOT?: user_teamsScalarWhereInput | user_teamsScalarWhereInput[]
    team_id?: IntFilter<"user_teams"> | number
    user_id?: IntFilter<"user_teams"> | number
    role?: Enumuser_team_roleFilter<"user_teams"> | $Enums.user_team_role
    start_date?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    end_date?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    created_at?: DateTimeNullableFilter<"user_teams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_teams"> | Date | string | null
  }

  export type teamsCreateWithoutUser_teamsInput = {
    name: string
    is_school_team: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsCreateNestedManyWithoutTeamsInput
    schools?: schoolsCreateNestedOneWithoutTeamsInput
    sports: sportsCreateNestedOneWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutUser_teamsInput = {
    id?: number
    name: string
    is_school_team: boolean
    school_id?: number | null
    sport_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutUser_teamsInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutUser_teamsInput, teamsUncheckedCreateWithoutUser_teamsInput>
  }

  export type usersCreateWithoutUser_teamsInput = {
    first_name: string
    last_name: string
    email: string
    is_admin: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsCreateNestedManyWithoutUsersInput
    workouts?: workoutsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_teamsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    is_admin: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedCreateNestedManyWithoutUsersInput
    workouts?: workoutsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_teamsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_teamsInput, usersUncheckedCreateWithoutUser_teamsInput>
  }

  export type teamsUpsertWithoutUser_teamsInput = {
    update: XOR<teamsUpdateWithoutUser_teamsInput, teamsUncheckedUpdateWithoutUser_teamsInput>
    create: XOR<teamsCreateWithoutUser_teamsInput, teamsUncheckedCreateWithoutUser_teamsInput>
    where?: teamsWhereInput
  }

  export type teamsUpdateToOneWithWhereWithoutUser_teamsInput = {
    where?: teamsWhereInput
    data: XOR<teamsUpdateWithoutUser_teamsInput, teamsUncheckedUpdateWithoutUser_teamsInput>
  }

  export type teamsUpdateWithoutUser_teamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUpdateManyWithoutTeamsNestedInput
    schools?: schoolsUpdateOneWithoutTeamsNestedInput
    sports?: sportsUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutUser_teamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    school_id?: NullableIntFieldUpdateOperationsInput | number | null
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type usersUpsertWithoutUser_teamsInput = {
    update: XOR<usersUpdateWithoutUser_teamsInput, usersUncheckedUpdateWithoutUser_teamsInput>
    create: XOR<usersCreateWithoutUser_teamsInput, usersUncheckedCreateWithoutUser_teamsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_teamsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_teamsInput, usersUncheckedUpdateWithoutUser_teamsInput>
  }

  export type usersUpdateWithoutUser_teamsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUpdateManyWithoutUsersNestedInput
    workouts?: workoutsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_teamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedUpdateManyWithoutUsersNestedInput
    workouts?: workoutsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type team_primary_contactsCreateWithoutUsersInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams: teamsCreateNestedOneWithoutTeam_primary_contactsInput
  }

  export type team_primary_contactsUncheckedCreateWithoutUsersInput = {
    team_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_primary_contactsCreateOrConnectWithoutUsersInput = {
    where: team_primary_contactsWhereUniqueInput
    create: XOR<team_primary_contactsCreateWithoutUsersInput, team_primary_contactsUncheckedCreateWithoutUsersInput>
  }

  export type team_primary_contactsCreateManyUsersInputEnvelope = {
    data: team_primary_contactsCreateManyUsersInput | team_primary_contactsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_teamsCreateWithoutUsersInput = {
    role: $Enums.user_team_role
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teams: teamsCreateNestedOneWithoutUser_teamsInput
  }

  export type user_teamsUncheckedCreateWithoutUsersInput = {
    team_id: number
    role: $Enums.user_team_role
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_teamsCreateOrConnectWithoutUsersInput = {
    where: user_teamsWhereUniqueInput
    create: XOR<user_teamsCreateWithoutUsersInput, user_teamsUncheckedCreateWithoutUsersInput>
  }

  export type user_teamsCreateManyUsersInputEnvelope = {
    data: user_teamsCreateManyUsersInput | user_teamsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type workoutsCreateWithoutUsersInput = {
    workout_name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_assignments?: workout_assignmentsCreateNestedManyWithoutWorkoutsInput
    workout_exercises?: workout_exercisesCreateNestedManyWithoutWorkoutsInput
  }

  export type workoutsUncheckedCreateWithoutUsersInput = {
    id?: number
    workout_name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_assignments?: workout_assignmentsUncheckedCreateNestedManyWithoutWorkoutsInput
    workout_exercises?: workout_exercisesUncheckedCreateNestedManyWithoutWorkoutsInput
  }

  export type workoutsCreateOrConnectWithoutUsersInput = {
    where: workoutsWhereUniqueInput
    create: XOR<workoutsCreateWithoutUsersInput, workoutsUncheckedCreateWithoutUsersInput>
  }

  export type workoutsCreateManyUsersInputEnvelope = {
    data: workoutsCreateManyUsersInput | workoutsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type team_primary_contactsUpsertWithWhereUniqueWithoutUsersInput = {
    where: team_primary_contactsWhereUniqueInput
    update: XOR<team_primary_contactsUpdateWithoutUsersInput, team_primary_contactsUncheckedUpdateWithoutUsersInput>
    create: XOR<team_primary_contactsCreateWithoutUsersInput, team_primary_contactsUncheckedCreateWithoutUsersInput>
  }

  export type team_primary_contactsUpdateWithWhereUniqueWithoutUsersInput = {
    where: team_primary_contactsWhereUniqueInput
    data: XOR<team_primary_contactsUpdateWithoutUsersInput, team_primary_contactsUncheckedUpdateWithoutUsersInput>
  }

  export type team_primary_contactsUpdateManyWithWhereWithoutUsersInput = {
    where: team_primary_contactsScalarWhereInput
    data: XOR<team_primary_contactsUpdateManyMutationInput, team_primary_contactsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_teamsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_teamsWhereUniqueInput
    update: XOR<user_teamsUpdateWithoutUsersInput, user_teamsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_teamsCreateWithoutUsersInput, user_teamsUncheckedCreateWithoutUsersInput>
  }

  export type user_teamsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_teamsWhereUniqueInput
    data: XOR<user_teamsUpdateWithoutUsersInput, user_teamsUncheckedUpdateWithoutUsersInput>
  }

  export type user_teamsUpdateManyWithWhereWithoutUsersInput = {
    where: user_teamsScalarWhereInput
    data: XOR<user_teamsUpdateManyMutationInput, user_teamsUncheckedUpdateManyWithoutUsersInput>
  }

  export type workoutsUpsertWithWhereUniqueWithoutUsersInput = {
    where: workoutsWhereUniqueInput
    update: XOR<workoutsUpdateWithoutUsersInput, workoutsUncheckedUpdateWithoutUsersInput>
    create: XOR<workoutsCreateWithoutUsersInput, workoutsUncheckedCreateWithoutUsersInput>
  }

  export type workoutsUpdateWithWhereUniqueWithoutUsersInput = {
    where: workoutsWhereUniqueInput
    data: XOR<workoutsUpdateWithoutUsersInput, workoutsUncheckedUpdateWithoutUsersInput>
  }

  export type workoutsUpdateManyWithWhereWithoutUsersInput = {
    where: workoutsScalarWhereInput
    data: XOR<workoutsUpdateManyMutationInput, workoutsUncheckedUpdateManyWithoutUsersInput>
  }

  export type workoutsScalarWhereInput = {
    AND?: workoutsScalarWhereInput | workoutsScalarWhereInput[]
    OR?: workoutsScalarWhereInput[]
    NOT?: workoutsScalarWhereInput | workoutsScalarWhereInput[]
    id?: IntFilter<"workouts"> | number
    created_by?: IntFilter<"workouts"> | number
    workout_name?: StringFilter<"workouts"> | string
    description?: StringNullableFilter<"workouts"> | string | null
    created_at?: DateTimeNullableFilter<"workouts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workouts"> | Date | string | null
  }

  export type player_exercise_progressCreateWithoutWorkout_assignmentsInput = {
    completed_sets?: number
    completed_reps?: number
    weight_used?: number | null
    notes?: string | null
    recorded_at: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercises: exercisesCreateNestedOneWithoutPlayer_exercise_progressInput
  }

  export type player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput = {
    id?: number
    exercise_id: number
    completed_sets?: number
    completed_reps?: number
    weight_used?: number | null
    notes?: string | null
    recorded_at: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type player_exercise_progressCreateOrConnectWithoutWorkout_assignmentsInput = {
    where: player_exercise_progressWhereUniqueInput
    create: XOR<player_exercise_progressCreateWithoutWorkout_assignmentsInput, player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput>
  }

  export type player_exercise_progressCreateManyWorkout_assignmentsInputEnvelope = {
    data: player_exercise_progressCreateManyWorkout_assignmentsInput | player_exercise_progressCreateManyWorkout_assignmentsInput[]
    skipDuplicates?: boolean
  }

  export type workoutsCreateWithoutWorkout_assignmentsInput = {
    workout_name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_exercises?: workout_exercisesCreateNestedManyWithoutWorkoutsInput
    users: usersCreateNestedOneWithoutWorkoutsInput
  }

  export type workoutsUncheckedCreateWithoutWorkout_assignmentsInput = {
    id?: number
    created_by: number
    workout_name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_exercises?: workout_exercisesUncheckedCreateNestedManyWithoutWorkoutsInput
  }

  export type workoutsCreateOrConnectWithoutWorkout_assignmentsInput = {
    where: workoutsWhereUniqueInput
    create: XOR<workoutsCreateWithoutWorkout_assignmentsInput, workoutsUncheckedCreateWithoutWorkout_assignmentsInput>
  }

  export type player_exercise_progressUpsertWithWhereUniqueWithoutWorkout_assignmentsInput = {
    where: player_exercise_progressWhereUniqueInput
    update: XOR<player_exercise_progressUpdateWithoutWorkout_assignmentsInput, player_exercise_progressUncheckedUpdateWithoutWorkout_assignmentsInput>
    create: XOR<player_exercise_progressCreateWithoutWorkout_assignmentsInput, player_exercise_progressUncheckedCreateWithoutWorkout_assignmentsInput>
  }

  export type player_exercise_progressUpdateWithWhereUniqueWithoutWorkout_assignmentsInput = {
    where: player_exercise_progressWhereUniqueInput
    data: XOR<player_exercise_progressUpdateWithoutWorkout_assignmentsInput, player_exercise_progressUncheckedUpdateWithoutWorkout_assignmentsInput>
  }

  export type player_exercise_progressUpdateManyWithWhereWithoutWorkout_assignmentsInput = {
    where: player_exercise_progressScalarWhereInput
    data: XOR<player_exercise_progressUpdateManyMutationInput, player_exercise_progressUncheckedUpdateManyWithoutWorkout_assignmentsInput>
  }

  export type workoutsUpsertWithoutWorkout_assignmentsInput = {
    update: XOR<workoutsUpdateWithoutWorkout_assignmentsInput, workoutsUncheckedUpdateWithoutWorkout_assignmentsInput>
    create: XOR<workoutsCreateWithoutWorkout_assignmentsInput, workoutsUncheckedCreateWithoutWorkout_assignmentsInput>
    where?: workoutsWhereInput
  }

  export type workoutsUpdateToOneWithWhereWithoutWorkout_assignmentsInput = {
    where?: workoutsWhereInput
    data: XOR<workoutsUpdateWithoutWorkout_assignmentsInput, workoutsUncheckedUpdateWithoutWorkout_assignmentsInput>
  }

  export type workoutsUpdateWithoutWorkout_assignmentsInput = {
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_exercises?: workout_exercisesUpdateManyWithoutWorkoutsNestedInput
    users?: usersUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type workoutsUncheckedUpdateWithoutWorkout_assignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_exercises?: workout_exercisesUncheckedUpdateManyWithoutWorkoutsNestedInput
  }

  export type exercisesCreateWithoutWorkout_exercisesInput = {
    exercise_name: string
    description?: string | null
    muscle_group?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    player_exercise_progress?: player_exercise_progressCreateNestedManyWithoutExercisesInput
  }

  export type exercisesUncheckedCreateWithoutWorkout_exercisesInput = {
    id?: number
    exercise_name: string
    description?: string | null
    muscle_group?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    player_exercise_progress?: player_exercise_progressUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type exercisesCreateOrConnectWithoutWorkout_exercisesInput = {
    where: exercisesWhereUniqueInput
    create: XOR<exercisesCreateWithoutWorkout_exercisesInput, exercisesUncheckedCreateWithoutWorkout_exercisesInput>
  }

  export type workoutsCreateWithoutWorkout_exercisesInput = {
    workout_name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_assignments?: workout_assignmentsCreateNestedManyWithoutWorkoutsInput
    users: usersCreateNestedOneWithoutWorkoutsInput
  }

  export type workoutsUncheckedCreateWithoutWorkout_exercisesInput = {
    id?: number
    created_by: number
    workout_name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workout_assignments?: workout_assignmentsUncheckedCreateNestedManyWithoutWorkoutsInput
  }

  export type workoutsCreateOrConnectWithoutWorkout_exercisesInput = {
    where: workoutsWhereUniqueInput
    create: XOR<workoutsCreateWithoutWorkout_exercisesInput, workoutsUncheckedCreateWithoutWorkout_exercisesInput>
  }

  export type exercisesUpsertWithoutWorkout_exercisesInput = {
    update: XOR<exercisesUpdateWithoutWorkout_exercisesInput, exercisesUncheckedUpdateWithoutWorkout_exercisesInput>
    create: XOR<exercisesCreateWithoutWorkout_exercisesInput, exercisesUncheckedCreateWithoutWorkout_exercisesInput>
    where?: exercisesWhereInput
  }

  export type exercisesUpdateToOneWithWhereWithoutWorkout_exercisesInput = {
    where?: exercisesWhereInput
    data: XOR<exercisesUpdateWithoutWorkout_exercisesInput, exercisesUncheckedUpdateWithoutWorkout_exercisesInput>
  }

  export type exercisesUpdateWithoutWorkout_exercisesInput = {
    exercise_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_exercise_progress?: player_exercise_progressUpdateManyWithoutExercisesNestedInput
  }

  export type exercisesUncheckedUpdateWithoutWorkout_exercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    exercise_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_exercise_progress?: player_exercise_progressUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type workoutsUpsertWithoutWorkout_exercisesInput = {
    update: XOR<workoutsUpdateWithoutWorkout_exercisesInput, workoutsUncheckedUpdateWithoutWorkout_exercisesInput>
    create: XOR<workoutsCreateWithoutWorkout_exercisesInput, workoutsUncheckedCreateWithoutWorkout_exercisesInput>
    where?: workoutsWhereInput
  }

  export type workoutsUpdateToOneWithWhereWithoutWorkout_exercisesInput = {
    where?: workoutsWhereInput
    data: XOR<workoutsUpdateWithoutWorkout_exercisesInput, workoutsUncheckedUpdateWithoutWorkout_exercisesInput>
  }

  export type workoutsUpdateWithoutWorkout_exercisesInput = {
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_assignments?: workout_assignmentsUpdateManyWithoutWorkoutsNestedInput
    users?: usersUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type workoutsUncheckedUpdateWithoutWorkout_exercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_assignments?: workout_assignmentsUncheckedUpdateManyWithoutWorkoutsNestedInput
  }

  export type workout_assignmentsCreateWithoutWorkoutsInput = {
    assignee_type: $Enums.assignee_type_enum
    assignee_id: number
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    player_exercise_progress?: player_exercise_progressCreateNestedManyWithoutWorkout_assignmentsInput
  }

  export type workout_assignmentsUncheckedCreateWithoutWorkoutsInput = {
    id?: number
    assignee_type: $Enums.assignee_type_enum
    assignee_id: number
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    player_exercise_progress?: player_exercise_progressUncheckedCreateNestedManyWithoutWorkout_assignmentsInput
  }

  export type workout_assignmentsCreateOrConnectWithoutWorkoutsInput = {
    where: workout_assignmentsWhereUniqueInput
    create: XOR<workout_assignmentsCreateWithoutWorkoutsInput, workout_assignmentsUncheckedCreateWithoutWorkoutsInput>
  }

  export type workout_assignmentsCreateManyWorkoutsInputEnvelope = {
    data: workout_assignmentsCreateManyWorkoutsInput | workout_assignmentsCreateManyWorkoutsInput[]
    skipDuplicates?: boolean
  }

  export type workout_exercisesCreateWithoutWorkoutsInput = {
    sets: number
    reps: number
    rest_interval: number
    rpe?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exercises: exercisesCreateNestedOneWithoutWorkout_exercisesInput
  }

  export type workout_exercisesUncheckedCreateWithoutWorkoutsInput = {
    id?: number
    exercise_id: number
    sets: number
    reps: number
    rest_interval: number
    rpe?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_exercisesCreateOrConnectWithoutWorkoutsInput = {
    where: workout_exercisesWhereUniqueInput
    create: XOR<workout_exercisesCreateWithoutWorkoutsInput, workout_exercisesUncheckedCreateWithoutWorkoutsInput>
  }

  export type workout_exercisesCreateManyWorkoutsInputEnvelope = {
    data: workout_exercisesCreateManyWorkoutsInput | workout_exercisesCreateManyWorkoutsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutWorkoutsInput = {
    first_name: string
    last_name: string
    email: string
    is_admin: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsCreateNestedManyWithoutUsersInput
    user_teams?: user_teamsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWorkoutsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    is_admin: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedCreateNestedManyWithoutUsersInput
    user_teams?: user_teamsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWorkoutsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkoutsInput, usersUncheckedCreateWithoutWorkoutsInput>
  }

  export type workout_assignmentsUpsertWithWhereUniqueWithoutWorkoutsInput = {
    where: workout_assignmentsWhereUniqueInput
    update: XOR<workout_assignmentsUpdateWithoutWorkoutsInput, workout_assignmentsUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<workout_assignmentsCreateWithoutWorkoutsInput, workout_assignmentsUncheckedCreateWithoutWorkoutsInput>
  }

  export type workout_assignmentsUpdateWithWhereUniqueWithoutWorkoutsInput = {
    where: workout_assignmentsWhereUniqueInput
    data: XOR<workout_assignmentsUpdateWithoutWorkoutsInput, workout_assignmentsUncheckedUpdateWithoutWorkoutsInput>
  }

  export type workout_assignmentsUpdateManyWithWhereWithoutWorkoutsInput = {
    where: workout_assignmentsScalarWhereInput
    data: XOR<workout_assignmentsUpdateManyMutationInput, workout_assignmentsUncheckedUpdateManyWithoutWorkoutsInput>
  }

  export type workout_assignmentsScalarWhereInput = {
    AND?: workout_assignmentsScalarWhereInput | workout_assignmentsScalarWhereInput[]
    OR?: workout_assignmentsScalarWhereInput[]
    NOT?: workout_assignmentsScalarWhereInput | workout_assignmentsScalarWhereInput[]
    id?: IntFilter<"workout_assignments"> | number
    workout_id?: IntFilter<"workout_assignments"> | number
    assignee_type?: Enumassignee_type_enumFilter<"workout_assignments"> | $Enums.assignee_type_enum
    assignee_id?: IntFilter<"workout_assignments"> | number
    start_date?: DateTimeFilter<"workout_assignments"> | Date | string
    end_date?: DateTimeNullableFilter<"workout_assignments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"workout_assignments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workout_assignments"> | Date | string | null
  }

  export type workout_exercisesUpsertWithWhereUniqueWithoutWorkoutsInput = {
    where: workout_exercisesWhereUniqueInput
    update: XOR<workout_exercisesUpdateWithoutWorkoutsInput, workout_exercisesUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<workout_exercisesCreateWithoutWorkoutsInput, workout_exercisesUncheckedCreateWithoutWorkoutsInput>
  }

  export type workout_exercisesUpdateWithWhereUniqueWithoutWorkoutsInput = {
    where: workout_exercisesWhereUniqueInput
    data: XOR<workout_exercisesUpdateWithoutWorkoutsInput, workout_exercisesUncheckedUpdateWithoutWorkoutsInput>
  }

  export type workout_exercisesUpdateManyWithWhereWithoutWorkoutsInput = {
    where: workout_exercisesScalarWhereInput
    data: XOR<workout_exercisesUpdateManyMutationInput, workout_exercisesUncheckedUpdateManyWithoutWorkoutsInput>
  }

  export type usersUpsertWithoutWorkoutsInput = {
    update: XOR<usersUpdateWithoutWorkoutsInput, usersUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<usersCreateWithoutWorkoutsInput, usersUncheckedCreateWithoutWorkoutsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWorkoutsInput, usersUncheckedUpdateWithoutWorkoutsInput>
  }

  export type usersUpdateWithoutWorkoutsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUpdateManyWithoutUsersNestedInput
    user_teams?: user_teamsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedUpdateManyWithoutUsersNestedInput
    user_teams?: user_teamsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type player_exercise_progressCreateManyExercisesInput = {
    id?: number
    workout_assignment_id: number
    completed_sets?: number
    completed_reps?: number
    weight_used?: number | null
    notes?: string | null
    recorded_at: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_exercisesCreateManyExercisesInput = {
    id?: number
    workout_id: number
    sets: number
    reps: number
    rest_interval: number
    rpe?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type player_exercise_progressUpdateWithoutExercisesInput = {
    completed_sets?: IntFieldUpdateOperationsInput | number
    completed_reps?: IntFieldUpdateOperationsInput | number
    weight_used?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_assignments?: workout_assignmentsUpdateOneRequiredWithoutPlayer_exercise_progressNestedInput
  }

  export type player_exercise_progressUncheckedUpdateWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_assignment_id?: IntFieldUpdateOperationsInput | number
    completed_sets?: IntFieldUpdateOperationsInput | number
    completed_reps?: IntFieldUpdateOperationsInput | number
    weight_used?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type player_exercise_progressUncheckedUpdateManyWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_assignment_id?: IntFieldUpdateOperationsInput | number
    completed_sets?: IntFieldUpdateOperationsInput | number
    completed_reps?: IntFieldUpdateOperationsInput | number
    weight_used?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_exercisesUpdateWithoutExercisesInput = {
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rest_interval?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workouts?: workoutsUpdateOneRequiredWithoutWorkout_exercisesNestedInput
  }

  export type workout_exercisesUncheckedUpdateWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rest_interval?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_exercisesUncheckedUpdateManyWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rest_interval?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type teamsCreateManySchoolsInput = {
    id?: number
    name: string
    is_school_team: boolean
    sport_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type teamsUpdateWithoutSchoolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUpdateManyWithoutTeamsNestedInput
    sports?: sportsUpdateOneRequiredWithoutTeamsNestedInput
    user_teams?: user_teamsUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutSchoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedUpdateManyWithoutTeamsNestedInput
    user_teams?: user_teamsUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateManyWithoutSchoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type teamsCreateManySportsInput = {
    id?: number
    name: string
    is_school_team: boolean
    school_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type teamsUpdateWithoutSportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUpdateManyWithoutTeamsNestedInput
    schools?: schoolsUpdateOneWithoutTeamsNestedInput
    user_teams?: user_teamsUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    school_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team_primary_contacts?: team_primary_contactsUncheckedUpdateManyWithoutTeamsNestedInput
    user_teams?: user_teamsUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateManyWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_school_team?: BoolFieldUpdateOperationsInput | boolean
    school_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_primary_contactsCreateManyTeamsInput = {
    user_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_teamsCreateManyTeamsInput = {
    user_id: number
    role: $Enums.user_team_role
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_primary_contactsUpdateWithoutTeamsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutTeam_primary_contactsNestedInput
  }

  export type team_primary_contactsUncheckedUpdateWithoutTeamsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_primary_contactsUncheckedUpdateManyWithoutTeamsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_teamsUpdateWithoutTeamsInput = {
    role?: Enumuser_team_roleFieldUpdateOperationsInput | $Enums.user_team_role
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutUser_teamsNestedInput
  }

  export type user_teamsUncheckedUpdateWithoutTeamsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role?: Enumuser_team_roleFieldUpdateOperationsInput | $Enums.user_team_role
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_teamsUncheckedUpdateManyWithoutTeamsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role?: Enumuser_team_roleFieldUpdateOperationsInput | $Enums.user_team_role
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_primary_contactsCreateManyUsersInput = {
    team_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_teamsCreateManyUsersInput = {
    team_id: number
    role: $Enums.user_team_role
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workoutsCreateManyUsersInput = {
    id?: number
    workout_name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type team_primary_contactsUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUpdateOneRequiredWithoutTeam_primary_contactsNestedInput
  }

  export type team_primary_contactsUncheckedUpdateWithoutUsersInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_primary_contactsUncheckedUpdateManyWithoutUsersInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_teamsUpdateWithoutUsersInput = {
    role?: Enumuser_team_roleFieldUpdateOperationsInput | $Enums.user_team_role
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: teamsUpdateOneRequiredWithoutUser_teamsNestedInput
  }

  export type user_teamsUncheckedUpdateWithoutUsersInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    role?: Enumuser_team_roleFieldUpdateOperationsInput | $Enums.user_team_role
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_teamsUncheckedUpdateManyWithoutUsersInput = {
    team_id?: IntFieldUpdateOperationsInput | number
    role?: Enumuser_team_roleFieldUpdateOperationsInput | $Enums.user_team_role
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workoutsUpdateWithoutUsersInput = {
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_assignments?: workout_assignmentsUpdateManyWithoutWorkoutsNestedInput
    workout_exercises?: workout_exercisesUpdateManyWithoutWorkoutsNestedInput
  }

  export type workoutsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workout_assignments?: workout_assignmentsUncheckedUpdateManyWithoutWorkoutsNestedInput
    workout_exercises?: workout_exercisesUncheckedUpdateManyWithoutWorkoutsNestedInput
  }

  export type workoutsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    workout_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type player_exercise_progressCreateManyWorkout_assignmentsInput = {
    id?: number
    exercise_id: number
    completed_sets?: number
    completed_reps?: number
    weight_used?: number | null
    notes?: string | null
    recorded_at: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type player_exercise_progressUpdateWithoutWorkout_assignmentsInput = {
    completed_sets?: IntFieldUpdateOperationsInput | number
    completed_reps?: IntFieldUpdateOperationsInput | number
    weight_used?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercises?: exercisesUpdateOneRequiredWithoutPlayer_exercise_progressNestedInput
  }

  export type player_exercise_progressUncheckedUpdateWithoutWorkout_assignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    completed_sets?: IntFieldUpdateOperationsInput | number
    completed_reps?: IntFieldUpdateOperationsInput | number
    weight_used?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type player_exercise_progressUncheckedUpdateManyWithoutWorkout_assignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    completed_sets?: IntFieldUpdateOperationsInput | number
    completed_reps?: IntFieldUpdateOperationsInput | number
    weight_used?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_assignmentsCreateManyWorkoutsInput = {
    id?: number
    assignee_type: $Enums.assignee_type_enum
    assignee_id: number
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_exercisesCreateManyWorkoutsInput = {
    id?: number
    exercise_id: number
    sets: number
    reps: number
    rest_interval: number
    rpe?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type workout_assignmentsUpdateWithoutWorkoutsInput = {
    assignee_type?: Enumassignee_type_enumFieldUpdateOperationsInput | $Enums.assignee_type_enum
    assignee_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_exercise_progress?: player_exercise_progressUpdateManyWithoutWorkout_assignmentsNestedInput
  }

  export type workout_assignmentsUncheckedUpdateWithoutWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignee_type?: Enumassignee_type_enumFieldUpdateOperationsInput | $Enums.assignee_type_enum
    assignee_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player_exercise_progress?: player_exercise_progressUncheckedUpdateManyWithoutWorkout_assignmentsNestedInput
  }

  export type workout_assignmentsUncheckedUpdateManyWithoutWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignee_type?: Enumassignee_type_enumFieldUpdateOperationsInput | $Enums.assignee_type_enum
    assignee_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_exercisesUpdateWithoutWorkoutsInput = {
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rest_interval?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exercises?: exercisesUpdateOneRequiredWithoutWorkout_exercisesNestedInput
  }

  export type workout_exercisesUncheckedUpdateWithoutWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rest_interval?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workout_exercisesUncheckedUpdateManyWithoutWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    rest_interval?: IntFieldUpdateOperationsInput | number
    rpe?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}