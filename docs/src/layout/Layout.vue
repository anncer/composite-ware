<template>
  <div>
    <transition name="el-zoom-in-top" mode="out-in">
      <!-- <img v-if="collapse" src="../public/logo.svg" alt="logo" class="logo-img" /> -->
      <span class="logo-title"> composite-ware </span>
    </transition>
  </div>
  <nav-header />
  <!-- <pro-layout :routes="routes" transition="el-fade-in">
    <template #logo="{ collapse }">
      <transition name="el-zoom-in-top" mode="out-in">
        <img v-if="collapse" src="../public/logo.svg" alt="logo" class="logo-img" />
        <span v-else class="logo-title"> composite-ware </span>
      </transition>
    </template>
    <template #header-left>
      <pro-breadcrumb />
    </template>
    <template #header-right>

    </template>
    <template #header-bottom>
      <pro-tabs ref="tabs" />
    </template>
  </pro-layout>
  <pwa-popup /> -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import { computed, provide, shallowRef } from "vue";
import { useRouter } from "vue-router";
import { useLang } from "../composables/index";
import NavHeader from "@docs/src/components/NavHeader.vue";
// import PwaPopup from "../components/PwaPopup.vue";

const router = useRouter();
const lang = useLang();
const routes = computed(() => {
  const reg = new RegExp(`^\\/(${lang.value}|dev)\\/`);
  const routes = router.options.routes;
  return routes.filter((item) => reg.test(item.path));
});

</script>

<style scoped>
.logo-img {
  padding: 7px 10px;
  width: calc(var(--pro-layout-width-aside-collapse) - 20px);
}
.logo-title {
  line-height: var(--pro-layout-height-header);
}
</style>
