import { Container } from "@mui/material";
import Features from "./Features";
import PopularCourses from "./PopularCourses";
import Companies from "./Companies";
import NewCourses from "./NewCourses";
import Statistics from "./Statistics";
import ActiveUsers from "./ActiveUsers";
import FreeCourses from "./FreeCourses";
import "../../css/home.css";
export default function HomePage() {
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
