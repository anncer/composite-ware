---
title: 树形弹窗选择器
meta:
  - name: dialog-tree-selector
    content: 树形弹窗选择器
---

## 树形弹窗选择器

:::warning 注意
confirm事件和getCheckedKeys方法在设置了 node-key 属性时，才能返回选中的项的主键，node-key 默认值为id。
:::

### 基础用法

::: example
@docs/example/dialog-tree-selector/base.vue
:::

### 使用传入的数据

::: example
@docs/example/dialog-tree-selector/customdata.vue
:::

### 基础配置

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
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
| - | - | - | - | - |
| list | tree的数据，如果使用request,可不传 | Array| - | - |
| search | 是否需要过滤 | boolean| - | true |
| placeholder | 搜索的placeholder | - | - | - |
| request | 用户的请求，见下表 | object | - | - |
| footer | 是否显示底部 |  boolean | —  | false |
| - | - | - | - | - |
| empty-text | 内容为空的时候展示的文本 | string | — | — |
| node-key | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | string | — | — |
| props | 配置选项，具体看下表 | object | — | — |
| render-after-expand | 是否在第一次展开某个树节点后才渲染其子节点 | boolean | — | true |
| load | 加载子树数据的方法，仅当 lazy 属性为true 时生效 | function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)  | —  | — |
| render-content | 树节点的内容区的渲染 | Function Function(h, { node, data, store }) | — | — |
| highlight-current | 是否高亮当前选中节点，默认值是 false。 |  boolean | —  | false |
| default-expand-all | 是否默认展开所有节点 | boolean | — | false |
| expand-on-click-node | 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 | boolean | —  |true |
| check-on-click-node | 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。|  boolean | — | false |
| auto-expand-parent | 展开子节点的时候是否自动展开父节点 | boolean | — | true |
| default-expanded-keys | 默认展开的节点的 key 的数组 | array | — | — |
| show-checkbox | 节点是否可被选择 | boolean | —  |false |
| check-strictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false |  boolean | —  | false |
| default-checked-keys  | 默认勾选的节点的 key 的数组  | array | —  | — |
| current-node-key | 当前选中的节点 | string / number | — | — |
| filter-node-method | 对树节点进行筛选时执行的方法， 返回 false 则表示这个节点会被隐藏 | Function(value, data, node) |  — |  — |
| accordion | 是否每次只打开一个同级树节点展开 | boolean | — | false |
| indent | 相邻级节点间的水平缩进，单位为像素 | number — | 18 |
| icon | 自定义图标组件 | string / Component | - | - |
| lazy | 是否懒加载子节点，需与 load 方法结合使用  | boolean | — | false |
| draggable | 是否开启拖拽节点功能 | boolean | — | false |
| allow-drag | 判断节点能否被拖拽 如果返回 false ，节点不能被拖动 | Function(node) | —  | — |
| allow-drop | 拖拽时判定目标节点能否成为拖动目标位置。 如果返回 false ，拖动节点不能被拖放到目标节点。 type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后 | Function(draggingNode, dropNode, type) | - | - |

### request

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| - | - | - | - | - |
| url | 请求地址 | string | - | /api/admin-v2/org/children/3302/3 |
| method | 请求方法 | string | - | GET |
| loading | 请求时是否显示loading | Boolean | - | true |
| params | 请求的参数 | object | - | - |
| headers | 请求头 | object | - | - |
| formatter | 请求数据的格式化方法, 需要返回一个含有data字段和total字段的对象。data为数据，total总条数 | function => {data: [], total: number} | - | - |

### props

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
|label | 指定节点标签为节点对象的某个属性值 | string, function(data, node) | — | — |
|children | 指定子树为节点对象的某个属性值 | string | — | — |
|disabled | 指定节点选择框是否禁用为节点对象的某个属性值 | string, function(data, node) | — | — |
|isLeaf | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 | string, function(data, node) | — | — |
|class | 自定义节点类名 | string, function(data, node) | — | — |

### 事件

| 事件名 | 说明 | 参数 |
| ------ | -------- | ----------------- |
| confirm | 点击确定时触发 | 一个参数：当前选中的项  |
| cancle | 点击取消按钮时 | 无  |
| node-click | 当节点被点击的时候触发 | 四个参数：对应于节点点击的节点对象，TreeNode 的 node 属性, TreeNode和事件对象 |
| node-contextmenu | 当某一节点被鼠标右键点击时会触发该事件 | 共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| check-change | 当复选框被点击的时候触发 | 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点 |
| check | 点击节点复选框之后触发 | 共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、 halfCheckedNodes、halfCheckedKeys 四个属性 |
| current-change | 当前选中节点变化时触发的事件 | 共两个参数，依次为：当前节点的数据，当前节点的 Node 对象 |
| node-expand | 节点被展开时触发的事件 | 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身 |
| node-collapse | 节点被关闭时触发的事件 | 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身 |
| node-drag-start | 节点开始拖拽时触发的事件 | 共两个参数，依次为：被拖拽节点对应的 Node、event |
| node-drag-enter | 拖拽进入其他节点时触发的事件 | 共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event |
| node-drag-leave | 拖拽离开某个节点时触发的事件 | 共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event |
| node-drag-over | 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件） | 共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event |
| node-drag-end | 拖拽结束时（可能未成功）触发的事件 | 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、 |after、inner）、event
| node-drop | 拖拽成功完成时触发的事件 | 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event |
