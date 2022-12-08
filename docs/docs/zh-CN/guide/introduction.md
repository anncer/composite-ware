---
title: 组件介绍
meta:
  - name: description
    content: composite-ware 组件的介绍
---

## 组件介绍

composite-ware 是一个基于[element-plus](https://element-plus.org/)和[vue3](https://v3.vuejs.org/)的组件库  

[组件库git地址http://11.11.141.50/pkg/composite-ware/](http://11.11.141.50/pkg/composite-ware/)

### 组件库的使用

  在创建完成的模板项目中，组件库已经内置到项目中去，只需要按照对应组件的示例和属性进行相关配置使用即可。

  组件基于elementPlus 需要引入elementPlus组件和样式

  在main.js中引入后，按照文档即可使用

  ```js
  import * as ElementPlusIconsVue from "@element-plus/icons-vue";
  import elementPlus from "element-plus";
  import "element-plus/dist/index.css";
  import compositeWare from "composite-ware";
  import 'composite-ware/theme-chalk/index.css'

  const app = createApp(App);

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }

  app.use(elementPlus);
  app.use(compositeWare);
  app.mount("#app");

  ```

### 组件库的环境

::: tip 提示
本地和线上网络环境配置
:::

- 线上环境

  如果使用baseSelector,dialogSelector等需要请求接口的组件，在线上（测试、开发、生产）环境中，
  会自动请求相应的环境中所对应的接口，不需要配置（默认接口或者是配置的不含有 http(s)的接口）。

  eg: baseSelector会默认接口 /api/admin-v2/user/page/or/list， 此接口会自动请求对应服务的相应接口，不需要更改，
  如果想请求别的接口可以配置为此种格式(/api/admin-v2/org/XXXX), 也会请求到对应接口

- 本地环境

  在本地开发中，默认接口无法请求数据，需要配置 proxy 把组件使用到的接口转发到相应服务

  dev: <http://10.28.89.11>

  test: <http://11.11.141.59:30102>

  在对应项目中根目录 vite.server.ts 中进行如下配置

  ```js
  const proxyTarget = 'http://10.28.89.11';

  proxy: {
    '/api/admin-v2': {
      target: proxyTarget,
      changeOrigin: true
    //  rewrite: (path) => path.replace('/api/admin', '')
    }
  }
  ```

  如果请求的过程中出现401报错，则需要在环境中配置token

  进入 上文中 proxyTarget 的地址，登录之后，获取token,如图

  ![Alt](../../../assets/001.png#pic_center)

  复制ESP-TOKEN 到本地环境中输入即可，如图

  ![Alt](../../../assets/002.png#pic_center)

### 组件库下载与更新

  组件库版本更新记录查看 [changelog](./changelog)

  组件库开发计划查看 [feature](./feature)

  组件版本更新后可以在 node_modules 中对应的包，修改 package.json 中 修改版本号重新下载即可
