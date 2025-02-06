import { isFunction } from "../../function/index";
/**
 * 检查给定的值是否为 Promise 对象。
 *
 * @param value - 要检查的值。
 * @returns 如果值是 Promise 对象则返回 true，否则返回 false。
 * @example
 * console.log(isPromise(Promise.resolve())); // 输出: true
 * console.log(isPromise(new Promise(() => {}))); // 输出: true
 * console.log(isPromise(1)); // 输出: false
 * console.log(isPromise('string')); // 输出: false
 * console.log(isPromise({})); // 输出: false
 */
export function isPromise(value) {
    if (!value)
        return false;
    // Promise对象特有的then属性
    if (!value.then)
        return false;
    if (!isFunction(value.then))
        return false;
    return true;
}
