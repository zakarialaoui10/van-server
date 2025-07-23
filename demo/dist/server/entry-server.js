import { defineServerEntry } from "van-server/entry-server";
const entryServer = defineServerEntry({
  pages: /* @__PURE__ */ Object.assign({ "./pages/articles/[id]/index.js": () => import("./assets/index-wdm4kYIM.js"), "./pages/index.js": () => import("./assets/index-mKmOVlO7.js"), "./pages/me.js": () => import("./assets/me-BPlMfWM1.js") })
});
export {
  entryServer as default
};
