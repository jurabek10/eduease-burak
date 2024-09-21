import React from "react";
import { Box, Container, Stack } from "@mui/material";
export default function Companies() {
  return (
    <div className="companies">
      <Container>
        <Stack className={"companies-wrapper"}>
          <Stack className={"companies-top"}>
            <Box className={"companies-title"}>
              Trusted by over 1,000 companies and millions of learners around
              the world
            </Box>
          </Stack>
          <Stack className={"companies-list"}>
            <Box className={"company"}>
              <img src="icons/citi_logo.svg" alt="" />
            </Box>
            <Box className={"company"}>
              <img src="icons/samsung_logo.svg" alt="" />
            </Box>
            <Box className={"company"}>
              <img src="icons/ericsson_logo.svg" alt="" />
            </Box>
            <Box className={"company"}>
              <img src="icons/procter_gamble_logo.svg" alt="" />
            </Box>
            <Box className={"company"}>
              <img src="icons/volkswagen_logo.svg" alt="" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
