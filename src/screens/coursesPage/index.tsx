import Address from "./Address";
import CourseList from "./CourseList";
import TopMentors from "./TopMentors";
import "../../css/course.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenCourse";

// import { Container } from "@mui/material";
export default function CoursesPage() {
  const courses = useRouteMatch();
  return (
    <div className={"courses-page"}>
      <Switch>
        <Route path={`${courses.path}/:courseId`}>
          <ChosenProduct />
        </Route>
        <Route path={`${courses.path}`}>
          <CourseList />
        </Route>
        <Route path={`${courses.path}`}>
          <TopMentors />
        </Route>
        <Route path={`${courses.path}`}>
          <TopMentors />
        </Route>
      </Switch>
    </div>
  );
}
