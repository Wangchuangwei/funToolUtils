/**
 * 检查给定的值是否为数组。
 *
 * @param value - 要检查的值。
 * @returns 如果值是数组则返回 `true`，否则返回 `false`。
 *
 * @example
 * ```typescript
 * isArray([]); // 返回 true
 * isArray({}); // 返回 false
 * isArray('hello'); // 返回 false
 * isArray([1, 2, 3]); // 返回 true
 * ```
 */
export declare function isArray(value: any): boolean;
/**
 * 检查数组是否存在且不为空。
 *
 * @param array - 要检查的数组。
 * @returns 如果数组不存在或为空则返回 true，否则返回 false。
 * @example
 * const array1 = [];
 * const array2 = [1, 2, 3];
 * const array3 = null;
 * console.log(isArrayExist(array1)); // 输出: true
 * console.log(isArrayExist(array2)); // 输出: false
 * console.log(isArrayExist(array3)); // 输出: true
 */
export declare function isArrayExist(array: Array<any>): boolean;
/**
 * @description 根据选定key的value的字母顺序，将对象数组排列
 * @param array
 * @param getter
 * @param dir
 * @returns
 * @example
 * ```Javascript
 * const ig = [
 * { name: 'ning', power: 100},
 * { name: 'rookie', power: 98},
 * { name: 'jkl', power: 95},
 * { name: 'theshy', power: 100}
 * ]
 * sortObjectArray(ig, g => g.name) // => [jkl, ning, rookie, theshy]
 * sortObjectArray(ig, g => g.name, 'desc') // => [theshy, rookie, ning, jkl]
 * ```
 */
export declare function sortObjectArray(array: Array<any>, getter: (obj: any) => string, dir?: 'asc' | 'dsc'): Array<any>;
/**
 * 使用比较函数过滤对象数组。
 *
 * @param array - 要过滤的对象数组。
 * @param compareFunc - 用于比较数组元素的函数，该函数接收两个参数并返回一个值。
 * @returns 如果数组不存在或为空则返回 null，否则返回通过 `compareFunc` 归约后的结果。
 * @example
 * const array = [{ id: 1, value: 10 }, { id: 2, value: 20 }];
 * const compareFunc = (acc, curr) => acc.value > curr.value ? acc : curr;
 * console.log(filterObjectArray(array, compareFunc)); // 输出: { id: 2, value: 20 }
 */
export declare function filterObjectArray(array: Array<any>, compareFunc: (a: any, b: any) => any): any;
/**
 * 将数组分割成指定大小的子数组。
 *
 * @param array - 要分割的数组。
 * @param size - 每个子数组的大小，默认为 2。
 * @returns 返回一个包含多个子数组的数组，每个子数组的大小不超过指定的 size。
 * @example
 * const array = [1, 2, 3, 4, 5];
 * console.log(splitArray(array, 2)); // 输出: [[1, 2], [3, 4], [5]]
 * console.log(splitArray(array, 3)); // 输出: [[1, 2, 3], [4, 5]]
 */
export declare function splitArray(array: Array<any>, size?: number): Array<any>;
/**
 * 根据指定的 getter 函数统计数组中每个值的出现次数。
 *
 * @param array - 要统计的数组。
 * @param getter - 用于从数组元素中提取键值的函数。
 * @returns 返回一个对象，其中键是通过 getter 提取的值，值是该值在数组中出现的次数。
 * @example
 * const array = [{ id: 'a' }, { id: 'b' }, { id: 'a' }];
 * const getter = (obj) => obj.id;
 * console.log(valCountObjectArray(array, getter)); // 输出: { a: 2, b: 1 }
 */
export declare function valCountObjectArray(array: Array<any>, getter: (obj: any) => string): any;
/**
 * 计算两个数组的差集，返回在 root 数组中存在但在 other 数组中不存在的元素。
 *
 * @param root - 基准数组。
 * @param other - 要比较的数组。
 * @param getter - 用于从数组元素中提取键值的函数。
 * @returns 返回一个数组，包含在 root 数组中存在但在 other 数组中不存在的元素。
 * @example
 * const root = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
 * const other = [{ id: 'b' }, { id: 'd' }];
 * const getter = (obj) => obj.id;
 * console.log(diffArray(root, other, getter)); // 输出: [{ id: 'a' }, { id: 'c' }]
 */
export declare function diffArray(root: Array<any>, other: Array<any>, getter: (obj: any) => string): any;
/**
 * 从数组中随机抽取一个元素。
 *
 * @param array - 要从中抽取元素的数组。
 * @returns 返回数组中的一个随机元素，如果数组为空则返回 null。
 * @example
 * const array = [1, 2, 3, 4, 5];
 * console.log(randomDraw(array)); // 输出: 1 或 2 或 3 或 4 或 5（随机）
 */
export declare function randomDraw(array: Array<any>): any;
/**
 * 生成一个在指定范围内的随机整数。
 *
 * @param min - 随机数的最小值（包含）。
 * @param max - 随机数的最大值（包含）。
 * @returns 返回一个在 min 和 max 之间的随机整数。
 * @example
 * console.log(random(1, 5)); // 输出: 1 或 2 或 3 或 4 或 5（随机）
 */
export declare function random(min: number, max: number): number;
/**
 * 随机打乱数组中元素的顺序。
 *
 * @param array - 要打乱的数组。
 * @returns 返回一个元素顺序被打乱的新数组。
 * @example
 * const array = [1, 2, 3, 4, 5];
 * console.log(shuffle(array)); // 输出: [3, 1, 5, 2, 4] 或其他随机顺序
 */
export declare function shuffle(array: Array<any>): any;
