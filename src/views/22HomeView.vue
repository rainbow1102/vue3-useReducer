<template>
  <div class="home">
    <div @click="clickTest">测试Vue3：{{ paramsObj.msg }} / {{ paramsObj.id }}</div>
  </div>
</template>

<script setup>
import {reactive, watch, watchEffect, getCurrentInstance} from "vue"
// import HelloWorld from "./../components/HelloWorld"

const {ctx} = getCurrentInstance()

const paramsObj = reactive({
  msg: "测试bug",
  id: 1
})

const clickTest = () => {
  paramsObj.msg = "bug测试"
  paramsObj.id += 10
}

watch(() => paramsObj.msg, (newVal, oldVal) => {
  console.log("newVal:", newVal)
  console.log("oldVal:", oldVal)
}, {
  deep: true
})
</script>

