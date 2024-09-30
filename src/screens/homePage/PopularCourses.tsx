import React from "react";
import { Box, Card, Container, Stack } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrivePopularCourses } from "./selector";
import { Course } from "../../lib/data/types/course";
import { serverApi } from "../../lib/config";

/** REDUX  SELECTOR */
const popularCoursesRetriever = createSelector(
  retrivePopularCourses,
  (popularCourses) => ({ popularCourses })
);

export default function PopularCourses() {
  const { popularCourses } = useSelector(popularCoursesRetriever);

  console.log("popularCourse:", popularCourses);
  return (
    <div className={"popular-courses-frame"}>
      <Container>
        <Stack className={"popular-section"}>
          <Box className={"category-title"}>Popular Courses</Box>
          <Stack className={"cards-frame"}>
            {popularCourses.map((course: Course) => {
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
                      <div className="popular-course-wrapper">
                        <p className="popular-course-mentor">
                          {course.courseMentor}
                        </p>
                        <p className="popular-course-sold">
                          <span className="sold">Sold: </span>
                          {course.courseSold}
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
