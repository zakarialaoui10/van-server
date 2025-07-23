import {
  customPath,
  routesMatcher,
  dynamicRoutesParser,
  isDynamic,
} from "ziko-server/utils";

import { renderToString } from "./utils/renderToString.js"

export function EntryServer({ pages } = {}) {
  return async function render(path) {
    const routes = Object.keys(pages);
    const root = "./pages/";
    const pairs = {};
    for (let i = 0; i < routes.length; i++) {
      const module = await pages[routes[i]]();
      const component = await module.default;
      Object.assign(pairs, { [customPath(routes[i], root)]: component });
    }
    let [mask, callback] = Object.entries(pairs).find(([route]) =>
      routesMatcher(route, `/${path}`),
    );
    let DomElement;
    if (isDynamic(mask)) {
      const params = dynamicRoutesParser(mask, `/${path}`);
      DomElement = callback.call(this, params);
    } 
    else DomElement = await callback();

    const html = renderToString(DomElement);
    return {
      html,
    };
  };
}

export const defineServerEntry = ({ pages }) => () => EntryServer({ pages });