---
title: 快速上手
meta:
  - name: description
    content: 快速上手 composite-ware 组件库
---

## 准备

在开始前你可能需要 vue3 版本脚手架工具

- [vite](https://vitejs.dev/)
- [vue-cli](https://cli.vuejs.org/zh/)

## 安装

::: tip 提示
内网环境下安装（不开代理）
registry地址为[http://10.122.163.225:8081/repository/npm-repo-group/](http://10.122.163.225:8081/repository/npm-repo-group/)
或者在[http://10.122.163.225:8081/#browse/browse:npm-repo-hostd](http://10.122.163.225:8081/#browse/browse:npm-repo-hostd)中查看
:::

``` shell
npm i composite-ware registry=http://10.122.163.225:8081/repository/npm-repo-group/
# 或者
yarn add composite-ware registry=http://10.122.163.225:8081/repository/npm-repo-group/
# 或者
pnpm add composite-ware registry=http://10.122.163.225:8081/repository/npm-repo-group/
```

## 完整引入

```js
import { createApp } from "vue";
import App from "./App.vue";
import compositeWare from "composite-ware";
import 'composite-ware/theme-chalk/index.css'

const app = createApp(App);

app.use(compositeWare);
app.mount("#app");
```

## 按需引入样式

### 推荐使用 unplugin-vue-components

安装及使用查看 [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)

- 配置信息

```js
{
  resolvers: [
    (name) => {
      if (name.startsWith('Pro')) {
        const fileName = name.slice(3).replace(/\B([A-Z])/g, '-$1').toLocaleLowerCase()
        return {
          importName: name,
          path: 'composite-ware',
          sideEffects: `composite-ware/theme-chalk/${fileName}`
        }
      }
    }
  ],
}
```

### 在 vite 中使用 vite-plugin-style-import

安装及使用查看 [vite-plugin-style-import](https://www.npmjs.com/package/vite-plugin-style-import)

- 修改配置 vite.config

```js
import styleImport from "vite-plugin-style-import";

export default {
  plugins: [
    styleImport({
      libs: [
        {
          importTest: /^Pro/,
          libraryName: "composite-ware",
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `composite-ware/theme-chalk/${name.slice(4)}`;
          }
        }
      ]
    })
  ]
};
```

### 在 vue-cli 中使用 babel-plugin-import

安装及使用查看 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)

- 修改配置 babel.config

```js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "composite-ware",
        customStyleName: (name) => {
          return `composite-ware/theme-chalk/${name.slice(4)}`;
        }
      }
    ]
  ]
};
```

### 手动引入样式

例如：

```js
import { ProLayout } from "composite-ware";
import "composite-ware/theme-chalk/layout";
```

::: tip 提示
完整组件列表[参考里面的 components](https://github.com/anncer/composite-ware/blob/master/src/components.ts)

在导出组件的同时，一起导出的还包括内部使用的[utils](https://github.com/anncer/composite-ware/blob/master/src/utils/)与[composables](https://github.com/anncer/composite-ware/blob/master/src/composables/)，如果需要可以引用使用
:::

## 开始使用

::: tip 提示
文档示例基于 [组合式 API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html) 语法，如果不熟悉语法请前往官方文档查看

如果使用 VS Code 开发，配合 [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 使用提供完整的组件、属性、事件补全。例如：输入 `<pro-` 将罗列出所有组件库组件

对于使用 VS Code 配合 typescript 开发，推荐使用插件 [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)。只需要中向 `tsconfig.json` 文件中增加全局组件类型

```diff
{
  "compilerOptions": {
+    "types": ["composite-ware/types/components"]
  }
}
```

或者

```diff
{
  "include": [
+   "node_modules/composite-ware/types/components.d.ts"
  ]
}
```

也可以向全局类型定义文件中中增加，例如：env.d.ts
