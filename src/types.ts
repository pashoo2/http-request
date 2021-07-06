export type TPrototypeKeys = keyof Object;

export type ownKeyOf<T extends object> = keyof T extends TPrototypeKeys
  ? never
  : keyof T;

// own properties values
export type ownValueOf<T extends object> = keyof T extends ownKeyOf<T>
  ? T[keyof T]
  : never;
