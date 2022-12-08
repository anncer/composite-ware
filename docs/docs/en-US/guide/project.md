---
title: 项目介绍
meta:
  - name: project
    content: project 项目介绍
---

## 项目介绍

模板项目是一个基于 vite + ts + vue + vuex   [项目地址：http://11.11.141.50/cmp/cmp-template-ui](http://11.11.141.50/cmp/cmp-template-ui)

内置了一些常用功能,如 公共组件， api封装，公共样式，layout 和一部分示例功能的项目模板，开发者使用的项目都是基于此项目进行创建。

关于此项目的介绍和使用请参考以下文档和 [前端开发文档](./develop)

关于公共介绍和使用请参考 [组件介绍](./introduction) 和 其他组件文档

### 编辑器插件

::: tip 提示
如果你使用vscode编辑器，在开发此项目时，需要下载以下插件并开启
:::

- eslint
- Vue Language Features (Volar)
- Prettier - Code formatter

### 项目文件介绍

项目目录及功能信息，具体内容请查看 [前端开发文档](./develop)
\- .vscode  vsCode编辑器配置  <br />
\- public  项目公共文件夹 一般存放 浏览器角标等 <br />
\- src 主程序 <br />
\- \- api  项目的网络请求api <br />
\- \- assets 项目的静态资源 <br />
\- \- components 项目的组件目录，项目中多次使用的组件存放 <br />
\- \- layout 项目的菜单和头部等内容 <br />
\- \- router 路由信息 <br />
\- \- service axions的封装 <br />
\- \- store vuex的状态管理 <br />
\- \- styles 项目的公共样式 <br />
\- \- utils 项目的公共工具 <br />
\- \- views 项目的页面存放目录 <br />
\- \- app.vue 项目doucment入口
\- \- env.d.ts vue3支持 <br />
\- \- main.ts 程序入口 <br />
\- \- .editorconfig 编辑器设置 <br />
\- .eslintrc.js eslint配置 <br />
\- .gitignore git提交忽略文件 <br />
\- .npmrc npm install 的网络配置 <br />
\- .prettierrc prettier 插件配置 <br />
\-  config.ts 项目的页面配置信息 <br />
\- package.json 项目的依赖<br />
\- tsconfig.json typeScript相关配置 <br />
\- vite.config.ts vite相关配置 <br />
\- vite.server.ts vite 开发服务配置，在此配置本地服务相关信息>

### 人员数据中台请求

项目如需请求人员数据中台，获取相关信息，如果项目会挂载到综合平台中进行使用（如果不是联系@王振）

综合平台会提供  DMPP-TOKEN  dmppUserId 2个cookie 供其他项目使用（如果需要其他cookie，联系@王振）

只需要在你开发的时候，在cookie里面，把这两个cookie写入即可 __正常使用__ 数据中台相关接口

在 vite.server.ts 中加入对 数据中台的 proxy, 然后在api中按照对应格式，最后在 service中配置即可，如下

dmppProxy

正式:
前: <http://10.28.87.31:30718>
后: <http://10.28.87.31:30719>
网关: <http://10.28.87.31:30717>

测试:
前: <http://10.28.87.33:30718>
后: <http://10.28.87.33:30719>
网关: <http://10.28.87.33:30717>

开发:
前: <http://11.11.141.49:3000>
后: <http://11.11.141.49:3001>
网关: <http://11.11.141.49:9717>

```js
// vite.server.ts
const dmppProxy = "http://11.11.141.49:3001"
proxy: {
  '/dmpp/api': {
    target: dmppProxy,
    changeOrigin: true,
    secure: false,
    rewrite: (path) => path.replace('/dmpp/api', '/api')
  },
}

// api/ xxx.ts

export enum DmppApi {
  dmppUserInfo = "dmpp/api/supplier/profiles/basic",
  zhptUserInfo = "/api/admin/auth/getUserInfo",
  getAvatar = "dmpp/api/fs/file/download/",
}

export const getUserInfoFromDmpp = () => {
  return Api.get<IBaseRequest<ILoginUser>>({
    url: DmppApi.dmppUserInfo
  });
};

// service/index.ts    只需要配置 interceptors.requestInterceptor 参数即可
import cookie from "@/utils/cache";
import { AxiosRequestHeaders } from 'axios'

interceptors: {
  requestInterceptor: (config) => {
    let token = cookie.get("ESP-TOKEN")
    if (token) {
      const headers:AxiosRequestHeaders = {};
      headers['ESP-TOKEN'] = token;
      const url = config.url
      if (url?.includes('dmpp') && !url.includes('login')){
        const t = cookie.get("DMPP-TOKEN")
        headers.Authorization = `${t}`;
      }
      config.headers = config.headers ? { ...config.headers, ...headers } : headers;
    }
    return config;
  },
}
```

如果在本地项目中使用，则登录人员数据中台 登录之后，在cookie中获取

  ![Alt](../../../assets/003.png#pic_center)

  复制Authorization 到本地环境中 为 DMPP-TOKEN

  复制 userId 到本地环境中 为 dmppUserId 输入即可，如图

  ![Alt](../../../assets/004.png#pic_center)

### 关于TOKEN

 在项目中 ESP-TOKEN 为综合平台用户 token, 如果相关请求 401

 可以按照上述方法，在本地环境中获取登录状态

### 项目依赖下载

:::tip warning
推荐 nodejs 版本 > 16. 如果你有多个项目需要启动，推荐使用nodejs版本工具nvm.  
[【NVM FOR MAC|LINUX】](https://github.com/nvm-sh/nvm)[【NVM FOR WINDOWS】](https://github.com/coreybutler/nvm-windows/releases)
:::

:::tip warning
项目推荐使用pnpm代替npm =>  `npm install -g pnpm` [【VIEW PNPM DOCUMENT】](https://pnpm.io/zh/)
:::

:::tip warning
在项目目录中，已设置了依赖下载配置 .npmrc， __内网环境下关闭代理__ 即可下载 `pnpm install`

__如果使用的是vue2的项目，则不适用于此文档__ 需要外网下载
:::

## 浏览器支持

理论上同 element-plus

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |
