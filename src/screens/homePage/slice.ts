import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../lib/data/types/screen";

const initialState: HomePageState = {
  popularCourses: [],
  newCourses: [],
  topUsers: [],
};
const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularCourses: (state, action) => {
      state.popularCourses = action.payload;
    },
    setNewCourses: (state, action) => {
      state.newCourses = action.payload;
    },
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});
export const { setPopularCourses, setNewCourses, setTopUsers } =
  homePageSlice.actions;
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
