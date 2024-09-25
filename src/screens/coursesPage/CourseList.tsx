import { Box, Button, Container, CssVarsProvider, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const list = [
  {
    courseName: "Java",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc:
      "Good course, Good course, Good course, Good course,,Good course, Good course",
    coursePrice: "100",
    salesPrice: "50",
    courseCategory: "Marketing",
    courseDuration: "23",
  },
  {
    courseName: "JavaScript dhdhdhhhdd dhdhddhdh ddhd",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc: "Good course",
    coursePrice: "100",
    salesPrice: "50",
    courseCategory: "Marketing",
    courseDuration: "23",
  },
  {
    courseName: "Python",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc: "Good course",
    coursePrice: "100",
    salesPrice: "50",
    courseCategory: "Marketing",
    courseDuration: "23",
  },
  {
    courseName: "NodeJs",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc: "Good course",
    coursePrice: "100",
    salesPrice: "50",
    courseCategory: "Marketing",
    courseDuration: "23",
  },
  {
    courseName: "Java",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc:
      "Good course, Good course, Good course, Good course,,Good course, Good course",
    coursePrice: "100",
    salesPrice: "50",
    courseCategory: "Marketing",
    courseDuration: "23",
  },
  {
    courseName: "Java",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc:
      "Good course, Good course, Good course, Good course,,Good course, Good course",
    coursePrice: "100",
    salesPrice: "50",
    courseCategory: "Marketing",
    courseDuration: "23",
  },
  {
    courseName: "Java",
    imagePath: "/img/onlineLearners.jpg",
    soldNumber: "10",
    courseMentor: "Martin",
    courseDesc:
      "Good course, Good course, Good course, Good course,,Good course, Good course",
    coursePrice: "100",
    salesPrice: "50",
    courseCategory: "Marketing",
    courseDuration: "23",
  },
];

export default function CourseList() {
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
                type="text"
              />
              <Button className="search-button" variant="contained">
                Search
                <SearchIcon />
              </Button>
            </Box>
          </Stack>
          <Stack className="courses-list-category-wrapper">
            <Stack className="course-list-filter">
              <Button
                sx={{ background: "rgb(23, 143, 183)", color: "#ffffff" }}
                variant={"contained"}
                className={"course-list-filter-button"}
              >
                {" "}
                New{" "}
              </Button>
              <Button
                sx={{ background: "rgb(83, 187, 222)", color: "#ffffff" }}
                variant={"contained"}
                className={"course-list-filter-button"}
              >
                {" "}
                Price{" "}
              </Button>
              <Button
                sx={{ background: "rgb(83, 187, 222)", color: "#ffffff" }}
                variant={"contained"}
                className={"course-list-filter-button"}
              >
                {" "}
                Bestseller{" "}
              </Button>
              <Button
                sx={{ background: "rgb(83, 187, 222)", color: "#ffffff" }}
                variant={"contained"}
                className={"course-list-filter-button"}
              >
                {" "}
                Sales{" "}
              </Button>
            </Stack>
            <Stack className="course-list-filter">
              <Button
                sx={{ background: "rgb(83, 187, 222)", color: "#ffffff" }}
                variant={"contained"}
                className={"course-list-filter-button"}
              >
                {" "}
                BUSINESS{" "}
              </Button>
              <Button
                sx={{ background: "rgb(83, 187, 222)", color: "#ffffff" }}
                variant={"contained"}
                className={"course-list-filter-button"}
              >
                {" "}
                FINANCE{" "}
              </Button>
              <Button
                sx={{ background: "rgb(83, 187, 222)", color: "#ffffff" }}
                variant={"contained"}
                className={"course-list-filter-button"}
              >
                {" "}
                IT{" "}
              </Button>
              <Button
                sx={{ background: "rgb(83, 187, 222)", color: "#ffffff" }}
                variant={"contained"}
                className={"course-list-filter-button"}
              >
                {" "}
                MARKETING{" "}
              </Button>
              <Button
                sx={{ background: "rgb(23, 143, 183)", color: "#ffffff" }}
                variant={"contained"}
                className={"course-list-filter-button"}
              >
                {" "}
                MUSIC{" "}
              </Button>
              <Button
                sx={{ background: "rgb(83, 187, 222)", color: "#ffffff" }}
                variant={"contained"}
                className={"course-list-filter-button"}
              >
                {" "}
                OTHER{" "}
              </Button>
            </Stack>
          </Stack>

          <Stack className="courses-list">
            <Stack className={"cards-frame"}>
              {list.map((ele, index) => {
                return (
                  <CssVarsProvider key={index}>
                    <div className="course">
                      <img
                        className="course-img"
                        src={ele.imagePath}
                        alt=""
                        width={300}
                        height={200}
                      />
                      <div className="course-detail-wrapper">
                        <h4 className="course-title">{ele.courseName}</h4>
                        <p className="course-desc">{ele.courseDesc}</p>
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
                              {ele.courseMentor}
                            </span>
                          </p>
                          <p className="course-sold">
                            Sold:
                            <span
                              style={{
                                fontWeight: "bold",
                                marginLeft: "3px",
                                fontSize: "18px",
                              }}
                            >
                              {ele.soldNumber}
                            </span>
                          </p>
                        </div>
                        <div className="course-inside-wrapper">
                          <p className={"course-price"}>
                            $
                            <span
                              className={
                                true
                                  ? "course-ordinary-price"
                                  : "course-ordinary-price-lined"
                              }
                            >
                              {ele.coursePrice}
                            </span>
                            <span
                              className={
                                true ? "saled-price" : "saled-price-hidden"
                              }
                            >
                              ${ele.salesPrice}
                            </span>
                          </p>
                          <p className="course-duration">
                            <span>{ele.courseDuration} hours</span>
                          </p>
                        </div>
                        <p className="course-category">{ele.courseCategory}</p>
                      </div>
                    </div>
                  </CssVarsProvider>
                );
              })}
            </Stack>
          </Stack>
          <Stack className={"pagination-wrapper"}>
            <Pagination
              count={3}
              page={1}
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
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
