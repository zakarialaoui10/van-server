import van from "vanjs-core";
import Layout from "@layouts";
import RepoCard from "@components/RepoCard.js";
const {div, nav, h2, p, a} = van.tags;
import "@styles/app.css"
import DynamicRoutes from "@contents/dynamic-routes.mdx"

const Endpoint = (owner, repo) => `https://api.github.com/repos/${owner}/${repo}`
const App = async({owner = "zakarialaoui10", repo = "van-mdx"} = {}) =>{
    const resp = await fetch(Endpoint(owner, repo))
    const {stargazers_count, description, forks} = await resp.json()
    return Layout(
        div(
            {style : "padding = 10px;"},
            DynamicRoutes(),
            RepoCard(repo, description, stargazers_count, forks),
            h2("Test Other Links"),
            nav(
                {class : "navigation"},
                a({ href : "/repos/owner/vanjs-org/repo/van"}, "/repos/owner/vanjs-org/repo/van"),
                a({ href : "/repos/owner/thednp/repo/vanjs-lucide"}, "/repos/owner/thednp/repo/vanjs-lucide"),
                a({ href : "/repos/owner/zakarialaoui10/repo/van-mdx"}, "/repos/owner/zakarialaoui10/repo/van-mdx"),
                a({ href : "/repos/owner/zakarialaoui10/repo/van-server"}, "/repos/owner/zakarialaoui10/repo/van-server")
            )
        )
    )
}
export default App