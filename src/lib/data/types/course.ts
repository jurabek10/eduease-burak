import { CourseCategory, CourseStatus } from "../../enums/course.enum";

export interface CourseInquery {
  order: string;
  page: number;
  limit: number;
  courseCategory?: CourseCategory;
  search?: string;
}

export interface Course {
  _id: string;
  courseStatus: CourseStatus;
  courseCategory: CourseCategory;
  courseName: string;
  courseMentor: string;
  coursePrice: number;
  courseSaledPrice: number;
  courseSold: number;
  courseDuration: number;
  courseDesc: string;
  courseImages: string[];
  courseView: number;
}
