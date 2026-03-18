import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume();

site
  .copy("static/img", "img")
  .copy("styles/main.css", "main.css")
  .copy("static/manifest.json", "manifest.json")
  .use(jsx());

export default site;
