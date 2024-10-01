import React, { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "../css/app.css";
import { RippleBadge } from "./MaterialTheme/styled";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import HomeNavbar from "./components/header/HomeNavbar";
import OtherNavbar from "./components/header/OtherNavbar";
import CoursesPage from "../screens/coursesPage";
import UserPage from "../screens/userPage";
import HelpPage from "../screens/helpPage";
import HomePage from "../screens/homePage";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import PurchasePage from "../screens/purchasePage";
import useBasket from "./hooks/useBasket";

function App() {
  const location = useLocation();
  console.log("location:", location);

  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  /** HANDLERS */

  return (
    <>
      {location.pathname === "/" ? (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      ) : (
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      )}
      <Switch>
        <Route path="/courses">
          <CoursesPage onAdd={onAdd} />
        </Route>
        <Route path="/purchase">
          <PurchasePage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
