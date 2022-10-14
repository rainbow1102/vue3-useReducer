<template>
  <div class="home">
    <HelloWorld msg="测试vue3" @click="clickHelloWorld"/>

    <div style="margin-top: 100px">
      <span>state num：{{ countValue }} +++ {{ title }}</span>
      <p>doubleCounter的值: {{ doubleCounter }}</p>
    </div>

    <div @click="add()">add方法</div>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import {ref, toRefs, reactive, onMounted} from "vue"
import {useCounter} from "@/hooks/useXy"
// import useIndex from "@/hooks/useIndex"

export default {
  name: 'HomeView',
  components: {
    HelloWorld
    // HelloWorld: () => import("@/components/HelloWorld.vue")
  },
  setup() {
    const {state, add, doubleCounter} = useCounter({
      value1: "useCounter Vue"
    })
    onMounted(() => {
    })
    /**
     *  @description Fun
     * */
    const clickHelloWorld = () => {
      console.log('asdfa')
    }
    return {
      ...toRefs(state),
      add,
      doubleCounter,
      clickHelloWorld
    }
  }
}
</script>

<!--<script>
import HelloWorld from '@/components/HelloWorld.vue'

import {defineComponent, ref, toRefs, reactive} from "vue"

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    /**
     *  初始化数据
     * */
    let count = ref(1)
    let countNum = reactive({
      num: 10
    })
    /**
     *  @description Fun
     * */
    const clickHelloWorld = () => {
      count.value += 1
      countNum.num += 10
    }
    return {
      count,
      ...toRefs(countNum),
      clickHelloWorld
    }
  }
})
</script>-->

<!--<script setup>
import HelloWorld from '@/components/HelloWorld.vue'

import {defineComponent, ref, toRefs, reactive} from "vue"

let count = ref(1)
let countNum = reactive({
  num: 10
})


const clickHelloWorld = () => {
  count.value += 1
  countNum.num += 10
}

/*export default{
  name: 'HomeView',
  let count = ref(1)
  let countNum = reactive({
    num: 10
  })
  setup() {
    /!**
     *  初始化数据
     * *!/
    let count = ref(1)
    let countNum = reactive({
      num: 10
    })
    /!**
     *  @description Fun
     * *!/
    const clickHelloWorld = () => {
      count.value += 1
      countNum.num += 10
    }
    return {
      count,
      ...toRefs(countNum),
      clickHelloWorld
    }
  }
}*/
</script>-->
