import { Course } from "./course";
import { Member } from "./member";
import { Order } from "./orders";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  coursePage: CoursePageState;
  ordersPage: OrdersPageState;
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

/** OrderPages */
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
