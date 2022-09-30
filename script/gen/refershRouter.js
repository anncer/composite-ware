
const fs = require("fs-extra");
const { getCompsList, compileFile, resolveFile } = require("./utils")

const lang = ['en-US', 'zh-CN']

const getRouterTpl = (item, dir = 'zn-CN') => {
  const title = dir === 'zn-CN' ? item.znName : item.name
  return `\n        {
          path: "/${dir}/components/${item.name}",
          component: () => import("../../docs/${dir}/components/${item.name}.md"),
          meta: { title: "${title}" }
        }`

}

// 更新 docs router.ts
const refershRouter = () => {
  const routerFileFrom = "./.template/router.ts.tpl";
  const to = '../../docs/src/router/' // + ${lang}.ts
  const compsList = getCompsList()
  lang.forEach(l => {
    const routerList = compsList.map(it => {
      return getRouterTpl(it, l)
    })
    const routerFileTpl = fs.readFileSync(
      resolveFile(routerFileFrom),
      "utf-8"
    );
    const routerFileContent = compileFile(routerFileTpl, {lang: l, langUpper: l.split("-").join(""), list: routerList}, { noEscape: true })
    fs.outputFileSync(resolveFile(to + `${l}.ts`), routerFileContent, (err) => {
      if (err) console.log(err);
    });
  })
}

module.exports = refershRouter
