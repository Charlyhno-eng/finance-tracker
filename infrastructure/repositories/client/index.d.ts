
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
 * Model CategorieTransaction
 * 
 */
export type CategorieTransaction = $Result.DefaultSelection<Prisma.$CategorieTransactionPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Compte
 * 
 */
export type Compte = $Result.DefaultSelection<Prisma.$ComptePayload>
/**
 * Model Cryptomonnaie
 * 
 */
export type Cryptomonnaie = $Result.DefaultSelection<Prisma.$CryptomonnaiePayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model Sauvegarde
 * 
 */
export type Sauvegarde = $Result.DefaultSelection<Prisma.$SauvegardePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TypeTransaction: {
  REVENU: 'REVENU',
  DEPENSE: 'DEPENSE'
};

export type TypeTransaction = (typeof TypeTransaction)[keyof typeof TypeTransaction]

}

export type TypeTransaction = $Enums.TypeTransaction

export const TypeTransaction: typeof $Enums.TypeTransaction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CategorieTransactions
 * const categorieTransactions = await prisma.categorieTransaction.findMany()
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
   * // Fetch zero or more CategorieTransactions
   * const categorieTransactions = await prisma.categorieTransaction.findMany()
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
   * `prisma.categorieTransaction`: Exposes CRUD operations for the **CategorieTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategorieTransactions
    * const categorieTransactions = await prisma.categorieTransaction.findMany()
    * ```
    */
  get categorieTransaction(): Prisma.CategorieTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compte`: Exposes CRUD operations for the **Compte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comptes
    * const comptes = await prisma.compte.findMany()
    * ```
    */
  get compte(): Prisma.CompteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cryptomonnaie`: Exposes CRUD operations for the **Cryptomonnaie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cryptomonnaies
    * const cryptomonnaies = await prisma.cryptomonnaie.findMany()
    * ```
    */
  get cryptomonnaie(): Prisma.CryptomonnaieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sauvegarde`: Exposes CRUD operations for the **Sauvegarde** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sauvegardes
    * const sauvegardes = await prisma.sauvegarde.findMany()
    * ```
    */
  get sauvegarde(): Prisma.SauvegardeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    CategorieTransaction: 'CategorieTransaction',
    Transaction: 'Transaction',
    Compte: 'Compte',
    Cryptomonnaie: 'Cryptomonnaie',
    Action: 'Action',
    Sauvegarde: 'Sauvegarde'
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
      modelProps: "categorieTransaction" | "transaction" | "compte" | "cryptomonnaie" | "action" | "sauvegarde"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CategorieTransaction: {
        payload: Prisma.$CategorieTransactionPayload<ExtArgs>
        fields: Prisma.CategorieTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload>
          }
          findFirst: {
            args: Prisma.CategorieTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload>
          }
          findMany: {
            args: Prisma.CategorieTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload>[]
          }
          create: {
            args: Prisma.CategorieTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload>
          }
          createMany: {
            args: Prisma.CategorieTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload>[]
          }
          delete: {
            args: Prisma.CategorieTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload>
          }
          update: {
            args: Prisma.CategorieTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CategorieTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload>[]
          }
          upsert: {
            args: Prisma.CategorieTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieTransactionPayload>
          }
          aggregate: {
            args: Prisma.CategorieTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorieTransaction>
          }
          groupBy: {
            args: Prisma.CategorieTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieTransactionCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Compte: {
        payload: Prisma.$ComptePayload<ExtArgs>
        fields: Prisma.CompteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          findFirst: {
            args: Prisma.CompteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          findMany: {
            args: Prisma.CompteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>[]
          }
          create: {
            args: Prisma.CompteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          createMany: {
            args: Prisma.CompteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>[]
          }
          delete: {
            args: Prisma.CompteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          update: {
            args: Prisma.CompteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          deleteMany: {
            args: Prisma.CompteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>[]
          }
          upsert: {
            args: Prisma.CompteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComptePayload>
          }
          aggregate: {
            args: Prisma.CompteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompte>
          }
          groupBy: {
            args: Prisma.CompteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompteCountArgs<ExtArgs>
            result: $Utils.Optional<CompteCountAggregateOutputType> | number
          }
        }
      }
      Cryptomonnaie: {
        payload: Prisma.$CryptomonnaiePayload<ExtArgs>
        fields: Prisma.CryptomonnaieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CryptomonnaieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CryptomonnaieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload>
          }
          findFirst: {
            args: Prisma.CryptomonnaieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CryptomonnaieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload>
          }
          findMany: {
            args: Prisma.CryptomonnaieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload>[]
          }
          create: {
            args: Prisma.CryptomonnaieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload>
          }
          createMany: {
            args: Prisma.CryptomonnaieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CryptomonnaieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload>[]
          }
          delete: {
            args: Prisma.CryptomonnaieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload>
          }
          update: {
            args: Prisma.CryptomonnaieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload>
          }
          deleteMany: {
            args: Prisma.CryptomonnaieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CryptomonnaieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CryptomonnaieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload>[]
          }
          upsert: {
            args: Prisma.CryptomonnaieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptomonnaiePayload>
          }
          aggregate: {
            args: Prisma.CryptomonnaieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCryptomonnaie>
          }
          groupBy: {
            args: Prisma.CryptomonnaieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CryptomonnaieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CryptomonnaieCountArgs<ExtArgs>
            result: $Utils.Optional<CryptomonnaieCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      Sauvegarde: {
        payload: Prisma.$SauvegardePayload<ExtArgs>
        fields: Prisma.SauvegardeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SauvegardeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SauvegardeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          findFirst: {
            args: Prisma.SauvegardeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SauvegardeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          findMany: {
            args: Prisma.SauvegardeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>[]
          }
          create: {
            args: Prisma.SauvegardeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          createMany: {
            args: Prisma.SauvegardeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SauvegardeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>[]
          }
          delete: {
            args: Prisma.SauvegardeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          update: {
            args: Prisma.SauvegardeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          deleteMany: {
            args: Prisma.SauvegardeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SauvegardeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SauvegardeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>[]
          }
          upsert: {
            args: Prisma.SauvegardeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SauvegardePayload>
          }
          aggregate: {
            args: Prisma.SauvegardeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSauvegarde>
          }
          groupBy: {
            args: Prisma.SauvegardeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SauvegardeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SauvegardeCountArgs<ExtArgs>
            result: $Utils.Optional<SauvegardeCountAggregateOutputType> | number
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
    categorieTransaction?: CategorieTransactionOmit
    transaction?: TransactionOmit
    compte?: CompteOmit
    cryptomonnaie?: CryptomonnaieOmit
    action?: ActionOmit
    sauvegarde?: SauvegardeOmit
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
   * Count Type CategorieTransactionCountOutputType
   */

  export type CategorieTransactionCountOutputType = {
    transactions: number
  }

  export type CategorieTransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategorieTransactionCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CategorieTransactionCountOutputType without action
   */
  export type CategorieTransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransactionCountOutputType
     */
    select?: CategorieTransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieTransactionCountOutputType without action
   */
  export type CategorieTransactionCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CategorieTransaction
   */

  export type AggregateCategorieTransaction = {
    _count: CategorieTransactionCountAggregateOutputType | null
    _avg: CategorieTransactionAvgAggregateOutputType | null
    _sum: CategorieTransactionSumAggregateOutputType | null
    _min: CategorieTransactionMinAggregateOutputType | null
    _max: CategorieTransactionMaxAggregateOutputType | null
  }

  export type CategorieTransactionAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorieTransactionSumAggregateOutputType = {
    id: number | null
  }

  export type CategorieTransactionMinAggregateOutputType = {
    id: number | null
    nom: string | null
  }

  export type CategorieTransactionMaxAggregateOutputType = {
    id: number | null
    nom: string | null
  }

  export type CategorieTransactionCountAggregateOutputType = {
    id: number
    nom: number
    _all: number
  }


  export type CategorieTransactionAvgAggregateInputType = {
    id?: true
  }

  export type CategorieTransactionSumAggregateInputType = {
    id?: true
  }

  export type CategorieTransactionMinAggregateInputType = {
    id?: true
    nom?: true
  }

  export type CategorieTransactionMaxAggregateInputType = {
    id?: true
    nom?: true
  }

  export type CategorieTransactionCountAggregateInputType = {
    id?: true
    nom?: true
    _all?: true
  }

  export type CategorieTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategorieTransaction to aggregate.
     */
    where?: CategorieTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieTransactions to fetch.
     */
    orderBy?: CategorieTransactionOrderByWithRelationInput | CategorieTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategorieTransactions
    **/
    _count?: true | CategorieTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieTransactionMaxAggregateInputType
  }

  export type GetCategorieTransactionAggregateType<T extends CategorieTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorieTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorieTransaction[P]>
      : GetScalarType<T[P], AggregateCategorieTransaction[P]>
  }




  export type CategorieTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieTransactionWhereInput
    orderBy?: CategorieTransactionOrderByWithAggregationInput | CategorieTransactionOrderByWithAggregationInput[]
    by: CategorieTransactionScalarFieldEnum[] | CategorieTransactionScalarFieldEnum
    having?: CategorieTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieTransactionCountAggregateInputType | true
    _avg?: CategorieTransactionAvgAggregateInputType
    _sum?: CategorieTransactionSumAggregateInputType
    _min?: CategorieTransactionMinAggregateInputType
    _max?: CategorieTransactionMaxAggregateInputType
  }

  export type CategorieTransactionGroupByOutputType = {
    id: number
    nom: string
    _count: CategorieTransactionCountAggregateOutputType | null
    _avg: CategorieTransactionAvgAggregateOutputType | null
    _sum: CategorieTransactionSumAggregateOutputType | null
    _min: CategorieTransactionMinAggregateOutputType | null
    _max: CategorieTransactionMaxAggregateOutputType | null
  }

  type GetCategorieTransactionGroupByPayload<T extends CategorieTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CategorieTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    transactions?: boolean | CategorieTransaction$transactionsArgs<ExtArgs>
    _count?: boolean | CategorieTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorieTransaction"]>

  export type CategorieTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
  }, ExtArgs["result"]["categorieTransaction"]>

  export type CategorieTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
  }, ExtArgs["result"]["categorieTransaction"]>

  export type CategorieTransactionSelectScalar = {
    id?: boolean
    nom?: boolean
  }

  export type CategorieTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom", ExtArgs["result"]["categorieTransaction"]>
  export type CategorieTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategorieTransaction$transactionsArgs<ExtArgs>
    _count?: boolean | CategorieTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategorieTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategorieTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategorieTransaction"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
    }, ExtArgs["result"]["categorieTransaction"]>
    composites: {}
  }

  type CategorieTransactionGetPayload<S extends boolean | null | undefined | CategorieTransactionDefaultArgs> = $Result.GetResult<Prisma.$CategorieTransactionPayload, S>

  type CategorieTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieTransactionCountAggregateInputType | true
    }

  export interface CategorieTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategorieTransaction'], meta: { name: 'CategorieTransaction' } }
    /**
     * Find zero or one CategorieTransaction that matches the filter.
     * @param {CategorieTransactionFindUniqueArgs} args - Arguments to find a CategorieTransaction
     * @example
     * // Get one CategorieTransaction
     * const categorieTransaction = await prisma.categorieTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieTransactionFindUniqueArgs>(args: SelectSubset<T, CategorieTransactionFindUniqueArgs<ExtArgs>>): Prisma__CategorieTransactionClient<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategorieTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieTransactionFindUniqueOrThrowArgs} args - Arguments to find a CategorieTransaction
     * @example
     * // Get one CategorieTransaction
     * const categorieTransaction = await prisma.categorieTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieTransactionClient<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategorieTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieTransactionFindFirstArgs} args - Arguments to find a CategorieTransaction
     * @example
     * // Get one CategorieTransaction
     * const categorieTransaction = await prisma.categorieTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieTransactionFindFirstArgs>(args?: SelectSubset<T, CategorieTransactionFindFirstArgs<ExtArgs>>): Prisma__CategorieTransactionClient<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategorieTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieTransactionFindFirstOrThrowArgs} args - Arguments to find a CategorieTransaction
     * @example
     * // Get one CategorieTransaction
     * const categorieTransaction = await prisma.categorieTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieTransactionClient<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategorieTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategorieTransactions
     * const categorieTransactions = await prisma.categorieTransaction.findMany()
     * 
     * // Get first 10 CategorieTransactions
     * const categorieTransactions = await prisma.categorieTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieTransactionWithIdOnly = await prisma.categorieTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategorieTransactionFindManyArgs>(args?: SelectSubset<T, CategorieTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategorieTransaction.
     * @param {CategorieTransactionCreateArgs} args - Arguments to create a CategorieTransaction.
     * @example
     * // Create one CategorieTransaction
     * const CategorieTransaction = await prisma.categorieTransaction.create({
     *   data: {
     *     // ... data to create a CategorieTransaction
     *   }
     * })
     * 
     */
    create<T extends CategorieTransactionCreateArgs>(args: SelectSubset<T, CategorieTransactionCreateArgs<ExtArgs>>): Prisma__CategorieTransactionClient<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategorieTransactions.
     * @param {CategorieTransactionCreateManyArgs} args - Arguments to create many CategorieTransactions.
     * @example
     * // Create many CategorieTransactions
     * const categorieTransaction = await prisma.categorieTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieTransactionCreateManyArgs>(args?: SelectSubset<T, CategorieTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategorieTransactions and returns the data saved in the database.
     * @param {CategorieTransactionCreateManyAndReturnArgs} args - Arguments to create many CategorieTransactions.
     * @example
     * // Create many CategorieTransactions
     * const categorieTransaction = await prisma.categorieTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategorieTransactions and only return the `id`
     * const categorieTransactionWithIdOnly = await prisma.categorieTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategorieTransaction.
     * @param {CategorieTransactionDeleteArgs} args - Arguments to delete one CategorieTransaction.
     * @example
     * // Delete one CategorieTransaction
     * const CategorieTransaction = await prisma.categorieTransaction.delete({
     *   where: {
     *     // ... filter to delete one CategorieTransaction
     *   }
     * })
     * 
     */
    delete<T extends CategorieTransactionDeleteArgs>(args: SelectSubset<T, CategorieTransactionDeleteArgs<ExtArgs>>): Prisma__CategorieTransactionClient<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategorieTransaction.
     * @param {CategorieTransactionUpdateArgs} args - Arguments to update one CategorieTransaction.
     * @example
     * // Update one CategorieTransaction
     * const categorieTransaction = await prisma.categorieTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieTransactionUpdateArgs>(args: SelectSubset<T, CategorieTransactionUpdateArgs<ExtArgs>>): Prisma__CategorieTransactionClient<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategorieTransactions.
     * @param {CategorieTransactionDeleteManyArgs} args - Arguments to filter CategorieTransactions to delete.
     * @example
     * // Delete a few CategorieTransactions
     * const { count } = await prisma.categorieTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieTransactionDeleteManyArgs>(args?: SelectSubset<T, CategorieTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategorieTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategorieTransactions
     * const categorieTransaction = await prisma.categorieTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieTransactionUpdateManyArgs>(args: SelectSubset<T, CategorieTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategorieTransactions and returns the data updated in the database.
     * @param {CategorieTransactionUpdateManyAndReturnArgs} args - Arguments to update many CategorieTransactions.
     * @example
     * // Update many CategorieTransactions
     * const categorieTransaction = await prisma.categorieTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategorieTransactions and only return the `id`
     * const categorieTransactionWithIdOnly = await prisma.categorieTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategorieTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategorieTransaction.
     * @param {CategorieTransactionUpsertArgs} args - Arguments to update or create a CategorieTransaction.
     * @example
     * // Update or create a CategorieTransaction
     * const categorieTransaction = await prisma.categorieTransaction.upsert({
     *   create: {
     *     // ... data to create a CategorieTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategorieTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CategorieTransactionUpsertArgs>(args: SelectSubset<T, CategorieTransactionUpsertArgs<ExtArgs>>): Prisma__CategorieTransactionClient<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategorieTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieTransactionCountArgs} args - Arguments to filter CategorieTransactions to count.
     * @example
     * // Count the number of CategorieTransactions
     * const count = await prisma.categorieTransaction.count({
     *   where: {
     *     // ... the filter for the CategorieTransactions we want to count
     *   }
     * })
    **/
    count<T extends CategorieTransactionCountArgs>(
      args?: Subset<T, CategorieTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategorieTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategorieTransactionAggregateArgs>(args: Subset<T, CategorieTransactionAggregateArgs>): Prisma.PrismaPromise<GetCategorieTransactionAggregateType<T>>

    /**
     * Group by CategorieTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieTransactionGroupByArgs} args - Group by arguments.
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
      T extends CategorieTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CategorieTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategorieTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategorieTransaction model
   */
  readonly fields: CategorieTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategorieTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends CategorieTransaction$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, CategorieTransaction$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CategorieTransaction model
   */
  interface CategorieTransactionFieldRefs {
    readonly id: FieldRef<"CategorieTransaction", 'Int'>
    readonly nom: FieldRef<"CategorieTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategorieTransaction findUnique
   */
  export type CategorieTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CategorieTransaction to fetch.
     */
    where: CategorieTransactionWhereUniqueInput
  }

  /**
   * CategorieTransaction findUniqueOrThrow
   */
  export type CategorieTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CategorieTransaction to fetch.
     */
    where: CategorieTransactionWhereUniqueInput
  }

  /**
   * CategorieTransaction findFirst
   */
  export type CategorieTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CategorieTransaction to fetch.
     */
    where?: CategorieTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieTransactions to fetch.
     */
    orderBy?: CategorieTransactionOrderByWithRelationInput | CategorieTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategorieTransactions.
     */
    cursor?: CategorieTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategorieTransactions.
     */
    distinct?: CategorieTransactionScalarFieldEnum | CategorieTransactionScalarFieldEnum[]
  }

  /**
   * CategorieTransaction findFirstOrThrow
   */
  export type CategorieTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CategorieTransaction to fetch.
     */
    where?: CategorieTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieTransactions to fetch.
     */
    orderBy?: CategorieTransactionOrderByWithRelationInput | CategorieTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategorieTransactions.
     */
    cursor?: CategorieTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategorieTransactions.
     */
    distinct?: CategorieTransactionScalarFieldEnum | CategorieTransactionScalarFieldEnum[]
  }

  /**
   * CategorieTransaction findMany
   */
  export type CategorieTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CategorieTransactions to fetch.
     */
    where?: CategorieTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieTransactions to fetch.
     */
    orderBy?: CategorieTransactionOrderByWithRelationInput | CategorieTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategorieTransactions.
     */
    cursor?: CategorieTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieTransactions.
     */
    skip?: number
    distinct?: CategorieTransactionScalarFieldEnum | CategorieTransactionScalarFieldEnum[]
  }

  /**
   * CategorieTransaction create
   */
  export type CategorieTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CategorieTransaction.
     */
    data: XOR<CategorieTransactionCreateInput, CategorieTransactionUncheckedCreateInput>
  }

  /**
   * CategorieTransaction createMany
   */
  export type CategorieTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategorieTransactions.
     */
    data: CategorieTransactionCreateManyInput | CategorieTransactionCreateManyInput[]
  }

  /**
   * CategorieTransaction createManyAndReturn
   */
  export type CategorieTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many CategorieTransactions.
     */
    data: CategorieTransactionCreateManyInput | CategorieTransactionCreateManyInput[]
  }

  /**
   * CategorieTransaction update
   */
  export type CategorieTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CategorieTransaction.
     */
    data: XOR<CategorieTransactionUpdateInput, CategorieTransactionUncheckedUpdateInput>
    /**
     * Choose, which CategorieTransaction to update.
     */
    where: CategorieTransactionWhereUniqueInput
  }

  /**
   * CategorieTransaction updateMany
   */
  export type CategorieTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategorieTransactions.
     */
    data: XOR<CategorieTransactionUpdateManyMutationInput, CategorieTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CategorieTransactions to update
     */
    where?: CategorieTransactionWhereInput
    /**
     * Limit how many CategorieTransactions to update.
     */
    limit?: number
  }

  /**
   * CategorieTransaction updateManyAndReturn
   */
  export type CategorieTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * The data used to update CategorieTransactions.
     */
    data: XOR<CategorieTransactionUpdateManyMutationInput, CategorieTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CategorieTransactions to update
     */
    where?: CategorieTransactionWhereInput
    /**
     * Limit how many CategorieTransactions to update.
     */
    limit?: number
  }

  /**
   * CategorieTransaction upsert
   */
  export type CategorieTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CategorieTransaction to update in case it exists.
     */
    where: CategorieTransactionWhereUniqueInput
    /**
     * In case the CategorieTransaction found by the `where` argument doesn't exist, create a new CategorieTransaction with this data.
     */
    create: XOR<CategorieTransactionCreateInput, CategorieTransactionUncheckedCreateInput>
    /**
     * In case the CategorieTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieTransactionUpdateInput, CategorieTransactionUncheckedUpdateInput>
  }

  /**
   * CategorieTransaction delete
   */
  export type CategorieTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieTransactionInclude<ExtArgs> | null
    /**
     * Filter which CategorieTransaction to delete.
     */
    where: CategorieTransactionWhereUniqueInput
  }

  /**
   * CategorieTransaction deleteMany
   */
  export type CategorieTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategorieTransactions to delete
     */
    where?: CategorieTransactionWhereInput
    /**
     * Limit how many CategorieTransactions to delete.
     */
    limit?: number
  }

  /**
   * CategorieTransaction.transactions
   */
  export type CategorieTransaction$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * CategorieTransaction without action
   */
  export type CategorieTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieTransaction
     */
    select?: CategorieTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieTransaction
     */
    omit?: CategorieTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    montant: number | null
    categorieId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    montant: number | null
    categorieId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    type: $Enums.TypeTransaction | null
    montant: number | null
    date: Date | null
    categorieId: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    type: $Enums.TypeTransaction | null
    montant: number | null
    date: Date | null
    categorieId: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    type: number
    montant: number
    date: number
    categorieId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    montant?: true
    categorieId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    montant?: true
    categorieId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    type?: true
    montant?: true
    date?: true
    categorieId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    type?: true
    montant?: true
    date?: true
    categorieId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    type?: true
    montant?: true
    date?: true
    categorieId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    type: $Enums.TypeTransaction
    montant: number
    date: Date
    categorieId: number
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    montant?: boolean
    date?: boolean
    categorieId?: boolean
    categorie?: boolean | CategorieTransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    montant?: boolean
    date?: boolean
    categorieId?: boolean
    categorie?: boolean | CategorieTransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    montant?: boolean
    date?: boolean
    categorieId?: boolean
    categorie?: boolean | CategorieTransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    type?: boolean
    montant?: boolean
    date?: boolean
    categorieId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "montant" | "date" | "categorieId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieTransactionDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieTransactionDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieTransactionDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      categorie: Prisma.$CategorieTransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.TypeTransaction
      montant: number
      date: Date
      categorieId: number
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorie<T extends CategorieTransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorieTransactionDefaultArgs<ExtArgs>>): Prisma__CategorieTransactionClient<$Result.GetResult<Prisma.$CategorieTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'TypeTransaction'>
    readonly montant: FieldRef<"Transaction", 'Float'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly categorieId: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Compte
   */

  export type AggregateCompte = {
    _count: CompteCountAggregateOutputType | null
    _avg: CompteAvgAggregateOutputType | null
    _sum: CompteSumAggregateOutputType | null
    _min: CompteMinAggregateOutputType | null
    _max: CompteMaxAggregateOutputType | null
  }

  export type CompteAvgAggregateOutputType = {
    id: number | null
    montant: number | null
  }

  export type CompteSumAggregateOutputType = {
    id: number | null
    montant: number | null
  }

  export type CompteMinAggregateOutputType = {
    id: number | null
    nom: string | null
    montant: number | null
  }

  export type CompteMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    montant: number | null
  }

  export type CompteCountAggregateOutputType = {
    id: number
    nom: number
    montant: number
    _all: number
  }


  export type CompteAvgAggregateInputType = {
    id?: true
    montant?: true
  }

  export type CompteSumAggregateInputType = {
    id?: true
    montant?: true
  }

  export type CompteMinAggregateInputType = {
    id?: true
    nom?: true
    montant?: true
  }

  export type CompteMaxAggregateInputType = {
    id?: true
    nom?: true
    montant?: true
  }

  export type CompteCountAggregateInputType = {
    id?: true
    nom?: true
    montant?: true
    _all?: true
  }

  export type CompteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compte to aggregate.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comptes
    **/
    _count?: true | CompteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompteMaxAggregateInputType
  }

  export type GetCompteAggregateType<T extends CompteAggregateArgs> = {
        [P in keyof T & keyof AggregateCompte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompte[P]>
      : GetScalarType<T[P], AggregateCompte[P]>
  }




  export type CompteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompteWhereInput
    orderBy?: CompteOrderByWithAggregationInput | CompteOrderByWithAggregationInput[]
    by: CompteScalarFieldEnum[] | CompteScalarFieldEnum
    having?: CompteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompteCountAggregateInputType | true
    _avg?: CompteAvgAggregateInputType
    _sum?: CompteSumAggregateInputType
    _min?: CompteMinAggregateInputType
    _max?: CompteMaxAggregateInputType
  }

  export type CompteGroupByOutputType = {
    id: number
    nom: string
    montant: number
    _count: CompteCountAggregateOutputType | null
    _avg: CompteAvgAggregateOutputType | null
    _sum: CompteSumAggregateOutputType | null
    _min: CompteMinAggregateOutputType | null
    _max: CompteMaxAggregateOutputType | null
  }

  type GetCompteGroupByPayload<T extends CompteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompteGroupByOutputType[P]>
            : GetScalarType<T[P], CompteGroupByOutputType[P]>
        }
      >
    >


  export type CompteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    montant?: boolean
  }, ExtArgs["result"]["compte"]>

  export type CompteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    montant?: boolean
  }, ExtArgs["result"]["compte"]>

  export type CompteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    montant?: boolean
  }, ExtArgs["result"]["compte"]>

  export type CompteSelectScalar = {
    id?: boolean
    nom?: boolean
    montant?: boolean
  }

  export type CompteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "montant", ExtArgs["result"]["compte"]>

  export type $ComptePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compte"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      montant: number
    }, ExtArgs["result"]["compte"]>
    composites: {}
  }

  type CompteGetPayload<S extends boolean | null | undefined | CompteDefaultArgs> = $Result.GetResult<Prisma.$ComptePayload, S>

  type CompteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompteCountAggregateInputType | true
    }

  export interface CompteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compte'], meta: { name: 'Compte' } }
    /**
     * Find zero or one Compte that matches the filter.
     * @param {CompteFindUniqueArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompteFindUniqueArgs>(args: SelectSubset<T, CompteFindUniqueArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Compte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompteFindUniqueOrThrowArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompteFindUniqueOrThrowArgs>(args: SelectSubset<T, CompteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteFindFirstArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompteFindFirstArgs>(args?: SelectSubset<T, CompteFindFirstArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteFindFirstOrThrowArgs} args - Arguments to find a Compte
     * @example
     * // Get one Compte
     * const compte = await prisma.compte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompteFindFirstOrThrowArgs>(args?: SelectSubset<T, CompteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comptes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comptes
     * const comptes = await prisma.compte.findMany()
     * 
     * // Get first 10 Comptes
     * const comptes = await prisma.compte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compteWithIdOnly = await prisma.compte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompteFindManyArgs>(args?: SelectSubset<T, CompteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Compte.
     * @param {CompteCreateArgs} args - Arguments to create a Compte.
     * @example
     * // Create one Compte
     * const Compte = await prisma.compte.create({
     *   data: {
     *     // ... data to create a Compte
     *   }
     * })
     * 
     */
    create<T extends CompteCreateArgs>(args: SelectSubset<T, CompteCreateArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comptes.
     * @param {CompteCreateManyArgs} args - Arguments to create many Comptes.
     * @example
     * // Create many Comptes
     * const compte = await prisma.compte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompteCreateManyArgs>(args?: SelectSubset<T, CompteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comptes and returns the data saved in the database.
     * @param {CompteCreateManyAndReturnArgs} args - Arguments to create many Comptes.
     * @example
     * // Create many Comptes
     * const compte = await prisma.compte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comptes and only return the `id`
     * const compteWithIdOnly = await prisma.compte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompteCreateManyAndReturnArgs>(args?: SelectSubset<T, CompteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Compte.
     * @param {CompteDeleteArgs} args - Arguments to delete one Compte.
     * @example
     * // Delete one Compte
     * const Compte = await prisma.compte.delete({
     *   where: {
     *     // ... filter to delete one Compte
     *   }
     * })
     * 
     */
    delete<T extends CompteDeleteArgs>(args: SelectSubset<T, CompteDeleteArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Compte.
     * @param {CompteUpdateArgs} args - Arguments to update one Compte.
     * @example
     * // Update one Compte
     * const compte = await prisma.compte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompteUpdateArgs>(args: SelectSubset<T, CompteUpdateArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comptes.
     * @param {CompteDeleteManyArgs} args - Arguments to filter Comptes to delete.
     * @example
     * // Delete a few Comptes
     * const { count } = await prisma.compte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompteDeleteManyArgs>(args?: SelectSubset<T, CompteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comptes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comptes
     * const compte = await prisma.compte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompteUpdateManyArgs>(args: SelectSubset<T, CompteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comptes and returns the data updated in the database.
     * @param {CompteUpdateManyAndReturnArgs} args - Arguments to update many Comptes.
     * @example
     * // Update many Comptes
     * const compte = await prisma.compte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comptes and only return the `id`
     * const compteWithIdOnly = await prisma.compte.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompteUpdateManyAndReturnArgs>(args: SelectSubset<T, CompteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Compte.
     * @param {CompteUpsertArgs} args - Arguments to update or create a Compte.
     * @example
     * // Update or create a Compte
     * const compte = await prisma.compte.upsert({
     *   create: {
     *     // ... data to create a Compte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compte we want to update
     *   }
     * })
     */
    upsert<T extends CompteUpsertArgs>(args: SelectSubset<T, CompteUpsertArgs<ExtArgs>>): Prisma__CompteClient<$Result.GetResult<Prisma.$ComptePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comptes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteCountArgs} args - Arguments to filter Comptes to count.
     * @example
     * // Count the number of Comptes
     * const count = await prisma.compte.count({
     *   where: {
     *     // ... the filter for the Comptes we want to count
     *   }
     * })
    **/
    count<T extends CompteCountArgs>(
      args?: Subset<T, CompteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompteAggregateArgs>(args: Subset<T, CompteAggregateArgs>): Prisma.PrismaPromise<GetCompteAggregateType<T>>

    /**
     * Group by Compte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompteGroupByArgs} args - Group by arguments.
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
      T extends CompteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompteGroupByArgs['orderBy'] }
        : { orderBy?: CompteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compte model
   */
  readonly fields: CompteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Compte model
   */
  interface CompteFieldRefs {
    readonly id: FieldRef<"Compte", 'Int'>
    readonly nom: FieldRef<"Compte", 'String'>
    readonly montant: FieldRef<"Compte", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Compte findUnique
   */
  export type CompteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte findUniqueOrThrow
   */
  export type CompteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte findFirst
   */
  export type CompteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comptes.
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comptes.
     */
    distinct?: CompteScalarFieldEnum | CompteScalarFieldEnum[]
  }

  /**
   * Compte findFirstOrThrow
   */
  export type CompteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Filter, which Compte to fetch.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comptes.
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comptes.
     */
    distinct?: CompteScalarFieldEnum | CompteScalarFieldEnum[]
  }

  /**
   * Compte findMany
   */
  export type CompteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Filter, which Comptes to fetch.
     */
    where?: CompteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comptes to fetch.
     */
    orderBy?: CompteOrderByWithRelationInput | CompteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comptes.
     */
    cursor?: CompteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comptes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comptes.
     */
    skip?: number
    distinct?: CompteScalarFieldEnum | CompteScalarFieldEnum[]
  }

  /**
   * Compte create
   */
  export type CompteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * The data needed to create a Compte.
     */
    data: XOR<CompteCreateInput, CompteUncheckedCreateInput>
  }

  /**
   * Compte createMany
   */
  export type CompteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comptes.
     */
    data: CompteCreateManyInput | CompteCreateManyInput[]
  }

  /**
   * Compte createManyAndReturn
   */
  export type CompteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * The data used to create many Comptes.
     */
    data: CompteCreateManyInput | CompteCreateManyInput[]
  }

  /**
   * Compte update
   */
  export type CompteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * The data needed to update a Compte.
     */
    data: XOR<CompteUpdateInput, CompteUncheckedUpdateInput>
    /**
     * Choose, which Compte to update.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte updateMany
   */
  export type CompteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comptes.
     */
    data: XOR<CompteUpdateManyMutationInput, CompteUncheckedUpdateManyInput>
    /**
     * Filter which Comptes to update
     */
    where?: CompteWhereInput
    /**
     * Limit how many Comptes to update.
     */
    limit?: number
  }

  /**
   * Compte updateManyAndReturn
   */
  export type CompteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * The data used to update Comptes.
     */
    data: XOR<CompteUpdateManyMutationInput, CompteUncheckedUpdateManyInput>
    /**
     * Filter which Comptes to update
     */
    where?: CompteWhereInput
    /**
     * Limit how many Comptes to update.
     */
    limit?: number
  }

  /**
   * Compte upsert
   */
  export type CompteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * The filter to search for the Compte to update in case it exists.
     */
    where: CompteWhereUniqueInput
    /**
     * In case the Compte found by the `where` argument doesn't exist, create a new Compte with this data.
     */
    create: XOR<CompteCreateInput, CompteUncheckedCreateInput>
    /**
     * In case the Compte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompteUpdateInput, CompteUncheckedUpdateInput>
  }

  /**
   * Compte delete
   */
  export type CompteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
    /**
     * Filter which Compte to delete.
     */
    where: CompteWhereUniqueInput
  }

  /**
   * Compte deleteMany
   */
  export type CompteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comptes to delete
     */
    where?: CompteWhereInput
    /**
     * Limit how many Comptes to delete.
     */
    limit?: number
  }

  /**
   * Compte without action
   */
  export type CompteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compte
     */
    select?: CompteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compte
     */
    omit?: CompteOmit<ExtArgs> | null
  }


  /**
   * Model Cryptomonnaie
   */

  export type AggregateCryptomonnaie = {
    _count: CryptomonnaieCountAggregateOutputType | null
    _avg: CryptomonnaieAvgAggregateOutputType | null
    _sum: CryptomonnaieSumAggregateOutputType | null
    _min: CryptomonnaieMinAggregateOutputType | null
    _max: CryptomonnaieMaxAggregateOutputType | null
  }

  export type CryptomonnaieAvgAggregateOutputType = {
    id: number | null
    quantite: number | null
  }

  export type CryptomonnaieSumAggregateOutputType = {
    id: number | null
    quantite: number | null
  }

  export type CryptomonnaieMinAggregateOutputType = {
    id: number | null
    ticker: string | null
    nom: string | null
    quantite: number | null
    stacking: boolean | null
  }

  export type CryptomonnaieMaxAggregateOutputType = {
    id: number | null
    ticker: string | null
    nom: string | null
    quantite: number | null
    stacking: boolean | null
  }

  export type CryptomonnaieCountAggregateOutputType = {
    id: number
    ticker: number
    nom: number
    quantite: number
    stacking: number
    _all: number
  }


  export type CryptomonnaieAvgAggregateInputType = {
    id?: true
    quantite?: true
  }

  export type CryptomonnaieSumAggregateInputType = {
    id?: true
    quantite?: true
  }

  export type CryptomonnaieMinAggregateInputType = {
    id?: true
    ticker?: true
    nom?: true
    quantite?: true
    stacking?: true
  }

  export type CryptomonnaieMaxAggregateInputType = {
    id?: true
    ticker?: true
    nom?: true
    quantite?: true
    stacking?: true
  }

  export type CryptomonnaieCountAggregateInputType = {
    id?: true
    ticker?: true
    nom?: true
    quantite?: true
    stacking?: true
    _all?: true
  }

  export type CryptomonnaieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cryptomonnaie to aggregate.
     */
    where?: CryptomonnaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptomonnaies to fetch.
     */
    orderBy?: CryptomonnaieOrderByWithRelationInput | CryptomonnaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CryptomonnaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptomonnaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptomonnaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cryptomonnaies
    **/
    _count?: true | CryptomonnaieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CryptomonnaieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CryptomonnaieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CryptomonnaieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CryptomonnaieMaxAggregateInputType
  }

  export type GetCryptomonnaieAggregateType<T extends CryptomonnaieAggregateArgs> = {
        [P in keyof T & keyof AggregateCryptomonnaie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCryptomonnaie[P]>
      : GetScalarType<T[P], AggregateCryptomonnaie[P]>
  }




  export type CryptomonnaieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptomonnaieWhereInput
    orderBy?: CryptomonnaieOrderByWithAggregationInput | CryptomonnaieOrderByWithAggregationInput[]
    by: CryptomonnaieScalarFieldEnum[] | CryptomonnaieScalarFieldEnum
    having?: CryptomonnaieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CryptomonnaieCountAggregateInputType | true
    _avg?: CryptomonnaieAvgAggregateInputType
    _sum?: CryptomonnaieSumAggregateInputType
    _min?: CryptomonnaieMinAggregateInputType
    _max?: CryptomonnaieMaxAggregateInputType
  }

  export type CryptomonnaieGroupByOutputType = {
    id: number
    ticker: string
    nom: string
    quantite: number
    stacking: boolean
    _count: CryptomonnaieCountAggregateOutputType | null
    _avg: CryptomonnaieAvgAggregateOutputType | null
    _sum: CryptomonnaieSumAggregateOutputType | null
    _min: CryptomonnaieMinAggregateOutputType | null
    _max: CryptomonnaieMaxAggregateOutputType | null
  }

  type GetCryptomonnaieGroupByPayload<T extends CryptomonnaieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CryptomonnaieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CryptomonnaieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CryptomonnaieGroupByOutputType[P]>
            : GetScalarType<T[P], CryptomonnaieGroupByOutputType[P]>
        }
      >
    >


  export type CryptomonnaieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    nom?: boolean
    quantite?: boolean
    stacking?: boolean
  }, ExtArgs["result"]["cryptomonnaie"]>

  export type CryptomonnaieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    nom?: boolean
    quantite?: boolean
    stacking?: boolean
  }, ExtArgs["result"]["cryptomonnaie"]>

  export type CryptomonnaieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    nom?: boolean
    quantite?: boolean
    stacking?: boolean
  }, ExtArgs["result"]["cryptomonnaie"]>

  export type CryptomonnaieSelectScalar = {
    id?: boolean
    ticker?: boolean
    nom?: boolean
    quantite?: boolean
    stacking?: boolean
  }

  export type CryptomonnaieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticker" | "nom" | "quantite" | "stacking", ExtArgs["result"]["cryptomonnaie"]>

  export type $CryptomonnaiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cryptomonnaie"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticker: string
      nom: string
      quantite: number
      stacking: boolean
    }, ExtArgs["result"]["cryptomonnaie"]>
    composites: {}
  }

  type CryptomonnaieGetPayload<S extends boolean | null | undefined | CryptomonnaieDefaultArgs> = $Result.GetResult<Prisma.$CryptomonnaiePayload, S>

  type CryptomonnaieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CryptomonnaieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CryptomonnaieCountAggregateInputType | true
    }

  export interface CryptomonnaieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cryptomonnaie'], meta: { name: 'Cryptomonnaie' } }
    /**
     * Find zero or one Cryptomonnaie that matches the filter.
     * @param {CryptomonnaieFindUniqueArgs} args - Arguments to find a Cryptomonnaie
     * @example
     * // Get one Cryptomonnaie
     * const cryptomonnaie = await prisma.cryptomonnaie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CryptomonnaieFindUniqueArgs>(args: SelectSubset<T, CryptomonnaieFindUniqueArgs<ExtArgs>>): Prisma__CryptomonnaieClient<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cryptomonnaie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CryptomonnaieFindUniqueOrThrowArgs} args - Arguments to find a Cryptomonnaie
     * @example
     * // Get one Cryptomonnaie
     * const cryptomonnaie = await prisma.cryptomonnaie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CryptomonnaieFindUniqueOrThrowArgs>(args: SelectSubset<T, CryptomonnaieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CryptomonnaieClient<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cryptomonnaie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptomonnaieFindFirstArgs} args - Arguments to find a Cryptomonnaie
     * @example
     * // Get one Cryptomonnaie
     * const cryptomonnaie = await prisma.cryptomonnaie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CryptomonnaieFindFirstArgs>(args?: SelectSubset<T, CryptomonnaieFindFirstArgs<ExtArgs>>): Prisma__CryptomonnaieClient<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cryptomonnaie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptomonnaieFindFirstOrThrowArgs} args - Arguments to find a Cryptomonnaie
     * @example
     * // Get one Cryptomonnaie
     * const cryptomonnaie = await prisma.cryptomonnaie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CryptomonnaieFindFirstOrThrowArgs>(args?: SelectSubset<T, CryptomonnaieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CryptomonnaieClient<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cryptomonnaies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptomonnaieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cryptomonnaies
     * const cryptomonnaies = await prisma.cryptomonnaie.findMany()
     * 
     * // Get first 10 Cryptomonnaies
     * const cryptomonnaies = await prisma.cryptomonnaie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cryptomonnaieWithIdOnly = await prisma.cryptomonnaie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CryptomonnaieFindManyArgs>(args?: SelectSubset<T, CryptomonnaieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cryptomonnaie.
     * @param {CryptomonnaieCreateArgs} args - Arguments to create a Cryptomonnaie.
     * @example
     * // Create one Cryptomonnaie
     * const Cryptomonnaie = await prisma.cryptomonnaie.create({
     *   data: {
     *     // ... data to create a Cryptomonnaie
     *   }
     * })
     * 
     */
    create<T extends CryptomonnaieCreateArgs>(args: SelectSubset<T, CryptomonnaieCreateArgs<ExtArgs>>): Prisma__CryptomonnaieClient<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cryptomonnaies.
     * @param {CryptomonnaieCreateManyArgs} args - Arguments to create many Cryptomonnaies.
     * @example
     * // Create many Cryptomonnaies
     * const cryptomonnaie = await prisma.cryptomonnaie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CryptomonnaieCreateManyArgs>(args?: SelectSubset<T, CryptomonnaieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cryptomonnaies and returns the data saved in the database.
     * @param {CryptomonnaieCreateManyAndReturnArgs} args - Arguments to create many Cryptomonnaies.
     * @example
     * // Create many Cryptomonnaies
     * const cryptomonnaie = await prisma.cryptomonnaie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cryptomonnaies and only return the `id`
     * const cryptomonnaieWithIdOnly = await prisma.cryptomonnaie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CryptomonnaieCreateManyAndReturnArgs>(args?: SelectSubset<T, CryptomonnaieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cryptomonnaie.
     * @param {CryptomonnaieDeleteArgs} args - Arguments to delete one Cryptomonnaie.
     * @example
     * // Delete one Cryptomonnaie
     * const Cryptomonnaie = await prisma.cryptomonnaie.delete({
     *   where: {
     *     // ... filter to delete one Cryptomonnaie
     *   }
     * })
     * 
     */
    delete<T extends CryptomonnaieDeleteArgs>(args: SelectSubset<T, CryptomonnaieDeleteArgs<ExtArgs>>): Prisma__CryptomonnaieClient<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cryptomonnaie.
     * @param {CryptomonnaieUpdateArgs} args - Arguments to update one Cryptomonnaie.
     * @example
     * // Update one Cryptomonnaie
     * const cryptomonnaie = await prisma.cryptomonnaie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CryptomonnaieUpdateArgs>(args: SelectSubset<T, CryptomonnaieUpdateArgs<ExtArgs>>): Prisma__CryptomonnaieClient<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cryptomonnaies.
     * @param {CryptomonnaieDeleteManyArgs} args - Arguments to filter Cryptomonnaies to delete.
     * @example
     * // Delete a few Cryptomonnaies
     * const { count } = await prisma.cryptomonnaie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CryptomonnaieDeleteManyArgs>(args?: SelectSubset<T, CryptomonnaieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cryptomonnaies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptomonnaieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cryptomonnaies
     * const cryptomonnaie = await prisma.cryptomonnaie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CryptomonnaieUpdateManyArgs>(args: SelectSubset<T, CryptomonnaieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cryptomonnaies and returns the data updated in the database.
     * @param {CryptomonnaieUpdateManyAndReturnArgs} args - Arguments to update many Cryptomonnaies.
     * @example
     * // Update many Cryptomonnaies
     * const cryptomonnaie = await prisma.cryptomonnaie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cryptomonnaies and only return the `id`
     * const cryptomonnaieWithIdOnly = await prisma.cryptomonnaie.updateManyAndReturn({
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
    updateManyAndReturn<T extends CryptomonnaieUpdateManyAndReturnArgs>(args: SelectSubset<T, CryptomonnaieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cryptomonnaie.
     * @param {CryptomonnaieUpsertArgs} args - Arguments to update or create a Cryptomonnaie.
     * @example
     * // Update or create a Cryptomonnaie
     * const cryptomonnaie = await prisma.cryptomonnaie.upsert({
     *   create: {
     *     // ... data to create a Cryptomonnaie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cryptomonnaie we want to update
     *   }
     * })
     */
    upsert<T extends CryptomonnaieUpsertArgs>(args: SelectSubset<T, CryptomonnaieUpsertArgs<ExtArgs>>): Prisma__CryptomonnaieClient<$Result.GetResult<Prisma.$CryptomonnaiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cryptomonnaies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptomonnaieCountArgs} args - Arguments to filter Cryptomonnaies to count.
     * @example
     * // Count the number of Cryptomonnaies
     * const count = await prisma.cryptomonnaie.count({
     *   where: {
     *     // ... the filter for the Cryptomonnaies we want to count
     *   }
     * })
    **/
    count<T extends CryptomonnaieCountArgs>(
      args?: Subset<T, CryptomonnaieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CryptomonnaieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cryptomonnaie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptomonnaieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CryptomonnaieAggregateArgs>(args: Subset<T, CryptomonnaieAggregateArgs>): Prisma.PrismaPromise<GetCryptomonnaieAggregateType<T>>

    /**
     * Group by Cryptomonnaie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptomonnaieGroupByArgs} args - Group by arguments.
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
      T extends CryptomonnaieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CryptomonnaieGroupByArgs['orderBy'] }
        : { orderBy?: CryptomonnaieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CryptomonnaieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCryptomonnaieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cryptomonnaie model
   */
  readonly fields: CryptomonnaieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cryptomonnaie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CryptomonnaieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Cryptomonnaie model
   */
  interface CryptomonnaieFieldRefs {
    readonly id: FieldRef<"Cryptomonnaie", 'Int'>
    readonly ticker: FieldRef<"Cryptomonnaie", 'String'>
    readonly nom: FieldRef<"Cryptomonnaie", 'String'>
    readonly quantite: FieldRef<"Cryptomonnaie", 'Float'>
    readonly stacking: FieldRef<"Cryptomonnaie", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Cryptomonnaie findUnique
   */
  export type CryptomonnaieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * Filter, which Cryptomonnaie to fetch.
     */
    where: CryptomonnaieWhereUniqueInput
  }

  /**
   * Cryptomonnaie findUniqueOrThrow
   */
  export type CryptomonnaieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * Filter, which Cryptomonnaie to fetch.
     */
    where: CryptomonnaieWhereUniqueInput
  }

  /**
   * Cryptomonnaie findFirst
   */
  export type CryptomonnaieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * Filter, which Cryptomonnaie to fetch.
     */
    where?: CryptomonnaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptomonnaies to fetch.
     */
    orderBy?: CryptomonnaieOrderByWithRelationInput | CryptomonnaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cryptomonnaies.
     */
    cursor?: CryptomonnaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptomonnaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptomonnaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cryptomonnaies.
     */
    distinct?: CryptomonnaieScalarFieldEnum | CryptomonnaieScalarFieldEnum[]
  }

  /**
   * Cryptomonnaie findFirstOrThrow
   */
  export type CryptomonnaieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * Filter, which Cryptomonnaie to fetch.
     */
    where?: CryptomonnaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptomonnaies to fetch.
     */
    orderBy?: CryptomonnaieOrderByWithRelationInput | CryptomonnaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cryptomonnaies.
     */
    cursor?: CryptomonnaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptomonnaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptomonnaies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cryptomonnaies.
     */
    distinct?: CryptomonnaieScalarFieldEnum | CryptomonnaieScalarFieldEnum[]
  }

  /**
   * Cryptomonnaie findMany
   */
  export type CryptomonnaieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * Filter, which Cryptomonnaies to fetch.
     */
    where?: CryptomonnaieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptomonnaies to fetch.
     */
    orderBy?: CryptomonnaieOrderByWithRelationInput | CryptomonnaieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cryptomonnaies.
     */
    cursor?: CryptomonnaieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptomonnaies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptomonnaies.
     */
    skip?: number
    distinct?: CryptomonnaieScalarFieldEnum | CryptomonnaieScalarFieldEnum[]
  }

  /**
   * Cryptomonnaie create
   */
  export type CryptomonnaieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * The data needed to create a Cryptomonnaie.
     */
    data: XOR<CryptomonnaieCreateInput, CryptomonnaieUncheckedCreateInput>
  }

  /**
   * Cryptomonnaie createMany
   */
  export type CryptomonnaieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cryptomonnaies.
     */
    data: CryptomonnaieCreateManyInput | CryptomonnaieCreateManyInput[]
  }

  /**
   * Cryptomonnaie createManyAndReturn
   */
  export type CryptomonnaieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * The data used to create many Cryptomonnaies.
     */
    data: CryptomonnaieCreateManyInput | CryptomonnaieCreateManyInput[]
  }

  /**
   * Cryptomonnaie update
   */
  export type CryptomonnaieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * The data needed to update a Cryptomonnaie.
     */
    data: XOR<CryptomonnaieUpdateInput, CryptomonnaieUncheckedUpdateInput>
    /**
     * Choose, which Cryptomonnaie to update.
     */
    where: CryptomonnaieWhereUniqueInput
  }

  /**
   * Cryptomonnaie updateMany
   */
  export type CryptomonnaieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cryptomonnaies.
     */
    data: XOR<CryptomonnaieUpdateManyMutationInput, CryptomonnaieUncheckedUpdateManyInput>
    /**
     * Filter which Cryptomonnaies to update
     */
    where?: CryptomonnaieWhereInput
    /**
     * Limit how many Cryptomonnaies to update.
     */
    limit?: number
  }

  /**
   * Cryptomonnaie updateManyAndReturn
   */
  export type CryptomonnaieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * The data used to update Cryptomonnaies.
     */
    data: XOR<CryptomonnaieUpdateManyMutationInput, CryptomonnaieUncheckedUpdateManyInput>
    /**
     * Filter which Cryptomonnaies to update
     */
    where?: CryptomonnaieWhereInput
    /**
     * Limit how many Cryptomonnaies to update.
     */
    limit?: number
  }

  /**
   * Cryptomonnaie upsert
   */
  export type CryptomonnaieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * The filter to search for the Cryptomonnaie to update in case it exists.
     */
    where: CryptomonnaieWhereUniqueInput
    /**
     * In case the Cryptomonnaie found by the `where` argument doesn't exist, create a new Cryptomonnaie with this data.
     */
    create: XOR<CryptomonnaieCreateInput, CryptomonnaieUncheckedCreateInput>
    /**
     * In case the Cryptomonnaie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CryptomonnaieUpdateInput, CryptomonnaieUncheckedUpdateInput>
  }

  /**
   * Cryptomonnaie delete
   */
  export type CryptomonnaieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
    /**
     * Filter which Cryptomonnaie to delete.
     */
    where: CryptomonnaieWhereUniqueInput
  }

  /**
   * Cryptomonnaie deleteMany
   */
  export type CryptomonnaieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cryptomonnaies to delete
     */
    where?: CryptomonnaieWhereInput
    /**
     * Limit how many Cryptomonnaies to delete.
     */
    limit?: number
  }

  /**
   * Cryptomonnaie without action
   */
  export type CryptomonnaieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptomonnaie
     */
    select?: CryptomonnaieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptomonnaie
     */
    omit?: CryptomonnaieOmit<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionAvgAggregateOutputType = {
    id: number | null
    quantite: number | null
  }

  export type ActionSumAggregateOutputType = {
    id: number | null
    quantite: number | null
  }

  export type ActionMinAggregateOutputType = {
    id: number | null
    ticker: string | null
    nom: string | null
    quantite: number | null
  }

  export type ActionMaxAggregateOutputType = {
    id: number | null
    ticker: string | null
    nom: string | null
    quantite: number | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    ticker: number
    nom: number
    quantite: number
    _all: number
  }


  export type ActionAvgAggregateInputType = {
    id?: true
    quantite?: true
  }

  export type ActionSumAggregateInputType = {
    id?: true
    quantite?: true
  }

  export type ActionMinAggregateInputType = {
    id?: true
    ticker?: true
    nom?: true
    quantite?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    ticker?: true
    nom?: true
    quantite?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    ticker?: true
    nom?: true
    quantite?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _avg?: ActionAvgAggregateInputType
    _sum?: ActionSumAggregateInputType
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: number
    ticker: string
    nom: string
    quantite: number
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    nom?: boolean
    quantite?: boolean
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    nom?: boolean
    quantite?: boolean
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    nom?: boolean
    quantite?: boolean
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    ticker?: boolean
    nom?: boolean
    quantite?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticker" | "nom" | "quantite", ExtArgs["result"]["action"]>

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticker: string
      nom: string
      quantite: number
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
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
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'Int'>
    readonly ticker: FieldRef<"Action", 'String'>
    readonly nom: FieldRef<"Action", 'String'>
    readonly quantite: FieldRef<"Action", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
  }


  /**
   * Model Sauvegarde
   */

  export type AggregateSauvegarde = {
    _count: SauvegardeCountAggregateOutputType | null
    _avg: SauvegardeAvgAggregateOutputType | null
    _sum: SauvegardeSumAggregateOutputType | null
    _min: SauvegardeMinAggregateOutputType | null
    _max: SauvegardeMaxAggregateOutputType | null
  }

  export type SauvegardeAvgAggregateOutputType = {
    id: number | null
    totalCompte: number | null
    totalCrypto: number | null
    totalBourse: number | null
  }

  export type SauvegardeSumAggregateOutputType = {
    id: number | null
    totalCompte: number | null
    totalCrypto: number | null
    totalBourse: number | null
  }

  export type SauvegardeMinAggregateOutputType = {
    id: number | null
    date: Date | null
    totalCompte: number | null
    totalCrypto: number | null
    totalBourse: number | null
  }

  export type SauvegardeMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    totalCompte: number | null
    totalCrypto: number | null
    totalBourse: number | null
  }

  export type SauvegardeCountAggregateOutputType = {
    id: number
    date: number
    totalCompte: number
    totalCrypto: number
    totalBourse: number
    _all: number
  }


  export type SauvegardeAvgAggregateInputType = {
    id?: true
    totalCompte?: true
    totalCrypto?: true
    totalBourse?: true
  }

  export type SauvegardeSumAggregateInputType = {
    id?: true
    totalCompte?: true
    totalCrypto?: true
    totalBourse?: true
  }

  export type SauvegardeMinAggregateInputType = {
    id?: true
    date?: true
    totalCompte?: true
    totalCrypto?: true
    totalBourse?: true
  }

  export type SauvegardeMaxAggregateInputType = {
    id?: true
    date?: true
    totalCompte?: true
    totalCrypto?: true
    totalBourse?: true
  }

  export type SauvegardeCountAggregateInputType = {
    id?: true
    date?: true
    totalCompte?: true
    totalCrypto?: true
    totalBourse?: true
    _all?: true
  }

  export type SauvegardeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sauvegarde to aggregate.
     */
    where?: SauvegardeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauvegardes to fetch.
     */
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SauvegardeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauvegardes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauvegardes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sauvegardes
    **/
    _count?: true | SauvegardeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SauvegardeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SauvegardeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SauvegardeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SauvegardeMaxAggregateInputType
  }

  export type GetSauvegardeAggregateType<T extends SauvegardeAggregateArgs> = {
        [P in keyof T & keyof AggregateSauvegarde]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSauvegarde[P]>
      : GetScalarType<T[P], AggregateSauvegarde[P]>
  }




  export type SauvegardeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SauvegardeWhereInput
    orderBy?: SauvegardeOrderByWithAggregationInput | SauvegardeOrderByWithAggregationInput[]
    by: SauvegardeScalarFieldEnum[] | SauvegardeScalarFieldEnum
    having?: SauvegardeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SauvegardeCountAggregateInputType | true
    _avg?: SauvegardeAvgAggregateInputType
    _sum?: SauvegardeSumAggregateInputType
    _min?: SauvegardeMinAggregateInputType
    _max?: SauvegardeMaxAggregateInputType
  }

  export type SauvegardeGroupByOutputType = {
    id: number
    date: Date
    totalCompte: number
    totalCrypto: number
    totalBourse: number
    _count: SauvegardeCountAggregateOutputType | null
    _avg: SauvegardeAvgAggregateOutputType | null
    _sum: SauvegardeSumAggregateOutputType | null
    _min: SauvegardeMinAggregateOutputType | null
    _max: SauvegardeMaxAggregateOutputType | null
  }

  type GetSauvegardeGroupByPayload<T extends SauvegardeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SauvegardeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SauvegardeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SauvegardeGroupByOutputType[P]>
            : GetScalarType<T[P], SauvegardeGroupByOutputType[P]>
        }
      >
    >


  export type SauvegardeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalCompte?: boolean
    totalCrypto?: boolean
    totalBourse?: boolean
  }, ExtArgs["result"]["sauvegarde"]>

  export type SauvegardeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalCompte?: boolean
    totalCrypto?: boolean
    totalBourse?: boolean
  }, ExtArgs["result"]["sauvegarde"]>

  export type SauvegardeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalCompte?: boolean
    totalCrypto?: boolean
    totalBourse?: boolean
  }, ExtArgs["result"]["sauvegarde"]>

  export type SauvegardeSelectScalar = {
    id?: boolean
    date?: boolean
    totalCompte?: boolean
    totalCrypto?: boolean
    totalBourse?: boolean
  }

  export type SauvegardeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "totalCompte" | "totalCrypto" | "totalBourse", ExtArgs["result"]["sauvegarde"]>

  export type $SauvegardePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sauvegarde"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      totalCompte: number
      totalCrypto: number
      totalBourse: number
    }, ExtArgs["result"]["sauvegarde"]>
    composites: {}
  }

  type SauvegardeGetPayload<S extends boolean | null | undefined | SauvegardeDefaultArgs> = $Result.GetResult<Prisma.$SauvegardePayload, S>

  type SauvegardeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SauvegardeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SauvegardeCountAggregateInputType | true
    }

  export interface SauvegardeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sauvegarde'], meta: { name: 'Sauvegarde' } }
    /**
     * Find zero or one Sauvegarde that matches the filter.
     * @param {SauvegardeFindUniqueArgs} args - Arguments to find a Sauvegarde
     * @example
     * // Get one Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SauvegardeFindUniqueArgs>(args: SelectSubset<T, SauvegardeFindUniqueArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sauvegarde that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SauvegardeFindUniqueOrThrowArgs} args - Arguments to find a Sauvegarde
     * @example
     * // Get one Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SauvegardeFindUniqueOrThrowArgs>(args: SelectSubset<T, SauvegardeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sauvegarde that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeFindFirstArgs} args - Arguments to find a Sauvegarde
     * @example
     * // Get one Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SauvegardeFindFirstArgs>(args?: SelectSubset<T, SauvegardeFindFirstArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sauvegarde that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeFindFirstOrThrowArgs} args - Arguments to find a Sauvegarde
     * @example
     * // Get one Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SauvegardeFindFirstOrThrowArgs>(args?: SelectSubset<T, SauvegardeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sauvegardes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sauvegardes
     * const sauvegardes = await prisma.sauvegarde.findMany()
     * 
     * // Get first 10 Sauvegardes
     * const sauvegardes = await prisma.sauvegarde.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sauvegardeWithIdOnly = await prisma.sauvegarde.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SauvegardeFindManyArgs>(args?: SelectSubset<T, SauvegardeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sauvegarde.
     * @param {SauvegardeCreateArgs} args - Arguments to create a Sauvegarde.
     * @example
     * // Create one Sauvegarde
     * const Sauvegarde = await prisma.sauvegarde.create({
     *   data: {
     *     // ... data to create a Sauvegarde
     *   }
     * })
     * 
     */
    create<T extends SauvegardeCreateArgs>(args: SelectSubset<T, SauvegardeCreateArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sauvegardes.
     * @param {SauvegardeCreateManyArgs} args - Arguments to create many Sauvegardes.
     * @example
     * // Create many Sauvegardes
     * const sauvegarde = await prisma.sauvegarde.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SauvegardeCreateManyArgs>(args?: SelectSubset<T, SauvegardeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sauvegardes and returns the data saved in the database.
     * @param {SauvegardeCreateManyAndReturnArgs} args - Arguments to create many Sauvegardes.
     * @example
     * // Create many Sauvegardes
     * const sauvegarde = await prisma.sauvegarde.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sauvegardes and only return the `id`
     * const sauvegardeWithIdOnly = await prisma.sauvegarde.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SauvegardeCreateManyAndReturnArgs>(args?: SelectSubset<T, SauvegardeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sauvegarde.
     * @param {SauvegardeDeleteArgs} args - Arguments to delete one Sauvegarde.
     * @example
     * // Delete one Sauvegarde
     * const Sauvegarde = await prisma.sauvegarde.delete({
     *   where: {
     *     // ... filter to delete one Sauvegarde
     *   }
     * })
     * 
     */
    delete<T extends SauvegardeDeleteArgs>(args: SelectSubset<T, SauvegardeDeleteArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sauvegarde.
     * @param {SauvegardeUpdateArgs} args - Arguments to update one Sauvegarde.
     * @example
     * // Update one Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SauvegardeUpdateArgs>(args: SelectSubset<T, SauvegardeUpdateArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sauvegardes.
     * @param {SauvegardeDeleteManyArgs} args - Arguments to filter Sauvegardes to delete.
     * @example
     * // Delete a few Sauvegardes
     * const { count } = await prisma.sauvegarde.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SauvegardeDeleteManyArgs>(args?: SelectSubset<T, SauvegardeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sauvegardes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sauvegardes
     * const sauvegarde = await prisma.sauvegarde.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SauvegardeUpdateManyArgs>(args: SelectSubset<T, SauvegardeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sauvegardes and returns the data updated in the database.
     * @param {SauvegardeUpdateManyAndReturnArgs} args - Arguments to update many Sauvegardes.
     * @example
     * // Update many Sauvegardes
     * const sauvegarde = await prisma.sauvegarde.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sauvegardes and only return the `id`
     * const sauvegardeWithIdOnly = await prisma.sauvegarde.updateManyAndReturn({
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
    updateManyAndReturn<T extends SauvegardeUpdateManyAndReturnArgs>(args: SelectSubset<T, SauvegardeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sauvegarde.
     * @param {SauvegardeUpsertArgs} args - Arguments to update or create a Sauvegarde.
     * @example
     * // Update or create a Sauvegarde
     * const sauvegarde = await prisma.sauvegarde.upsert({
     *   create: {
     *     // ... data to create a Sauvegarde
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sauvegarde we want to update
     *   }
     * })
     */
    upsert<T extends SauvegardeUpsertArgs>(args: SelectSubset<T, SauvegardeUpsertArgs<ExtArgs>>): Prisma__SauvegardeClient<$Result.GetResult<Prisma.$SauvegardePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sauvegardes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeCountArgs} args - Arguments to filter Sauvegardes to count.
     * @example
     * // Count the number of Sauvegardes
     * const count = await prisma.sauvegarde.count({
     *   where: {
     *     // ... the filter for the Sauvegardes we want to count
     *   }
     * })
    **/
    count<T extends SauvegardeCountArgs>(
      args?: Subset<T, SauvegardeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SauvegardeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sauvegarde.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SauvegardeAggregateArgs>(args: Subset<T, SauvegardeAggregateArgs>): Prisma.PrismaPromise<GetSauvegardeAggregateType<T>>

    /**
     * Group by Sauvegarde.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SauvegardeGroupByArgs} args - Group by arguments.
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
      T extends SauvegardeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SauvegardeGroupByArgs['orderBy'] }
        : { orderBy?: SauvegardeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SauvegardeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSauvegardeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sauvegarde model
   */
  readonly fields: SauvegardeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sauvegarde.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SauvegardeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Sauvegarde model
   */
  interface SauvegardeFieldRefs {
    readonly id: FieldRef<"Sauvegarde", 'Int'>
    readonly date: FieldRef<"Sauvegarde", 'DateTime'>
    readonly totalCompte: FieldRef<"Sauvegarde", 'Float'>
    readonly totalCrypto: FieldRef<"Sauvegarde", 'Float'>
    readonly totalBourse: FieldRef<"Sauvegarde", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Sauvegarde findUnique
   */
  export type SauvegardeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Filter, which Sauvegarde to fetch.
     */
    where: SauvegardeWhereUniqueInput
  }

  /**
   * Sauvegarde findUniqueOrThrow
   */
  export type SauvegardeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Filter, which Sauvegarde to fetch.
     */
    where: SauvegardeWhereUniqueInput
  }

  /**
   * Sauvegarde findFirst
   */
  export type SauvegardeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Filter, which Sauvegarde to fetch.
     */
    where?: SauvegardeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauvegardes to fetch.
     */
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sauvegardes.
     */
    cursor?: SauvegardeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauvegardes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauvegardes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sauvegardes.
     */
    distinct?: SauvegardeScalarFieldEnum | SauvegardeScalarFieldEnum[]
  }

  /**
   * Sauvegarde findFirstOrThrow
   */
  export type SauvegardeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Filter, which Sauvegarde to fetch.
     */
    where?: SauvegardeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauvegardes to fetch.
     */
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sauvegardes.
     */
    cursor?: SauvegardeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauvegardes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauvegardes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sauvegardes.
     */
    distinct?: SauvegardeScalarFieldEnum | SauvegardeScalarFieldEnum[]
  }

  /**
   * Sauvegarde findMany
   */
  export type SauvegardeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Filter, which Sauvegardes to fetch.
     */
    where?: SauvegardeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sauvegardes to fetch.
     */
    orderBy?: SauvegardeOrderByWithRelationInput | SauvegardeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sauvegardes.
     */
    cursor?: SauvegardeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sauvegardes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sauvegardes.
     */
    skip?: number
    distinct?: SauvegardeScalarFieldEnum | SauvegardeScalarFieldEnum[]
  }

  /**
   * Sauvegarde create
   */
  export type SauvegardeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * The data needed to create a Sauvegarde.
     */
    data: XOR<SauvegardeCreateInput, SauvegardeUncheckedCreateInput>
  }

  /**
   * Sauvegarde createMany
   */
  export type SauvegardeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sauvegardes.
     */
    data: SauvegardeCreateManyInput | SauvegardeCreateManyInput[]
  }

  /**
   * Sauvegarde createManyAndReturn
   */
  export type SauvegardeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * The data used to create many Sauvegardes.
     */
    data: SauvegardeCreateManyInput | SauvegardeCreateManyInput[]
  }

  /**
   * Sauvegarde update
   */
  export type SauvegardeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * The data needed to update a Sauvegarde.
     */
    data: XOR<SauvegardeUpdateInput, SauvegardeUncheckedUpdateInput>
    /**
     * Choose, which Sauvegarde to update.
     */
    where: SauvegardeWhereUniqueInput
  }

  /**
   * Sauvegarde updateMany
   */
  export type SauvegardeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sauvegardes.
     */
    data: XOR<SauvegardeUpdateManyMutationInput, SauvegardeUncheckedUpdateManyInput>
    /**
     * Filter which Sauvegardes to update
     */
    where?: SauvegardeWhereInput
    /**
     * Limit how many Sauvegardes to update.
     */
    limit?: number
  }

  /**
   * Sauvegarde updateManyAndReturn
   */
  export type SauvegardeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * The data used to update Sauvegardes.
     */
    data: XOR<SauvegardeUpdateManyMutationInput, SauvegardeUncheckedUpdateManyInput>
    /**
     * Filter which Sauvegardes to update
     */
    where?: SauvegardeWhereInput
    /**
     * Limit how many Sauvegardes to update.
     */
    limit?: number
  }

  /**
   * Sauvegarde upsert
   */
  export type SauvegardeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * The filter to search for the Sauvegarde to update in case it exists.
     */
    where: SauvegardeWhereUniqueInput
    /**
     * In case the Sauvegarde found by the `where` argument doesn't exist, create a new Sauvegarde with this data.
     */
    create: XOR<SauvegardeCreateInput, SauvegardeUncheckedCreateInput>
    /**
     * In case the Sauvegarde was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SauvegardeUpdateInput, SauvegardeUncheckedUpdateInput>
  }

  /**
   * Sauvegarde delete
   */
  export type SauvegardeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
    /**
     * Filter which Sauvegarde to delete.
     */
    where: SauvegardeWhereUniqueInput
  }

  /**
   * Sauvegarde deleteMany
   */
  export type SauvegardeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sauvegardes to delete
     */
    where?: SauvegardeWhereInput
    /**
     * Limit how many Sauvegardes to delete.
     */
    limit?: number
  }

  /**
   * Sauvegarde without action
   */
  export type SauvegardeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sauvegarde
     */
    select?: SauvegardeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sauvegarde
     */
    omit?: SauvegardeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategorieTransactionScalarFieldEnum: {
    id: 'id',
    nom: 'nom'
  };

  export type CategorieTransactionScalarFieldEnum = (typeof CategorieTransactionScalarFieldEnum)[keyof typeof CategorieTransactionScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    montant: 'montant',
    date: 'date',
    categorieId: 'categorieId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const CompteScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    montant: 'montant'
  };

  export type CompteScalarFieldEnum = (typeof CompteScalarFieldEnum)[keyof typeof CompteScalarFieldEnum]


  export const CryptomonnaieScalarFieldEnum: {
    id: 'id',
    ticker: 'ticker',
    nom: 'nom',
    quantite: 'quantite',
    stacking: 'stacking'
  };

  export type CryptomonnaieScalarFieldEnum = (typeof CryptomonnaieScalarFieldEnum)[keyof typeof CryptomonnaieScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    ticker: 'ticker',
    nom: 'nom',
    quantite: 'quantite'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const SauvegardeScalarFieldEnum: {
    id: 'id',
    date: 'date',
    totalCompte: 'totalCompte',
    totalCrypto: 'totalCrypto',
    totalBourse: 'totalBourse'
  };

  export type SauvegardeScalarFieldEnum = (typeof SauvegardeScalarFieldEnum)[keyof typeof SauvegardeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'TypeTransaction'
   */
  export type EnumTypeTransactionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeTransaction'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CategorieTransactionWhereInput = {
    AND?: CategorieTransactionWhereInput | CategorieTransactionWhereInput[]
    OR?: CategorieTransactionWhereInput[]
    NOT?: CategorieTransactionWhereInput | CategorieTransactionWhereInput[]
    id?: IntFilter<"CategorieTransaction"> | number
    nom?: StringFilter<"CategorieTransaction"> | string
    transactions?: TransactionListRelationFilter
  }

  export type CategorieTransactionOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type CategorieTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom?: string
    AND?: CategorieTransactionWhereInput | CategorieTransactionWhereInput[]
    OR?: CategorieTransactionWhereInput[]
    NOT?: CategorieTransactionWhereInput | CategorieTransactionWhereInput[]
    transactions?: TransactionListRelationFilter
  }, "id" | "nom">

  export type CategorieTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    _count?: CategorieTransactionCountOrderByAggregateInput
    _avg?: CategorieTransactionAvgOrderByAggregateInput
    _max?: CategorieTransactionMaxOrderByAggregateInput
    _min?: CategorieTransactionMinOrderByAggregateInput
    _sum?: CategorieTransactionSumOrderByAggregateInput
  }

  export type CategorieTransactionScalarWhereWithAggregatesInput = {
    AND?: CategorieTransactionScalarWhereWithAggregatesInput | CategorieTransactionScalarWhereWithAggregatesInput[]
    OR?: CategorieTransactionScalarWhereWithAggregatesInput[]
    NOT?: CategorieTransactionScalarWhereWithAggregatesInput | CategorieTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategorieTransaction"> | number
    nom?: StringWithAggregatesFilter<"CategorieTransaction"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    type?: EnumTypeTransactionFilter<"Transaction"> | $Enums.TypeTransaction
    montant?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    categorieId?: IntFilter<"Transaction"> | number
    categorie?: XOR<CategorieTransactionScalarRelationFilter, CategorieTransactionWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    categorieId?: SortOrder
    categorie?: CategorieTransactionOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    type?: EnumTypeTransactionFilter<"Transaction"> | $Enums.TypeTransaction
    montant?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    categorieId?: IntFilter<"Transaction"> | number
    categorie?: XOR<CategorieTransactionScalarRelationFilter, CategorieTransactionWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    categorieId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    type?: EnumTypeTransactionWithAggregatesFilter<"Transaction"> | $Enums.TypeTransaction
    montant?: FloatWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    categorieId?: IntWithAggregatesFilter<"Transaction"> | number
  }

  export type CompteWhereInput = {
    AND?: CompteWhereInput | CompteWhereInput[]
    OR?: CompteWhereInput[]
    NOT?: CompteWhereInput | CompteWhereInput[]
    id?: IntFilter<"Compte"> | number
    nom?: StringFilter<"Compte"> | string
    montant?: FloatFilter<"Compte"> | number
  }

  export type CompteOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    montant?: SortOrder
  }

  export type CompteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompteWhereInput | CompteWhereInput[]
    OR?: CompteWhereInput[]
    NOT?: CompteWhereInput | CompteWhereInput[]
    nom?: StringFilter<"Compte"> | string
    montant?: FloatFilter<"Compte"> | number
  }, "id">

  export type CompteOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    montant?: SortOrder
    _count?: CompteCountOrderByAggregateInput
    _avg?: CompteAvgOrderByAggregateInput
    _max?: CompteMaxOrderByAggregateInput
    _min?: CompteMinOrderByAggregateInput
    _sum?: CompteSumOrderByAggregateInput
  }

  export type CompteScalarWhereWithAggregatesInput = {
    AND?: CompteScalarWhereWithAggregatesInput | CompteScalarWhereWithAggregatesInput[]
    OR?: CompteScalarWhereWithAggregatesInput[]
    NOT?: CompteScalarWhereWithAggregatesInput | CompteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Compte"> | number
    nom?: StringWithAggregatesFilter<"Compte"> | string
    montant?: FloatWithAggregatesFilter<"Compte"> | number
  }

  export type CryptomonnaieWhereInput = {
    AND?: CryptomonnaieWhereInput | CryptomonnaieWhereInput[]
    OR?: CryptomonnaieWhereInput[]
    NOT?: CryptomonnaieWhereInput | CryptomonnaieWhereInput[]
    id?: IntFilter<"Cryptomonnaie"> | number
    ticker?: StringFilter<"Cryptomonnaie"> | string
    nom?: StringFilter<"Cryptomonnaie"> | string
    quantite?: FloatFilter<"Cryptomonnaie"> | number
    stacking?: BoolFilter<"Cryptomonnaie"> | boolean
  }

  export type CryptomonnaieOrderByWithRelationInput = {
    id?: SortOrder
    ticker?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    stacking?: SortOrder
  }

  export type CryptomonnaieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CryptomonnaieWhereInput | CryptomonnaieWhereInput[]
    OR?: CryptomonnaieWhereInput[]
    NOT?: CryptomonnaieWhereInput | CryptomonnaieWhereInput[]
    ticker?: StringFilter<"Cryptomonnaie"> | string
    nom?: StringFilter<"Cryptomonnaie"> | string
    quantite?: FloatFilter<"Cryptomonnaie"> | number
    stacking?: BoolFilter<"Cryptomonnaie"> | boolean
  }, "id">

  export type CryptomonnaieOrderByWithAggregationInput = {
    id?: SortOrder
    ticker?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    stacking?: SortOrder
    _count?: CryptomonnaieCountOrderByAggregateInput
    _avg?: CryptomonnaieAvgOrderByAggregateInput
    _max?: CryptomonnaieMaxOrderByAggregateInput
    _min?: CryptomonnaieMinOrderByAggregateInput
    _sum?: CryptomonnaieSumOrderByAggregateInput
  }

  export type CryptomonnaieScalarWhereWithAggregatesInput = {
    AND?: CryptomonnaieScalarWhereWithAggregatesInput | CryptomonnaieScalarWhereWithAggregatesInput[]
    OR?: CryptomonnaieScalarWhereWithAggregatesInput[]
    NOT?: CryptomonnaieScalarWhereWithAggregatesInput | CryptomonnaieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cryptomonnaie"> | number
    ticker?: StringWithAggregatesFilter<"Cryptomonnaie"> | string
    nom?: StringWithAggregatesFilter<"Cryptomonnaie"> | string
    quantite?: FloatWithAggregatesFilter<"Cryptomonnaie"> | number
    stacking?: BoolWithAggregatesFilter<"Cryptomonnaie"> | boolean
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: IntFilter<"Action"> | number
    ticker?: StringFilter<"Action"> | string
    nom?: StringFilter<"Action"> | string
    quantite?: FloatFilter<"Action"> | number
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    ticker?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    ticker?: StringFilter<"Action"> | string
    nom?: StringFilter<"Action"> | string
    quantite?: FloatFilter<"Action"> | number
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    ticker?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _avg?: ActionAvgOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
    _sum?: ActionSumOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Action"> | number
    ticker?: StringWithAggregatesFilter<"Action"> | string
    nom?: StringWithAggregatesFilter<"Action"> | string
    quantite?: FloatWithAggregatesFilter<"Action"> | number
  }

  export type SauvegardeWhereInput = {
    AND?: SauvegardeWhereInput | SauvegardeWhereInput[]
    OR?: SauvegardeWhereInput[]
    NOT?: SauvegardeWhereInput | SauvegardeWhereInput[]
    id?: IntFilter<"Sauvegarde"> | number
    date?: DateTimeFilter<"Sauvegarde"> | Date | string
    totalCompte?: FloatFilter<"Sauvegarde"> | number
    totalCrypto?: FloatFilter<"Sauvegarde"> | number
    totalBourse?: FloatFilter<"Sauvegarde"> | number
  }

  export type SauvegardeOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    totalCompte?: SortOrder
    totalCrypto?: SortOrder
    totalBourse?: SortOrder
  }

  export type SauvegardeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SauvegardeWhereInput | SauvegardeWhereInput[]
    OR?: SauvegardeWhereInput[]
    NOT?: SauvegardeWhereInput | SauvegardeWhereInput[]
    date?: DateTimeFilter<"Sauvegarde"> | Date | string
    totalCompte?: FloatFilter<"Sauvegarde"> | number
    totalCrypto?: FloatFilter<"Sauvegarde"> | number
    totalBourse?: FloatFilter<"Sauvegarde"> | number
  }, "id">

  export type SauvegardeOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    totalCompte?: SortOrder
    totalCrypto?: SortOrder
    totalBourse?: SortOrder
    _count?: SauvegardeCountOrderByAggregateInput
    _avg?: SauvegardeAvgOrderByAggregateInput
    _max?: SauvegardeMaxOrderByAggregateInput
    _min?: SauvegardeMinOrderByAggregateInput
    _sum?: SauvegardeSumOrderByAggregateInput
  }

  export type SauvegardeScalarWhereWithAggregatesInput = {
    AND?: SauvegardeScalarWhereWithAggregatesInput | SauvegardeScalarWhereWithAggregatesInput[]
    OR?: SauvegardeScalarWhereWithAggregatesInput[]
    NOT?: SauvegardeScalarWhereWithAggregatesInput | SauvegardeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sauvegarde"> | number
    date?: DateTimeWithAggregatesFilter<"Sauvegarde"> | Date | string
    totalCompte?: FloatWithAggregatesFilter<"Sauvegarde"> | number
    totalCrypto?: FloatWithAggregatesFilter<"Sauvegarde"> | number
    totalBourse?: FloatWithAggregatesFilter<"Sauvegarde"> | number
  }

  export type CategorieTransactionCreateInput = {
    nom: string
    transactions?: TransactionCreateNestedManyWithoutCategorieInput
  }

  export type CategorieTransactionUncheckedCreateInput = {
    id?: number
    nom: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieTransactionUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieTransactionCreateManyInput = {
    id?: number
    nom: string
  }

  export type CategorieTransactionUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    type: $Enums.TypeTransaction
    montant: number
    date: Date | string
    categorie: CategorieTransactionCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    type: $Enums.TypeTransaction
    montant: number
    date: Date | string
    categorieId: number
  }

  export type TransactionUpdateInput = {
    type?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    montant?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: CategorieTransactionUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    montant?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyInput = {
    id?: number
    type: $Enums.TypeTransaction
    montant: number
    date: Date | string
    categorieId: number
  }

  export type TransactionUpdateManyMutationInput = {
    type?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    montant?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    montant?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: IntFieldUpdateOperationsInput | number
  }

  export type CompteCreateInput = {
    nom: string
    montant: number
  }

  export type CompteUncheckedCreateInput = {
    id?: number
    nom: string
    montant: number
  }

  export type CompteUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
  }

  export type CompteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
  }

  export type CompteCreateManyInput = {
    id?: number
    nom: string
    montant: number
  }

  export type CompteUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
  }

  export type CompteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
  }

  export type CryptomonnaieCreateInput = {
    ticker: string
    nom: string
    quantite: number
    stacking: boolean
  }

  export type CryptomonnaieUncheckedCreateInput = {
    id?: number
    ticker: string
    nom: string
    quantite: number
    stacking: boolean
  }

  export type CryptomonnaieUpdateInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: FloatFieldUpdateOperationsInput | number
    stacking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CryptomonnaieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: FloatFieldUpdateOperationsInput | number
    stacking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CryptomonnaieCreateManyInput = {
    id?: number
    ticker: string
    nom: string
    quantite: number
    stacking: boolean
  }

  export type CryptomonnaieUpdateManyMutationInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: FloatFieldUpdateOperationsInput | number
    stacking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CryptomonnaieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: FloatFieldUpdateOperationsInput | number
    stacking?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActionCreateInput = {
    ticker: string
    nom: string
    quantite: number
  }

  export type ActionUncheckedCreateInput = {
    id?: number
    ticker: string
    nom: string
    quantite: number
  }

  export type ActionUpdateInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: FloatFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: FloatFieldUpdateOperationsInput | number
  }

  export type ActionCreateManyInput = {
    id?: number
    ticker: string
    nom: string
    quantite: number
  }

  export type ActionUpdateManyMutationInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: FloatFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: FloatFieldUpdateOperationsInput | number
  }

  export type SauvegardeCreateInput = {
    date: Date | string
    totalCompte: number
    totalCrypto: number
    totalBourse: number
  }

  export type SauvegardeUncheckedCreateInput = {
    id?: number
    date: Date | string
    totalCompte: number
    totalCrypto: number
    totalBourse: number
  }

  export type SauvegardeUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCompte?: FloatFieldUpdateOperationsInput | number
    totalCrypto?: FloatFieldUpdateOperationsInput | number
    totalBourse?: FloatFieldUpdateOperationsInput | number
  }

  export type SauvegardeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCompte?: FloatFieldUpdateOperationsInput | number
    totalCrypto?: FloatFieldUpdateOperationsInput | number
    totalBourse?: FloatFieldUpdateOperationsInput | number
  }

  export type SauvegardeCreateManyInput = {
    id?: number
    date: Date | string
    totalCompte: number
    totalCrypto: number
    totalBourse: number
  }

  export type SauvegardeUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCompte?: FloatFieldUpdateOperationsInput | number
    totalCrypto?: FloatFieldUpdateOperationsInput | number
    totalBourse?: FloatFieldUpdateOperationsInput | number
  }

  export type SauvegardeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCompte?: FloatFieldUpdateOperationsInput | number
    totalCrypto?: FloatFieldUpdateOperationsInput | number
    totalBourse?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategorieTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CategorieTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategorieTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CategorieTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CategorieTransactionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type EnumTypeTransactionFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTransaction | EnumTypeTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTransaction[]
    notIn?: $Enums.TypeTransaction[]
    not?: NestedEnumTypeTransactionFilter<$PrismaModel> | $Enums.TypeTransaction
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategorieTransactionScalarRelationFilter = {
    is?: CategorieTransactionWhereInput
    isNot?: CategorieTransactionWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    categorieId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    categorieId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    categorieId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    categorieId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    categorieId?: SortOrder
  }

  export type EnumTypeTransactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTransaction | EnumTypeTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTransaction[]
    notIn?: $Enums.TypeTransaction[]
    not?: NestedEnumTypeTransactionWithAggregatesFilter<$PrismaModel> | $Enums.TypeTransaction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeTransactionFilter<$PrismaModel>
    _max?: NestedEnumTypeTransactionFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompteCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    montant?: SortOrder
  }

  export type CompteAvgOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
  }

  export type CompteMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    montant?: SortOrder
  }

  export type CompteMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    montant?: SortOrder
  }

  export type CompteSumOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CryptomonnaieCountOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    stacking?: SortOrder
  }

  export type CryptomonnaieAvgOrderByAggregateInput = {
    id?: SortOrder
    quantite?: SortOrder
  }

  export type CryptomonnaieMaxOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    stacking?: SortOrder
  }

  export type CryptomonnaieMinOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    stacking?: SortOrder
  }

  export type CryptomonnaieSumOrderByAggregateInput = {
    id?: SortOrder
    quantite?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
  }

  export type ActionAvgOrderByAggregateInput = {
    id?: SortOrder
    quantite?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
  }

  export type ActionSumOrderByAggregateInput = {
    id?: SortOrder
    quantite?: SortOrder
  }

  export type SauvegardeCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalCompte?: SortOrder
    totalCrypto?: SortOrder
    totalBourse?: SortOrder
  }

  export type SauvegardeAvgOrderByAggregateInput = {
    id?: SortOrder
    totalCompte?: SortOrder
    totalCrypto?: SortOrder
    totalBourse?: SortOrder
  }

  export type SauvegardeMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalCompte?: SortOrder
    totalCrypto?: SortOrder
    totalBourse?: SortOrder
  }

  export type SauvegardeMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalCompte?: SortOrder
    totalCrypto?: SortOrder
    totalBourse?: SortOrder
  }

  export type SauvegardeSumOrderByAggregateInput = {
    id?: SortOrder
    totalCompte?: SortOrder
    totalCrypto?: SortOrder
    totalBourse?: SortOrder
  }

  export type TransactionCreateNestedManyWithoutCategorieInput = {
    create?: XOR<TransactionCreateWithoutCategorieInput, TransactionUncheckedCreateWithoutCategorieInput> | TransactionCreateWithoutCategorieInput[] | TransactionUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategorieInput | TransactionCreateOrConnectWithoutCategorieInput[]
    createMany?: TransactionCreateManyCategorieInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<TransactionCreateWithoutCategorieInput, TransactionUncheckedCreateWithoutCategorieInput> | TransactionCreateWithoutCategorieInput[] | TransactionUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategorieInput | TransactionCreateOrConnectWithoutCategorieInput[]
    createMany?: TransactionCreateManyCategorieInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TransactionUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<TransactionCreateWithoutCategorieInput, TransactionUncheckedCreateWithoutCategorieInput> | TransactionCreateWithoutCategorieInput[] | TransactionUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategorieInput | TransactionCreateOrConnectWithoutCategorieInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategorieInput | TransactionUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: TransactionCreateManyCategorieInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategorieInput | TransactionUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategorieInput | TransactionUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<TransactionCreateWithoutCategorieInput, TransactionUncheckedCreateWithoutCategorieInput> | TransactionCreateWithoutCategorieInput[] | TransactionUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategorieInput | TransactionCreateOrConnectWithoutCategorieInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategorieInput | TransactionUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: TransactionCreateManyCategorieInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategorieInput | TransactionUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategorieInput | TransactionUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CategorieTransactionCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategorieTransactionCreateWithoutTransactionsInput, CategorieTransactionUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategorieTransactionCreateOrConnectWithoutTransactionsInput
    connect?: CategorieTransactionWhereUniqueInput
  }

  export type EnumTypeTransactionFieldUpdateOperationsInput = {
    set?: $Enums.TypeTransaction
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategorieTransactionUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CategorieTransactionCreateWithoutTransactionsInput, CategorieTransactionUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategorieTransactionCreateOrConnectWithoutTransactionsInput
    upsert?: CategorieTransactionUpsertWithoutTransactionsInput
    connect?: CategorieTransactionWhereUniqueInput
    update?: XOR<XOR<CategorieTransactionUpdateToOneWithWhereWithoutTransactionsInput, CategorieTransactionUpdateWithoutTransactionsInput>, CategorieTransactionUncheckedUpdateWithoutTransactionsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumTypeTransactionFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTransaction | EnumTypeTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTransaction[]
    notIn?: $Enums.TypeTransaction[]
    not?: NestedEnumTypeTransactionFilter<$PrismaModel> | $Enums.TypeTransaction
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumTypeTransactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTransaction | EnumTypeTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTransaction[]
    notIn?: $Enums.TypeTransaction[]
    not?: NestedEnumTypeTransactionWithAggregatesFilter<$PrismaModel> | $Enums.TypeTransaction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeTransactionFilter<$PrismaModel>
    _max?: NestedEnumTypeTransactionFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type TransactionCreateWithoutCategorieInput = {
    type: $Enums.TypeTransaction
    montant: number
    date: Date | string
  }

  export type TransactionUncheckedCreateWithoutCategorieInput = {
    id?: number
    type: $Enums.TypeTransaction
    montant: number
    date: Date | string
  }

  export type TransactionCreateOrConnectWithoutCategorieInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategorieInput, TransactionUncheckedCreateWithoutCategorieInput>
  }

  export type TransactionCreateManyCategorieInputEnvelope = {
    data: TransactionCreateManyCategorieInput | TransactionCreateManyCategorieInput[]
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategorieInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategorieInput, TransactionUncheckedUpdateWithoutCategorieInput>
    create: XOR<TransactionCreateWithoutCategorieInput, TransactionUncheckedCreateWithoutCategorieInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategorieInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategorieInput, TransactionUncheckedUpdateWithoutCategorieInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategorieInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategorieInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    type?: EnumTypeTransactionFilter<"Transaction"> | $Enums.TypeTransaction
    montant?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    categorieId?: IntFilter<"Transaction"> | number
  }

  export type CategorieTransactionCreateWithoutTransactionsInput = {
    nom: string
  }

  export type CategorieTransactionUncheckedCreateWithoutTransactionsInput = {
    id?: number
    nom: string
  }

  export type CategorieTransactionCreateOrConnectWithoutTransactionsInput = {
    where: CategorieTransactionWhereUniqueInput
    create: XOR<CategorieTransactionCreateWithoutTransactionsInput, CategorieTransactionUncheckedCreateWithoutTransactionsInput>
  }

  export type CategorieTransactionUpsertWithoutTransactionsInput = {
    update: XOR<CategorieTransactionUpdateWithoutTransactionsInput, CategorieTransactionUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategorieTransactionCreateWithoutTransactionsInput, CategorieTransactionUncheckedCreateWithoutTransactionsInput>
    where?: CategorieTransactionWhereInput
  }

  export type CategorieTransactionUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategorieTransactionWhereInput
    data: XOR<CategorieTransactionUpdateWithoutTransactionsInput, CategorieTransactionUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategorieTransactionUpdateWithoutTransactionsInput = {
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieTransactionUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyCategorieInput = {
    id?: number
    type: $Enums.TypeTransaction
    montant: number
    date: Date | string
  }

  export type TransactionUpdateWithoutCategorieInput = {
    type?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    montant?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    montant?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeTransactionFieldUpdateOperationsInput | $Enums.TypeTransaction
    montant?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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