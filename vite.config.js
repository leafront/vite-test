/* eslint-disable */
import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import html from "vite-plugin-html"
import path from "path"
import externalGlobals from "rollup-plugin-external-globals"
import legacy from '@vitejs/plugin-legacy'
import { vueV, vueRouter, styleVersion } from "./static.config"

export default ({ mode }) => {
  const { VITE_APP_STATIC_PATH } = loadEnv(
    mode,
    process.cwd()
  )
  const staticPath = VITE_APP_STATIC_PATH
  console.log(mode, staticPath)
  let externalObj = {}
  if (mode == "dev" || mode == "prod") {
    externalObj = {
      "vue": "Vue",
      "vue-router": "VueRouter"
    }
  }

  const  injectScript = `
    <script crossorigin="anonymous" type="text/javascript" src="${staticPath}/web-static/vue@${vueV}/vue.runtime.global.prod.js"></script>
    <script crossorigin="anonymous" type="text/javascript" src="${staticPath}/web-static/vue-router@${vueRouter}/vue-router.global.prod.js"></script>
    `
  return defineConfig({
    plugins: [
      vue(),
      externalGlobals(externalObj),
      html({
        inject: {
          injectData: {
            injectLink: `
              <link rel="dns-prefetch" href="${staticPath}"/>
              <link rel="Shortcut Icon" type="image/x-icon" href="/web-static/images/favicon.png">
            `,
            injectScript,
            injectCss: `<link rel="stylesheet" type="text/css" href="${staticPath}/web-static/styles/jiling@${styleVersion}/index.css"/>`
          }
        },
        minify: true
      }),
      legacy({
        targets: [
          "> 1%",
          "ios >= 9",
          'not IE 11'
        ]
      })
    ],
    base: (mode == "prod" || mode == "dev") ? staticPath + "/" : "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    build: {
      brotliSize: false,
      cssCodeSplit: true,
      assetsDir: "web-static",
      assetsInlineLimit: 10,
      target: "es2015"
    },
    server: {
      host: "0.0.0.0",
      port: "8080",
      proxy: {}
    }
  })
}
