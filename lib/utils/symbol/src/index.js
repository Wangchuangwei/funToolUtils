import { is } from '../../common/index';
/**
 * 检查给定的值是否为 Symbol 类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值是 Symbol 类型则返回 true，否则返回 false。
 * @example
 * console.log(isSymbol(Symbol('test'))); // 输出: true
 * console.log(isSymbol('test')); // 输出: false
 * console.log(isSymbol(123)); // 输出: false
 * console.log(isSymbol({})); // 输出: false
 */
export function isSymbol(value) {
    return typeof value === 'symbol' || is(value, 'Symbol');
}
