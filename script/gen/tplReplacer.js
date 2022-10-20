const fs = require("fs-extra");
const { getCompsList, compileFile, resolveFile, compsPath } = require("./utils")

const getTplFilePath = (meta) => ({
  // docs 目录
  docx: {
    from: "./.template/docs/docx.md.tpl",
    to: `../../docs/docs/zh-CN/components/${meta.compName}.md`
  },
  docx2: {
    from: "./.template/docs/docx.md.tpl",
    to: `../../docs/docs/en-US/components/${meta.compName}.md`
  },
  demo: {
    from: "./.template/docs/demo.vue.tpl",
    to: `../../docs/example/${meta.compName}/base.vue`
  },

   // 根目录
  base: {
    from: "./.template/install.ts.tpl",
    to: `../../packages/components/${meta.compName}/index.ts`
  },
  // src 目录
  vue: {
    from: "./.template/src/comp.vue.tpl",
    to: `../../packages/components/${meta.compName}/src/${meta.compName}.vue`
  },
  index: {
    from: "./.template/src/index.ts.tpl",
    to: `../../packages/components/${meta.compName}/src/index.ts`
  },
  props: {
    from: "./.template/src/prop.ts.tpl",
    to: `../../packages/components/${meta.compName}/src/prop.ts`
  },
  scss: {
    from: "./.template/index.scss.tpl",
    to: `../../packages/theme-chalk/src/${meta.compName}.scss`
  }
});

const compFilesTplMaker = (meta) => {
  const filePaths = getTplFilePath(meta);
  Object.keys(filePaths).forEach((key) => {
    const fileTpl = fs.readFileSync(
      resolveFile(filePaths[key].from),
      "utf-8"
    );
    const fileContent = compileFile(fileTpl, meta)
    fs.outputFile(resolveFile(filePaths[key].to), fileContent, (err) => {
      if (err) console.log(err);
    });
  });
};

// 读取 components.ts 并更新
const singleSplit = '// sigleSplit'
const compExpRefersh = (meta) => {
  const listFilePath = "../../packages/components/components.ts";
  const listFileTpl = fs.readFileSync(
    resolveFile(listFilePath),
    "utf-8"
  );
  const arr = listFileTpl.split(singleSplit)
  let f0 = arr[0]
  f0 = f0.concat(`export * from './${meta.compName}'\n` , singleSplit)

  let f1 = arr[1]
  f1 = f1.concat(`import { Ce${meta.tf} } from './${meta.compName}'\n` , singleSplit)

  const f2 = arr[2] + singleSplit
  const f4 = arr[4] + singleSplit
  let f3 = arr[3]
  f3 = f3.concat(`Ce${meta.tf},\n` , singleSplit)

  let f5 = arr[5]
  f5 = f5.concat(`Ce${meta.tf}: typeof Ce${meta.tf},\n` , singleSplit)

  let f6 = arr[6]
  const ctx = f0.concat(f1,f2,f3,f4,f5,f6)
  fs.outputFile(resolveFile(listFilePath), ctx, (err) => {
    if (err) console.log(err);
  });
};

// 更新 /component.json
const compListRefersh = (meta) => {
  const compsList = getCompsList()
  compsList.push({
    "name": meta.compName,
    "znName": meta.compZhName,
    "desc": meta.compDesc
  })
  const newCompFileContext = JSON.stringify(compsList, null, 2)
  fs.writeFileSync(resolveFile(compsPath), newCompFileContext, err => {
    if (err) console.log(err)
  })
}

module.exports = (meta) => {
  compFilesTplMaker(meta);
  compExpRefersh(meta)
  compListRefersh(meta)
};
