import { defineComponent } from 'vue';

export default defineComponent({
    methods: {
        toggleCompletion(todos: { id: number; completed: boolean }[], id: number) {
            const todo = todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});
