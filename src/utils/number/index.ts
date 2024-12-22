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

