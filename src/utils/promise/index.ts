import { isFunction } from "../function"

/**
 * @description 判断一个值是否为Promise
 * @param value 
 * @returns 
 */
export function isPromise (value: any): value is Promise<any> {
  if (!value) return false
  // Promise对象特有的then属性
  if (!value.then) return false
  if (!isFunction(value.then)) return false
  return true
}