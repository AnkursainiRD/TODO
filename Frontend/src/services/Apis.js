const BASE_URL=import.meta.env.VITE_BASE_URL


export const todoEndPoints={
    GET_ALL_TODOS: BASE_URL +"/getAllTodos",
    CREATE_TODO: BASE_URL +"/createTodo",
    UPDATE_TODO: BASE_URL +"/updateTodo",
    DELTE_TODO: BASE_URL +"deleteTodo:id",
    COMPLETED_TODOS: BASE_URL +"/completedTodo"
}