import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducers me property and function aata hai
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                // payload ek object
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer

// state => current situation hand to hand value
//  remove => kuch value aayi for example value at removeTodo