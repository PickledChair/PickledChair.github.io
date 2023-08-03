import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";

const site = lume();

site.
  copy("static/img", "img")
  .copy("styles/main.css", "main.css")
  .copy("static/manifest.json", "manifest.json")
  .use(jsx_preact());

export default site;
