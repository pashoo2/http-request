export declare type TPrototypeKeys = keyof Object;
export declare type ownKeyOf<T extends object> = keyof T extends TPrototypeKeys ? never : keyof T;
export declare type ownValueOf<T extends object> = keyof T extends ownKeyOf<T> ? T[keyof T] : never;
