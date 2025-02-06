import { isSimpleType } from '../../common/index';
import { isArray } from '../../array/index';
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
export function isObject(value) {
    // 检查value是否真值，排查nul和未定义的值
    // value.constructor 是否为 Object, 普通对象的构造函数是Object
    return !!value && value.constructor === Object;
}
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
export function series(arrays, toKey = (item) => item) {
    // 两个映射：元素到索引的映射indexByKey，索引到元素的映射
    const { indexByKey, itemsByIndex } = arrays.reduce((acc, item, idx) => ({
        indexByKey: {
            ...acc.indexByKey,
            [toKey(item)]: idx,
        },
        itemsByIndex: {
            ...acc.itemsByIndex,
            [idx]: item
        }
    }), {
        indexByKey: {},
        itemsByIndex: {}
    });
    // 返回两个元素中索引较小的元素
    const min = (a, b) => {
        return indexByKey[a] < indexByKey[b] ? a : b;
    };
    // 返回两个元素中索引较大的元素
    const max = (a, b) => {
        return indexByKey[a] > indexByKey[b] ? a : b;
    };
    // 返回数组中的第一个元素
    const first = () => {
        return itemsByIndex[0];
    };
    // 返回数组中的最后一个元素
    const last = () => {
        return itemsByIndex[arrays.length - 1];
    };
    // 返回当前元素的下一个元素，没有则默认值或第一个元素
    const next = (current, defaultValue) => {
        return itemsByIndex[indexByKey[toKey(current)] + 1] ?? defaultValue ?? first();
    };
    // 返回当前元素的下一个元素，没有则默认值或最后一个元素
    const previous = (current, defaultValue) => {
        return itemsByIndex[indexByKey[toKey(current)] - 1] ?? defaultValue ?? last();
    };
    // 返回距离当前元素为num的元素。带方向，且以arrays数组为循环
    const spin = (current, num) => {
        if (num % arrays.length === 0)
            return current;
        const abs = Math.abs(num);
        const rel = abs > arrays.length ? abs % arrays.length : abs;
        return new Array(rel).fill(1).reduce((acc) => (num > 0 ? next(acc) : previous(acc)), current);
    };
    return {
        min,
        max,
        first,
        last,
        next,
        previous,
        spin
    };
}
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
export function clone(obj) {
    if (isSimpleType(obj)) {
        return obj;
    }
    if (typeof obj == 'function') {
        return obj.bind({});
    }
    // 获取obj的构造函数，使用new创建新的对象实例
    // 同样可以创建数组的副本
    const newObj = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach(prop => {
        newObj[prop] = obj[prop];
    });
    return newObj;
}
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
export function invert(obj) {
    if (!obj)
        return {};
    const keys = Object.keys(obj);
    return keys.reduce((acc, key) => {
        const val = obj[key];
        acc[val] = key;
        return acc;
    }, {});
}
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
export function keys(obj) {
    if (!obj)
        return [];
    const result = [];
    const getKeys = (nested, paths) => {
        if (isObject(nested)) {
            Object.entries(nested).flatMap(([k, v]) => getKeys(v, [...paths, k]));
        }
        if (isArray(nested)) {
            // 将索引 `i` 转换为字符串
            nested.flatMap((item, i) => getKeys(item, [...paths, `${i}`]));
        }
        result.push(paths.join('.'));
        return;
    };
    return getKeys(obj, []);
}
