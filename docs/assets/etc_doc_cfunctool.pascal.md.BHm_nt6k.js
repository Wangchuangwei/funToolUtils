import{_ as s,c as t,o as e,ae as l}from"./chunks/framework.D5-4uJj8.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/cfunctool.pascal.md","filePath":"etc/doc/cfunctool.pascal.md"}'),i={name:"etc/doc/cfunctool.pascal.md"};function p(o,a,n,r,c,h){return e(),t("div",null,a[0]||(a[0]=[l('<p><a href="./">Home</a> &gt; <a href="./cfunctool.html">cfunctool</a> &gt; <a href="./cfunctool.pascal.html">pascal</a></p><h2 id="pascal-function" tabindex="-1">pascal() function <a class="header-anchor" href="#pascal-function" aria-label="Permalink to &quot;pascal() function&quot;">​</a></h2><p>将字符串转换为 PascalCase（帕斯卡命名法）。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pascal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th><p>Parameter</p></th><th><p>Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>str</p></td><td><p>string</p></td><td><p>要转换的字符串。</p></td></tr></tbody></table> **Returns:** <p>string</p><p>返回转换后的 PascalCase 字符串。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>console.log(pascal(&#39;hello_world&#39;)); // 输出: HelloWorld console.log(pascal(&#39;hello-world&#39;)); // 输出: HelloWorld console.log(pascal(&#39;hello.world&#39;)); // 输出: HelloWorld console.log(pascal(&#39;hello world&#39;)); // 输出: HelloWorld console.log(pascal(&#39;&#39;)); // 输出: &#39;&#39;</p>',12)]))}const g=s(i,[["render",p]]);export{k as __pageData,g as default};
