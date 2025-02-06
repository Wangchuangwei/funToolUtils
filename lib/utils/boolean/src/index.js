import { is } from '../../common/index';
/**
 * 检查给定的值是否为布尔类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值是布尔类型则返回 true，否则返回 false。
 * @example
 * console.log(isBoolean(true));  // 输出: true
 * console.log(isBoolean(false)); // 输出: true
 * console.log(isBoolean(1));     // 输出: false
 * console.log(isBoolean('true'));// 输出: false
 */
export function isBoolean(value) {
    return is(value, 'Boolean');
}
