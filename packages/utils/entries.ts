type MapKey<BaseType> = BaseType extends Map<infer KeyType, unknown> ? KeyType : never;
type MapValue<BaseType> = BaseType extends Map<unknown, infer ValueType> ? ValueType : never;

export type ArrayEntry<BaseType extends readonly unknown[]> = [number, BaseType[number]];
export type MapEntry<BaseType> = [MapKey<BaseType>, MapValue<BaseType>];
export type ObjectEntry<BaseType> = [keyof BaseType, BaseType[keyof BaseType]];
export type SetEntry<BaseType> = BaseType extends Set<infer ItemType> ? [ItemType, ItemType] : never;

type ArrayEntries<BaseType extends readonly unknown[]> = Array<ArrayEntry<BaseType>>;
type MapEntries<BaseType> = Array<MapEntry<BaseType>>;
type ObjectEntries<BaseType> = Array<ObjectEntry<BaseType>>;
type SetEntries<BaseType extends Set<unknown>> = Array<SetEntry<BaseType>>;

export type Entries<BaseType> =
	BaseType extends Map<unknown, unknown> ? MapEntries<BaseType>
		: BaseType extends Set<unknown> ? SetEntries<BaseType>
		: BaseType extends readonly unknown[] ? ArrayEntries<BaseType>
		: BaseType extends object ? ObjectEntries<BaseType>
		: never;
