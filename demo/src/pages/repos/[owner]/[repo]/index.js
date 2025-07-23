import van from "vanjs-core";
import Layout from "../../../../Layout";
import Home from "../../../../contents/home.mdx";
const {div, h1, p, a} = van.tags;
// import "../app.css"

const Endpoint = (owner, repo) => `https://api.github.com/repos/${owner}/${repo}`
const App = async({owner, repo}) =>{
    // const data = await fetch(Endpoint(owner, repo))
    // console.log(data)
    // return Layout(
    //     Home()
    // )
    return van.tags.h1("He");
}
export default App