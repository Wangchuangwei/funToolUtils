import {is} from '../common'

/**
 * @description 检查值是否数值类型
 * @param value 
 * @returns 
 */
export function isNumber (value: any): value is number {
  return typeof value === 'number' || is(value, 'number')
}

/**
 * @description 检查值是否为浮点数
 * @param value 
 * @returns 
 */
export function isFloat (value: any): value is number {
  return isNumber(value) && value % 1 !== 0
}

/**
 * @description 检查值是否为整数
 * @param value 
 * @returns 
 */
export function isInt (value: any): value is number {
  return isNumber(value) && value % 1 === 0
}

/**
 * @description 检查给定数字是否在两个数字之间
 * @param number 
 * @param start 
 * @param end 
 * @returns 
 */
export function isRange (number, start, end): boolean {
  const isTypeSafe = typeof number === 'number' && typeof start === 'number' && (typeof end === 'undefined' || typeof end === 'number')

  if (!isTypeSafe) return false

  if (typeof end === 'undefined') {
    end = start
    start = 0
  }

  return number >= Math.min(start, end) && number <= Math.max(start, end)
}

/**
 * @description 将值转为浮点值
 * @param value 
 * @param defaultValue 
 * @returns 
 */
export function toFloat (value, defaultValue): any {
  const def = defaultValue === void 0 ? 0 : defaultValue

  if (value === null || value === void 0) return def

  const result = parseFloat(value)
  return isNaN(result)? def : result
}