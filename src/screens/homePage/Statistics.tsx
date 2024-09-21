import React from "react";
import { Box, Container, Stack } from "@mui/material";
export default function Statistics() {
  return (
    <div className="statistics">
      <Container>
        <Stack className={"statistics-wrapper"}>
          <Stack className={"statistics-top"}>
            <Box className={"statistics-subtitle"}>The Best Choice</Box>
            <Box className={"statistics-title"}>Useful & Popular Courses</Box>
          </Stack>
          <Stack className={"statistics-list-wrapper"}>
            <ul className="statistics-list">
              <li className="statistic">
                <img
                  className="statistic-img"
                  src="icons/student.svg"
                  alt=""
                  width={44}
                  height={52}
                />
                <p className="statistic-number">2456</p>
                <p className="statistic-txt">Learners Educated</p>
              </li>
              <li className="statistic">
                <img
                  className="statistic-img"
                  src="icons/graduates.svg"
                  alt=""
                  width={44}
                  height={52}
                />
                <p className="statistic-number">3635</p>
                <p className="statistic-txt">Graduates</p>
              </li>
              <li className="statistic">
                <img
                  className="statistic-img"
                  src="icons/course.svg"
                  alt=""
                  width={44}
                  height={52}
                />
                <p className="statistic-number">8764</p>
                <p className="statistic-txt">Courses Published</p>
              </li>
              <li className="statistic">
                <img
                  className="statistic-img"
                  src="icons/global.svg"
                  alt=""
                  width={44}
                  height={52}
                />
                <p className="statistic-number">23144</p>
                <p className="statistic-txt">Global Learners</p>
              </li>
            </ul>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
