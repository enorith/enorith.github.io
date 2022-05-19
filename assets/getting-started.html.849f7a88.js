import{_ as e,c as n}from"./app.61d94df6.js";const a={},s=n(`<h2 id="dev-environment-requirement" tabindex="-1"><a class="header-anchor" href="#dev-environment-requirement" aria-hidden="true">#</a> Dev environment requirement</h2><p><code>Golang 1.18+</code></p><h2 id="install-cli-tools" tabindex="-1"><a class="header-anchor" href="#install-cli-tools" aria-hidden="true">#</a> Install cli tools</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/enorith/enocli@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="create-and-run-your-first-project" tabindex="-1"><a class="header-anchor" href="#create-and-run-your-first-project" aria-hidden="true">#</a> Create and run your first project</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>enocli init awsome
<span class="token builtin class-name">cd</span> awsome
go mod tidy
<span class="token comment"># after tweak configs</span>
go run ./cmd/app

<span class="token comment"># then access: http://localhost:8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function i(r,t){return s}var c=e(a,[["render",i],["__file","getting-started.html.vue"]]);export{c as default};
