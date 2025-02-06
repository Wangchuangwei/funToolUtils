import { isEmpty, isEqType } from "../../common/index";
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
export function isArray(value) {
    return Array.isArray(value);
}
/**
 * 比较两个数组是否相等。
 *
 * @param v1 - 第一个数组，用于比较的源数组。
 * @param v2 - 第二个数组，用于比较的目标数组。
 * @returns 如果两个数组在每个位置上的元素都相等则返回 true，否则返回 false。
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [1, 2, 3];
 * const array3 = [1, 2, 4];
 * console.log(isEqArray(array1, array2)); // 输出: true
 * console.log(isEqArray(array1, array3)); // 输出: false
 */
export function isEqArray(v1, v2) {
    let len = v1.length;
    for (let i = 0; i < len; i++) {
        const flag = isEqType(v1[i], v2[i]);
        if (!flag)
            return false;
    }
    return true;
}
/**
 * @description 返回所有非空元素的数组
 * @param array
 * @returns 含非空元素的数组
 * @example
 * ```JavaScript
 *    let arr =[1,2,3,null,undefined,4,[],{},NaN]; getRelArray(arr)=> [1,2,3,4]
 * ```
 */
export function getRealArray(array) {
    return array.filter(item => isEmpty(item));
}
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
export function isArrayExist(array) {
    return !array || (array.length ?? 0) === 0;
}
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
export function sortObjectArray(array, getter, dir = 'asc') {
    if (!array)
        return [];
    const asc = (a, b) => getter(a).localeCompare(getter(b));
    const dsc = (a, b) => getter(b).localeCompare(getter(a));
    // 使用 `slice` 方法克隆数组，避免修改原数组，然后根据 `dir` 参数选择排序函数进行排序
    return array.slice().sort(dir === 'dsc' ? dsc : asc);
}
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
export function filterObjectArray(array, compareFunc) {
    if (!array || (array.length ?? 0) === 0)
        return null;
    // 使用数组的 `reduce` 方法应用 `compareFunc`，将数组归约为单一的值。
    return array.reduce(compareFunc);
}
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
export function splitArray(array, size = 2) {
    if (!array || (array.length ?? 0) === 0)
        return [];
    const count = Math.ceil(array.length / size);
    // 创建新数组，初始填充为null
    return new Array(count).fill(null).map((_val, idx) => {
        return array.slice(idx * size, idx * size + size);
    });
}
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
export function valCountObjectArray(array, getter) {
    if (!array || (array.length ?? 0) == 0)
        return {};
    return array.reduce((acc, item) => {
        const id = getter(item);
        acc[id] = (acc[id] ?? 0) + 1;
        return acc;
    }, {}); // 初始化为一个空对象
}
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
export function diffArray(root, other, getter) {
    if (!root?.length && !other?.length)
        return [];
    // 等价 !root || (root.length ?? 0) == 0
    if (root?.length === void 0)
        return [...other];
    if (!other?.length)
        return [...root];
    // other中存在，将其标记为true
    const bKeys = other.reduce((acc, item) => {
        acc[getter(item)] = true;
        return acc;
    }, {});
    return root.filter(item => !bKeys[getter(item)]);
}
/**
 * 从数组中随机抽取一个元素。
 *
 * @param array - 要从中抽取元素的数组。
 * @returns 返回数组中的一个随机元素，如果数组为空则返回 null。
 * @example
 * const array = [1, 2, 3, 4, 5];
 * console.log(randomDraw(array)); // 输出: 1 或 2 或 3 或 4 或 5（随机）
 */
export function randomDraw(array) {
    const max = array.length;
    if (max === 0)
        return null;
    const index = random(0, max - 1);
    return array[index];
}
/**
 * 生成一个在指定范围内的随机整数。
 *
 * @param min - 随机数的最小值（包含）。
 * @param max - 随机数的最大值（包含）。
 * @returns 返回一个在 min 和 max 之间的随机整数。
 * @example
 * console.log(random(1, 5)); // 输出: 1 或 2 或 3 或 4 或 5（随机）
 */
export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * 随机打乱数组中元素的顺序。
 *
 * @param array - 要打乱的数组。
 * @returns 返回一个元素顺序被打乱的新数组。
 * @example
 * const array = [1, 2, 3, 4, 5];
 * console.log(shuffle(array)); // 输出: [3, 1, 5, 2, 4] 或其他随机顺序
 */
export function shuffle(array) {
    return array
        // 将数组每个元素转为包含随机数和原始值的对象
        .map(item => ({ rand: Math.random(), value: item }))
        .sort((a, b) => a.rand - b.rand)
        .map(item => item.value);
}
