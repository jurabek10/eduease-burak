import { OrderStatus } from "../../enums/order.enum";
import { Course } from "./course";
export interface OrderItem {
  _id: string;
  itemQuantity: number;
  itemPrice: number;
  orderItem: string;
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface Order {
  _id: string;
  orderTotal: number;
  orderDelivery: number;
  orderStatus: OrderStatus;
  memberId: string;
  createdAt: Date;
  updatedAt: Date;
  // from aggregation
  orderItems: OrderItem[];
  courseData: Course[];
}
export interface OrderItemInput {
  itemQuantity: number;
  itemPrice: number;
  courseId: string;
  orderId?: string;
}
export interface OrderInquery {
  page: number;
  limit: number;
  orderStatus: OrderStatus;
}
export interface OrderUpdateInput {
  orderId: string;
  orderStatus: OrderStatus;
}
