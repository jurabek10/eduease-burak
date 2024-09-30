import { Course } from "./course";
import { Member } from "./member";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  coursePage: CoursePageState;
}
/** HOMEPAGE */
export interface HomePageState {
  popularCourses: Course[];
  newCourses: Course[];
  topUsers: Member[];
}

/** PRODUCTS PAGE */
export interface CoursePageState {
  academia: Member | null;
  chosenCourse: Course | null;
  courses: Course[];
}
