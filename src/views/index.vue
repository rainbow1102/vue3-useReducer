<template>
  <div>
    <todoForm
      @onAddTodo="todo => todoDispatch({
        type: actionTypes.ADD_TODO,
        payload: toto
      })"
    ></todoForm>
    <todoList
      :todoList="todoList"
      @onToggleTodo="id => todoDispatch({
        type: actionTypes.TOGGLE_TODO,
        payload: id
      })"
      @onRemoveTodo="id => todoDispatch({
        type: actionTypes.REMOVE_TODO,
        payload: id
      })"
    ></todoList>
  </div>
</template>

<script setup>
import todoForm from "./Form.vue"
import todoList from "./List.vue"

import {todoReducer, actionTypes} from "@/store"
import {useReducer} from "@/hooks"

const [todoList, todoDispatch] = useReducer(todoReducer, [])

</script>

