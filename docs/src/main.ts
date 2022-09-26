import { createApp } from "vue";
import { createHead } from '@vueuse/head'
import { createRouter } from "./router/index";

import App from './App.vue'
import '@composite-ware/theme-chalk/src/element/index.scss'
import elementPlus from "element-plus";
import CompositePlus from '../../packages/components';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import "element-plus/dist/index.css";
import "@composite-ware/theme-chalk/src/index.scss";

import "./styles/index.scss";
import ProCode from './components/ProCode.vue'

const head = createHead()
const router = createRouter();

const app = createApp(App)
app.component('ProCode', ProCode)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(elementPlus).use(CompositePlus).use(router).use(head).mount('#app')
