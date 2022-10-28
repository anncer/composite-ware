---
title: dialogSelector
meta:
  - name: dialogSelector
    content: dialogSelector
---

## dialogSelector

__弹窗选择器是基于基础选择 baseSelector 扩展了弹窗功能的选择器。 除弹窗外，其他功能与基础选择器相同。__

### 示例

::: example
@docs/example/dialog-selector/base.vue
:::
<!-- 
### 单选

::: example
@docs/example/base-selector/single.vue
:::

### 自定义搜索条件

::: example
@docs/example/base-selector/query.vue
:::

### 自定义列

::: example
@docs/example/base-selector/column.vue
:::

### 自定义列表请求

::: example
@docs/example/base-selector/reqtable.vue
::: -->

### 基础配置

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| __弹窗部分参数__ |  |  |  |  |
| model-value / v-model | 是否显示 Dialog | boolean | — | — |
| title | 弹窗标题 | String | - | 人员选择器 |
| width | 弹窗宽度 | string | - | 60% |
| top | Dialog CSS 中的 margin-top 值  | string | - | 15vh |
| fullscreen | 是否为全屏 Dialog  | Boolean | - | false |
| modal | 是否需要遮罩层  | Boolean | - | true |
| show-close | 是否显示关闭按钮   | Boolean | - | true |
| open-delay  | Dialog 打开的延时时间，单位毫秒    | number | - | 0 |
| close-delay  | Dialog 关闭的延时时间，单位毫秒    | number | - | 0 |
| append-to-body | Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true  | boolean | - | true |
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定  | boolean | - | true |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog  | boolean | - | - |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog  | boolean | - | - |
| destroy-on-close | 当关闭 Dialog 时，销毁其中的元素 | boolean | - | - |
| draggable | 为 Dialog 启用可拖拽功能  | boolean | - | - |
| before-close  | 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.   | Function(done) (done 用来关闭 Dialog) | - | - |
| __选择器部分参数__ |  |  |  |  |
| stripe | 表格是否需要斑马线 | Boolean | - | true |
| border | 表格是否需要边框（同table的border） | Boolean | - | false |
| multiple | 是否多选 | Boolean | - | true |
| defalut-selected | 默认值--需要配合主键使用，此属性为主键的数组 | Array | - | - |
| row-key | 表格数据的主键，唯一 | string | - | - |
| columns | 表格数据的列，同table中的columns | object | - | - |
| request | 见下表 | object | - | - |
| query | 见下表 | object | - | - |

### 事件

| 事件名 | 说明  | 回调参数  |
| ---------- | ----------------------------------- | ---------- |
| cancel | 点击取消时 | -  |
| confirm | 点击确定时 | selection  |
| select | 当选中项发生更改时 | selection  |

### request配置

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| url | 请求地址 | string | - | /api/admin-v2/user/page/or/list |
| method | 请求方法 | string | - | post |
| loading | 请求时是否显示loading | Boolean | - | true |
| params | 请求的参数 | object | - | - |
| headers | 请求头 | object | - | - |
| formatter | 请求数据的格式化方法, 需要返回一个含有data字段和total字段的对象。data为数据，total总条数 | function => {data: [], total: number} | - | - |
| fields | 暂不开放 | array | - | - |

### query配置 - 搜索条件

搜索条件调用 ce-item 组件，暂不支持ce-item的参数，默认为inline下的样式，[详见](http://10.28.89.11:9209/zh-CN/components/item)

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| code | 搜索时查询的key | string | - | - |
| type | 搜索类型 | string | select / input | - |
| label | 搜索选项的文字 | string | - | - |
| placeholder | 搜索选项的placeholder | string | - | \`请输入${label}\` / \`请选择${label}\` |
| labelWidth | label文字的宽度 | string | - | 90px |
| optValue | __以下属性(含此属性)均只在type 为select 时生效__，为渲染下拉列表数据的值的key | string | - | value |
| optLabel | 为渲染下拉列表数据的文字信息的key | string | - | label |
| url | 请求地址 | string | - | - |
| method | 请求方法 | string | - | GET |
| value | 默认值 | string|number | - | - |
| params | 请求的参数 | object | - | - |
| headers | 请求头 | object | - | - |
| formatter | 请求数据的格式化方法, 需要返回一个含有data字段和total字段的对象。data为数据，total总条数 | function => {data: [], total: number} | - | - |
