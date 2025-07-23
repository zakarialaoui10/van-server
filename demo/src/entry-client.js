import {EntryClient} from "van-server/entry-client";
EntryClient({
  pages : import.meta.glob("./pages/**/*{.js,.mdz}")
})
