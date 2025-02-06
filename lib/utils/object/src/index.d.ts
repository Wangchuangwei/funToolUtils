/**
 * 检查给定的值是否为普通对象。
 *
 * @param value - 要检查的值。
 * @returns 如果值是普通对象则返回 true，否则返回 false。
 * @example
 * console.log(isObject({})); // 输出: true
 * console.log(isObject(new Object())); // 输出: true
 * console.log(isObject([])); // 输出: false
 * console.log(isObject(null)); // 输出: false
 * console.log(isObject(undefined)); // 输出: false
 * console.log(isObject(function() {})); // 输出: false
 * console.log(isObject(new Date())); // 输出: false
 */
export declare function isObject(value: any): value is object;
/**
 * 创建一个系列对象，提供对数组中元素的便捷访问方法。
 *
 * @param arrays - 包含元素的数组。
 * @param toKey - 可选的函数，用于将元素转换为唯一的键，默认为返回元素本身。
 * @returns 返回一个包含多种访问方法的对象。
 * @example
 * const seriesObj = series(['a', 'b', 'c']);
 * console.log(seriesObj.min('b', 'c')); // 输出: 'b'
 * console.log(seriesObj.max('b', 'c')); // 输出: 'c'
 * console.log(seriesObj.first()); // 输出: 'a'
 * console.log(seriesObj.last()); // 输出: 'c'
 * console.log(seriesObj.next('b')); // 输出: 'c'
 * console.log(seriesObj.previous('b')); // 输出: 'a'
 * console.log(seriesObj.spin('b', 1)); // 输出: 'c'
 * console.log(seriesObj.spin('b', -1)); // 输出: 'a'
 */
export declare function series(arrays: any, toKey?: (item: any) => any): any;
/**
 * 克隆给定的对象。
 *
 * @param obj - 要克隆的对象。
 * @returns 返回克隆后的对象。
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const cloned = clone(original);
 * console.log(cloned); // 输出: { a: 1, b: { c: 2 } }
 * console.log(cloned === original); // 输出: false
 * console.log(cloned.b === original.b); // 输出: true
 */
export declare function clone(obj: any): any;
/**
 * 反转对象的键和值。
 *
 * @param obj - 要反转的对象。
 * @returns 返回一个新的对象，其中原对象的键变为值，原对象的值变为键。
 * @example
 * const original = { a: 1, b: 2, c: 3 };
 * const inverted = invert(original);
 * console.log(inverted); // 输出: { '1': 'a', '2': 'b', '3': 'c' }
 */
export declare function invert(obj: Record<any, string>): Record<any, string>;
/**
 * 获取对象的所有键路径。
 *
 * @param obj - 要获取键路径的对象。
 * @returns 返回一个包含所有键路径的字符串数组。
 * @example
 * const obj = { a: { b: 1, c: { d: 2 } }, e: [3, { f: 4 }] };
 * const keysArray = keys(obj);
 * console.log(keysArray); // 输出: ['a.b', 'a.c.d', 'e.0', 'e.1.f']
 */
export declare function keys(obj: any): any;
