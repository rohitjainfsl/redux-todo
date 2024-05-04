import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "todoSlice",
  initialState: {
    inputValue: "",
    tasks: [],
    isEditing: false,
  },
  reducers: {
    setInputValue: function (state, action) {
      state.inputValue = action.payload;
    },
    handleSubmit: function (state) {
      if (!state.isEditing) {
        const taskObj = { task: state.inputValue, id: Date.now() };
        state.tasks = [...state.tasks, taskObj];
      } else {
        const taskToEdit = state.tasks.find(
          (task) => task.id === state.isEditing
        );
        if (taskToEdit) taskToEdit.task = state.inputValue;
      }
      state.inputValue = "";
    },
    handleDelete: function (state, action) {
      state.tasks = state.tasks.filter((task) => {
        return task.id !== action.payload;
      });
    },
    handleEdit: function (state, action) {
      state.inputValue = state.tasks.find(
        (task) => task.id === action.payload
      ).task;
      state.isEditing = action.payload;
    },
  },
});

export const { setInputValue, handleSubmit, handleDelete, handleEdit } =
  slice.actions;

const todoReducer = slice.reducer;
export default todoReducer;
