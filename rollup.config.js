const html = require("@rollup/plugin-html");
import { nodeResolve } from "@rollup/plugin-node-resolve";

module.exports = {
  input: "index.js",
  output: {
    dir: "dist",
  },
  plugins: [html(), nodeResolve()],
};
