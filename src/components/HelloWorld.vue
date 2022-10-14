<template>
  <div class="hello">
    <h1 @click="clickMsg">{{ msg }}</h1>


  </div>
</template>

<script setup>
import {defineProps, getCurrentInstance} from "vue"

const {ctx} = getCurrentInstance()

/**
 *  父组件传值
 * */
const props = defineProps({
  msg: String
})

const clickMsg = () => {
  ctx.$emit("clickInitMsg", {
    name: "1",
    id: "2",
    success: "成功"
  })
}


</script>
