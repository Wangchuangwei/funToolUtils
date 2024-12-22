import {is} from '../common'

/**
 * @description 检查值是否为Symbol类型
 * @param value 
 * @returns 
 */
export function isSymbol(value: any): any {
  return typeof value === 'symbol' || is(value, 'Symbol')
}