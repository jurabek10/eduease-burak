import { CourseStatus } from "../../enums/course.enum";

export interface CartItem {
  _id: string;
  quantity: number;
  name: string;
  price: number;
  saledPrice: number;
  status: CourseStatus;
  image: string;
}
