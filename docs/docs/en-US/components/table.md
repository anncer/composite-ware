---
title: table

---

## Table

基于 el-table 实现，用传入参数 clumns 的方式代替写很多的 el-table-column 标签，简化template模板的代码量和修改成本

clumns 支持 el-table-column 的属性和方法

整合分页和表格两个组件，快速生成表格页面

继承 element-Plus el-table 和 el-pagination 组件的事件和属性

### 基础表格

基础的表格展示用法。

::: example
@docs/example/table/base.vue
:::

### 表格的边框

基础的表格展示用法。

::: example
@docs/example/table/border.vue
:::

### 带分页的表格

基础的表格展示用法。

::: example
@docs/example/table/tablepage.vue
:::

### 格式化和重写表头和内容

基础的表格展示用法。

::: example
@docs/example/table/formate.vue
:::

### Table属性

| 属性 | 描述 | 类型  | 参数 | 默认  |
| ---- | -------- | ----------------- | ------ | ------ |
| data  | 显示的数据  | array | — | —  |
| columns  | 显示的列  | array | — | —  |
| isPage  | 是否分页   | Boolean | — | false  |
| singleSelection  | 是否单选（暂不支持）  | Boolean | — | false  |
| boxStyle  | 组件外层div的样式  | object | — | —  |
| height  | Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。  | string / number | — | —  |
| max-height  | Table 的最大高度。 合法的值为数字或者单位为 px 的高度。 | string / number | — | —  |
| stripe  | 是否为斑马纹 table  | boolean | — | false  |
| border  | whet是否带有纵向边框  | boolean | — | false  |
| size  | Table 的尺寸  | string  | large / default /small  | —  |
| fit | 列的宽度是否自撑开| boolean | — | true |
| show-header | 是否显示表头  | boolean | — | true |
| highlight-current-row | 是否要高亮当前行| boolean | — | false  |
| current-row-key | 当前行的 key，只写属性  | string / number | — | —  |
| row-class-name  | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。| — | —  |
| row-style | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。  | function(\{ row, rowIndex \}) / object  | — | —  |
| cell-class-name | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。  | function(\{ row, column, rowIndex, columnIndex \}) / string | — | —  |
| cell-style  | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。  | function(\{ row, column, rowIndex, columnIndex \}) / object | — | —  |
| header-row-class-name | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。  | function(\{ row, rowIndex }\) / string  | — | —  |
| header-row-style  | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。  | function(\{ row, rowIndex \}) / object  | — | —  |
| header-cell-class-name  | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | function(\{ row, column, rowIndex, columnIndex \}) / string | — | —  |
| header-cell-style | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。  | function(\{ row, column, rowIndex, columnIndex \}) / object | — | —  |
| row-key | 行数据的 Key，用来优化 Table 的渲染； 在使用reserve-selection功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。 | function(row) / string  | — | —  |
| empty-text  | 空数据时显示的文本内容， 也可以通过 #empty 设置 | string  | — | No Data  |
| default-expand-all  | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效| boolean | — | false  |
| expand-row-keys | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。 | array | — | —  |
| default-sort  | 默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序| object  | `order`: ascending / descending | 如果 prop 已配置, 同时 order 未配置, 那么 order 默认为升序 |
| tooltip-effect  | tooltip `effect` 属性 | string  | dark / light  | dark |
| show-summary  | 是否在表尾显示合计行 | boolean | — | false  |
| sum-text  | displ合计行第一列的文本 | string  | — | Sum  |
| summary-method  | 自定义的合计计算方法| function(\{ columns, data \}) | — | —  |
| span-method | 合并行或列的计算方法| function(\{ row, column, rowIndex, columnIndex \})  | — | —  |
| select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。 若为 true，则选中所有行；若为 false，则取消选择所有行 | boolean | — | true |
| indent  | 展示树形数据时，树节点的缩进| number  | — | 16 |
| lazy  | 是否懒加载子节点数据 | boolean | — | —  |
| load  | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息| function(row, treeNode, resolve)  | — | —  |
| tree-props  | 渲染嵌套数据的配置选项| object  | — | `{ hasChildren: 'hasChildren', children: 'children' }` |
| table-layout  | 设置表格单元、行和列的布局方式| string  | fixed / auto  | fixed  |
| scrollbar-always-on | 总是显示滚动条| boolean | — | false  |
| flexible | 确保主轴的最小尺寸 | boolean | — | false  |

## Table Events

> el-table 事件 current-change 由于和 分页器的事件冲突， 改为 table-current参数不变

