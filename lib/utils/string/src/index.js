import { random } from "../../array/index";
/**
 * 将字符串转换为驼峰命名法。
 *
 * @param str - 要转换的字符串。
 * @returns 返回转换后的驼峰命名法字符串。
 * @example
 * console.log(camel('hello_world')); // 输出: helloWorld
 * console.log(camel('hello-world')); // 输出: helloWorld
 * console.log(camel('hello.world')); // 输出: helloWorld
 * console.log(camel('HelloWorld'));  // 输出: helloWorld
 */
export function camel(str) {
    const parts = str
        ?.replace(/([A-Z])+/g, capitalize)
        // 根据大写字母或点号、破折号、空格、下划线分割字符串
        ?.split(/([A-Z])|(\.\-\s_)/)
        .map(item => item.toLowerCase()) ?? [];
    if (parts.length === 0)
        return '';
    if (parts.length === 1)
        return parts[0];
    return parts.reduce((acc, current) => `${acc}${current.charAt(0).toUpperCase()}${current.slice(1)}`);
}
/**
 * 将字符串转换为 kebab-case（短横线命名法）。
 *
 * @param str - 要转换的字符串。
 * @returns 返回转换后的 kebab-case 字符串。
 * @example
 * console.log(dash('hello_world')); // 输出: hello-world
 * console.log(dash('hello-world')); // 输出: hello-world
 * console.log(dash('hello.world')); // 输出: hello-world
 * console.log(dash('HelloWorld'));  // 输出: helloworld
 */
export function dash(str) {
    const parts = str?.split(/[\.\-\s_]/).map(item => item.toLowerCase()) ?? [];
    if (parts.length === 0)
        return '';
    if (parts.length === 1)
        return parts[0];
    return parts.reduce((acc, current) => `${acc}-${current}`);
}
/**
 * 将字符串的首字母大写，其余字母小写。
 *
 * @param str - 要转换的字符串。
 * @returns 返回首字母大写、其余字母小写的字符串。
 * @example
 * console.log(capitalize('hello')); // 输出: Hello
 * console.log(capitalize('WORLD')); // 输出: World
 * console.log(capitalize(''));      // 输出: ''
 * console.log(capitalize('a'));     // 输出: A
 */
export function capitalize(str) {
    if (!str || str.length === 0)
        return '';
    const lower = str.toLowerCase();
    return lower.substring(0, 1).toUpperCase() + lower.substring(1, lower.length);
}
/**
 * 将字符串转换为 PascalCase（帕斯卡命名法）。
 *
 * @param str - 要转换的字符串。
 * @returns 返回转换后的 PascalCase 字符串。
 * @example
 * console.log(pascal('hello_world')); // 输出: HelloWorld
 * console.log(pascal('hello-world')); // 输出: HelloWorld
 * console.log(pascal('hello.world')); // 输出: HelloWorld
 * console.log(pascal('hello world')); // 输出: HelloWorld
 * console.log(pascal(''));            // 输出: ''
 */
export function pascal(str) {
    const parts = str?.split(/[\.\-\s_]/).map(item => item.toLowerCase()) ?? [];
    if (parts.length === 0)
        return '';
    return parts.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('');
}
/**
 * 迭代执行给定的函数指定次数，并返回最终结果。
 *
 * @param length - 迭代的次数。
 * @param func - 每次迭代要执行的函数。
 * @param initValue - 初始值。
 * @returns 返回经过指定次数迭代后的最终结果。
 * @example
 * const func = (current) => current + 'a';
 * console.log(iterate(3, func, '')); // 输出: aaa
 * console.log(iterate(2, (current) => current + 'b', 'x')); // 输出: xbb
 */
export function iterate(length, func, initValue) {
    let value = initValue;
    for (let i = 0; i < length; i++) {
        value = func(value);
    }
    return value;
}
/**
 * 生成指定长度的唯一标识符（UID）。
 *
 * @param length - UID 的长度。
 * @param specials - 可选的特殊字符，这些字符将包含在 UID 中。
 * @returns 返回生成的 UID 字符串。
 * @example
 * console.log(uid(5)); // 输出: 随机生成的 5 位 UID，例如: aB3dE
 * console.log(uid(8, '-_')); // 输出: 随机生成的 8 位 UID，包含特殊字符，例如: aB3-dE_9
 */
export function uid(length, specials = '') {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + specials;
    return iterate(length, acc => {
        return acc + characters.charAt(random(0, characters.length - 1));
    }, '');
}
/**
 * 使用提供的数据替换字符串中的模板占位符。
 *
 * @param str - 包含模板占位符的字符串。
 * @param data - 包含替换值的对象。
 * @param regex - 可选的正则表达式，用于匹配模板占位符，默认为 `/\{\{(.+?)\}\}/g`。
 * @returns 返回替换后的字符串。
 * @example
 * const templateString = 'Hello, {{name}}! You have {{count}} new messages.';
 * const data = { name: 'Alice', count: 5 };
 * console.log(template(templateString, data)); // 输出: Hello, Alice! You have 5 new messages.
 */
export function template(str, data, regex = /\{\{(.+?)\}\}/g) {
    return Array.from(str.matchAll(regex)).reduce((acc, match) => {
        return acc.replace(match[0], data[match[1]]);
    }, str);
}
