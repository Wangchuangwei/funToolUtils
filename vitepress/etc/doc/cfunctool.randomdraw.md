<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [cfunctool](./cfunctool.md) &gt; [randomDraw](./cfunctool.randomdraw.md)

## randomDraw() function

从数组中随机抽取一个元素。

**Signature:**

```typescript
export declare function randomDraw(array: Array<any>): any;
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

要从中抽取元素的数组。


</td></tr>
</tbody></table>
**Returns:**

any

返回数组中的一个随机元素，如果数组为空则返回 null。

## Example

const array = \[1, 2, 3, 4, 5\]; console.log(randomDraw(array)); // 输出: 1 或 2 或 3 或 4 或 5（随机）

