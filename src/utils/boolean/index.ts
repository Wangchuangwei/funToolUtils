import {is} from '../common'

/**
 * @description 检查值是否布尔类型
 * @param value 
 * @returns 
 */
export function isBoolean (value: any): value is boolean {
  return is(value, 'Boolean')
}

