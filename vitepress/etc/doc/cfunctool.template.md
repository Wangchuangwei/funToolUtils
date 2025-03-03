<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [cfunctool](./cfunctool.md) &gt; [template](./cfunctool.template.md)

## template() function

使用提供的数据替换字符串中的模板占位符。

**Signature:**

```typescript
export declare function template(str: string, data: any, regex?: RegExp): string;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

str


</td><td>

string


</td><td>

包含模板占位符的字符串。


</td></tr>
<tr><td>

data


</td><td>

any


</td><td>

包含替换值的对象。


</td></tr>
<tr><td>

regex


</td><td>

RegExp


</td><td>

_(Optional)_ 可选的正则表达式，用于匹配模板占位符，默认为 `/\{\{(.+?)\}\}/g`<!-- -->。


</td></tr>
</tbody></table>
**Returns:**

string

返回替换后的字符串。

## Example

const templateString = 'Hello, {<!-- -->{<!-- -->name<!-- -->}<!-- -->}<!-- -->! You have {<!-- -->{<!-- -->count<!-- -->}<!-- -->} new messages.'; const data = { name: 'Alice', count: 5 }<!-- -->; console.log(template(templateString, data)); // 输出: Hello, Alice! You have 5 new messages.

