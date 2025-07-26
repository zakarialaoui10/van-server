import van from "vanjs-core";
import Layout from "@layouts";
import Home from "@contents/home.mdx";
const {div, h1, p, a} = van.tags;
import "@styles/app.css"

const App = () =>{
    return Layout(
        Home()
    )
}
export default App