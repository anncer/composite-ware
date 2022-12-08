/* eslint-disable prettier/prettier */

/**
 * !--------- WARNING ----------!
 * 根据 /components.json 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */
import { markRaw } from "vue";
import { House, TakeawayBox } from "@element-plus/icons-vue";
import Layout from "../layout/Layout.vue";
import type { RouteRecordRaw } from "vue-router";

const {{ langUpper }}: RouteRecordRaw[] = [
  {
    path: "/{{ lang }}/",
    redirect: "/{{ lang }}/project",
    component: Layout,
    meta: { title: "指南", icon: markRaw(House) },
    children: [
      {
        path: "/zh-CN/introduction",
        component: () => import("../../docs/zh-CN/guide/introduction.md"),
        meta: { title: "组件和项目介绍" }
      },
      {
       path: "/zh-CN/develop",
       component: () => import("../../docs/zh-CN/guide/develop.md"),
       meta: { title: "前端开发文档" }
      },
      // {
      //   path: "/zh-CN/guide",
      //   component: () => import("../../docs/zh-CN/guide/index.md"),
      //   meta: { title: "快速上手" }
      // },
      //{
      //  path: "/{{ lang }}/i18n",
      //  component: () => import("../../docs/{{ lang }}/guide/i18n.md"),
      //  meta: { title: "国际化" }
      //},
      //{
      //  path: "/{{ lang }}/theme",
      //  component: () => import("../../docs/{{ lang }}/theme.md"),
      //  meta: { title: "自定义主题" }
      //},
      {
        path: "/{{ lang }}/changelog",
        component: () => import("../../../CHANGELOG.md"),
        meta: { title: "更新日志" }
      },
      {
        path: "/{{ lang }}/feature",
        component: () => import("../../../feature.md"),
        meta: { title: "开发计划" }
      }
    ]
  },
  {
    path: "/{{ lang }}/components/",
    redirect: "/{{ lang }}/components/link",
    component: Layout,
    meta: { title: "组件", icon: markRaw(TakeawayBox) },
    children: [{{ list }}
    ]
  }
];

export default {{ langUpper }};
