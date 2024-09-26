import React from "react";
import { Container, Stack, Box, Button } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

export default function PausedOrders() {
  return (
    <TabPanel className={"table-panel"} value={"1"}>
      {[1, 2].map((ele, index) => {
        return (
          <Box key={index} className={"order-main-box"}>
            <Box className={"order-box-scroll"}>
              {[1, 2, 3].map((ele2, index2) => {
                return (
                  <Box key={index2} className={"orders-name-price"}>
                    <img
                      src={"/img/python.webp"}
                      className={"order-dish-img"}
                    />
                    <p className={"title-dish"}>Lavash</p>
                    <Box className={"price-box"}>
                      <p>$3</p>
                      <img
                        style={{ marginLeft: "5px", marginRight: "5px" }}
                        src={"/icons/close.svg"}
                        alt=""
                      />
                      <p>3</p>
                      <img src={"/icons/pause.svg"} alt="" />
                      <p style={{ marginLeft: "15px" }}>$46</p>
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
                <p className={"box-total-number"}>$65</p>
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
          </Box>
        );
      })}
    </TabPanel>
  );
}
