import React, { useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import Divider from "/../components/divider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Divider from "../../app/components/divider";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setChosenCourse, setCourses, setAcademia } from "./slice";
import { createSelector } from "reselect";
import { Course } from "../../lib/data/types/course";
import {
  retriveChosenCourse,
  retriveCourses,
  retriveAcademia,
} from "./selector";

import { useParams } from "react-router-dom";
import { Member } from "../../lib/data/types/member";
import ProductService from "../../services/Product.Service";
import MemberService from "../../services/Member.Service";
import { serverApi } from "../../lib/config";
import { CourseStatus } from "../../lib/enums/course.enum";
import { CartItem } from "../../lib/data/types/search";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setAcademia: (data: Member) => dispatch(setAcademia(data)),
  setChosenCourse: (data: Course) => dispatch(setChosenCourse(data)),
});
const ChosenCourseRetriever = createSelector(
  retriveChosenCourse,
  (chosenCourse) => ({
    chosenCourse,
  })
);
const AcademiaRetriever = createSelector(retriveAcademia, (academia) => ({
  academia,
}));

interface ChosenProducProps {
  onAdd: (item: CartItem) => void;
}
export default function ChosenProduct(props: ChosenProducProps) {
  const { onAdd } = props;
  const { courseId } = useParams<{ courseId: string }>();
  const { setAcademia, setChosenCourse } = actionDispatch(useDispatch());
  const { chosenCourse } = useSelector(ChosenCourseRetriever);
  const { academia } = useSelector(AcademiaRetriever);
  useEffect(() => {
    const course = new ProductService();
    course
      .getCourse(courseId)
      .then((data) => setChosenCourse(data))
      .catch((err) => console.log(err));

    const member = new MemberService();
    member
      .getAcademia()
      .then((data) => setAcademia(data as unknown as Member))
      .catch((err) => console.log());
  }, []);
  if (!chosenCourse) return null;

  return (
    <div className={"chosen-product"}>
      <Box className={"title"}>Course Detail</Box>
      <Container className={"product-container"}>
        <Stack className={"chosen-product-slider"}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-area"
          >
            {chosenCourse?.courseImages.map((ele: string, index: number) => {
              const imagePath = `${serverApi}/${ele}`;
              return (
                <SwiperSlide key={index}>
                  <img className="slider-image" src={imagePath} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <Stack className={"chosen-product-info"}>
          <Box className={"info-box"}>
            <strong className={"product-name"}>
              {chosenCourse.courseName}
            </strong>

            <Box className={"rating-box"}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <div className="course-sold-number">
                ({chosenCourse.courseView} students interested)
              </div>
              <div className={"evaluation-box"}>
                <span className={"course-mentor"}>
                  by {chosenCourse.courseMentor}
                </span>
              </div>
            </Box>
            <p className={"product-desc"}>
              {chosenCourse?.courseDesc
                ? chosenCourse?.courseDesc
                : "No description"}{" "}
            </p>
            <p className={"course-duration"}>
              It takes your <span>{chosenCourse.courseDuration} hours</span> to
              complete this course{" "}
            </p>
            <Divider height="1" width="100%" bg="#000000" />
            <div className={"product-price"}>
              <span>Price:</span>
              <span
                className={
                  chosenCourse.courseStatus !== CourseStatus.SALED
                    ? "course-price-ordinary"
                    : "course-price-ordinary-lined"
                }
              >
                ${chosenCourse.coursePrice}
              </span>
              <span
                className={
                  chosenCourse.courseStatus === CourseStatus.SALED
                    ? "course-price-sale"
                    : "course-price-sale-hidden"
                }
              >
                ${chosenCourse.courseSaledPrice}
              </span>
            </div>
            <div className={"button-box"}>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onAdd({
                    _id: chosenCourse._id,
                    quantity: 1,
                    name: chosenCourse.courseName,
                    price: chosenCourse.coursePrice,
                    saledPrice: chosenCourse.courseSaledPrice,
                    status: chosenCourse.courseStatus,
                    image: chosenCourse.courseImages[0],
                  });
                }}
                variant="contained"
              >
                Add To Basket
              </Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
