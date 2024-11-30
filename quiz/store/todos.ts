interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
export const state = () => ({
    todos: [] as Todo[]
});

export const mutations = {
    addTodo(state: any, todo: Todo) {
        state.todos.push(todo);
    },
    deleteTodo(state: any, id: number) {
        state.todos = state.todos.filter((todo: Todo) => todo.id !== id);
    },
    toggleCompletion(state: any, id: number) {
        const todo = state.todos.find((todo: Todo) => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
};

export const getters = {
    todos: (state: any) => state.todos
};