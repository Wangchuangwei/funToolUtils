<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [cfunctool](./cfunctool.md) &gt; [iterate](./cfunctool.iterate.md)

## iterate() function

迭代执行给定的函数指定次数，并返回最终结果。

**Signature:**

```typescript
export declare function iterate(length: number, func: (current: string) => string, initValue: string): string;
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

length


</td><td>

number


</td><td>

迭代的次数。


</td></tr>
<tr><td>

func


</td><td>

(current: string) =&gt; string


</td><td>

每次迭代要执行的函数。


</td></tr>
<tr><td>

initValue


</td><td>

string


</td><td>

初始值。


</td></tr>
</tbody></table>
**Returns:**

string

返回经过指定次数迭代后的最终结果。

## Example

const func = (current) =<!-- -->&gt; current + 'a'; console.log(iterate(3, func, '')); // 输出: aaa console.log(iterate(2, (current) =<!-- -->&gt; current + 'b', 'x')); // 输出: xbb

