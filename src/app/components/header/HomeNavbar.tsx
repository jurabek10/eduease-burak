import { Button, Box, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { useEffect, useState } from "react";
import { CartItem } from "../../../lib/data/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
}
export default function HomeNavbar(props: HomeNavbarProps) {
  const { cartItems } = props;
  const authMember = null;
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<boolean>(true);
  useEffect(() => {
    console.log("componentDidMount");
    setCount(count + 1);
    return () => {
      console.log("componentWillUnmount");
    };
  }, [value]);

  /** HANDLERS */
  const buttonHandler = () => {
    setValue(!value);
  };

  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brand-logo" src="/icons/eduease-logo.png" />
            </NavLink>
          </Box>

          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
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
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>
              How EduEase Changes Lives and Improves Careers
            </Box>
            <Box className={"welcome-txt"}>
              By choosing EdeEase, you choose quality education on a high
              international level. Join our program and get a chance to
              experience the eaching skills of our tutors with the latest
              technology and equipment.
            </Box>
            <Box className={"signup"}>
              <Button
                className={"signup-button"}
                variant={"contained"}
                onClick={buttonHandler}
              >
                SIGN UP
              </Button>
              <Button className={"login-button"} variant={"contained"}>
                LOGIN
              </Button>
              {/* {!authMember ? (
                <Button className={"signup-button"} variant={"contained"}>
                  SIGN UP
                </Button>
              ) : (
                <Button className={"login-button"} variant={"contained"}>
                  LOGIN
                </Button>
              )} */}
            </Box>
          </Stack>
          {/* <Box className={"logo-frame"}>
            <div className={"logo-img"}></div>
          </Box> */}
        </Stack>
      </Container>
    </div>
  );
}
