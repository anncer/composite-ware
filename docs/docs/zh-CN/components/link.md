---
title: Link
meta:
  - name: description
    content: 链接组件，链接到路由和地址
---

## Link

> 链接组件，链接到路由和地址

## 使用

### 基础用法

::: example
@docs/example/link/base.vue
:::

### 打开标签页

> 如果是 http 请求符合正则 /^((ht|f)tps?):\/\/?/ 则自动为 _blank打开新的标签页， 如果是路由则 需要传target 参数

::: example
@docs/example/link/target.vue
:::

### 配置

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| to   | 链接地址 | string / undefind | -      | -      |
| target   | 是否开启新的标签页 | Boolean | -      | false      |
