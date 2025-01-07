import {isSimpleType} from '../common'
import { isArray } from '../array'

/**
 * @description 检查值是否为对象类型
 * @param value 
 * @returns 
 */
export function isObject (value: any): value is  object {
  // 检查value是否真值，排查nul和未定义的值
  // value.constructor 是否为 Object, 普通对象的构造函数是Object
  return !!value && value.constructor === Object
}

/**
 * @description 根据传入的数组来创建包含多个方法的对象。
 * 索引小/大元素min max、第一/最后一个元素first last、前/后元素 previous next 
 * 以及旋转元素spin
 * @param arrays 
 * @param toKey 
 * @returns 
 */
export function series (arrays: any, toKey: (item: any) => any = (item) => item): any {
  // 两个映射：元素到索引的映射indexByKey，索引到元素的映射
  const {indexByKey, itemsByIndex} = arrays.reduce(
    (acc, item, idx) => ({
      indexByKey: {
        ...acc.indexByKey,
        [toKey(item)]: idx,
      },
      itemsByIndex: {
        ...acc.itemsByIndex,
        [idx]: item
      }
    }),
    {
      indexByKey: {},
      itemsByIndex: {}
    }
  )

  // 返回两个元素中索引较小的元素
  const min = (a, b) => {
    return indexByKey[a] < indexByKey[b] ? a : b 
  }

  // 返回两个元素中索引较大的元素
  const max = (a, b) => {
    return indexByKey[a] > indexByKey[b] ? a : b
  }

  // 返回数组中的第一个元素
  const first = () => {
    return itemsByIndex[0]
  }

  // 返回数组中的最后一个元素
  const last = () => {
    return itemsByIndex[arrays.length - 1]
  }

  // 返回当前元素的下一个元素，没有则默认值或第一个元素
  const next = (current, defaultValue?) => {
    return itemsByIndex[indexByKey[toKey(current)] + 1] ?? defaultValue ?? first()
  }

  // 返回当前元素的下一个元素，没有则默认值或最后一个元素
  const previous = (current, defaultValue?) => {
    return itemsByIndex[indexByKey[toKey(current)] - 1] ?? defaultValue ?? last()
  }

  // 返回距离当前元素为num的元素。带方向，且以arrays数组为循环
  const spin = (current, num: number) => {
    if (num  % arrays.length === 0) return current
    const abs = Math.abs(num)
    const rel = abs > arrays.length ? abs % arrays.length : abs
    return new Array(rel).fill(1).reduce(
      (acc) => (num > 0? next(acc) : previous(acc)),
      current
    )
  }

  return {
    min,
    max,
    first,
    last,
    next,
    previous,
    spin
  }
}

export function clone (obj: any):any {
  if (isSimpleType(obj)) {
    return obj
  }

  if (typeof obj == 'function') {
    return obj.bind({})
  }

  // 获取obj的构造函数，使用new创建新的对象实例
  // 同样可以创建数组的副本
  const newObj = new ((obj as object).constructor as { new (): any})()

  Object.getOwnPropertyNames(obj).forEach(prop => {
    newObj[prop] = obj[prop]
  })

  return newObj
}

/**
 * @description 反转对象的键和值
 * @param obj 
 * @returns 
 */
export function invert (obj: any):any {
  if (!obj) return {}

  const keys = Object.keys(obj)
  return keys.reduce((acc, key) => {
    acc[obj[key]] = key
    return acc
  }, {})
}

/**
 * @description 获取对象中所有的key,包括深层的（a.b形式）
 * @param obj 
 */
export function keys (obj: any): any {
  if (!obj) return []

  const result: string[] = []
  const getKeys = (nested: any, paths: string[]): void => {
    if (isObject(nested)) {
      Object.entries(nested).flatMap(([k, v]) => getKeys(v, [...paths, k]))
    }
    if (isArray(nested)) {
      // 将索引 `i` 转换为字符串
      nested.flatMap((item, i) => getKeys(item, [...paths, `${i}`]))
    }
    result.push(paths.join('.'))
    return
  }

  return getKeys(obj, [])
}