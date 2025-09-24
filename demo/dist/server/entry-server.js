import { customPath, routesMatcher, isDynamic, dynamicRoutesParser } from "ziko-server/utils";
async function EntryServer({ pages } = {}) {
  return async function render(path) {
    const routes = Object.keys(pages);
    const root = "./pages/";
    const pairs = {};
    for (let i = 0; i < routes.length; i++) {
      const module = await pages[routes[i]]();
      const component = await module.default;
      Object.assign(pairs, { [customPath(routes[i], root)]: component });
    }
    let [mask, callback] = Object.entries(pairs).find(
      ([route]) => routesMatcher(route, `/${path}`)
    );
    let DomElement;
    if (isDynamic(mask)) {
      const params = dynamicRoutesParser(mask, `/${path}`);
      DomElement = callback.call(this, params);
    } else DomElement = await callback();
    return {
      // html,
      DomElement
    };
  };
}
const defineServerEntry = ({ pages }) => () => EntryServer({ pages });
const entryServer = defineServerEntry({
  pages: /* @__PURE__ */ Object.assign({ "./pages/index.js": () => import("./assets/index-CC4tCJ_i.js"), "./pages/process.js": () => import("./assets/process-C1UUlvL9.js"), "./pages/repos/[owner]/[repo]/index.js": () => import("./assets/index-B5PkNyXu.js"), "./pages/roadmap.js": () => import("./assets/roadmap-ybf3QVAJ.js") })
});
export {
  entryServer as default
};
