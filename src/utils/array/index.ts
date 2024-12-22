import { isEmpty, isEqType } from "../common"

/**
 * @description 返回判断的数据是否为数组
 * @param value 判断的数据
 * @returns 布尔值
 */
export function isArray(value: any): boolean {
  return Array.isArray(value)
}

/**
 * @description 检查两个数组内的值和类型是否相等
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
 * @description 返回所有非空元素的数组
 * @param array 
 * @returns 含非空元素的数组
 * @example
 * ```JavaScript
 *    let arr =[1,2,3,null,undefined,4,[],{},NaN]; getRelArray(arr)=> [1,2,3,4]
 * ```
 */
export function getRealArray(array: Array<any>): Array<any> {
  return array.filter(item => isEmpty(item))
}

/**
 * @description 判断数组是否存在或长度为0
 * @param array 
 * @returns 
 */
export function isArrayExist(array: Array<any>): boolean {
  return !array || (array.length ?? 0) === 0
}


/**
 * @description 根据选定key的value的字母顺序，将对象数组排列
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
 * @description 返回对象数组中满足条件的对象
 * @param array 
 * @param compareFunc 
 * @returns 
 */
export function filterObjectArray (array: Array<any>, compareFunc: (a: any, b: any) => any): any {
  if (!array || (array.length ?? 0) === 0) return null

  // 使用数组的 `reduce` 方法应用 `compareFunc`，将数组归约为单一的值。
  return array.reduce(compareFunc)
}

/**
 * @description 将数组按照指定大小进行划分
 * @param array 
 * @param size 
 * @returns 
 */
export function splitArray (array: Array<any>, size: number = 2): Array<any> {
  if (!array || (array.length ?? 0) === 0) return []

  const count = Math.ceil(array.length / size)
  
  // 创建新数组，初始填充为null
  return new Array(count).fill(null).map((_val: null, idx: number) => {
    return array.slice(idx * size, idx * size + size)
  })
}

/**
 * @description 返回对象数组中指定key的value值出现的次数
 * @param array 
 * @param getter 
 * @returns 
 */
export function valCountObjectArray (array: Array<any>, getter: (obj: any) => string): any {
  if (!array || (array.length ?? 0) == 0) return {}

  return array.reduce((acc, item) => {
    const id = getter(item)
    acc[id] = (acc[id] ?? 0) + 1
    return acc
  }, {})  // 初始化为一个空对象
}

/**
 * @description 返回root数组中出现，但other数组中没有出现的项
 * @param root 
 * @param other 
 * @param getter 
 * @returns 
 */
export function diffArray (root: Array<any>, other: Array<any>, getter: (obj: any) => string): any {
  if (!root?.length && !other?.length) return []
  // 等价 !root || (root.length ?? 0) == 0
  if (root?.length === void 0) return [...other]
  if (!other?.length) return [...root]

  // other中存在，将其标记为true
  const bKeys = other.reduce((acc, item) => {
    acc[getter(item)] = true
    return acc
  }, {})

  return root.filter(item => !bKeys[getter(item)])
}

/**
 * @description 从数组中随机抽取一个元素
 * @param array 
 * @returns 
 */
export function randomDraw (array: Array<any>): any {
  const max = array.length
  if (max === 0) return null

  const index = random(0, max - 1)
  return array[index]
}

/**
 * @description 在指定范围内随机生成整数，包括两端
 * @param min 
 * @param max 
 * @returns 
 */
export function random (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * @description 随机打乱数组的顺序
 * @param array 
 * @returns 
 */
export function shuffle(array: Array<any>): any {
  return array
    // 将数组每个元素转为包含随机数和原始值的对象
    .map(item => ({rand: Math.random(), value: item}))
    .sort((a, b) => a.rand - b.rand)
    .map(item => item.value)
}