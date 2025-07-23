import van from "vanjs-core"
async function App(){
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const res = await api.json()
    return van.tags.h1(res.title)

}
export default App
