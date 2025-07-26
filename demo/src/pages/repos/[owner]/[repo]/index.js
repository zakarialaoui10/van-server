import van from "vanjs-core";
import Layout from "@layouts";
import RepoCard from "@components/RepoCard.js";
const {div, h1, p, a} = van.tags;
import "@styles/app.css"
import DynamicRoutes from "@contents/dynamic-routes.mdx"

const Endpoint = (owner, repo) => `https://api.github.com/repos/${owner}/${repo}`
const App = async({owner = "zakarialaoui10", repo = "van-mdx"} = {}) =>{
    const resp = await fetch(Endpoint(owner, repo))
    const {stargazers_count, description, forks} = await resp.json()
    return Layout(
        div(
            DynamicRoutes(),
            RepoCard(repo, description, stargazers_count, forks)
        )
    )
}
export default App