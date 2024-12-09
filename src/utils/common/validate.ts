import { isEqArray } from "../array";


/**
 * @description 返回数据的类型
 * @param {any} value 判断的数据
 * @returns 数据的类型
 * @example
 * ```JavaScript
 *  let a = 1; getStringType(a) => [object number]
 *  let b = [1,2,3]; getStringType(b) => [object array]
 *  let c = function () {}; getStringType(c) => [object function]
 * ```
 */
export function getStringType (value: any): string {
  return Object.prototype.toString.call(value).toLowerCase();
}

/**
 * @description 返回数据是否是判断的类型
 * @param {any} value 判断的数据 
 * @param {string} type 判断是否是该类型
 * @returns 布尔值
 * @example
 * ```JavaScript
 *  let a = 1; is(a, 'number') => true
 *  let b = 1; is(b, 'Number') => true
 * ```
 */
export function is (value: any, type: string): boolean {
  return getStringType(value) === `[object ${type.toLowerCase()}]`;
}

/**
 * @description 返回数据是否是null,为空
 * @param {any} value 判断的数据  
 * @returns 布尔值
 * @example
 * ```JavaScript
 *  let a = null; isNull(a) => true
 * ```
 */
export function isNull (value: any): boolean {
  return value === null;
}

/**
 * @description 返回数据是否是undefined,为未定义
 * @param {any} value 判断的数据, 需要已声明 
 * @returns 布尔值
 * @example
 * ```JavaScript
 *  let a ; isUndefined(a) => true
 * ```
 */
export function isUndefined (value: any): boolean {
  return Object.is(value, void 0);
}

/**
 * 返回判断的数据是否为空
 * @param value 
 * @returns 布尔值，值为空 (空数组或空对象) 或者值为假 (例如 null、undefined、false、0、空字符串、set和map的大小),则返回true；否则为false
 * @example
 * ```JavaScript
 *  let s = new Set(); isEmpty(s) => true
 *  let obj ={};  isEmpty(obj) => true
 *  let arr = ['1', {a: '12'}]; isEmpty(arr) => false
 * ```
 */
export function isEmpty (value: any): boolean {
  // null  因为 typeof null 为 object
  if (isNull(value)) return true;
  // set，map
  if (is(value, 'set') || is(value, 'map')) {
    return Number(value.size) === 0;
  }
  // 空对象 object
  if (typeof value === 'object') {
    return !Object.keys(value).length;
  }
  return !value; 
}

/**
 * @description 返回数据是否属于给定的类型中
 * @param value 判断的数据
 * @param types 需要检查类型的字符串数组
 * @returns 
 * @example
 * ```JavaScript
 *  let a = '123' ; hasTypeIn(a, ['Number', 'array']) => true
 * ```
 */
export function hasTypeIn (value: any, types: Array<string>): boolean {
  return types.some(type => is(value, type))
}

/**
 * 检查数据是否为简单数据类型
 * @param value 
 * 
 * let num = 12; isSimpleType(num) => true
 * let f = function () {}; isSimpleType(f) => false
 */
export function isSimpleType (value: any): boolean {
  if (isNull(value)) return true;
  const type = typeof value;
  return type !== 'object' && type !== 'function'
}

/**
 * 检查数据是否为引用数据类型
 * @param value 
 * 
 * let num = 12; isRefType(num) => false
 * let f = function () {}; isRefType(f) => true
 */
export function isRefType (value: any): boolean {
  return value instanceof Object;
}

/**
 * 检查两个数据的类型是否相等
 * @param value1 
 * @param value2 
 * @returns 
 * @example
 * ```JavaScript
 * let a =1;
 * let b =new Number();
 * isEqType(value,value2) => true
 *
 * let a ='1';
 * let b =new Number();
 * isEqType(value,value2) => false
 *
 * ```
 */
export function isEqType (value1: any, value2: any): boolean {
  return getStringType(value1) === getStringType(value2)
}

/**
 * 检查比较的两个参数是否相等，包括其值和类型是否相等，考虑顺序。
 * @param value1 
 * @param value2 
 * @returns 布尔值
 * @example
 * ```JavaScript
 *  let a =NaN;let b = NaN; isEqValue(a,b) =>true
 *  let m1 = new Map(); m1.set('a', 1); m1.set('b', 2);
 *  let m2 = new Map(); m2.set('b', 2); m2.set('a', 1); 
 *  isEqValue(m1,m2) =>false
 * ```
 */
export function isEqValue (value1: any, value2: any): boolean {
  // 判断是否是相同类型
  if (!isEqType(value1, value2)) return false
  if (isSimpleType(value1) || isSimpleType(value1)) return Object.is(value1, value2)
  // set、map
  if (hasTypeIn(value1, ['set', 'map'])) {
    if (value1.size !== value2.size) return false
    if (value1.size === 0) return true
    let v1 = Array.from(value1)
    let v2 = Array.from(value2)
    return isEqArray(v1, v2)
  }
  // array、object
  if (hasTypeIn(value1, ['array', 'object'])) {
    let valKeys = Object.keys(value1)
    if (valKeys.length !== Object.keys(value2).length) return false
    if (valKeys.length === 0) return true
    if (is(value1, 'array')) return isEqArray(value1, value2)
    for (const key of valKeys) {
      const flag = isEqValue(value1[key], value2[key]);
      if (!flag) return false
    }
    return true
  }
  return false
}