import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Footers = styled.div`
  width: 100%;
  min-height: 430px;
  display: flex;
  background: linear-gradient(135deg, #111827 0%, #172033 64%, #0f766e 100%);
  background-size: cover;
`;
export default function Footer() {
  const authMember = null;
  return (
    <Footers>
      <Container>
        <Stack
          flexDirection={"row"}
          sx={{
            py: "64px",
            gap: { xs: "36px", md: "84px" },
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <Stack
            flexDirection={"column"}
            sx={{ width: { xs: "100%", md: "340px" }, maxWidth: "100%" }}
          >
            <Box>
              <img width={"110px"} src={"/icons/eduease-logo.png"} alt="EduEase" />
            </Box>
            <Box className={"foot-desc-txt"}>
              Choose EduEase for world-class education. Join us and learn from
              expert tutors with cutting-edge technology.
            </Box>
            <Box className="sns-context">
              <img src={"/icons/facebook.svg"} alt="Facebook" />
              <img src={"/icons/instagram.svg"} alt="Instagram" />
              <img src={"/icons/youtube.svg"} alt="YouTube" />
            </Box>
          </Stack>
          <Stack
            sx={{
              ml: { xs: 0, md: "auto" },
              gap: { xs: "36px", md: "84px" },
              flexWrap: "wrap",
            }}
            flexDirection={"row"}
          >
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Menu</Box>
                <Box className={"foot-category-link"}>
                  <Link to="/">Home</Link>
                  <Link to="/courses">Courses</Link>
                  {authMember && <Link to="/orders">Orders</Link>}
                  <Link to="/help">Help</Link>
                </Box>
              </Box>
            </Stack>
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Find us</Box>
                <Box
                  flexDirection={"column"}
                  sx={{ mt: "20px" }}
                  className={"foot-category-link"}
                  justifyContent={"space-between"}
                >
                  <Box flexDirection={"row"} className={"find-us"}>
                    <span>L.</span>
                    <div>Seoul, South Korea</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>P.</span>
                    <div>+82 10 9691 9515</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>E.</span>
                    <div>eduease@gmail.com</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>H.</span>
                    <div>Learn 24 hours</div>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{ border: "1px solid #C5C8C9", width: "100%", opacity: "0.2" }}
          sx={{ mt: "0" }}
        ></Stack>
        <Stack className={"copyright-txt"}>
          © Copyright Devex Global, All rights reserved.
        </Stack>
      </Container>
    </Footers>
  );
}
