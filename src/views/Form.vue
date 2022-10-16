<template>
  <div>
    <input
      type="text"
      placeholder="测试bug"
      v-model="todoParams.todoText"
    />
    <button @click="addTodo">ADD</button>
  </div>
</template>

<script setup>
import {ref, reactive, watch, watchEffect, onMounted} from "vue"

const todoParams = reactive({
  todoText: ""
})
const emit = defineEmits(["onAddTodo"])

const addTodo = () => {
  emit("onAddTodo", {
    id: new Date().getTime(),
    content: todoParams.todoText,
    completed: false
  })
  todoParams.todoText = ""
}
</script>

