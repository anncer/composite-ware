---
title: 日历
meta:
  - name: calendar
    content: 日历
---

## 日历

### 基础用法

::: example
@docs/example/calendar/base.vue
:::

### 自定义头部

::: example
@docs/example/calendar/title.vue
:::

### 自定义内容

::: example
@docs/example/calendar/cell.vue
:::

### 配置

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| date | 需要显示的日期 | Date, string | - | 当天 |
| icon | 是否显示切换月份的按钮 | boolean | - | true |
| today | 是否显示今天按钮 | boolean | - | true |

### 插槽

事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
header | 头部自定义 | current, today | current代表当前显示的日期，是一个对象{year: 当前显示的年份, month: 当前显示的月份, string: 当前显示的年月字符串 yyyy-mm}；<br> today是表示在当前日历中，今天的年月{year: 今天的年份, month: 今天的月份,day: 今天的天数, string: 今天年月日的字符串yyyy-mm-dd}<br>__注：参数中的月份表示的是new Date()中原始的序号，不是月份，如果使用请自行+1__
cell | - | item, current, today | item为当前cell的渲染数据，为一个对象，today和current同上<br>```item:{string, today: '是不是今天, boolean', day: 当前天,type: 'current'表示是当前渲染的月份，'prev'表示是过去的月, 'next': 表示是未来的月}```

### 事件

事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
click | 点击日历中的cell | item | 同插槽中的item
prev | 点击上一个月 | current | 同插槽中的current
next | 点击下一个月 | current | 同插槽中的current
