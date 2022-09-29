const fs = require("fs-extra");
const handlebars = require("handlebars");
const { resolve } = require("path");

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
  prop: {
    form: "./.template/src/prop.ts.tpl",
    to: `../../packages/components/${meta.compName}/src/prop.ts`
  },

  // 样式文件
  style: {
    form: "./.template/style.scss.tpl",
    to: `../../packages/theme-chalk/src/${meta.compName}.scss`
  }
});

const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta);
  Object.keys(filePaths).forEach((key) => {
    const fileTpl = fs.readFileSync(
      resolve(__dirname, filePaths[key].from),
      "utf-8"
    );
    const fileContent = handlebars.compile(fileTpl)(meta);
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, (err) => {
      if (err) console.log(err);
    });
  });
};

// 读取 packages/list.json 并更新
const listJsonTplReplacer = (meta) => {
  const listFilePath = "../../packages/list.json";
  const listFileTpl = fs.readFileSync(
    resolve(__dirname, listFilePath),
    "utf-8"
  );
  const listFileContent = JSON.parse(listFileTpl);
  listFileContent.push(meta);
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2);
  fs.writeFile(
    resolve(__dirname, listFilePath),
    newListFileContentFile,
    (err) => {
      if (err) console.log(err);
    }
  );
  return listFileContent;
};

// 更新 router.ts
// const routerTplReplacer = (listFileContent) => {
//   const routerFileFrom = "./.template/router.ts.tpl";
//   const routerFileTo = "../../src/router.ts";
//   const routerFileTpl = fs.readFileSync(
//     resolve(__dirname, routerFileFrom),
//     "utf-8"
//   );
//   const routerMeta = {
//     routes: listFileContent.map((comp) => {
//       return `{
//     title: '${comp.compZhName}',
//     name: '${comp.compName}',
//     path: '/components/${comp.compName}',
//     component: () => import('packages/${comp.compName}/docs/README.md'),
//   }`;
//     })
//   };
//   const routerFileContent = handlebars.compile(routerFileTpl, {
//     noEscape: true
//   })(routerMeta);
//   fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, (err) => {
//     if (err) console.log(err);
//   });
// };

// 更新 install.ts
// const installTsTplReplacer = (listFileContent) => {
//   const installFileFrom = "./.template/install.ts.tpl";
//   const installFileTo = "../../packages/index.ts"; // 这里没有写错，别慌
//   const installFileTpl = fs.readFileSync(
//     resolve(__dirname, installFileFrom),
//     "utf-8"
//   );
//   const installMeta = {
//     importPlugins: listFileContent
//       .map(
//         ({ compName }) => `import { ${compName}Plugin } from './${compName}';`
//       )
//       .join("\n"),
//     installPlugins: listFileContent
//       .map(({ compName }) => `${compName}Plugin.install?.(app);`)
//       .join("\n    "),
//     exportPlugins: listFileContent
//       .map(({ compName }) => `export * from './${compName}'`)
//       .join("\n")
//   };
//   const installFileContent = handlebars.compile(installFileTpl, {
//     noEscape: true
//   })(installMeta);
//   fs.outputFile(
//     resolve(__dirname, installFileTo),
//     installFileContent,
//     (err) => {
//       if (err) console.log(err);
//     }
//   );
// };

module.exports = (meta) => {
  compFilesTplReplacer(meta);
  // const listFileContent = listJsonTplReplacer(meta);
  // routerTplReplacer(listFileContent);
  // installTsTplReplacer(listFileContent);

  console.log(`组件新建完毕，请前往 packages/${meta.compName} 目录进行开发`);
};
