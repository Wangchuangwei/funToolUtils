import { is } from '../../common/index';
/**
 * 检查给定的值是否为 Date 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值是 Date 类型则返回 true，否则返回 false。
 * @example
 * console.log(isDate(new Date())); // 输出: true
 * console.log(isDate('2023-10-01')); // 输出: false
 * console.log(isDate(1696108800000)); // 输出: false
 */
export function isDate(value) {
    return is(value, 'date');
}
