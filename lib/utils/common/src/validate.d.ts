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
export declare function getStringType(value: any): string;
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
export declare function is(value: any, type: string): boolean;
/**
 * @description 返回数据是否是null,为空
 * @param {any} value 判断的数据
 * @returns 布尔值
 * @example
 * ```JavaScript
 *  let a = null; isNull(a) => true
 * ```
 */
export declare function isNull(value: any): boolean;
/**
 * @description 返回数据是否是undefined,为未定义
 * @param {any} value 判断的数据, 需要已声明
 * @returns 布尔值
 * @example
 * ```JavaScript
 *  let a ; isUndefined(a) => true
 * ```
 */
export declare function isUndefined(value: any): boolean;
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
export declare function isEmpty(value: any): boolean;
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
export declare function hasTypeIn(value: any, types: Array<string>): boolean;
/**
 * 检查给定的值是否为简单类型。
 *
 * 简单类型包括 undefined、null、boolean、number、string 和 symbol。
 *
 * @param value - 要检查的值。
 * @returns 如果值是简单类型则返回 true，否则返回 false。
 * @example
 * console.log(isSimpleType(true));        // 输出: true
 * console.log(isSimpleType(42));          // 输出: true
 * console.log(isSimpleType('hello'));     // 输出: true
 * console.log(isSimpleType(null));        // 输出: true
 * console.log(isSimpleType(undefined));    // 输出: true
 * console.log(isSimpleType({}));          // 输出: false
 * console.log(isSimpleType(() => {}));     // 输出: false
 */
export declare function isSimpleType(value: any): boolean;
/**
 * 检查给定的值是否为引用类型。
 *
 * 引用类型包括对象、数组、函数等。
 *
 * @param value - 要检查的值。
 * @returns 如果值是引用类型则返回 true，否则返回 false。
 * @example
 * console.log(isRefType({}));          // 输出: true
 * console.log(isRefType([]));          // 输出: true
 * console.log(isRefType(() => {}));     // 输出: true
 * console.log(isRefType(true));        // 输出: false
 * console.log(isRefType(42));          // 输出: false
 * console.log(isRefType('hello'));     // 输出: false
 */
export declare function isRefType(value: any): boolean;
/**
 * 检查两个数据的类型是否相等
 * @param value1 - 第一个要比较的值。
 * @param value2 - 第二个要比较的值。
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
export declare function isEqType(value1: any, value2: any): boolean;
/**
 * 检查比较的两个参数是否相等，包括其值和类型是否相等，考虑顺序。
 * @param value1 - 第一个要比较的值。
 * @param value2 - 第二个要比较的值。
 * @returns 布尔值
 * @example
 * ```JavaScript
 *  let a =NaN;let b = NaN; isEqValue(a,b) =>true
 *  let m1 = new Map(); m1.set('a', 1); m1.set('b', 2);
 *  let m2 = new Map(); m2.set('b', 2); m2.set('a', 1);
 *  isEqValue(m1,m2) =>false
 * ```
 */
export declare function isEqValue(value1: any, value2: any): boolean;
