import van from "vanjs-core";
import { L as Layout } from "./index-B2LPzGL7.js";
import { HTMLWrapper } from "ziko";
const { div: div$1, h2: h2$1 } = van.tags;
function RepoCard(repoName, description, starsCount, forksCount) {
  return div$1(
    { style: `
            border : 2px darkblue solid;
            display : flex; 
            flex-direction: column; 
            align-items: center;
            width : 70%;
            min-height : 200px;
            margin : 0 auto;
            ` },
    h2$1(repoName),
    div$1(
      { style: `
                display : flex; 
                flex-direction: column; 
                align-items: center;
                gap : 1.5em;
            ` },
      div$1(description),
      div$1(`Stars : ${starsCount}`),
      div$1(`Forks : ${forksCount}`)
    )
  );
}
const DynamicRoutes = ({} = {}) => {
  const __items__ = [];
  __items__.push(van.tags.p({}, "Dynamic routing in ", van.tags.strong({}, "van-server"), " allows you to define URL parameters directly within your file-based routing system, enabling flexible and reusable page templates for variable data (e.g., blog posts, user profiles, product pages)."));
  __items__.push(van.tags.p({}, "✅ How It Works", van.tags.br(), "Dynamic segments are defined using square brackets in your file names. For example:"));
  __items__.push(HTMLWrapper("<pre><code>/pages<br>├── index.js           -&gt; /<br>├── about.js           -&gt; /about<br>├── repos<br>│   ├──[owner]<br>|        ├──[repo]     -&gt; /repos/owner/{owner}/repo/{repo}    </code></pre>").element);
  __items__.push(van.tags.p({}, "When a request is made to a path like ", van.tags.code("/repos/owner/zakarialaoui10/repo/van-mdx"), ",", van.tags.br(), "van-server will automatically match it to ", van.tags.code("/pages/repos/[owner]/[repo].js"), " and extract {owner, repo} as params"));
  __items__.push(van.tags.p({}, "We can use these parameters like this:"));
  __items__.push(HTMLWrapper('<pre><code>...<br><span class="hljs-keyword">const</span> <span class="hljs-title function_">App</span> = <span class="hljs-keyword">async</span>(<span class="hljs-params">{owner = <span class="hljs-string">&quot;zakarialaoui10&quot;</span>, repo = <span class="hljs-string">&quot;zikojs&quot;</span>} = {}</span>) =&gt;{<br>    <span class="hljs-keyword">const</span> resp = <span class="hljs-keyword">await</span> <span class="hljs-title function_">fetch</span>(<span class="hljs-string">`https://api.github.com/repos/<span class="hljs-subst">${owner}</span>/<span class="hljs-subst">${repo}</span>`</span>)<br>    <span class="hljs-keyword">const</span> {stargazers_count, description, forks} = <span class="hljs-keyword">await</span> resp.<span class="hljs-title function_">json</span>()<br>    <span class="hljs-keyword">return</span> <span class="hljs-title class_">Layout</span>(<br>        <span class="hljs-title class_">RepoCard</span>(repo, description, stargazers_count, forks)<br>    )}<br><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">App</span></code></pre>').element);
  __items__.push(van.tags.p({}, "This is an example of a Repo Card using Dynamic RoutesThis is a practical example of how to build a RepoCard component using Dynamic Routes in van-server, dynamically fetching data based on the URL parameters."));
  const UI = van.tags.div(...__items__);
  return UI;
};
const { div, nav, h2, p, a } = van.tags;
const Endpoint = (owner, repo) => `https://api.github.com/repos/${owner}/${repo}`;
const App = async ({ owner = "zakarialaoui10", repo = "van-mdx" } = {}) => {
  const resp = await fetch(Endpoint(owner, repo));
  const { stargazers_count, description, forks } = await resp.json();
  return Layout(
    div(
      { style: "padding = 10px;" },
      DynamicRoutes(),
      RepoCard(repo, description, stargazers_count, forks),
      h2("Test Other Links"),
      nav(
        { class: "navigation" },
        a({ href: "/repos/owner/vanjs-org/repo/van" }, "/repos/owner/vanjs-org/repo/van"),
        a({ href: "/repos/owner/thednp/repo/vanjs-lucide" }, "/repos/owner/thednp/repo/vanjs-lucide"),
        a({ href: "/repos/owner/zakarialaoui10/repo/van-mdx" }, "/repos/owner/zakarialaoui10/repo/van-mdx"),
        a({ href: "/repos/owner/zakarialaoui10/repo/van-server" }, "/repos/owner/zakarialaoui10/repo/van-server")
      )
    )
  );
};
export {
  App as default
};
