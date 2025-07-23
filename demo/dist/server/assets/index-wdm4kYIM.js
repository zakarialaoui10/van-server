import { Suspense, h1 } from "ziko";
const ui = async (id) => {
  console.log({ id });
  const api = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const res = await api.json();
  return h1(res.title);
};
const App = ({ id }) => {
  return Suspense(
    h1("... waiting"),
    () => ui(id)
  );
};
export {
  App as default
};
