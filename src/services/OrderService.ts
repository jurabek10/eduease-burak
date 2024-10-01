import axios from "axios";
import { serverApi } from "../lib/config";
import { Order, OrderInquery, OrderItemInput } from "../lib/data/types/orders";
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
      const query = `?page=${input.page}&limit=${input.page}&orderStatus=${input.orderStatus}`;
      const result = await axios.get(url + query, { withCredentials: true });
      console.log("getMyOrders: ", result);
      return result.data;
    } catch (err) {
      console.log("Error, createOrder", err);
      throw err;
    }
  }
}
export default OrdersService;
