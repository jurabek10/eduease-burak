import Address from "./Address";
import CourseList from "./CourseList";
import TopMentors from "./TopMentors";
import "../../css/course.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenCourse";
import { CartItem } from "../../lib/data/types/search";

// import { Container } from "@mui/material";

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export default function CoursesPage(props: ProductsPageProps) {
  const { onAdd } = props;
  const courses = useRouteMatch();
  return (
    <div className={"courses-page"}>
      <Switch>
        <Route path={`${courses.path}/:courseId`}>
          <ChosenProduct onAdd={onAdd} />
        </Route>
        <Route path={`${courses.path}`}>
          <CourseList onAdd={onAdd} />
        </Route>
        <Route>
          <TopMentors />
        </Route>
        <Route>
          <Address />
        </Route>
      </Switch>
    </div>
  );
}
