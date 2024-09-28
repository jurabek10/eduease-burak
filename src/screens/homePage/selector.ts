import { createSelector } from "reselect";
import { AppRootState } from "../../lib/data/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retrivePopularCourses = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularCourses
);
export const retriveNewCourses = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newCourses
);
export const retriveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
