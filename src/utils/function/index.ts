

/**
 * @description 判断一个值是否为函数
 * @param value 
 * @returns 
 */
export function isFunction (value: any): value is Function {
  // 检查是否有函数对象特有的属性：constructor、call 和 apply
  return !!(value && value.constructor && value.call && value.apply)
}


/**
 * @description 函数链，依次执行
 * @param funcs 
 * @returns 
 */
export function chain (
  // `funcs` 是一个由函数组成的数组，这些函数将会被依次执行。
  // 每个函数都可以接受任意参数，并返回任何类型的值。
  ...funcs: ((...args: any[]) => any)[]
): any {
  return (...args: any[]) => {
    return funcs.reduce((acc, fn) => {
      // 在每个迭代中，将前一个函数的返回值作为下一个函数的输入
      return fn(acc)          
    },args) 
  }
}

/**
 * @description 防抖函数，确保函数只在最后一次被调用后的一段时间后执行
 * @param param0 
 * @param func 
 */
export function debounce (
  // 包含 `delay` 属性，它是函数延迟执行的毫秒数
  {delay}: {delay: number},
  // 被防抖的函数
  func: (...args: any[]) =>any
): any {
  let timer: NodeJS.Timeout | undefined = undefined
  // 控制函数是否应该执行
  let active = true

  const debounced = (...args) => {
    if (active) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        active &&  func(...args)
        timer = undefined
      }, delay)
    } else {
      // 不使用防抖
      func(...args)
    }  
  }

  // 为函数添加方法，检查是否有等待执行的func
  debounced.isPending = () => {
    return timer !== undefined
  }

  // 为函数添加方法，用于取消执行func
  debounced.cancel = () => {
    active = false
  }

  // 为函数添加方法，用于立即执行func
  debounced.flush = (...args) => func(...args)

  return debounced
}

/**
 * @description 节流函数，确保函数在指定的时间间隔内最多只执行一次
 * @param param0 
 * @param func 
 * @returns 
 */
export function throttle (
  {interval}: {interval: number},
  func: (...args: any[]) => any
): any {
  let timer: NodeJS.Timeout | undefined = undefined
  // 控制函数是否应该执行
  let ready = true

  const thtottled = (...args) => {
    if (!ready) return
    func(...args)
    ready = false

    timer = setTimeout(() => {
      ready = true
      timer = undefined
    }, interval)
  }

  thtottled.isThrottled = () => {
    return timer !== undefined
  } 

  return thtottled
}