import {is} from '../common'

/**
 * @description 检查值是否日期类型
 * @param value 
 * @returns 
 */
export function isDate (value: any): value is Date {
  return is(value, 'date')
}