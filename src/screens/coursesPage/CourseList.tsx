import { Box, Button, Container, Stack } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setCourses } from "./slice";
import { createSelector } from "reselect";
import { retriveCourses } from "./selector";
import { Course, CourseInquery } from "../../lib/data/types/course";
import { ChangeEvent, useEffect, useState } from "react";
import ProductService from "../../services/Product.Service";
import { serverApi } from "../../lib/config";
import { useHistory } from "react-router-dom";
import { CourseCategory, CourseStatus } from "../../lib/enums/course.enum";
import { CartItem } from "../../lib/data/types/search";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setCourses: (data: Course[]) => dispatch(setCourses(data)),
});
const CoursesRetriever = createSelector(retriveCourses, (courses) => ({
  courses,
}));

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}

export default function CourseList(props: ProductsProps) {
  const { onAdd } = props;
  const { setCourses } = actionDispatch(useDispatch());
  const { courses } = useSelector(CoursesRetriever);
  const [courseSearch, setCourseSearch] = useState<CourseInquery>({
    page: 1,
    limit: 8,
    order: "createdAt",
    // productCollection = ProductCollection.DISH
    search: "",
  });
  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product
      .getCourses(courseSearch)
      .then((data) => setCourses(data as unknown as Course[]))
      .catch((err) => console.log(err));
  }, [courseSearch]);

  useEffect(() => {
    if (searchText === "") {
      courseSearch.search = "";
      setCourseSearch({ ...courseSearch });
    }
  }, [searchText]);

  /** HANDLERS */
  const searchCategoryHandler = (category: CourseCategory | any) => {
    courseSearch.page = 1;
    courseSearch.courseCategory = category;
    setCourseSearch({ ...courseSearch });
  };

  // const searchStatusHandler = (status: CourseStatus) => {
  //   courseSearch.page = 1;
  //   courseSearch.courseStatus = status;
  //   setCourseSearch({ ...courseSearch });
  // };

  const searchOrderHandler = (order: string) => {
    courseSearch.page = 1;
    courseSearch.order = order;
    // courseSearch.courseStatus = status;
    setCourseSearch({ ...courseSearch });
  };
  const searchCourseHandler = () => {
    courseSearch.search = searchText;
    setCourseSearch({ ...courseSearch });
  };
  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    courseSearch.page = value;
    setCourseSearch({ ...courseSearch });
  };
  const chooseCourseHandler = (id: string) => {
    history.push(`/courses/${id}`);
  };

  return (
    <div className={"courses-list-frame"}>
      <Container>
        <Stack className="courses-list-wrapper">
          <Stack className="courses-list-top">
            <Box className={"courses-list-title-wrapper"}>
              <h1 className="courses-list-title">Courses List</h1>
            </Box>
            <Box className={"course-list-search-wrapper"}>
              <input
                className="search-input"
                placeholder="What are you looking?"
                type="search"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchCourseHandler();
                }}
              />
              <Button
                className={"search-button"}
                variant="contained"
                onClick={searchCourseHandler}
              >
                Search
                <SearchIcon />
              </Button>
            </Box>
          </Stack>
          <Stack className="courses-list-category-wrapper">
            <Stack className="course-list-filter">
              <Button
                sx={{
                  background:
                    courseSearch.order === "createdAt"
                      ? "rgb(6, 96, 126)"
                      : "rgb(83, 187, 222)",
                  color: "#ffffff",
                }}
                variant={"contained"}
                className={"course-list-filter-button"}
                onClick={() => searchOrderHandler("createdAt")}
              >
                {" "}
                New{" "}
              </Button>
              <Button
                sx={{
                  background:
                    courseSearch.order === "coursePrice"
                      ? "rgb(6, 96, 126)"
                      : "rgb(83, 187, 222)",
                  color: "#ffffff",
                }}
                variant={"contained"}
                className={"course-list-filter-button"}
                onClick={() => searchOrderHandler("coursePrice")}
              >
                {" "}
                Price{" "}
              </Button>
              <Button
                sx={{
                  background:
                    courseSearch.order === "courseView"
                      ? "rgb(6, 96, 126)"
                      : "rgb(83, 187, 222)",
                  color: "#ffffff",
                }}
                variant={"contained"}
                className={"course-list-filter-button"}
                onClick={() => searchOrderHandler("courseView")}
              >
                {" "}
                Most Interested{" "}
              </Button>
              {/* <Button
                sx={{
                  background:
                    courseSearch.courseStatus === CourseStatus.SALED
                      ? "rgb(6, 96, 126)"
                      : "rgb(83, 187, 222)",
                  color: "#ffffff",
                }}
                variant={"contained"}
                className={"course-list-filter-button"}
                onClick={() => searchOrderHandler("")}
              >
                {" "}
                Sales{" "}
              </Button> */}
            </Stack>
            <Stack className="course-list-filter">
              <Button
                sx={{
                  background:
                    courseSearch.courseCategory === CourseCategory.BUSINESS
                      ? "rgb(6, 96, 126)"
                      : "rgb(83, 187, 222)",
                  color: "#ffffff",
                }}
                variant={"contained"}
                className={"course-list-filter-button"}
                onClick={() => searchCategoryHandler(CourseCategory.BUSINESS)}
              >
                {" "}
                BUSINESS{" "}
              </Button>
              <Button
                sx={{
                  background:
                    courseSearch.courseCategory === CourseCategory.FINANCE
                      ? "rgb(6, 96, 126)"
                      : "rgb(83, 187, 222)",
                  color: "#ffffff",
                }}
                variant={"contained"}
                className={"course-list-filter-button"}
                onClick={() => searchCategoryHandler(CourseCategory.FINANCE)}
              >
                {" "}
                FINANCE{" "}
              </Button>
              <Button
                sx={{
                  background:
                    courseSearch.courseCategory === CourseCategory.IT
                      ? "rgb(6, 96, 126)"
                      : "rgb(83, 187, 222)",
                  color: "#ffffff",
                }}
                variant={"contained"}
                className={"course-list-filter-button"}
                onClick={() => searchCategoryHandler(CourseCategory.IT)}
              >
                {" "}
                IT{" "}
              </Button>
              <Button
                sx={{
                  background:
                    courseSearch.courseCategory === CourseCategory.MARKETING
                      ? "rgb(6, 96, 126)"
                      : "rgb(83, 187, 222)",
                  color: "#ffffff",
                }}
                variant={"contained"}
                className={"course-list-filter-button"}
                onClick={() => searchCategoryHandler(CourseCategory.MARKETING)}
              >
                {" "}
                MARKETING{" "}
              </Button>
              <Button
                sx={{
                  background:
                    courseSearch.courseCategory === CourseCategory.MUSIC
                      ? "rgb(6, 96, 126)"
                      : "rgb(83, 187, 222)",
                  color: "#ffffff",
                }}
                variant={"contained"}
                className={"course-list-filter-button"}
                onClick={() => searchCategoryHandler(CourseCategory.MUSIC)}
              >
                {" "}
                MUSIC{" "}
              </Button>
              <Button
                sx={{
                  background:
                    courseSearch.courseCategory === CourseCategory.OTHER
                      ? "rgb(6, 96, 126)"
                      : "rgb(83, 187, 222)",
                  color: "#ffffff",
                }}
                variant={"contained"}
                className={"course-list-filter-button"}
                onClick={() => searchCategoryHandler(CourseCategory.OTHER)}
              >
                {" "}
                OTHER{" "}
              </Button>
            </Stack>
          </Stack>

          <Stack className="courses-list">
            <Stack className={"cards-frame"}>
              {courses.map((course: Course) => {
                const imagePath = `${serverApi}/${course.courseImages[0]}`;
                return (
                  <CssVarsProvider key={course._id}>
                    <div className="course">
                      <img
                        className="course-img"
                        src={imagePath}
                        alt=""
                        width={300}
                        height={200}
                      />
                      <div className="course-detail-wrapper">
                        <h4 className="course-title">{course.courseName}</h4>
                        <p className="course-desc">{course.courseDesc}</p>
                        <div className="course-inside-wrapper">
                          <p className="course-mentor">
                            Mentor:
                            <span
                              style={{
                                fontWeight: "bold",
                                marginLeft: "3px",
                                fontSize: "18px",
                              }}
                            >
                              {course.courseMentor}
                            </span>
                          </p>
                          <p className="course-sold">
                            Interested:
                            <span
                              style={{
                                fontWeight: "bold",
                                marginLeft: "3px",
                                fontSize: "18px",
                              }}
                            >
                              {course.courseView}
                            </span>
                          </p>
                        </div>
                        <div className="course-inside-wrapper">
                          <p className={"course-price"}>
                            $
                            <span
                              className={
                                course.courseStatus !== CourseStatus.SALED
                                  ? "course-ordinary-price"
                                  : "course-ordinary-price-lined"
                              }
                            >
                              {course.coursePrice}
                            </span>
                            <span
                              className={
                                course.courseStatus === CourseStatus.SALED
                                  ? "saled-price"
                                  : "saled-price-hidden"
                              }
                            >
                              ${course.courseSaledPrice}
                            </span>
                          </p>
                          <p className="course-duration">
                            <span>{course.courseDuration} hours</span>
                          </p>
                        </div>
                        <p className="course-category">
                          {course.courseCategory}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: "20px",
                          }}
                          className="buttons-wrapper"
                        >
                          <Button
                            sx={{
                              background: "blue",
                            }}
                            variant="contained"
                            onClick={() => chooseCourseHandler(course._id)}
                          >
                            See details
                          </Button>
                          <Button
                            sx={{
                              background: "red",
                            }}
                            variant="contained"
                            className={"shop-btn"}
                            onClick={(e) => {
                              console.log("BUTTON PASSED");
                              e.stopPropagation();
                              onAdd({
                                _id: course._id,
                                quantity: 1,
                                name: course.courseName,
                                price: course.coursePrice,
                                saledPrice: course.courseSaledPrice,
                                status: course.courseStatus,
                                image: course.courseImages[0],
                              });
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CssVarsProvider>
                );
              })}
            </Stack>
          </Stack>
          <Stack className={"pagination-wrapper"}>
            <Pagination
              count={
                courses.length !== 0 ? courseSearch.page + 1 : courseSearch.page
              }
              page={courseSearch.page}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>
      <div className={"top-mentors"}>
        <Container>
          <Box className="top-mentors-title">Top Mentors</Box>
          <Stack className="top-mentors-wrapper">
            <ul className="top-mentors-list">
              <li className="mentor">
                <img
                  className="mentor-img"
                  src="/img/martin.jpg"
                  alt=""
                  width={300}
                  height={225}
                />
                <h3 className="mentor-name">Martin</h3>
              </li>
              <li className="mentor">
                <img
                  className="mentor-img"
                  src="/img/jonas.jpeg"
                  alt=""
                  width={300}
                />
                <h3 className="mentor-name">Jonas Schmedtmann</h3>
              </li>
              <li className="mentor">
                <img
                  className="mentor-img"
                  src="/img/img2.jpeg"
                  alt=""
                  width={300}
                />
                <h3 className="mentor-name">JAngela Yu</h3>
              </li>
              <li className="mentor">
                <img
                  className="mentor-img"
                  src="/img/img1.jpeg"
                  alt=""
                  width={300}
                />
                <h3 className="mentor-name">Maximilian Schwarzmüller</h3>
              </li>
            </ul>
          </Stack>
        </Container>
      </div>
      <div className="address">
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our Office address</Box>
            <iframe
              style={{ marginTop: "60x" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202404.9141680945!2d126.80933040615444!3d37.56503371458978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeoul!5e0!3m2!1sen!2skr!4v1727288105029!5m2!1sen!2skr"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
