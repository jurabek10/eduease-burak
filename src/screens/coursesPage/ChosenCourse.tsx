import React from "react";
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
export default function ChosenProduct() {
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
            {["/img/js.jpg", "/img/python.webp"].map(
              (ele: string, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <img
                      width={600}
                      height={600}
                      className="slider-image"
                      src={ele}
                    />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </Stack>
        <Stack className={"chosen-product-info"}>
          <Box className={"info-box"}>
            <strong className={"product-name"}>Kebab</strong>

            <Box className={"rating-box"}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <div className="course-sold-number">(737363 students)</div>
              <div className={"evaluation-box"}>
                <span className={"course-mentor"}>by Burak</span>
              </div>
            </Box>
            <p className={"product-desc"}>Our best product </p>
            <p className={"course-duration"}>
              It takes your <span>123 hours</span> to complete this course{" "}
            </p>
            <Divider height="1" width="100%" bg="#000000" />
            <div className={"product-price"}>
              <span>Price:</span>
              <span
                className={
                  false
                    ? "course-price-ordinary"
                    : "course-price-ordinary-lined"
                }
              >
                $12
              </span>
              <span
                className={
                  true ? "course-price-sale" : "course-price-sale-hidden"
                }
              >
                $12
              </span>
            </div>
            <div className={"button-box"}>
              <Button variant="contained">Add To Basket</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
