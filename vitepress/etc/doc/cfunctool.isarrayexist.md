<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [cfunctool](./cfunctool.md) &gt; [isArrayExist](./cfunctool.isarrayexist.md)

## isArrayExist() function

检查数组是否存在且不为空。

**Signature:**

```typescript
export declare function isArrayExist(array: Array<any>): boolean;
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

array


</td><td>

Array&lt;any&gt;


</td><td>

要检查的数组。


</td></tr>
</tbody></table>
**Returns:**

boolean

如果数组不存在或为空则返回 true，否则返回 false。

## Example

const array1 = \[\]; const array2 = \[1, 2, 3\]; const array3 = null; console.log(isArrayExist(array1)); // 输出: true console.log(isArrayExist(array2)); // 输出: false console.log(isArrayExist(array3)); // 输出: true

