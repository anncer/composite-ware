import {
  createRouter as _createRouter,
  createWebHistory,
  Router
} from "vue-router";
import enUS from "./en-US";
import zhCN from "./zh-CN";
import { langs } from "../utils/index";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [...enUS, ...zhCN];

export function createRouter(): Router {
  const router = _createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              top: 94,
              behavior: "smooth"
            });
          }, 600); // Wait for the animation to finish
        });
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
  });

  router.beforeEach((from) => {
    if (from.path === "/") {
      const lang = navigator.language;
      return langs.find((item) => item.key === lang) ? lang : langs[0].key;
    }
  });

  return router;
}
