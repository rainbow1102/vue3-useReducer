/**
 *  @author: 前端组
 *  @description:
 *  @params:
 *  @function:
 * */

import {onMounted, onBeforeUnmount, ref, reactive, computed} from "vue"

export const useCounter = (params) => {
  const state = reactive({
    countValue: 0,
    title: "提示"
  })
  const add = () => {
    state.countValue += 10
  }
  const doubleCounter = computed(() => {
    return state.countValue * 2
  })
  return {
    state,
    add,
    doubleCounter
  }


  /*/!*const x = ref(0)
  const y = ref(0)*!/
  const point = reactive({
    x: 0,
    y: 0
  })

  function pageHandler(e) {
    point.x = e.pageX
    point.y = e.pageY
  }

  onMounted(() => {
    document.querySelector("body").addEventListener("click", pageHandler)
  })
  onBeforeUnmount(() => {
    document.querySelector("body").addEventListener('click', pageHandler)
  })
  return point*/


}
