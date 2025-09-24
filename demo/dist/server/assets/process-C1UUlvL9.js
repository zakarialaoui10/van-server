import { L as Layout } from "./index-B2LPzGL7.js";
import van from "vanjs-core";
import { HTMLWrapper } from "ziko";
const Process = () => {
  const __items__ = [];
  __items__.push(van.tags.h2({}, "Strcuture"));
  __items__.push(HTMLWrapper("<pre><code>my-van-app/<br>├── pages/<br>│   ├── index.js          // → /<br>│   └── about.js          // → /about<br>│   └── article<br>│         └── [title]        // → /article/title/{title}<br>├── public/               // static assets<br>├── entry-client.js       // client hydration<br>├── entry-server.js       // SSR entry<br>└── server.js             // app startup</code></pre>").element);
  __items__.push(van.tags.h3({}, "Entry Client"));
  __items__.push(van.tags.p({}, "Used on the client side to hydrate server-rendered HTML."));
  __items__.push(HTMLWrapper('<pre><code><span class="hljs-keyword">import</span> {<span class="hljs-title class_">EntryClient</span>} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;van-server/entry-client&quot;</span>;<br><span class="hljs-title class_">EntryClient</span>({<br>  pages : <span class="hljs-keyword">import</span>.<span class="hljs-property">meta</span>.<span class="hljs-title function_">glob</span>(<span class="hljs-string">&quot;./pages/**/*{.js}&quot;</span>)<br>})</code></pre>').element);
  __items__.push(van.tags.p({}, van.tags.code("import.meta.glob(...)"), " is Vite’s dynamic import utility used for route discovery."));
  __items__.push(van.tags.h3({}, "Entry Server"));
  __items__.push(van.tags.p({}, "Used by the server to resolve routes and generate HTML."));
  __items__.push(HTMLWrapper('<pre><code><span class="hljs-keyword">import</span> {defineServerEntry} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;van-server/entry-server&quot;</span>;<br><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineServerEntry</span>({<br>   pages : <span class="hljs-keyword">import</span>.<span class="hljs-property">meta</span>.<span class="hljs-title function_">glob</span>(<span class="hljs-string">&quot;./pages/**/*{.js}&quot;</span>)<br>})</code></pre>').element);
  __items__.push(van.tags.h3({}, "Server"));
  __items__.push(van.tags.p({}, "Starts the development or production server with SSR + hydration support."));
  __items__.push(HTMLWrapper('<pre><code><span class="hljs-keyword">import</span> { createServer } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;van-server/server&quot;</span>;<br><span class="hljs-title function_">createServer</span>()</code></pre>').element);
  __items__.push(van.tags.h2({}, "How Routing Works ?"));
  __items__.push(van.tags.p({}, "Each file inside the pages/ directory maps to a route:"));
  __items__.push(van.tags.table({}, van.tags.thead({}, van.tags.tr({}, van.tags.td({}, "File"), van.tags.td({}, "Route"), van.tags.td({}, "Type"))), van.tags.tbody({}, van.tags.tr({}, van.tags.td({}, "pages/index.js"), van.tags.td({}, van.tags.code("/")), van.tags.td({}, "Static")), van.tags.tr({}, van.tags.td({}, "pages/about.js"), van.tags.td({}, van.tags.code("/about")), van.tags.td({}, "Static")), van.tags.tr({}, van.tags.td({}, "pages/[lang]/about.js"), van.tags.td({}, van.tags.code("/lang/{lang}/about")), van.tags.td({}, "Dynamics")))));
  __items__.push(van.tags.p({}, "Dynamic Routes are ssuported using ", van.tags.code("Params")));
  __items__.push(van.tags.p({}, van.tags.strong({}, "Example")));
  __items__.push(HTMLWrapper('<pre><code><span class="hljs-comment">// pages/[lang]/about.js</span><br><span class="hljs-keyword">import</span> van <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vanjs-core&quot;</span>;<br><span class="hljs-keyword">import</span> data <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./data&quot;</span><br><span class="hljs-keyword">const</span> { h1, div } = van.<span class="hljs-property">tags</span>;<br><span class="hljs-keyword">export</span> <span class="hljs-title function_">default</span> ({lang}) =&gt; {<br>  ....<br>  <span class="hljs-keyword">return</span> <span class="hljs-title function_">div</span>(data.<span class="hljs-property">about</span>[lang]);<br>}<br></code></pre>').element);
  __items__.push(van.tags.h2({}, "💡 How Hydration Works"));
  __items__.push(van.tags.p({}, "After the server renders the HTML, VanJS is used on the client to rebind interactive components via EntryClient. This happens on ", van.tags.strong({}, van.tags.code("DOMContentLoaded")), " ."));
  const UI = van.tags.div(...__items__);
  return UI;
};
const App = () => {
  return Layout(
    Process()
  );
};
export {
  App as default
};
