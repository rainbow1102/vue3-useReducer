/**
 *  @author 蒋小右
 *  @Date 2022-10-09 22:43
 *  @description
 *  @params
 *  @return
 * */

import {actionTypes} from "./actionTypes"

function todoReducer(state, action) {
  // console.log('todoList, paylaod:', todoList, action)
  const {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} = actionTypes
  const {type, payload} = action

  switch (type) {
    case ADD_TODO:
      return addTodo(state, payload)
    case TOGGLE_TODO:
      return toggleTodo(state, payload)
    case REMOVE_TODO:
      return removeTodo(state, payload)
    default:
      break
  }
}

function addTodo(state, paylaod) {
  state.value.push(paylaod)
}

function toggleTodo(state, paylaod) {
  state.value = state.value.map(item => {
    if (item.id === paylaod) {
      item.completed = true
    }
    return item
  })
}

function removeTodo(state, paylaod) {
  state.value = state.value.filter(v => v.id !== paylaod)
}

export {
  todoReducer
}
