import{_ as l,c as i,a as s,b as e,w as t,d as c,r as o,o as u,e as p}from"./app-CDIvFa4A.js";const r={},d={class:"table-of-contents"};function k(m,n){const a=o("router-link");return u(),i("div",null,[s("nav",d,[s("ul",null,[s("li",null,[e(a,{to:"#开发环境要求"},{default:t(()=>n[0]||(n[0]=[p("开发环境要求")])),_:1})]),s("li",null,[e(a,{to:"#安装cli工具"},{default:t(()=>n[1]||(n[1]=[p("安装Cli工具")])),_:1})]),s("li",null,[e(a,{to:"#创建并启动你的第一个工程"},{default:t(()=>n[2]||(n[2]=[p("创建并启动你的第一个工程")])),_:1})]),s("li",null,[e(a,{to:"#一个两个简单的代码示例"},{default:t(()=>n[3]||(n[3]=[p("一个两个简单的代码示例")])),_:1})])])]),n[4]||(n[4]=c(`<h2 id="开发环境要求" tabindex="-1"><a class="header-anchor" href="#开发环境要求"><span>开发环境要求</span></a></h2><p><code>最新版本Golang</code></p><h2 id="安装cli工具" tabindex="-1"><a class="header-anchor" href="#安装cli工具"><span>安装Cli工具</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">go <span class="token function">install</span> github.com/enorith/enocli@latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="创建并启动你的第一个工程" tabindex="-1"><a class="header-anchor" href="#创建并启动你的第一个工程"><span>创建并启动你的第一个工程</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">enocli init awsome</span>
<span class="line"><span class="token builtin class-name">cd</span> awsome</span>
<span class="line">go mod tidy</span>
<span class="line"><span class="token comment"># 修改一些配置文件后</span></span>
<span class="line">go build <span class="token parameter variable">-o</span> ./build/awsome <span class="token operator">&amp;&amp;</span> ./build/awsome</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问地址: http://localhost:8000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一个两个简单的代码示例" tabindex="-1"><a class="header-anchor" href="#一个两个简单的代码示例"><span>一个两个简单的代码示例</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token comment">// internal/app/handlers/api/article.go</span></span>
<span class="line"><span class="token keyword">package</span> api</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;api/internal/app/models&quot;</span></span>
<span class="line">	<span class="token string">&quot;github.com/enorith/framework/database&quot;</span></span>
<span class="line">	<span class="token string">&quot;github.com/enorith/http/content&quot;</span></span>
<span class="line">	<span class="token string">&quot;gorm.io/gorm&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// ArticleHandler 自定义的API处理</span></span>
<span class="line"><span class="token keyword">type</span> ArticleHandler <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> ArticleReq <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	content<span class="token punctuation">.</span>Request</span>
<span class="line">	Type    <span class="token builtin">int64</span> <span class="token string">\`input:&quot;type&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ListArticles 文章分页展示</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>ArticleHandler<span class="token punctuation">)</span> <span class="token function">ListArticles</span><span class="token punctuation">(</span>builder <span class="token operator">*</span>database<span class="token punctuation">.</span>Builder<span class="token punctuation">[</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">]</span><span class="token punctuation">,</span> req ArticleReq<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>database<span class="token punctuation">.</span>PageResult<span class="token punctuation">[</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>d <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> req<span class="token punctuation">.</span>Type <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span></span>
<span class="line">			d<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;type = ?&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>Type<span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token keyword">return</span> d<span class="token punctuation">.</span><span class="token function">Order</span><span class="token punctuation">(</span><span class="token string">&quot;id desc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Preload</span><span class="token punctuation">(</span><span class="token string">&quot;Files&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Paginate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Detail 文章详情展示</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>ArticleHandler<span class="token punctuation">)</span> <span class="token function">Detail</span><span class="token punctuation">(</span>id content<span class="token punctuation">.</span>ParamInt64<span class="token punctuation">,</span> db <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token punctuation">(</span>models<span class="token punctuation">.</span>Article<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">var</span> article models<span class="token punctuation">.</span>Article</span>
<span class="line"></span>
<span class="line">    e <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>article<span class="token punctuation">,</span> id<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> article<span class="token punctuation">,</span> e</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Detail 文章详情展示（隐式注入）</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>ArticleHandler<span class="token punctuation">)</span> <span class="token function">Detail2</span><span class="token punctuation">(</span>article models<span class="token punctuation">.</span>Article<span class="token punctuation">)</span> models<span class="token punctuation">.</span>Article <span class="token punctuation">{</span></span>
<span class="line">	</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> article</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>添加路由</p></blockquote><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token comment">// internal/routes/api.go</span></span>
<span class="line"><span class="token keyword">package</span> routes</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;api/internal/app/handlers/api&quot;</span></span>
<span class="line"></span>
<span class="line">	<span class="token string">&quot;github.com/enorith/http/router&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">ApiRoutes</span><span class="token punctuation">(</span>r <span class="token operator">*</span>router<span class="token punctuation">.</span>Wrapper<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">var</span> articleHandler api<span class="token punctuation">.</span>ArticleHandler</span>
<span class="line"></span>
<span class="line">    r<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span> articleHandler<span class="token punctuation">.</span>ListArticles<span class="token punctuation">)</span></span>
<span class="line">    r<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;articles/:id&quot;</span><span class="token punctuation">,</span> articleHandler<span class="token punctuation">.</span>Detail<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10))])}const b=l(r,[["render",k],["__file","getting-started.html.vue"]]),g=JSON.parse('{"path":"/guide/getting-started.html","title":"快速开始","lang":"zh-CN","frontmatter":{"title":"快速开始"},"headers":[{"level":2,"title":"开发环境要求","slug":"开发环境要求","link":"#开发环境要求","children":[]},{"level":2,"title":"安装Cli工具","slug":"安装cli工具","link":"#安装cli工具","children":[]},{"level":2,"title":"创建并启动你的第一个工程","slug":"创建并启动你的第一个工程","link":"#创建并启动你的第一个工程","children":[]},{"level":2,"title":"一个两个简单的代码示例","slug":"一个两个简单的代码示例","link":"#一个两个简单的代码示例","children":[]}],"git":{"updatedTime":1727526110000,"contributors":[{"name":"Nerio","email":"cjy632258@hotmail.com","commits":2},{"name":"CaoJiayuan","email":"120106578@qq.com","commits":1},{"name":"CaoJiayuan","email":"cjy632258@hotmail.com","commits":1}]},"filePathRelative":"guide/getting-started.md"}');export{b as comp,g as data};
