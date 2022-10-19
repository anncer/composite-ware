/* eslint-disable prettier/prettier */

/**
 * !--------- WARNING ----------!
 * 根据 /components.json 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */
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
      //{
      //  path: "/zh-CN/guide/i18n",
      //  component: () => import("../../docs/zh-CN/guide/i18n.md"),
      //  meta: { title: "国际化" }
      //},
      //{
      //  path: "/zh-CN/guide/theme",
      //  component: () => import("../../docs/zh-CN/guide/theme.md"),
      //  meta: { title: "自定义主题" }
      //},
      {
        path: "/zh-CN/guide/changelog",
        component: () => import("../../../CHANGELOG.md"),
        meta: { title: "更新日志" }
      },
      {
        path: "/zh-CN/guide/feature",
        component: () => import("../../../feature.md"),
        meta: { title: "开发计划" }
      }
    ]
  },
  {
    path: "/zh-CN/components/",
    redirect: "/zh-CN/components/link",
    component: Layout,
    meta: { title: "组件", icon: markRaw(TakeawayBox) },
    children: [
        {
          path: "/zh-CN/components/link",
          component: () => import("../../docs/zh-CN/components/link.md"),
          meta: { title: "link" }
        },
        {
          path: "/zh-CN/components/card",
          component: () => import("../../docs/zh-CN/components/card.md"),
          meta: { title: "card" }
        },
        {
          path: "/zh-CN/components/item",
          component: () => import("../../docs/zh-CN/components/item.md"),
          meta: { title: "item" }
        },
        {
          path: "/zh-CN/components/title",
          component: () => import("../../docs/zh-CN/components/title.md"),
          meta: { title: "title" }
        },
        {
          path: "/zh-CN/components/table",
          component: () => import("../../docs/zh-CN/components/table.md"),
          meta: { title: "table" }
        },
        {
          path: "/zh-CN/components/base-selector",
          component: () => import("../../docs/zh-CN/components/base-selector.md"),
          meta: { title: "base-selector" }
        },
        {
          path: "/zh-CN/components/dialog-selector",
          component: () => import("../../docs/zh-CN/components/dialog-selector.md"),
          meta: { title: "dialog-selector" }
        },
        {
          path: "/zh-CN/components/calendar",
          component: () => import("../../docs/zh-CN/components/calendar.md"),
          meta: { title: "calendar" }
        }
    ]
  }
];

export default zhCN;
