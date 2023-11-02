import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  assignments   : db.assignments,
  assignment: {     
    title: "New assignment11",
  description: "New assignment description",
  dueDate: "2022-01-01",
  availableFromDate: "2022-01-01",
  availableUntilDate: "2022-01-01", 
},
};


const assignmentsSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, updateAssignment, deleteAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;