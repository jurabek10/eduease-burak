import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "../css/app.css";
import { RippleBadge } from "./MaterialTheme/styled";
import { Link, Route, Switch } from "react-router-dom";
import { ProductsPage } from "../screens/productsPage";
import { OrdersPage } from "../screens/orderPage";
import { UserPage } from "../screens/userPage";
import { HelpPage } from "../screens/helpPage";
import { HomePage } from "../screens/homePage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page">UserPage</Link>
          </li>
          <li>
            <Link to="/help">HelpPage</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>

        <Route path="/orders">
          <OrdersPage />
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
    </div>
  );
}

export default App;
