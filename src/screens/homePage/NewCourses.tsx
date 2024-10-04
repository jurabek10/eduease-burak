import React from "react";
import { Box, Card, Container, Stack } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retriveNewCourses, retrivePopularCourses } from "./selector";
import { Course } from "../../lib/data/types/course";
import { serverApi } from "../../lib/config";

// REDUX SELECTOR
const newCoursesRetriever = createSelector(retriveNewCourses, (newCourses) => ({
  newCourses,
}));

export default function NewCourses() {
  const { newCourses } = useSelector(newCoursesRetriever);
  return (
    <div className={"popular-courses-frame"}>
      <Container>
        <Stack className={"popular-section"}>
          <Box className={"category-title"}>New Courses</Box>
          <Stack className={"cards-frame"}>
            {newCourses.map((course: Course) => {
              const imagePath = `${serverApi}/${course.courseImages[0]}`;
              return (
                <CssVarsProvider key={course._id}>
                  <div className="popular-course">
                    <img
                      className="popular-course-img"
                      src={imagePath}
                      alt=""
                      width={295}
                      height={200}
                    />
                    <div className="popular-course-detail-wrapper">
                      <h4 className="popular-course-title">
                        {course.courseName}
                      </h4>
                      <p className="popular-course-desc">{course.courseDesc}</p>
                      <p
                        className="popular-course-mentor"
                        style={{ marginTop: "10px" }}
                      >
                        <span
                          style={{
                            fontStyle: "italic",
                            fontWeight: "400",
                            marginRight: "5px",
                          }}
                        >
                          by
                        </span>
                        {course.courseMentor}
                      </p>
                      <p className="popular-course-category">
                        {course.courseCategory}
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
