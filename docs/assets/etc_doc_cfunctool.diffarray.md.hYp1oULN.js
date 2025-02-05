import{_ as i,c as a,o as s,ae as r}from"./chunks/framework.G-5Kj65K.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/cfunctool.diffarray.md","filePath":"etc/doc/cfunctool.diffarray.md"}'),e={name:"etc/doc/cfunctool.diffarray.md"};function h(n,t,p,l,d,k){return s(),a("div",null,t[0]||(t[0]=[r('<p><a href="./">Home</a> &gt; <a href="./cfunctool.html">cfunctool</a> &gt; <a href="./cfunctool.diffarray.html">diffArray</a></p><h2 id="diffarray-function" tabindex="-1">diffArray() function <a class="header-anchor" href="#diffarray-function" aria-label="Permalink to &quot;diffArray() function&quot;">​</a></h2><p>计算两个数组的差集，返回在 root 数组中存在但在 other 数组中不存在的元素。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> diffArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">root</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">other</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th><p>Parameter</p></th><th><p>Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>root</p></td><td><p>Array&lt;any&gt;</p></td><td><p>基准数组。</p></td></tr><tr><td><p>other</p></td><td><p>Array&lt;any&gt;</p></td><td><p>要比较的数组。</p></td></tr><tr><td><p>getter</p></td><td><p>(obj: any) =&gt; string</p></td><td><p>用于从数组元素中提取键值的函数。</p></td></tr></tbody></table> **Returns:** <p>any</p><p>返回一个数组，包含在 root 数组中存在但在 other 数组中不存在的元素。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>const root = [{ id: &#39;a&#39; }, { id: &#39;b&#39; }, { id: &#39;c&#39; }]; const other = [{ id: &#39;b&#39; }, { id: &#39;d&#39; }]; const getter = (obj) =&gt; obj.id; console.log(diffArray(root, other, getter)); // 输出: [{ id: &#39;a&#39; }, { id: &#39;c&#39; }]</p>',12)]))}const y=i(e,[["render",h]]);export{c as __pageData,y as default};
