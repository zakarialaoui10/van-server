import van from "vanjs-core";
import Layout from "../Layout";
import Home from "../contents/home.mdx";
const {div, h1, p, a} = van.tags;
// import "../app.css"

const App = () =>{
    return Layout(
        Home()
    )
    // return van.tags.h1("He");
}
export default App