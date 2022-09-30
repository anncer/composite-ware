const fs = require("fs-extra");
const handlebars = require("handlebars");
const { resolve } = require("path");

const compsPath = "../../components.json";

const getCompsList = () => {
  const compsTpl = fs.readFileSync(
    resolve(__dirname, compsPath),
    "utf-8"
  );
  return JSON.parse(compsTpl)
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
  compsPath
}
