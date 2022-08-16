import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-vue-markdown";
import container from "markdown-it-container";
import { VitePWA } from "vite-plugin-pwa";
import anchor from "markdown-it-anchor";
import highlight from "./build/plugin/highlight";
import snippet from "./build/plugin/snippet";
import example from "./build/plugin/example";
import createContainer from "./build/plugin/create-container";
import externalLinkIcon from "./build/plugin/external-link-icon";
import preWrapper from "./build/plugin/pre-wrapper";
import type Token from "markdown-it/lib/token";
import DefineOptions from "unplugin-vue-define-options/vite";
import VueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  root: resolve(__dirname, "docs"),
  resolve: {
    alias: {
      "@composite-ware": resolve(__dirname, "packages"),
      "@docs": resolve(__dirname, "docs")
    }
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        manualChunks: {
          "modules-vue": ["vue", "vue-router"]
        }
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    VueJsx(),
    DefineOptions(),
    Markdown({
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        highlight
      },
      markdownItSetup(md) {
        md.use(snippet)
          .use(preWrapper)
          .use(container, "example", example)
          .use(externalLinkIcon)
          .use(anchor, {
            slugify: (str) => str.replace(/[ ]/g, "-").toLowerCase(),
            permalink: anchor.permalink.ariaHidden({})
          })
          .use(...createContainer("tip", "TIP"))
          .use(...createContainer("warning", "WARNING"))
          .use(...createContainer("danger", "WARNING"))
          .use(container, "v-pre", {
            render: (tokens: Token[], idx: number) =>
              tokens[idx].nesting === 1 ? "<div v-pre>\n" : "</div>\n"
          })
          .use(container, "details", {
            render: (tokens: Token[], idx: number) => {
              const info = tokens[idx].info.trim().slice(7).trim(); // 7 = 'details'.length
              return tokens[idx].nesting === 1
                ? `<details class="custom-block details">${
                    info ? `<summary>${info}</summary>` : ""
                  }\n`
                : "</details>";
            }
          });
      }
    }),
    VitePWA({
      manifest: {
        id: "/",
        name: "composite-plus",
        description: "a component library for Vue 3",
        // icons: [
        //   {
        //     src: "/composite-plus/android-chrome-192x192.png",
        //     sizes: "192x192",
        //     type: "image/png"
        //   },
        //   {
        //     src: "/composite-plus/android-chrome-512x512.png",
        //     sizes: "512x512",
        //     type: "image/png"
        //   }
        // ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone"
      }
    })
  ]
});
