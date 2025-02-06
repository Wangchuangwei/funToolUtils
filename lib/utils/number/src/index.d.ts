/**
 * 检查给定的值是否为数字类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值是数字类型则返回 true，否则返回 false。
 * @example
 * console.log(isNumber(123)); // 输出: true
 * console.log(isNumber('123')); // 输出: false
 * console.log(isNumber(NaN)); // 输出: true
 * console.log(isNumber(Infinity)); // 输出: true
 * console.log(isNumber({})); // 输出: false
 */
export declare function isNumber(value: any): value is number;
/**
 * 检查给定的值是否为浮点数。
 *
 * @param value - 要检查的值。
 * @returns 如果值是浮点数则返回 true，否则返回 false。
 * @example
 * console.log(isFloat(123.45)); // 输出: true
 * console.log(isFloat(123)); // 输出: false
 * console.log(isFloat('123.45')); // 输出: false
 * console.log(isFloat(NaN)); // 输出: false
 * console.log(isFloat(Infinity)); // 输出: false
 */
export declare function isFloat(value: any): value is number;
/**
 * 检查给定的值是否为整数。
 *
 * @param value - 要检查的值。
 * @returns 如果值是整数则返回 true，否则返回 false。
 * @example
 * console.log(isInt(123)); // 输出: true
 * console.log(isInt(123.45)); // 输出: false
 * console.log(isInt('123')); // 输出: false
 * console.log(isInt(NaN)); // 输出: false
 * console.log(isInt(Infinity)); // 输出: false
 */
export declare function isInt(value: any): value is number;
/**
 * 检查给定的数字是否在指定范围内。
 *
 * @param number - 要检查的数字。
 * @param start - 范围的起始值。
 * @param end - 可选的范围的结束值。如果未提供，则范围从 0 到 `start`。
 * @returns 如果数字在指定范围内则返回 true，否则返回 false。
 * @example
 * console.log(isRange(5, 1, 10)); // 输出: true
 * console.log(isRange(5, 10)); // 输出: false
 * console.log(isRange(5, 5)); // 输出: true
 * console.log(isRange(5, 10, 1)); // 输出: true
 * console.log(isRange(5, 'a', 10)); // 输出: false
 */
export declare function isRange(number: any, start: any, end?: any): boolean;
/**
 * 将给定的值转换为浮点数。
 *
 * @param value - 要转换的值。
 * @param defaultValue - 如果转换失败时的默认值，默认为 0。
 * @returns 如果值可以转换为浮点数则返回该浮点数，否则返回默认值。
 * @example
 * console.log(toFloat('123.45')); // 输出: 123.45
 * console.log(toFloat('abc')); // 输出: 0
 * console.log(toFloat('123.45', 10)); // 输出: 123.45
 * console.log(toFloat(null, 10)); // 输出: 10
 * console.log(toFloat(undefined, 10)); // 输出: 10
 */
export declare function toFloat(value: any, defaultValue?: any): any;
