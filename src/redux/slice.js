import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            return [...state, action.payload];
          },
        editTask: (state, action) => {
            const newState = state.slice(); 
            const index = newState.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
              newState[index] = action.payload;
            }
            return newState;
        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload.id)
        }
    }
})
export const {addTask, editTask, removeTask} = slice.actions
export default slice.reducer