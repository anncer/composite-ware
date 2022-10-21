const fs = require("fs-extra");
const handlebars = require("handlebars");
const { resolve } = require("path");

const compsPath = "../../components.json";
const stylePath = '../../packages/theme-chalk/src/index.scss'
const listFilePath = "../../packages/components/components.ts";

const getCompsList = () => {
  const compsTpl = fs.readFileSync(
    resolve(__dirname, compsPath),
    "utf-8"
  );
  return JSON.parse(compsTpl)
}

const getComponents = () => {
  return fs.readFileSync(
    resolveFile(listFilePath),
    "utf-8"
  );
}

const getStyle = () => {
  return fs.readFileSync(
    resolve(__dirname, stylePath),
    "utf-8"
  );
}

const compileFile = (tpl, params, opts) => {
  return handlebars.compile(tpl, opts)(params);
}

const resolveFile = (src) => {
  return resolve(__dirname, src)
}

module.exports = {
  getCompsList,
  compileFile,
  resolveFile,
  compsPath,
  listFilePath,
  getComponents,
  stylePath,
  getStyle
}
