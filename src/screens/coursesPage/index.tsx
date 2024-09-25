import Address from "./Address";
import CourseList from "./CourseList";
import TopMentors from "./TopMentors";
import "../../css/course.css";

// import { Container } from "@mui/material";
export default function CoursesPage() {
  return (
    <div className={"courses-page"}>
      <CourseList />
      <TopMentors />
      <Address />
    </div>
  );
}
