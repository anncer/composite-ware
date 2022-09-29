<template>
  <div class="menu-aside" :class="{ 'min-menu': false }">
    <div class="menu-wrapper">
      <div class="aside-logo">
          <img :src="logo" alt="" />
      </div>
      <el-menu
        :style="menuStype"
        class="menu-content"
        :collapse="collapsed"
        :collapse-transition="true"
        :unique-opened="true"
        mode="vertical"
      >
        <sider-menu-item
          v-for="item in routes"
          :item="item"
        ></sider-menu-item>
      </el-menu>
    </div>
  </div>
  <div class="wrap-container">
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, shallowRef, ref } from "vue";
import { useRouter } from "vue-router";
import { useLang } from "../composables/index";

import siderMenuItem from "@docs/src/layout/siderMenuItem.vue";

import logo from "../public/logo.svg"
const menuStype = `--el-menu-text-color: var(--de-font-color);
          --el-menu-bg-color: var(--de-bg-color);
          --el-menu-hover-bg-color: var(--de-bg-color);
          --el-menu-item-hover-fill: var(--de-bg-color);
          --el-menu-border-color: var(--de-bg-color);`
const collapsed = ref(false)
const router = useRouter();
const lang = useLang();

const routes = computed(() => {
  const reg = new RegExp(`^\\/(${lang.value}|dev)\\/`);
  const _routes = router.options.routes;
  return _routes.filter((item) => reg.test(item.path));
});
</script>

<style lang="scss">
@import '@docs/src/layout/layout.scss'
</style>
