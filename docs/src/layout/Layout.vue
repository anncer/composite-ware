<template>
  <div class="menu-aside" :class="{ 'min-menu': collapsed }">
    <div class="menu-wrapper">
      <div class="menu-head">
        <span v-if="!collapsed" class="menu-head-text" >Composite Ware</span>
        <span class="menu-head-icon">
          <el-tooltip :content="collapsed?'open': 'close'" placement="right">
            <el-icon :size="22" color="#fff" style="cursor: pointer;" @click="handelClick"><Operation /></el-icon>
          </el-tooltip>
        </span>
      </div>
      <div class="menu-content">
        <el-menu
          :style="menuStype"
          :collapse="collapsed"
          :collapse-transition="true"
          mode="vertical"
        >
          <sider-menu-item
            v-for="item in routes"
            :item="item"
          ></sider-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
  <transition name="fade-transform" mode="out-in">
    <div class="wrap-container" :class="{ 'max-container': collapsed }">
      <section class="app-main">
          <router-view></router-view>
      </section>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, provide, shallowRef, ref } from "vue";
import { useRouter } from "vue-router";
import { useLang } from "../composables/index";
import { cookie } from '../../src/utils/cache'
import siderMenuItem from "@docs/src/layout/siderMenuItem.vue";

// import logo from "../public/logo.svg";

const menuStype = `--el-menu-text-color: var(--de-font-color);
          --el-menu-bg-color: var(--de-bg-color);
          --el-menu-hover-bg-color: var(--de-bg-color);
          --el-menu-item-hover-fill: var(--de-bg-color);
          --el-menu-border-color: var(--de-bg-color);`

const collapsedCache = cookie.get('collapsed') === 'true' ? true : false

const collapsed = ref(collapsedCache)
const router = useRouter();
const lang = useLang();

const routes = computed(() => {
  const reg = new RegExp(`^\\/(${lang.value}|dev)\\/`);
  const _routes = router.options.routes;
  return _routes.filter((item) => reg.test(item.path));
});

const handelClick = () => {
  collapsed.value = !collapsed.value
  cookie.set('collapsed', collapsed.value)
}
</script>

<style lang="scss">
@import '@docs/src/layout/layout.scss'
</style>
