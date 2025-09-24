import { L as Layout } from "./index-B2LPzGL7.js";
import van from "vanjs-core";
const Roadmap = () => {
  const __items__ = [];
  __items__.push(van.tags.h1({}, "🗺️ van-server Roadmap"));
  __items__.push(van.tags.h2({}, "Completed"));
  __items__.push(van.tags.ul({}, van.tags.li({}, van.tags.p({}, "✅ Basic SSR engine using VanJS components")), van.tags.li({}, van.tags.p({}, "✅ File Based Routing")), van.tags.li({}, van.tags.p({}, "✅ Full Client-side hydration")), van.tags.li({}, van.tags.p({}, "✅ Van-Mdx Support")), van.tags.li({}, van.tags.p({}, "✅ Dynamic Routes")), van.tags.li({}, van.tags.p({}, "✅ Supports Both Sync and Async pages")), van.tags.li({}, van.tags.p({}, "✅ Development Support")), van.tags.li({}, van.tags.p({}, "✅ Production Support"))));
  __items__.push(van.tags.h2({}, "To DO"));
  __items__.push(van.tags.ul({}, van.tags.li({}, van.tags.p({}, "Wild Card Route")), van.tags.li({}, van.tags.p({}, "404 fallback route")), van.tags.li({}, van.tags.p({}, "Partial Client-side hydration")), van.tags.li({}, van.tags.p({}, "Static Site Generation")), van.tags.li({}, van.tags.p({}, "Custom <head> injection support")), van.tags.li({}, van.tags.p({}, "Middleware support :Add hooks like onRequest(req) or onRender(context) for extensibility.")), van.tags.li({}, van.tags.p({}, "Deno and Bun support")), van.tags.li({}, van.tags.p({}, "Site Map"))));
  const UI = van.tags.div(...__items__);
  return UI;
};
const App = () => {
  return Layout(
    Roadmap()
  );
};
export {
  App as default
};
