---
title: title
meta:
  - name: description
    content: title
---

## title

> 带有label的表单型区域

## 使用

### 基础用法

> 标题文字

::: example
@docs/example/title/base.vue
:::

### suffix

> 标题文字的后位符号

::: example
@docs/example/title/suffix.vue
:::

### 按钮 和 suffix 插槽

> 标题文字的按钮插槽 和 suffix 插槽

::: example
@docs/example/title/slot.vue
:::

### 配置

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| title   | 标题文本，你既可以通过设置 title 来修改标题，也可以通过 slot#default 传入 DOM 节点  | string  | -      | —
| suffixIcon   | 后位符号，只能支持 element-Icon的图标 | String     | -      | auto
| boxStyle | title整体的样式 | CSSProperties | - | -
| line | 是否显示竖线 | Boolean | - | -
| lineColor | 竖线的颜色 | string | - | -

### 事件

在传入 suffixIcon 字段时， 点击 图标 后会有 @suffix 事件，参考例子 #suffix

```vue
<ce-title title="标题" suffix-icon="CirclePlus" @suffix="handleTap"></ce-title>
```

### 插槽

| 插槽名 | 说明 |
| ---- | -------- |
| —   | 标题文本 |
| suffix   | 文字后的区域 |
| btns   | 右侧的位置 |
