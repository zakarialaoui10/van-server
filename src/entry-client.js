import {
    customPath,
    routesMatcher,
    dynamicRoutesParser,
    isDynamic,
  } from "ziko-server/utils";
export function EntryClient({pages}={}){
  addEventListener("load", (async () => {
    const routes = Object.keys(pages);
    const root = "./pages/";
    const pairs = {};
    for (let i = 0; i < routes.length; i++) {
      const module = await pages[routes[i]]();
      const component = await module.default;
      Object.assign(pairs, { [customPath(routes[i], root)]: component });
    }
    async function hydrate(path) {
      let [mask, callback] = Object.entries(pairs).find(([route]) =>
        routesMatcher(route, `/${path}`),
      );
      let DomElement;
      if (isDynamic(mask)) {
        const params = dynamicRoutesParser(mask, `/${path}`);
        DomElement = callback.call(this, params);
      } 
      else DomElement = await callback();
      document.body.replaceWith(DomElement);
    }
    hydrate(location.pathname.slice(1));
  }))
}