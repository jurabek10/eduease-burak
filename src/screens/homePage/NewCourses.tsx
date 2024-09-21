import React from "react";
import { Box, Card, Container, CssVarsProvider, Stack } from "@mui/material";

const list = [
  {
    courseName: "Java",
    imagePath: "/img/onlineLearners.jpg",
    courseMentor: "Martin",
    courseDesc: "Good course",
    courseCategory: "Marketing",
  },
  {
    courseName: "Java",
    imagePath: "/img/onlineLearners.jpg",
    courseMentor: "Martin",
    courseDesc: "Good course",
    courseCategory: "Marketing",
  },
  {
    courseName: "Java",
    imagePath: "/img/onlineLearners.jpg",
    courseMentor: "Martin",
    courseDesc: "Good course",
    courseCategory: "Marketing",
  },
  {
    courseName: "Java",
    imagePath: "/img/onlineLearners.jpg",
    courseMentor: "Martin",
    courseDesc: "Good course",
    courseCategory: "Marketing",
  },
];
export default function NewCourses() {
  return (
    <div className={"popular-courses-frame"}>
      <Container>
        <Stack className={"popular-section"}>
          <Box className={"category-title"}>New Courses</Box>
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
                      <p className="popular-course-mentor">
                        {ele.courseMentor}
                      </p>
                      <p className="popular-course-category">
                        {ele.courseCategory}
                      </p>
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
