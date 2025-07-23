import van from "vanjs-core";
/* empty css             */
import "ziko";
const { aside, main, div: div$1, nav, a: a$1 } = van.tags;
function Layout(Content) {
  return div$1(
    { class: "Layout" },
    aside(
      nav(
        { class: "navigation" },
        a$1({ href: "./me" }, "Home"),
        a$1({ href: "./me" }, "Get Started"),
        a$1({ href: "./me" }, "About")
      )
    ),
    main(
      Content
    )
  );
}
const Home = ({} = {}) => {
  const __items__ = [];
  __items__.push(van.tags.p({}, van.tags.strong({}, "van-server"), " is a lightweight server-side rendering (SSR) framework for VanJS that enables file-based routing and client-side hydration, allowing developers to build modern, fast, and SEO-friendly web applications with no dependencies beyond VanJS and native browser APIs."));
  __items__.push(van.tags.p({}, "To support this goal, van-server offers a focused set of features designed for simplicity and power:"));
  __items__.push(van.tags.ul({}, van.tags.li({}, van.tags.p({}, van.tags.Arrowright({ width: 32, height: 32 }), " ✅ Server-Side Rendering (SSR)")), van.tags.li({}, van.tags.p({}, "✅ File Based Routing")), van.tags.li({}, van.tags.p({}, "✅ Client Side Hydration")), van.tags.li({}, van.tags.p({}, "✅ Supports Dynamic Routes")), van.tags.li({}, van.tags.p({}, "✅ Supports both Sync And Async rendering")), van.tags.li({}, van.tags.p({}, "✅ ", van.tags.a({ href: "" }, "Van-mdx"), " Supports"))));
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
