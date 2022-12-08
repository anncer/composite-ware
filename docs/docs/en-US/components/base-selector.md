---
title: baseSelector
meta:
  - name: baseSelector
    content: baseSelector
---

## baseSelector

- 基础选择器是用来进行单选、多选表格及扩展了搜索选项的选择器。
含有表格（带选择框）、搜索条件、分页
- 表格在默认情况下会自动请求应用发布服务器（如果发布在dev则请求dev，发布在prd则请求prd）的人员数据，进行人员选择。
- 默认姓名和组织机构两个搜索条件，条件更换时会自动进行搜索。
默认组织机构请求 北京院 下所有组织机构，请求的数据与列表请求相同。
- 使用时可根据自身情况，更改接口及格式化数据
::: tip 提示
- 在示例中均会使用默认接口进行。如需更改，请自行查阅文档
- 如果需要弹窗，查阅 [dialog-selection](/zh-CN/components/dialog-selector)
:::

### 多选(默认)

::: example
@docs/example/base-selector/base.vue
:::

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
:::

### 基础配置

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| stripe | 表格是否需要斑马线 | Boolean | - | true |
| border | 表格是否需要边框（同table的border） | Boolean | - | false |
| multiple | 是否多选 | Boolean | - | true |
| defalutSelected | 默认值--需要配合主键使用，此属性为主键的数组 | Array | - | - |
| rowKey | 表格数据的主键，唯一 | string | - | - |
| columns | 表格数据的列，同table中的columns | object | - | - |
| request | 见下表 | object | - | - |
| query | 见下表 | object | - | - |

### 事件

| 事件名 | 说明  | 回调参数  |
| ---------- | ----------------------------------- | ---------- |
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

搜索条件调用 ce-item 组件，暂不支持ce-item的参数，默认为inline下的样式，[详见](/zh-CN/components/item)

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| code | 搜索时查询的key | string | - | - |
| type | 搜索类型 | string | select / input | - |
| label | 搜索选项的文字 | string | - | - |
| placeholder | 搜索选项的placeholder | string | - | 请输入 / 请选择 |
| labelWidth | label文字的宽度 | string | - | 90px |
| optValue | __以下属性(含此属性)均只在type 为select 时生效__，为渲染下拉列表数据的值的key | string | - | value |
| optLabel | 为渲染下拉列表数据的文字信息的key | string | - | label |
| url | 请求地址 | string | - | - |
| method | 请求方法 | string | - | GET |
| value | 默认值 | string|number | - | - |
| params | 请求的参数 | object | - | - |
| headers | 请求头 | object | - | - |
| formatter | 请求数据的格式化方法, 需要返回一个含有data字段和total字段的对象。data为数据，total总条数 | function => {data: [], total: number} | - | - |
