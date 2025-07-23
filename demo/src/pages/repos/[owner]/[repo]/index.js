import van from "vanjs-core";
import Layout from "../../../../Layout";
import Home from "../../../../contents/home.mdx";
import RepoCard from "../../../../components/RepoCard.js";
const {div, h1, p, a} = van.tags;
import "../../../../app.css"

const Endpoint = (owner, repo) => `https://api.github.com/repos/${owner}/${repo}`
const App = async({owner, repo}) =>{
    const resp = await fetch(Endpoint(owner, repo))
    const {stargazers_count, description, forks} = await resp.json()
    console.log({stargazers_count, description, forks})
    return Layout(
        RepoCard(repo, description, stargazers_count, forks)
    )
    return van.tags.h1("He");
}
export default App