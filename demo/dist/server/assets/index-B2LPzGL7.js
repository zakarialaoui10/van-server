import van from "vanjs-core";
const { aside, main, div, nav, a } = van.tags;
function Layout(Content) {
  return div(
    { class: "Layout" },
    aside(
      nav(
        { class: "navigation" },
        a({ href: "/" }, "Home"),
        a({ href: "/roadmap" }, "Roadmap"),
        a({ href: "/repos/owner/zakarialaoui10/repo/van-mdx" }, "Dynamic Routes"),
        a({ href: "/process" }, "Process")
      )
    ),
    main(
      Content
    )
  );
}
export {
  Layout as L
};
