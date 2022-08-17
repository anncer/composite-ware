<template>
  <div class="menu-box">
    <template v-if="isChildren">
      <el-sub-menu :index="menuItem.path">
        <template #title>
          <router-link :to="menuItem.path">
            <!-- <svg-icon v-if="menuItem.meta.icon" :type="menuItem.meta.icon" class="icon" /> -->
            <span>{{ menuItem.meta.title }}</span>
          </router-link>
        </template>
        <sider-menu-item
          v-for="item2 in item.children"
          :item="item2"
          :key="item2.path"
        >
        </sider-menu-item>
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="menuItem.path">
        <router-link :to="menuItem.path">
          <!-- <svg-icon v-if="menuItem.meta.icon" :type="menuItem.meta.icon" class="icon" /> -->
          <span>{{ menuItem.meta.title }}</span>
        </router-link>
      </el-menu-item>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs, computed } from "vue";
import { isProperty, isRealArray } from "../utils/comment.ts";
import { IRouterItem } from "./types.d";
import type { RouteRecordRaw } from 'vue-router'
// import SvgIcon from "@/components/SvgIcon";

export default defineComponent({
  name: "SiderMenuItem",
  components: {
    // SvgIcon
  },
  props: {
    item: {
      type: Object as PropType<RouteRecordRaw>,
      required: true
    },
    type: {
      default: "",
      type: String
    },
    show: {
      default: false,
      type: Boolean
    }
  },
  setup(props) {
    const { item } = toRefs(props);
    const checkPromise = (item: RouteRecordRaw) => {
      return isProperty(item, "isShow") && !item.hidden;
    };

    const checkChildren = (it: RouteRecordRaw): boolean => {
      return item && isProperty(it, "children") && isRealArray(it.children);
    };

    const isChildren = computed<boolean>(() => checkChildren(item.value));

    return {
      checkPromise,
      isChildren,
      menuItem: item
    };
  }
});
</script>
