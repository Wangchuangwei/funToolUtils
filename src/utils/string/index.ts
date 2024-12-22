import { random } from "../array"

/**
 * @description 将字符串转为小驼峰命名法形式
 * @param str 
 * @returns 
 */
export function camel (str: string): string {
  const parts = str
    ?.replace(/([A-Z])+/g, capitalize)
    // 根据大写字母或点号、破折号、空格、下划线分割字符串
    ?.split(/([A-Z])|(\.\-\s_)/)
    .map(item => item.toLowerCase()) ?? []
  
  if (parts.length === 0) return ''
  if (parts.length === 1) return parts[0]

  return parts.reduce((acc, current) => `${acc}${current.charAt(0).toUpperCase()}${current.slice(1)}`)
}

/**
 * @description 将字符串转为-分割并全小写的格式
 * @param str 
 * @returns 
 */
export function dash (str: string): string {
  const parts = str?.split(/[\.\-\s_]/).map(item => item.toLowerCase()) ?? []

  if (parts.length === 0) return ''
  if (parts.length === 1) return parts[0]

  return parts.reduce((acc, current) => `${acc}-${current}`)
}

/**
 * @description 将字符串首字母大写，其余小写
 * @param str 
 * @returns 
 */
export function capitalize (str: string): string {
  if (!str || str.length === 0) return ''
  const lower = str.toLowerCase()
  return lower.substring(0,1).toUpperCase() + lower.substring(1, lower.length)
}

/**
 * @description 将字符串转为大驼峰命名法形式
 * @param str 
 * @returns 
 */
export function pascal (str: string): string {
  const parts = str?.split(/[\.\-\s_]/).map(item => item.toLowerCase()) ?? []

  if (parts.length === 0) return ''

  return parts.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('')
}

/**
 * @description 多次迭代，每次调用传入的函数。累计
 * @param length 
 * @param func 
 * @param initValue 
 * @returns 
 */
export function iterate (length: number, func: (current: string) => string, initValue: string): string {
  let value = initValue
  for (let i = 0; i < length; i++) {
    value = func(value)
  }
  return value
}

/**
 * @description 生成指定长度的随机字符串
 * @param length 
 * @param specials 
 * @returns 
 */
export function uid (length: number, specials: string = ''): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + specials

  return iterate(
    length, 
    acc => {
      return acc + characters.charAt(random(0, characters.length - 1))
    },
    ''
  )
}