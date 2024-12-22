

/**
 * @description 判断一个值是否为函数
 * @param value 
 * @returns 
 */
export function isFunction (value: any): value is Function {
  // 检查是否有函数对象特有的属性：constructor、call 和 apply
  return !!(value && value.constructor && value.call && value.apply)
}