/**
 *  @author: 前端组 - Rainbow
 *  @Date: 2022-03-24 17:04
 *  @description:
 *  @params:
 *  @function:
 * */
import {reactive, computed} from 'vue'

const useIndex = (params) => {
  const indexState = reactive({
    countValue: "1102",
    title: "提示"
  })
  return {
    indexState
  }
}

export default useIndex
