<template>
  <div>
    <div>
<!--      <label for="filter">Filter:</label>-->
      <select v-model="filter" id="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>

    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />

    <transition-group name="todo" tag="div">
      <TodoItem
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
          @toggle-completion="handleToggleCompletion"
          @delete-todo="deleteTodo"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed, watch, nextTick, type UnwrapRef} from 'vue';
import {TodoItem} from "#components";
import toggleCompletionMixin from "~/mixins/toggleCompletionMixin";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem
  },

  mixins: [toggleCompletionMixin],
  setup: function () {
    const newTodo = ref('');
    const todos = ref<Todo[]>([]);
    const filter = ref('all');

    // Add new todo
    const addTodo = () => {
      if (newTodo.value.trim()) {
        const todo: Todo = {
          id: Date.now(),
          text: newTodo.value.trim(),
          completed: false
        };
        todos.value.push(todo);
        newTodo.value = '';
        nextTick(() => {
        });
      }
    };

    // Delete todo
    const deleteTodo = (id: number) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    };


    const filteredTodos = computed(() => {
      switch (filter.value) {
        case 'completed':
          return todos.value.filter(todo => todo.completed);
        case 'incomplete':
          return todos.value.filter(todo => !todo.completed);
        default:
          return todos.value;
      }
    });
    const toggleCompletion = toggleCompletionMixin.methods?.toggleCompletion;

    const handleToggleCompletion = (id: number) => {
      if (toggleCompletion) {
        toggleCompletion(todos.value, id);
      }
    };

    watch(filter, () => {
      nextTick(() => {
      });
    });

    return {
      newTodo,
      todos,
      filter,
      addTodo,
      deleteTodo,
      handleToggleCompletion,
      filteredTodos
    };
  }
});
</script>

<style scoped>
input {
  padding: 10px;
  margin: 10px;
  width: 100%;
  max-width: 300px;
}

button {
  margin-left: 10px;
  cursor: pointer;
}

input, select {
  width: 441px;
  height: 44px;

  background: #76C5E7;
  border-radius: 16px;
  border: none;

  padding-left: 10px;
  font-family: 'Inknut Antiqua', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 32px;

  color: #FFFFFF;
}

input::placeholder {
  width: 195px;
  height: 44px;

  font-family: 'Inknut Antiqua', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 44px;

  color: #FFFFFF;
}
</style>
