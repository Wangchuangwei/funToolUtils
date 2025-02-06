import{_ as i,c as l,o as n,ae as e,j as t,a}from"./chunks/framework.D5-4uJj8.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/cfunctool.throttle.md","filePath":"etc/doc/cfunctool.throttle.md"}'),h={name:"etc/doc/cfunctool.throttle.md"};function r(p,s,k,o,d,c){return n(),l("div",null,s[0]||(s[0]=[e(`<p><a href="./">Home</a> &gt; <a href="./cfunctool.html">cfunctool</a> &gt; <a href="./cfunctool.throttle.html">throttle</a></p><h2 id="throttle-function" tabindex="-1">throttle() function <a class="header-anchor" href="#throttle-function" aria-label="Permalink to &quot;throttle() function&quot;">​</a></h2><p>创建一个节流函数，限制函数在指定时间间隔内只执行一次。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> throttle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">interval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    interval</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">func</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2>`,6),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,[t("p",null,"Parameter")]),t("th",null,[t("p",null,"Type")]),t("th",null,[t("p",null,"Description")])])]),t("tbody",null,[t("tr",null,[t("td",null,[t("p",{interval:""})]),t("td",null,[t("p",{"interval:":"","number;":""})]),t("td")]),t("tr",null,[t("td",null,[t("p",null,"func")]),t("td",null,[t("p",null,"(...args: any[]) => any")]),t("td",null,[t("p",null,"被节流的函数。")])])])],-1),a(" **Returns:** "),t("p",null,"any",-1),t("p",null,"返回一个新的节流函数，该函数在指定时间间隔内只执行一次。",-1),t("h2",{id:"example",tabindex:"-1"},[a("Example "),t("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),t("p",null,"const throttledFunction = throttle({ interval: 300 }, () => { console.log('Function executed'); });",-1),t("p",null,"throttledFunction(); // 执行 throttledFunction(); // 不执行 throttledFunction(); // 不执行 // 300 毫秒后，再次调用时会执行",-1)]))}const E=i(h,[["render",r]]);export{g as __pageData,E as default};
