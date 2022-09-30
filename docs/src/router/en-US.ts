/* eslint-disable prettier/prettier */

/**
 * !--------- WARNING ----------!
 * 根据 /components.json 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */
import { markRaw } from "vue";
import { House, TakeawayBox } from "@element-plus/icons-vue";
import Layout from "../layout/Layout.vue";
import type { RouteRecordRaw } from "vue-router";

const enUS: RouteRecordRaw[] = [
  {
    path: "/en-US/",
    redirect: "/en-US/guide/",
    component: Layout,
    meta: { title: "指南", icon: markRaw(House) },
    children: [
      {
        path: "/en-US/guide/introduction",
        component: () => import("../../docs/en-US/guide/introduction.md"),
        meta: { title: "介绍" }
      },
      {
        path: "/en-US/guide/",
        component: () => import("../../docs/en-US/guide/index.md"),
        meta: { title: "快速上手" }
      },
      {
        path: "/en-US/guide/i18n",
        component: () => import("../../docs/en-US/guide/i18n.md"),
        meta: { title: "国际化" }
      },
      {
        path: "/en-US/guide/theme",
        component: () => import("../../docs/en-US/guide/theme.md"),
        meta: { title: "自定义主题" }
      },
      {
        path: "/en-US/guide/changelog",
        component: () => import("../../../CHANGELOG.md"),
        meta: { title: "更新日志" }
      }
    ]
  },
  {
    path: "/en-US/components/",
    redirect: "/en-US/components/link",
    component: Layout,
    meta: { title: "组件", icon: markRaw(TakeawayBox) },
    children: [
        {
          path: "/en-US/components/link",
          component: () => import("../../docs/en-US/components/link.md"),
          meta: { title: "link" }
        },
        {
          path: "/en-US/components/card",
          component: () => import("../../docs/en-US/components/card.md"),
          meta: { title: "card" }
        },
        {
          path: "/en-US/components/item",
          component: () => import("../../docs/en-US/components/item.md"),
          meta: { title: "item" }
        },
        {
          path: "/en-US/components/title",
          component: () => import("../../docs/en-US/components/title.md"),
          meta: { title: "title" }
        },
        {
          path: "/en-US/components/table",
          component: () => import("../../docs/en-US/components/table.md"),
          meta: { title: "table" }
        },
        {
          path: "/en-US/components/base-selector",
          component: () => import("../../docs/en-US/components/base-selector.md"),
          meta: { title: "base-selector" }
        },
        {
          path: "/en-US/components/dialog-selector",
          component: () => import("../../docs/en-US/components/dialog-selector.md"),
          meta: { title: "dialog-selector" }
        }
    ]
  }
];

export default enUS;
