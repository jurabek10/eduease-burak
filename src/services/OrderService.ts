import axios from "axios";
import { serverApi } from "../lib/config";
import {
  Order,
  OrderInquery,
  OrderItemInput,
  OrderUpdateInput,
} from "../lib/data/types/orders";
import { CartItem } from "../lib/data/types/search";
class OrdersService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async createOrder(input: CartItem[]): Promise<Order> {
    try {
      const orderItems: OrderItemInput[] = input.map((cartItem: CartItem) => {
        return {
          itemQuantity: cartItem.quantity,
          itemPrice: cartItem.price,
          courseId: cartItem._id,
          itemSaledPrice: cartItem.saledPrice,
          itemStatus: cartItem.status,
        };
      });
      const url = this.path + "/order/create";
      const result = await axios.post(url, orderItems, {
        withCredentials: true,
      });
      console.log("createOrder: ", result);
      return result.data;
    } catch (err) {
      console.log("Error, createOrder", err);
      throw err;
    }
  }
  public async getMyOrders(input: OrderInquery): Promise<Order[]> {
    try {
      axios.defaults.withCredentials = true;
      const url = `${this.path}/order/all`;
      const query = `?page=${input.page}&limit=${input.limit}&orderStatus=${input.orderStatus}`;
      const result = await axios.get(url + query, { withCredentials: true });
      console.log("getMyOrders: ", result);
      return result.data;
    } catch (err) {
      console.log("Error, createOrder", err);
      throw err;
    }
  }

  public async updateOrder(input: OrderUpdateInput): Promise<Order> {
    try {
      const url = `${this.path}/order/update`;
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("updateOrder:", result);
      return result.data;
    } catch (err) {
      console.log("Error, updateOrder", err);
      throw err;
    }
  }
}
export default OrdersService;
