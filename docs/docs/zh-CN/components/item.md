---
title: Item
meta:
  - name: description
    content: Item
---

## Item

:::warning 注意
冒号只能加中文，不能使用英文
:::
> 带有label的表单型区域

## 使用

### 基础用法

> body-style设置内容区域样式

::: example
@docs/example/item/base.vue
:::

### 行内

::: example
@docs/example/item/inline.vue
:::

### slot

::: example
@docs/example/item/slot.vue
:::

### 配置

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| label   | 标签文本，你既可以通过设置 label 来修改标题，也可以通过 slot#label 传入 DOM 节点，当label中没有中文：时，会自动加上，label不允许使用英文:  | string  | -      | —
| label-width   | label的宽度，设置后会自动转为 行内模式 一行显示 | String  Number     | -      | auto
| inline | 是否为行内样式，此属性值有在没有设置labelWidth的情况下生效 | Boolean | - | -

### 插槽

| 插槽名 | 说明 |
| ---- | -------- |
| —   | 自定义默认内容 |
| label   | label的内容 |
