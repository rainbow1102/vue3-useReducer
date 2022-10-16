<template>
  <div class="home">
    <ul>
      <li
        v-for="item in props.totoList"
        :key="item.id"
      >
        <input
          type="checkbox"
          :checked="item.completed"
          @click="toggleTodo(item.id)"
        >
        <span
          :style="{textDecoration: item.completed ? 'line-through' : 'none'}"
        >{{ item.content }}</span>
        <button @click="removeTodo(item.id)">ADD</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, reactive, watch, watchEffect, onMounted} from "vue"

const props = defineProps({
  totoList: Array
})

console.log('props++:', props.totoList)

const emit = defineEmits(["onToggleTodo", "onRemoveTodo"])
const toggleTodo = (id) => {
  emit("onToggleTodo", id)
}

const removeTodo = (id) => {
  emit("onRemoveTodo", id)
}

</script>

