<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [cfunctool](./cfunctool.md) &gt; [capitalize](./cfunctool.capitalize.md)

## capitalize() function

将字符串的首字母大写，其余字母小写。

**Signature:**

```typescript
export declare function capitalize(str: string): string;
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

要转换的字符串。


</td></tr>
</tbody></table>
**Returns:**

string

返回首字母大写、其余字母小写的字符串。

## Example

console.log(capitalize('hello')); // 输出: Hello console.log(capitalize('WORLD')); // 输出: World console.log(capitalize('')); // 输出: '' console.log(capitalize('a')); // 输出: A

