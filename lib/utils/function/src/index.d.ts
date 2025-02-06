/**
 * 检查给定的值是否为函数类型。
 *
 * @param value - 要检查的值。
 * @returns 如果值是函数类型则返回 true，否则返回 false。
 * @example
 * console.log(isFunction(() => {})); // 输出: true
 * console.log(isFunction(function() {})); // 输出: true
 * console.log(isFunction(1)); // 输出: false
 * console.log(isFunction('function() {}')); // 输出: false
 * console.log(isFunction({})); // 输出: false
 */
export declare function isFunction(value: any): value is Function;
/**
 * 创建一个函数链，依次执行给定的函数。
 *
 * @param funcs - 一个由函数组成的数组，这些函数将会被依次执行。
 *                每个函数都可以接受任意参数，并返回任何类型的值。
 * @returns 返回一个新的函数，该函数接受任意参数，并依次将这些参数传递给第一个函数。
 *          每个函数的返回值将作为下一个函数的输入。
 * @example
 * const addOne = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * const chainedFunction = chain(addOne, double);
 * console.log(chainedFunction(5)); // 输出: 12 (5 + 1 = 6, 6 * 2 = 12)
 */
export declare function chain(...funcs: ((...args: any[]) => any)[]): any;
/**
 * 创建一个防抖函数，限制函数在指定时间间隔内只执行一次。
 *
 * @param options - 包含 `delay` 属性，它是函数延迟执行的毫秒数。
 * @param func - 被防抖的函数。
 * @returns 返回一个新的防抖函数，该函数在指定时间间隔内只执行一次。
 * @example
 * const debouncedFunction = debounce({ delay: 300 }, () => {
 *   console.log('Function executed');
 * });
 *
 * debouncedFunction(); // 不会立即执行
 * debouncedFunction(); // 不会立即执行
 * // 300 毫秒后，函数将执行一次
 */
export declare function debounce({ delay }: {
    delay: number;
}, func: (...args: any[]) => any): any;
/**
 * 创建一个节流函数，限制函数在指定时间间隔内只执行一次。
 *
 * @param options - 包含 `interval` 属性，它是函数执行的时间间隔（毫秒数）。
 * @param func - 被节流的函数。
 * @returns 返回一个新的节流函数，该函数在指定时间间隔内只执行一次。
 * @example
 * const throttledFunction = throttle({ interval: 300 }, () => {
 *   console.log('Function executed');
 * });
 *
 * throttledFunction(); // 执行
 * throttledFunction(); // 不执行
 * throttledFunction(); // 不执行
 * // 300 毫秒后，再次调用时会执行
 */
export declare function throttle({ interval }: {
    interval: number;
}, func: (...args: any[]) => any): any;
