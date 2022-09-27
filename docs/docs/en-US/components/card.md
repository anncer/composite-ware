---
title: Card
meta:
  - name: description
    content: card
---

## Card

> 卡片式区域

## 使用

### 基础用法

> body-style设置内容区域样式

::: example
@docs/example/card/base.vue
:::

### SOLT

::: example
@docs/example/card/slot.vue
:::

### 配置

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| header   | 卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点 | string      | -      | —
| footer   | 卡片的底部 你既可以通过设置 footer 来修改标题，也可以通过 slot#footer 传入 DOM 节点 | string      | -      | —
| body-style   | body 的样式 | CSSProperties | -      | -      |

### 插槽

| 插槽名 | 说明 |
| ---- | -------- |
| —   | 自定义默认内容 |
| header   | 卡片标题内容|
| footer   | 卡片底部内容|
