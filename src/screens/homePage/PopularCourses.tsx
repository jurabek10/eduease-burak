import React from "react";
import { Box, Card, Container, CssVarsProvider, Stack } from "@mui/material";

const list = [
  {
    courseName: "Java",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc: "Good course",
  },
  {
    courseName: "JavaScript",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc: "Good course",
  },
  {
    courseName: "Python",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc: "Good course",
  },
  {
    courseName: "NodeJs",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc: "Good course",
  },
];
export default function PopularCourses() {
  return (
    <div className={"popular-courses-frame"}>
      <Container>
        <Stack className={"popular-section"}>
          <Box className={"category-title"}>Popular Courses</Box>
          <Stack className={"cards-frame"}>
            {list.map((ele, index) => {
              return (
                <CssVarsProvider key={index}>
                  <div className="popular-course">
                    <img
                      className="popular-course-img"
                      src={ele.imagePath}
                      alt=""
                      width={295}
                      height={200}
                    />
                    <div className="popular-course-detail-wrapper">
                      <h4 className="popular-course-title">{ele.courseName}</h4>
                      <p className="popular-course-desc">{ele.courseDesc}</p>
                      <div className="popular-course-wrapper">
                        <p className="popular-course-mentor">
                          {ele.courseMentor}
                        </p>
                        <p className="popular-course-sold">
                          <span className="sold">Sold: </span>
                          {ele.soldNumber}
                        </p>
                      </div>
                      <p className="popular-course-bestseller">Bestseller</p>
                    </div>
                  </div>
                </CssVarsProvider>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
