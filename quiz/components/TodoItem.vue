<template>
  <div :class="['todo-item', { completed: todo.completed }]">
    <span @click="toggleCompletion">{{ todo.text }}</span>
    <button @click="deleteTodo" class="delete-btn">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  },
  methods: {
    toggleCompletion() {
      this.$emit('toggle-completion', this.todo.id);
    },
    deleteTodo() {
      this.$emit('delete-todo', this.todo.id);
    }
  }
});
</script>

<style scoped>
button {
  margin-left: 10px;
}

.todo-item {
  margin-left: -200px;

  font-family: 'Inknut Antiqua', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 39px;
  color: #2c3e50;

}


.todo-item.completed {
  text-decoration: line-through;
  color: #888;
}

.todo-enter-active, .todo-leave-active {
  transition: opacity 0.5s;
}

.todo-enter, .todo-leave-to {
  opacity: 0;
}


.delete-btn {
  margin-top: 10px;

  background: #EF2757;
  color: white;

  border: none;
  width: 62px;
  height: 22px;
  border-radius: 8px;

  font-family: "Jersey 15", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
}

.delete-btn:hover {
  background: rgb(206, 35, 76);
}
</style>