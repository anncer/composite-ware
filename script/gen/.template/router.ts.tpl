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
    redirect: "/{{ lang }}/guide/",
    component: Layout,
    meta: { title: "指南", icon: markRaw(House) },
    children: [
      {
        path: "/{{ lang }}/guide/introduction",
        component: () => import("../../docs/{{ lang }}/guide/introduction.md"),
        meta: { title: "介绍" }
      },
      {
        path: "/{{ lang }}/guide/",
        component: () => import("../../docs/{{ lang }}/guide/index.md"),
        meta: { title: "快速上手" }
      },
      //{
      //  path: "/{{ lang }}/guide/i18n",
      //  component: () => import("../../docs/{{ lang }}/guide/i18n.md"),
      //  meta: { title: "国际化" }
      //},
      //{
      //  path: "/{{ lang }}/guide/theme",
      //  component: () => import("../../docs/{{ lang }}/guide/theme.md"),
      //  meta: { title: "自定义主题" }
      //},
      {
        path: "/{{ lang }}/guide/changelog",
        component: () => import("../../../CHANGELOG.md"),
        meta: { title: "更新日志" }
      },
      {
        path: "/{{ lang }}/guide/feature",
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
