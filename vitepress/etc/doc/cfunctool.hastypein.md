<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [cfunctool](./cfunctool.md) &gt; [hasTypeIn](./cfunctool.hastypein.md)

## hasTypeIn() function

 返回数据是否属于给定的类型中

**Signature:**

```typescript
export declare function hasTypeIn(value: any, types: Array<string>): boolean;
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

value


</td><td>

any


</td><td>

判断的数据


</td></tr>
<tr><td>

types


</td><td>

Array&lt;string&gt;


</td><td>

需要检查类型的字符串数组


</td></tr>
</tbody></table>
**Returns:**

boolean


## Example


```JavaScript
 let a = '123' ; hasTypeIn(a, ['Number', 'array']) => true
```

