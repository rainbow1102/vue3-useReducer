/**
 *  @author 蒋小右
 *  @Date 2022-10-16 18:28
 *  @description
 *  @params
 *  @return
 * */
import {ref} from "vue"

function useReducer(reducer, initialState) {
  const state = ref(initialState)
  const action = {}

  function dispatch({type, payload}) {
    action.type = type
    action.payload = payload

    reducer(state, action)
  }

  return [state, dispatch]
}

export default useReducer
