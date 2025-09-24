import van from "vanjs-core";
import { L as Layout } from "./index-B2LPzGL7.js";
const Home = () => {
  const __items__ = [];
  __items__.push(van.tags.p({}, van.tags.strong({}, "van-server"), " is a lightweight server-side rendering (SSR) framework for VanJS that enables file-based routing and client-side hydration, allowing developers to build modern, fast, and SEO-friendly web applications with no dependencies beyond VanJS and native browser APIs."));
  __items__.push(van.tags.p({}, "To support this goal, van-server offers a focused set of features designed for simplicity and power:"));
  __items__.push(van.tags.ul({}, van.tags.li({}, van.tags.p({}, "✅ Server-Side Rendering (SSR)")), van.tags.li({}, van.tags.p({}, "✅ File Based Routing")), van.tags.li({}, van.tags.p({}, "✅ Client Side Hydration")), van.tags.li({}, van.tags.p({}, "✅ Supports Dynamic Routes")), van.tags.li({}, van.tags.p({}, "✅ Supports both Sync And Async rendering")), van.tags.li({}, van.tags.p({}, "✅ ", van.tags.a({ href: "" }, "Van-mdx"), " Supports"))));
  const UI = van.tags.div(...__items__);
  return UI;
};
const { div, h1, p, a } = van.tags;
const App = () => {
  return Layout(
    Home()
  );
};
export {
  App as default
};