| 事件名 | 说明  | 回调参数  |
| ---------- | ----------------------------------- | ---------- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row  |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件| selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| cell-mouse-enter | 当单元格 hover 进入时会触发该事件| row, column, cell, event  |
| cell-mouse-leave | 当单元格 hover 退出时会触发该事件| row, column, cell, event  |
| cell-click | 当某个单元格被点击时会触发该事件 | row, column, cell, event  |
| cell-dblclick  | 当某个单元格被双击击时会触发该事件| row, column, cell, event  |
| cell-contextmenu | 当某个单元格被鼠标右键点击时会触发该事件 | row, column, cell, event  |
| row-click  | 当某一行被点击时会触发该事件| row, column, event  |
| row-contextmenu  | 当某一行被鼠标右键点击时会触发该事件| row, column, event  |
| row-dblclick | 当某一行被双击时会触发该事件 | row, column, event  |
| header-click | 当某一列的表头被点击时会触发该事件| column, event |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件| column, event |
| sort-change  | 当表格的排序条件发生变化的时候会触发该事件 | `{ column, prop, order }` |
| filter-change  | column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件| filters |
| table-current | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性  | currentRow, oldCurrentRow |
| header-dragend | 当拖动表头改变了列的宽度的时候会触发该事件 | newWidth, oldWidth, column, event |
| expand-change  | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）| row, (expandedRows \| expanded) |

## Table 方法

想要使用表格的方法需要获取到表格的实例
通过 getTableRef 方法获取

```vue
  <template>
 <ce-table ref="refCeTable"></ce-table>
  </template>
  <script setup lang="ts">
 const table = refCeTable.value.getTableRef()
 table.value.toggleAllSelection();
  </script>
```

| 方法 | 说明 | 参数  |
| ------------------ | --------------- | ------------- |
| clearSelection | 用于多选表格，清空用户的选择| — |
| getSelectionRows | 返回当前选中的行| |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否 | row, selected |
| toggleAllSelection | 用于多选表格，切换全选和全不选| — |
| toggleRowExpansion | 用于可扩展的表格或树表格，如果某行被扩展，则切换。 使用第二个参数，您可以直接设置该行应该被扩展或折叠。| row, expanded |
| setCurrentRow  | 用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。| row |
| clearSort  | 用于清空排序条件，数据会恢复成未排序的状态| — |
| clearFilter  | 传入由 `columnKey`  组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器 | columnKeys  |
| doLayout | 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局| — |
| sort | 手动排序表格。 参数 `prop` 属性指定排序列， `order` 指定排序顺序。 | prop: string, order: string |
| scrollTo | 滚动到一组特定坐标 | (options: ScrollToOptions \| number, yCoord?: number) |
| setScrollTop | 设置垂直滚动位置 | top |
| setScrollLeft  | 设置水平滚动位置 | left  |

## Table插槽

::: tip 提示
不支持 el-table 本身插槽，本组件扩展自身插槽如下
:::

| 插槽名 | 说明 |
| ---- | -------- |
| —| 插入到内容后面的内容，可放入 el-table-column 的操作列等 |
| prev| 插入到内容前面的内容，可放入 el-table-column 的操作列等 |

## Table-column 属性

| Attribute | Description | Type  | Accepted Values  | Default |
| --------------------- | --------------- | -------- | ------------- | ----------------- |
| type  | 对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮| string  | selection / index / expand | — |
| index | 如果设置了 type=index，可以通过传递 index 属性来自定义索引 | number / function(index)  | —  | — |
| label | column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件  | string  | —  | — |
| code  | 字段名称 对应列内容的字段名  | string  | —  | — |
| column-key  | column 的 key， column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件  | string  | —  | — |
| width | 宽度  | string / number | —  | — |
| min-width | 对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列| string / number | —  | — |
| fixed | 列是否固定在左侧或者右侧。 `true` 表示固定在左侧 | string / boolean  | true / 'left' / 'right'  | — |
| render-header | 列标题 Label 区域渲染使用的 Function | function(\{ column, $index \})  | —  | — |
| sortable  | 对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 | boolean / string  | true / false / 'custom'  | false |
| sort-method | 指定数据按照哪个属性进行排序，仅当`sortable`设置为`true`的时候有效。 应该如同 Array.sort 那样返回一个 Number | function(a, b)  | —  | — |
| sort-by | 指定数据按照哪个属性进行排序，仅当 `sortable` 设置为 `true` 且没有设置 `sort-method` 的时候有效。 如果 `sort-by` 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推l  | function(row, index) / string / array | —  | — |
| sort-orders | 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序 | array | 数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序 | ['ascending', 'descending', null] |
| resizable | 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）  | boolean | —  | true  |
| formatter | 用来格式化内容 | function(row, column, cellValue, index) | —  | — |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip | boolean | —  | false |
| align | 对齐方式 | string  | left / center / right  | left  |
| header-align  | 表头对齐方式， 若不设置该项，则使用表格的对齐方式 | string  | left / center / right  | — |
| class-name  | 列的 className | string  | —  | — |
| label-class-name  | 当前列标题的自定义类名 | string  | —  | — |
| selectable  | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | function(row, index)  | —  | — |
| reserve-selection | 仅对 type=selection 的列有效， 请注意， 需指定 row-key 来让这个功能生效。  | boolean | —  | false |
| filters | 数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。| array[{ text, value }]  | —  | — |
| filter-placement  | 过滤弹出框的定位 | string  | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end  | — |
| filter-multiple | 数据过滤的选项是否多选  | boolean | —  | true  |
| filter-method | 数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。  | function(value, row, column)  | —  | — |
| filtered-value  | 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。 | array | —  | — |

