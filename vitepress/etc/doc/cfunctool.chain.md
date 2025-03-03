<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [cfunctool](./cfunctool.md) &gt; [chain](./cfunctool.chain.md)

## chain() function

创建一个函数链，依次执行给定的函数。

**Signature:**

```typescript
export declare function chain(...funcs: ((...args: any[]) => any)[]): any;
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

funcs


</td><td>

((...args: any\[\]) =&gt; any)\[\]


</td><td>

一个由函数组成的数组，这些函数将会被依次执行。 每个函数都可以接受任意参数，并返回任何类型的值。


</td></tr>
</tbody></table>
**Returns:**

any

返回一个新的函数，该函数接受任意参数，并依次将这些参数传递给第一个函数。 每个函数的返回值将作为下一个函数的输入。

## Example

const addOne = (x: number) =<!-- -->&gt; x + 1; const double = (x: number) =<!-- -->&gt; x \* 2; const chainedFunction = chain(addOne, double); console.log(chainedFunction(5)); // 输出: 12 (5 + 1 = 6, 6 \* 2 = 12)

