import { markRaw } from "vue";
import { House, TakeawayBox } from "@element-plus/icons-vue";
import Layout from "../layout/Layout.vue";
import type { RouteRecordRaw } from "vue-router";

const zhCN: RouteRecordRaw[] = [
  {
    path: "/zh-CN/",
    redirect: "/zh-CN/guide/",
    component: Layout,
    meta: { title: "指南", icon: markRaw(House) },
    children: [
      {
        path: "/zh-CN/guide/introduction",
        component: () => import("../../docs/zh-CN/guide/introduction.md"),
        meta: { title: "介绍" }
      },
      {
        path: "/zh-CN/guide/",
        component: () => import("../../docs/zh-CN/guide/index.md"),
        meta: { title: "快速上手" }
      },
      {
        path: "/zh-CN/guide/i18n",
        component: () => import("../../docs/zh-CN/guide/i18n.md"),
        meta: { title: "国际化" }
      },
      {
        path: "/zh-CN/guide/theme",
        component: () => import("../../docs/zh-CN/guide/theme.md"),
        meta: { title: "自定义主题" }
      },
      {
        path: "/zh-CN/guide/router",
        component: () => import("../../docs/zh-CN/guide/router.md"),
        meta: { title: "路由和菜单" }
      },
      {
        path: "/zh-CN/guide/changelog",
        component: () => import("../../../CHANGELOG.md"),
        meta: { title: "更新日志" }
      }
    ]
  },
  {
    path: "/zh-CN/components/",
    redirect: "/zh-CN/components/button",
    component: Layout,
    meta: { title: "Components", icon: markRaw(TakeawayBox) },
    children: [
      {
        path: "/zh-CN/components/button",
        component: () => import("../../docs/zh-CN/components/button.md"),
        meta: { title: "button" }
      }
    ]
  }
];

export default zhCN;
