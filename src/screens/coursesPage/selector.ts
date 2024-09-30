import { createSelector } from "reselect";
import { AppRootState } from "../../lib/data/types/screen";
const selectCoursePage = (state: AppRootState) => state.coursePage;
export const retriveAcademia = createSelector(
  selectCoursePage,
  (CoursesPage) => CoursesPage.academia
);
export const retriveChosenCourse = createSelector(
  selectCoursePage,
  (CoursesPage) => CoursesPage.chosenCourse
);
export const retriveCourses = createSelector(
  selectCoursePage,
  (CoursesPage) => CoursesPage.courses
);
