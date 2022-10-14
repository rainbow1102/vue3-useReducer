/**
 * @author: Rainbow
 * @time: 2022/6/21/0021 23:31
 * @description:
 *
 * vite.config.js
 */
import {defineConfig} from "vite"

import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({})
  ]
})
