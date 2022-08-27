import { createApp } from "vue";
import { createHead } from '@vueuse/head'
import { createRouter } from "./router/index";

import App from './App.vue'
import elementPlus from "element-plus";
import CompositePlus from '../../packages/components';

// import IconExternalLink from './components/IconExternalLink.vue'
import "element-plus/dist/index.css";
import "@composite-ware/theme-chalk/src/index.scss";
import "./styles/index.scss";
import ProCode from './components/ProCode.vue'

const head = createHead()
const router = createRouter();

const app = createApp(App)
// .component('IconExternalLink', IconExternalLink)
app.component('ProCode', ProCode)


app.use(elementPlus).use(CompositePlus).use(router).use(head).mount('#app')
