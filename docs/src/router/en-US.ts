import { markRaw } from "vue";
import { House, TakeawayBox } from "@element-plus/icons-vue";
import Layout from "../layout/Layout.vue";
import type { RouteRecordRaw } from "vue-router";

const enUS: RouteRecordRaw[] = [
  {
    path: "/en-US/",
    redirect: "/en-US/guide/",
    component: Layout,
    meta: { title: "Guide", icon: markRaw(House) },
    children: [
      {
        path: "/en-US/guide/introduction",
        component: () => import("../../docs/en-US/guide/introduction.md"),
        meta: { title: "Introduction" }
      },
      {
        path: "/en-US/guide/",
        component: () => import("../../docs/en-US/guide/index.md"),
        meta: { title: "Quick Start" }
      },
      {
        path: "/en-US/guide/i18n",
        component: () => import("../../docs/en-US/guide/i18n.md"),
        meta: { title: "Internationalization" }
      },
      {
        path: "/en-US/guide/theme",
        component: () => import("../../docs/en-US/guide/theme.md"),
        meta: { title: "Custom Theme" }
      },
      {
        path: "/en-US/guide/router",
        component: () => import("../../docs/en-US/guide/router.md"),
        meta: { title: "Router and Menu" }
      },
      {
        path: "/en-US/guide/changelog",
        component: () => import("../../../CHANGELOG.md"),
        meta: { title: "Changelog" }
      }
    ]
  },
  {
    path: "/en-US/components/",
    redirect: "/en-US/components/button",
    component: Layout,
    meta: { title: "Components", icon: markRaw(TakeawayBox) },
    children: [
      {
        path: "/en-US/components/button",
        component: () => import("../../docs/en-US/components/button.md"),
        meta: { title: "button" }
      }
    ]
  }
];

export default enUS;
