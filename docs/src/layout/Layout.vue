<template>
  <div class="menu-aside" :class="{ 'min-menu': collapsed }">
    <div class="menu-wrapper">
      <div class="menu-head">
        <span v-if="!collapsed" class="menu-head-text" >CompositeWare</span>
        <span class="menu-head-icon">
          <el-tooltip :content="collapsed?'open': 'close'" placement="right">
            <el-icon :size="22" color="#fff" style="cursor: pointer;" @click="handelClick"><Operation /></el-icon>
          </el-tooltip>
        </span>
      </div>
      <!-- mode="vertical" -->
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
  <div class="wrap-container" :class="{ 'max-container': collapsed }">
    <section class="app-main"  :class="{ 'app-max': !isLinks }">
        <router-view></router-view>
        <div class="app-linkbox" v-if="isLinks">
          <div class="app-title" >本页目录</div>
          <div class="app-link" v-for="it in ids">
            <a :title="it" :href="`#${it}`">{{it}}</a>
          </div>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useLang } from "../composables/index";
import { cookie } from '../../src/utils/cache'
import siderMenuItem from "@docs/src/layout/siderMenuItem.vue";
import { includes } from "lodash";

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

const route = useRoute()

const isLinks = ref(false)
watch(route, () => {
  getRouterState()
})

const routes = computed(() => {
  const reg = new RegExp(`^\\/(${lang.value}|dev)\\/`);
  const _routes = router.options.routes;
  return _routes.filter((item) => reg.test(item.path));
});

const handelClick = () => {
  collapsed.value = !collapsed.value
  cookie.set('collapsed', collapsed.value)
}

const ids = ref<string[]>([])

const getRouterState = () => {
  if (route.fullPath.includes('components') || route.fullPath.includes('introduction') || route.fullPath.includes('develop') || route.fullPath.includes('project')) {
    isLinks.value = true
  } else {
    isLinks.value = false
  }
  nextTick(() => {
    ids.value = getBodyId()
  })
}

const getBodyId = () => {
  const body:any = document.getElementsByClassName('markdown-body')[0]
  const arr :string[]= []
  const childs = body.children
  for (let i = 0; i < childs.length; i++) {
    const element = childs[i];
    if (element.hasAttribute('id')) {
      arr.push(element.getAttribute('id'))
    }
  }
  return arr
}
onMounted(() => {
  getRouterState()
  ids.value = getBodyId()
})
</script>

<style lang="scss">
@import '@docs/src/layout/layout.scss'
</style>
