import { isEqType } from "../common"

/**
 * 返回判断的数据是否为数组
 * @param value 判断的数据
 * @returns 布尔值
 */
export function isArray(value: any): boolean {
  return Array.isArray(value)
}

/**
 * 检查两个数组内的值和类型是否相等
 * @param v1 
 * @param v2 
 * @returns 布尔值
 */
export function isEqArray(v1:Array<any>, v2: Array<any>): boolean {
  let len = v1.length
  for (let i = 0; i < len; i++) {
    const flag = isEqType(v1[i], v2[i])
    if (!flag) return false
  }
  return true
}


/**
 * 判断数组是否存在或长度为0
 * @param array 
 * @returns 
 */
export function isArrayExist(array: Array<any>): boolean {
  return !array || (array.length ?? 0) === 0
}


/**
 * 根据选定key的value的字母顺序，将对象数组排列
 * @param array 
 * @param getter 
 * @param dir 
 * @returns 
 * @example
 * ```Javascript
 * const ig = [
 * { name: 'ning', power: 100},
 * { name: 'rookie', power: 98},
 * { name: 'jkl', power: 95},
 * { name: 'theshy', power: 100}
 * ]
 * sortObjectArray(ig, g => g.name) // => [jkl, ning, rookie, theshy]  
 * sortObjectArray(ig, g => g.name, 'desc') // => [theshy, rookie, ning, jkl]  
 * ```
 */
export function sortObjectArray (array: Array<any>, getter: (obj: any) => string, dir: 'asc' | 'dsc' = 'asc'): Array<any> {
  if (!array) return []

  const asc = (a: any, b: any) => getter(a).localeCompare(getter(b))

  const dsc = (a: any, b: any) => getter(b).localeCompare(getter(a))

  // 使用 `slice` 方法克隆数组，避免修改原数组，然后根据 `dir` 参数选择排序函数进行排序
  return array.slice().sort(dir === 'dsc' ? dsc : asc)
}

/**
 * 返回对象数组中满足条件的对象
 * @param array 
 * @param compareFunc 
 * @returns 
 */
export function filterObjectArray (array: Array<any>, compareFunc: (a: any, b: any) => any): any {
  if (!array || (array.length ?? 0) === 0) return null

  // 使用数组的 `reduce` 方法应用 `compareFunc`，将数组归约为单一的值。
  return array.reduce(compareFunc)
}