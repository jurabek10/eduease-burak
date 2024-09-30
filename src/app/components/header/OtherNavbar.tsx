import { Button, Box, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/data/types/search";

interface OtherNavberProps {
  cartItems: CartItem[];
}
export default function OtherNavbar(props: OtherNavberProps) {
  const { cartItems } = props;
  const authMember = true;
  return (
    <div className="other-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brand-logo" src="/icons/eduease-logo.png" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/">Home</NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/courses" activeClassName={"underline"}>
                Courses
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/purchase" activeClassName={"underline"}>
                  Purchase
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            {/** BASKET */}
            <Basket cartItems={cartItems} />
            {!authMember ? (
              <Box>
                <Button className="login-button" variant="contained">
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
