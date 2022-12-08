---
title: 前端开发文档
meta:
  - name: develop
    content: develop 前端开发文档
---

## 项目规范

项目规定开启 eslint 进行代码检查

项目默认统一使用 setup 语法

项目对 jsx 语法进行了支持，也可选择使用jsx, tsx 语法

### Api 调用

api 调用支持 2中格式的调用

1. 使用 enum 定义接口 api, 在定义的接口中使用 enum 定义的变量, 在 /api 文件夹中有示例

  使用 ts 对 api 的返回值进行定义后，调用接口时可以提示 ts 定义的数据属性, 如图。

  ![Alt](../../../assets/005.png#pic_center)

  示例

  ```js
  //  api
  import Api from "@/service";
  import { IBaseRequest, ILoginUser } from "./types.d";

  enum ApiItemName = {
    apiName = 'api/xxx/xxx'
  }

  export const userLogin = (token: string) => {
    return Api.get<IBaseRequest<IReqData>>({
      url: ApiItemName.apiName,
    });
  };

  // types.d
  export interface IBaseRequest<T = any> {
    code: number;
    data: T;
    message: string;
  }

  export interface IReqData {
    avatar: string;
    name: string;
    id: string;
    mobile: number;
  }

  ```

2.在/api/index.ts 中 内置了几种简单的api方法，正常使用 上边的方法，如果遇到动态请求地址的情况，可以使用此种方法<br>

- list： GET方法,接收 对象类型的参数，并把对象中的键值对拆解成为 ?name=1&sex=1 的形式，无论这个传入的对象有多少层都会被拆开,如

  ```js
  import Api from '@/api'
  defineOptions({
    name: "Main"
  });
  const obj = {
    name: 'tom',
    sex: 'man',
    children: [1,2,3,4],
    info: {
      address: 'beijing'
    },
  }
  Api.list('./xxx', obj)
  // 请求地址为 /xxx?name=tom&sex=man&children=1,2,3,4&address=beijing
  ```

- page: 请求类型: GET page方法与list方法类似，但其 请求地址 为 <br>
    `aaa/page?name=tom&sex=man&children=1,2,3,4&info.address=beijing` <br>
- get : get 方法接收 path,  name，id 3个参数(或 name, id 2个参数，根据版本不同，2个参数按第二种)，地址为

  ```js
  Api.get('xxxx', 'tom', '123')
  Api.get('', 'tom', '123')
  // /xxxx/tom/123
  //  /tom/123
  ```

- add : 请求类型: POST,请求接收2个参数，分别是地址和参数，参数即为 请求的data<br>
- update : 请求类型: PUT 请求接收2个参数，分别是地址和参数，参数即为 请求的data<br>
- delete: 请求类型: DELETE 请求接收2个参数

```js
Api.delete('/xxx','id')
// /xxx/id
```

- getCode : 请求类型: GET

```js
Api.getCode('/xxx','id')
// /xxx/identifier/id
```

- down : 请求类型: GET, 数据类型： blob, 为下载文件接口 <br>
- file : 请求类型: POST, 数据类型： form-data, 为上传文件接口<br>

### layout相关配置

layout 菜单会在 development 环境现实，在线上环境（production）隐藏，

如果想要在线上显示，更改 /config.ts 中的 isLeftbar 为true

layout/components/data.ts 为layout显示的数据，如需更改layout，按照原本格式更改此文件即可

如果想要更改显示隐藏的规则，在layout/components/siderMenuItem.vue中更改即可

### 路由和权限

路由已在 src/router/routes.ts 中写了基础配置，在此基础上添加即可。

如果需要对路由进行拦截进行权限配置，则在 src/router/permission.ts 中添加即可

### vuex状态管理

项目中vuex 使用 module模式，在现有 模块中设置了 app(src/store/modules/app.ts) 和 user(src/store/modules/user.ts)

如果是系统状态管理 或 关于用户的状态管理， 在这两个模块中添加

如果想要添加新的模块，在 src/store/modules 中新建文件，按照其他两个模块的格式书写，然后在 src/store/index.ts 添加引入即可

vuex 的 getters 写到对应模块的 getters 中

vuex 的 ts格式统一写入到 src/store/types.d.ts 中

### 工具方法

src/utils中设置了一些常用的工具方法<br>

#### cache.ts

cache内置了 cookie, sessionStorage, localStorage 的使用, 抛出了 LocalCache 的实例, 使用时只需引入即可。<br>
`import cookie for @/utils/cache`<br>
`cookie.set("ESP-TOKEN", 'token');`<br>
实例有以下方法<br>
1.set: set接收 3个参数 key, value, type. type 为不必传。<br>
key,value为要存储的对象的 键和值, type 为可选属性，接受  local, session, cookie 3个参数, 不传时默认为 cookie. <br>
传入 local 表示要设置 localStorage, 传入 session 表示要设置 sessionStorage,传入 cookie 表示要设置 cookie. 其他方法的type相同<br>
2.get : get 接收 2个参数 key, type. 获得 某个 key 的存储<br>
3.delete  : delete 接收 2个参数 key, type. 删除 某个 key 的存储<br>
4.clear  : get 接收 1个参数 type. 清除所有的某一类存储

#### comment.ts

comment.ts 存放了一部分用于检测数据类型的方法 <br>

| 方法 | 说明 |
| ---- | -------- |
| isArray  | 检测是否是数组 |
| isObject  |  检测是否是对象 |
| isRealArray  |  检测是否是长度大于0的数组 |
| isString  |  检测是否是字符串 |
| arrayLen  |  检测是否是数组 不是则返回-1 是则返回长度 |
| isEmptyObj  |  检测对象是不是空对象, key为0 |
| isEmpty  |  检测某个对象是否每个key都是空值 |
| isNumber  |  检测是不是正整数 |
| isFunction  |  检测对象是否是函数 |
| isWindow  |  判读是否非window对象 |
| isNull  |  判断参数是不是null |
| isNone  |  判断参数是不是空, 此判定 0为true |
| isProperty  |  检测某个对象时候含有某个key |
| getType  |  获取变量的简单数据类型 |
| typeOf  |  获取变量的真实数据类型 |
| isPlainObject  |  判断一个对象是不是素对象 |
| equalObjectKey  |   浅比较两个object, json的key是否一致 |
| equalObject  |   浅比较两个对象是否相等，这两个对象的值只能是数字或字符串 |

#### count.ts

count.ts 是解决 js 浮点数计算问题，有加减乘除四个方法,直接引入对应方法使用即可 <br>
addition： 加法 <br>
subtraction： 减法 <br>
multiplication： 乘法 <br>
division： 除法 <br>

#### dom.ts

dom.ts 为操作dom的方法。

| 方法 | 说明 | 参数 |
| ---- | -------- |  -------- |
| getCss | 获取一个元素的样式  | element |
| getPoint | 获取元素位置  | element |
| getDom | 根据class或id获取元素, 用id获取 以#开头，用class获取 以. 开头  | String(#|.) |
| getParents | 获取元素的所有父级, 目前只支持className  | string(className) |
| getParent | 获取元素的最近父级  | element |
| createDom | 创建元素  | String(elementName) |
| setStyle | 设置元素样式,  | element, strgin(element, cssObject) |
| isElement | 判断元素是不是element元素或者根元素 | element |
| getDomByStr | 和getDom 相同，添加了是不是元素的判断 | String(#|.) |
| setText | 设置元素test  | element, string |
| setClazz | 删除元素的class样式，更改为传入的  | element, string |
| hasClass | 判断元素是否有某个样式 | element, string |
| addClass | 添加class | element, string sting可以添加多个className，中间以空格隔开 |
| removeClass | 删除某个class | element, string 一次只能删除一个 |
| toggleClass | 如果 元素有 classname  则删除，没有则添加  | element, string |
| appendChild | 添加元素子级 | element, element或者element的数组 |
| getChildren | 获取元素的子级 | element,class class为可选参数,按照class筛选子集 |

#### formate.ts

formate 提供一些格式化数据的方法
| 方法 | 说明 | 参数 |
| ---- | -------- |  -------- |
| parseTime | 按照对应格式格式化时间| time: string, number, object; cFormat: "{y}-{m}-{d} {h}:{i}:{s} |
| formatTime | 格式化时间，得到 xx分钟/小时/天/月/年前 的日期格式 | string |
| getQueryObject | 获取地址栏中参数的集合 | url |
| cleanArray | 取出数组中所有非空的值 | array |
| uniqueArr | 数组取重 | array |
| getAllQuery | 获取所有地址栏参数 | - |
| getAllQueryString | 获取传入的地址栏的参数 | url |
| getQueryString | 获取地址栏单个已知参数 | string |
| getQueryStringByUrl | 获取传入的地址栏单个已知参数 | url, string |
| toPoint | 把数组转化为以点隔开的字符串 | arr 是数组,coin 是符号,type 是加载前面还是后面 true 为前，false为后 |
| jointUrl | 循环对象，并吧有值的键值对写在地址的后边 | baseUrl:any, obj:any |
| jointUrl2 | 循环对象，并吧有值的键值对写在地址的后边,多层对象，把父级也写在子集前 | baseUrl: string, obj: any |

#### tools.ts

tools 提供一些工具方法
| 方法 | 说明 | 参数 |
| ---- | -------- |  -------- |
| GetDateSomeDay | 获取当前时间的前几天或后几天 | count: number, current: string, current可选  |
| multipleIndexOf | 获取某个字符串在指定字符串中出现的位置(多个) | subStr: string, str: string |
| addPercentage | 添加千位字符 | number | string |
| setNumPercent | 正负数添加正负号并添加千分位 | number |
| reverseStr | reverse String | String |
| getRealLen | 获取字符串的长度  中文计2 | String |
| addFloat | 小数点补两位 | number |
| deepClone | 对象深拷贝 | any |
| analysiss | 金额分隔符 | |

#### validate.ts

validate 提供一些校验方法,此类方法统一返回 boolean 值
| 方法 | 说明 |
| ---- | -------- |
| isExternal | /^(https?:\|mailto:\|tel:)/ |
| isStringLen | 参数：(str: string, num: number)， 检测：str.trim().length >= num |
| isURL | 是否是网络链接 |
| isLowerCase | 检测小写 |
| isUpperCase | 检测大写 |
| isAlphabets | 检测英文 |
| isEmail | 检测邮箱 |
| isPhone | 检测手机号，只检测1开头，11位 |

### 代码示例

在src/views/login 中提供了一些vue3的写法，可以参考

页面中使用的 非业务方法 分类放在 hooks 文件夹中

页面中使用的非公共组件 放在 components 文件夹中

定义的 ts 类型文件，单独放在 type.d.ts中

## JS语法规范

- 命名规范，
  不能用拼音，
  变量驼峰命名
  常量用大写
  函数命名 动作的方法handleClick ,handleTap
  设置的就用setXXX,
  获取的就用getXXX

- 禁止隐式变量转换

  a * 1, Number(a)
  const b = String(a)

- JS方法书写要一个功能就用一个方法

## CSS 相关规范

:::tip
使用:deep(.house-name) {} 格式代替 v-deep
:::

### 命名规则

- 命名使用 BEM规范 .模块-功能 或者  .功能名称-位置等， 中间以 - 连接，禁止使用驼峰

- 尽量不使用选择器 （css3选择器） 如：.content.first-child

- 嵌套尽量不超过3层

- 属性尽量使用缩写

- 元素属性顺序可以按照以下顺序进行排序

    位置属性 ( position top right z-index display float etc.)

    大小 ( width height padding margin etc.)

    文字系列 ( font line-height letter-spacing color text-align ect.)

    背景 ( background border etc.)

    其他 ( animation transition etc.)

#### commit规范

- 提交代码需要有提交信息，以 feat: xxxxx格式书写

  feat：新功能（feature）

  fix：修补bug

  docs：文档（documentation）

  style： 格式（不影响代码运行的变动）

  refactor：重构（即不是新增功能，也不是修改bug的代码变动）

  test：增加测试

  chore：构建过程或辅助工具的变动
