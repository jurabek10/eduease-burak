import { Container } from "@mui/material";
import Features from "./Features";
import PopularCourses from "./PopularCourses";
import Companies from "./Companies";
import NewCourses from "./NewCourses";
import Statistics from "./Statistics";
import ActiveUsers from "./ActiveUsers";
import FreeCourses from "./FreeCourses";
import { useEffect } from "react";
import "../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewCourses, setPopularCourses, setTopUsers } from "./slice";
import { Course } from "../../lib/data/types/course";
import dotenv from "dotenv";
import ProductService from "../../services/Product.Service";
import { CourseCategory } from "../../lib/enums/course.enum";
import { Member } from "../../lib/data/types/member";
import MemberService from "../../services/Member.Service";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularCourses: (data: Course[]) => dispatch(setPopularCourses(data)),
  setNewCourses: (data: Course[]) => dispatch(setNewCourses(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

export default function HomePage() {
  const { setPopularCourses, setNewCourses, setTopUsers } = actionDispatch(
    useDispatch()
  );

  // Select: Store => Data
  // console.log(process.env.REACT_APP_API_URL);
  useEffect(() => {
    const product = new ProductService();
    const member = new MemberService();
    // console.log("populatDishes:", popularDishes);
    product
      .getCourses({
        page: 1,
        limit: 4,
        order: "coursePrice",
        // courseCategory: CourseCategory.BUSINESS,
      })
      .then((data) => {
        console.log("data:", data);
        setPopularCourses(data as unknown as Course[]);
      })
      .catch((err) => console.log(err));

    product
      .getCourses({
        page: 1,
        limit: 4,
        order: "createdAt",
        // productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        // console.log("data:", data);
        setNewCourses(data as unknown as Course[]);
      })
      .catch((err) => console.log(err));

    member
      .getTopUsers()
      .then((data) => setTopUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"homepage"}>
      <Features />
      <PopularCourses />
      <NewCourses />
      <Statistics />
      <ActiveUsers />
      <Companies />
      <FreeCourses />
    </div>
  );
}
