import { createSlice } from "@reduxjs/toolkit";
import { CoursePageState } from "../../lib/data/types/screen";

const initialState: CoursePageState = {
  academia: null,
  chosenCourse: null,
  courses: [],
};
const coursesPageSlice = createSlice({
  name: "coursePage",
  initialState,
  reducers: {
    setAcademia: (state, action) => {
      state.academia = action.payload;
    },
    setChosenCourse: (state, action) => {
      state.chosenCourse = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});
export const { setAcademia, setChosenCourse, setCourses } =
  coursesPageSlice.actions;
const CoursePageReducer = coursesPageSlice.reducer;
export default CoursePageReducer;
