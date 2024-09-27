import React from "react";
import { Box } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

export default function FinishedOrders() {
  return (
    <TabPanel className={"table-panel"} value={"3"}>
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
                      <p>$9</p>
                      <img
                        style={{ marginLeft: "5px", marginRight: "5px" }}
                        src={"/icons/close.svg"}
                        alt=""
                      />
                      <p>2</p>
                      <img src={"/icons/pause.svg"} alt="" />
                      <p style={{ marginLeft: "15px" }}>$24</p>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box className={"total-price-box"}>
              <Box sx={{ textAlign: "center" }} className={"box-total"}>
                <p className={"box-total-text"}>Total</p>
                <p className={"box-total-number"}>$65</p>
              </Box>
            </Box>
          </Box>
        );
      })}
    </TabPanel>
  );
}
