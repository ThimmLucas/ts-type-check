import { describe, expect, test } from '@jest/globals';
import {
  isArray,
  isBigInt,
  isBoolean,
  isDate,
  isEmpty,
  isFunction,
  isNil,
  isNull,
  isUndefined,
  isNumber,
  isString,
  isObject,
  isSymbol,
  isNumericString,
  isDateString,
  isNan,
} from '../lib';

describe('commom', () => {
  test('isArray', () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray([])).toBe(true);
    expect(isArray({ 1: 2 })).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(Symbol(1))).toBe(false);
  });
  test('isBigInt', () => {
    expect(isBigInt(BigInt(123))).toBe(true);
    expect(isBigInt(123)).toBe(false);
  });
  test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(1 == 1)).toBe(true);
    expect(isBoolean(BigInt(123))).toBe(false);
    expect(isBoolean(123)).toBe(false);
  });
  test('isDate', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date().toISOString())).toBe(false);
  });
  test('isEmpty', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty(undefined)).toBe(false);
    expect(isEmpty(null)).toBe(false);
  });
  test('isFunction', () => {
    expect(isFunction(isFunction)).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(1)).toBe(false);
    expect(isFunction('a')).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
  });
  test('isNil', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });
  test('isNull', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
  });
  test('isUndefined', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(undefined)).toBe(true);
  });
  test('isNumber', () => {
    expect(isNumber(10)).toBe(true);
    expect(isNumber('10')).toBe(false);
    expect(isNumber(new Date())).toBe(false);
    expect(isNumber(BigInt(10))).toBe(false);
  });
  test('isString', () => {
    expect(isString(isString.name)).toBe(true);
    expect(isString(parseInt(isString.name))).toBe(false);
  });
  test('isObject', () => {
    expect(isObject(isObject)).toBe(false);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(new Array())).toBe(true);
  });
  test('isSymbol', () => {
    expect(isSymbol(isSymbol)).toBe(false);
    expect(isSymbol('asd')).toBe(false);
    expect(isSymbol(Symbol('asd'))).toBe(true);
  });
  test('isNumericString', () => {
    expect(isNumericString('123')).toBe(true);
    expect(isNumericString(123)).toBe(false);
    expect(isNumericString(null)).toBe(false);
    expect(isNumericString(undefined)).toBe(false);
  });
  test('isNumericString', () => {
    expect(isNan('123')).toBe(true);
    expect(isNan(123)).toBe(false);
    expect(isNan(null)).toBe(true);
    expect(isNan(undefined)).toBe(true);
  });
  test('isDateString', () => {
    expect(isDateString('123')).toBe(true);
    expect(isDateString('2000gmt-3')).toBe(true);
    expect(isDateString('02/06/23')).toBe(true);
    expect(isDateString('02-06-23')).toBe(true);
    expect(isDateString('2023-06-02T15:14:17.256Z')).toBe(true);
    expect(isDateString(123)).toBe(false);
    expect(isDateString(null)).toBe(false);
    expect(isDateString(undefined)).toBe(false);
  });
});
