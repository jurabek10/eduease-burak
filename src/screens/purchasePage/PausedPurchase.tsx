import React from "react";
import { Container, Stack, Box, Button } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrivePausedOrders } from "./selector";
import { Order, OrderItem } from "../../lib/data/types/orders";
import { Course } from "../../lib/data/types/course";
import { serverApi } from "../../lib/config";

/** REDUX  SELECTOR */
const pausedOrdersRetriever = createSelector(
  retrivePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

export default function PausedOrders() {
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  return (
    <TabPanel className={"table-panel"} value={"1"}>
      {pausedOrders?.map((order: Order) => {
        console.log("oausedOrder", pausedOrders);
        return (
          <Box key={order._id} className={"order-main-box"}>
            <Box className={"order-box-scroll"}>
              {order?.orderItems?.map((item: OrderItem) => {
                const course: Course = order.courseData.filter(
                  (ele: Course) => item.courseId === ele._id
                )[0];
                const imagePath = `${serverApi}/${course.courseImages[0]}`;
                return (
                  <Box key={item._id} className={"orders-name-price"}>
                    <img src={imagePath} className={"order-dish-img"} />
                    <p className={"title-dish"}>{course.courseName}</p>
                    <Box className={"price-box"}>
                      <p>${item.itemPrice}</p>
                      <img
                        style={{ marginLeft: "5px", marginRight: "5px" }}
                        src={"/icons/close.svg"}
                        alt=""
                      />
                      <p>{item.itemQuantity}</p>
                      <img src={"/icons/pause.svg"} alt="" />
                      <p style={{ marginLeft: "15px" }}>
                        ${item.itemQuantity * item.itemPrice}
                      </p>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            <Box className={"total-price-box"}>
              <Box className={"box-total"}>
                {/* <p className={"box-total-text"}>Produc Price</p>
                <p className={"box-total-number"}>$60</p>
                <img
                  src={"/icons/plus.svg"}
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                />
                <img
                  src={"/icons/pause.svg"}
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                /> */}
                <p className={"box-total-text"}>Total:</p>
                <p className={"box-total-number"}>${order.orderTotal}</p>
              </Box>

              <Box className={"paused-buttons"}>
                <Button
                  sx={{ marginRight: "15px" }}
                  variant={"contained"}
                  color={"secondary"}
                  className={"paused-btn-cancel"}
                >
                  Cancel
                </Button>
                <Button variant={"contained"} className={"paused-btn-payment"}>
                  Payment
                </Button>
              </Box>
            </Box>
            {!pausedOrders ||
              (pausedOrders.length === 0 && (
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                >
                  <img
                    src={"/icons/noimage-list.svg"}
                    alt=""
                    style={{ width: 300, height: 300 }}
                  />
                </Box>
              ))}
          </Box>
        );
      })}
    </TabPanel>
  );
}
