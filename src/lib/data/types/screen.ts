import { Course } from "./course";
import { Member } from "./member";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
}
/** HOMEPAGE */
export interface HomePageState {
  popularCourses: Course[];
  newCourses: Course[];
  topUsers: Member[];
}