## table-column插槽

> 以table的prev/default插槽 插入的table-column使用组件本身的插槽，即template #default="scope"
::: tip 提示
由于table-column以数据形式传入到组件中，所以以方法的形式接受两个插槽的内容 renderSlot => #header; renderDefault => #default， 两个函数的参数都是scope对象
:::

### 分页的属性

| Name| Description  | Type | Accepted Values  | Default |
| -------------------- | ------------------- | --------------------- | ------------- | ------------ |
| small  | 是否使用小型分页样式  | boolean | —  | false|
| background| 是否为分页按钮添加背景色 | boolean | —  | false|
| page-size | 每页显示条目个数，支持 v-model 双向绑定  | number  | —  | 10 |
| default-page-size | 每页显示条目数的初始值  | number  | -  | -  |
| total  | 总条目数| number  | —  | —  |
| page-count| 总页数， total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性 | number  | —  | —  |
| pager-count  | 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠| number  | (介于 5 和 21 之间的奇数) | 7  |
| current-page | 当前页数，支持 v-model 双向绑定 | number  | —  | 1  |
| default-current-page | 当前页数的初始值 | number  | -  | -  |
| layout | 组件布局，子组件名用逗号分隔  | string  | `sizes` / `prev` / `pager` / `next` / `jumper` / `->` / `total` / `slot` | 'prev, pager, next, jumper, ->, total' |
| page-sizes|  每页显示个数选择器的选项设置| number[]| —  | [10, 20, 30, 40, 50, 100]|
| popper-class | 每页显示个数选择器的下拉框类名  | string  | —  | —  |
| prev-text | 替代图标显示的上一页文字| string  | —  | —  |
| prev-icon | 上一页的图标， 比 prev-text 优先级更高 | `string \| Component` | —  | ArrowLeft  |
| next-text | 替代图标显示的下一页文字| string  | —  | —  |
| next-icon | 下一页的图标， 比 next-text 优先级更高  | `string \| Component` | —  | ArrowRight |
| disabled  | 是否禁用分页| boolean | —  | false|
| hide-on-single-page  | 只有一页时是否隐藏  | boolean | —  | -  |

:::warning

我们现在会检查一些不合理的用法，如果发现分页器未显示，可以核对是否违反以下情形：

- total 和 page-count 必须传一个，不然组件无法判断总页数；优先使用 page-count;

- 如果传入了 current-page，必须监听 current-page 变更的事件（@update:current-page），否则分页切换不起作用；

- 如果传入了 page-size，且布局包含 page-size 选择器（即 layout 包含 sizes），必须监听 page-size 变更的事件（@update:page-size），否则分页大小的变化将不起作用。

:::

## 分页的事件

| Name| Description  | Parameters|
| -------------- | ----------------------------------------------------------------- | -------------------- |
| size-change | page-size 改变时触发  | the new page size |
| current-change | current-page 改变时触发  | the new current page |
| prev-click  | 用户点击上一页按钮改变当前页时触发 | the new current page |
| next-click  | 用户点击下一页按钮改变当前页时触发 | the new current page |

:::warning

以上事件不推荐使用（但由于兼容的原因仍然支持，在以后的版本中将会被删除）；如果要监听 current-page 和 page-size 的改变，使用 v-model 双向绑定是个更好的选择。

:::
