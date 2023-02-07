import { nodeResolve } from "@rollup/plugin-node-resolve";
import html from "@rollup/plugin-html";

module.exports = {
  input: "index.js",
  output: {
    dir: "dist",
  },
  plugins: [html(), nodeResolve()],
};
