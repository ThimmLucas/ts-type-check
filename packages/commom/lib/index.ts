export function isBigInt(obj: unknown): obj is BigInt {
  return typeof obj == 'bigint';
}

export function isBoolean(obj: unknown): obj is boolean {
  return typeof obj == 'boolean';
}

export function isFunction(obj: unknown): obj is Function {
  return typeof obj == 'function';
}

export function isNumber(obj: unknown): obj is number {
  return typeof obj == 'number';
}

export function isObject(obj: unknown): obj is object {
  return typeof obj == 'object';
}

export function isString(obj: unknown): obj is string {
  return typeof obj == 'string';
}

export function isSymbol(obj: unknown): obj is symbol {
  return typeof obj == 'symbol';
}

export function isUndefined(obj: unknown): obj is undefined {
  return typeof obj == 'undefined';
}

export function isNull(obj: unknown): obj is null {
  return obj === null;
}

export function isNil(val: unknown): val is null | undefined {
  return isUndefined(val) || val === null;
}

export function isArray(obj: unknown): obj is any[] {
  return Array.isArray(obj);
}

export function isDate(obj: unknown): obj is Date {
  return isObject(obj) && obj instanceof Date;
}

export function isDateString(obj: unknown) {
  return isString(obj) && !isNaN(new Date(obj).getDate());
}

export function isEmpty(obj: unknown): obj is [] {
  return isArray(obj) && !(obj.length > 0);
}

export function isNumericString(obj: unknown): obj is `${number}` {
  return isString(obj) && parseFloat(obj).toString() == obj;
}

export function isNan(obj: unknown): boolean {
  return !isNumber(obj);
}

// export function isNumericString(obj: unknown): obj is `${number}` {
//   return isString(obj) && parseFloat(obj).toString() == obj;
// }
