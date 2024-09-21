import React from "react";
import { Container, Stack, Box } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
  { memberNick: "Martin", memberImage: "/img/onlineLearners.jpg" },
  { memberNick: "Justin", memberImage: "/img/onlineLearners.jpg" },
  { memberNick: "Rose", memberImage: "/img/onlineLearners.jpg" },
  { memberNick: "Nusret", memberImage: "/img/onlineLearners.jpg" },
];

export default function ActiveUsers() {
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((ele, index) => {
                  return (
                    <Card key={index} variant="outlined" className={"card"}>
                      <CardOverflow>
                        <AspectRatio ratio={"1"}>
                          <img src={ele.memberImage} alt="" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow variant="soft" className={"member-detail"}>
                        <Typography className={"member-nickname"}>
                          {ele.memberNick}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
