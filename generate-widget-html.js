import { readFileSync, writeFileSync } from "fs";
import { minify } from "html-minifier";

const widgetHtml = readFileSync("./src/widget.html").toString();
writeFileSync(
  "./src/widget-html.ts",
  `export const widgetHTML = \`${minify(widgetHtml, {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
  })}\`;\n`
);
