// import { Box, Button, Container, Stack } from "@mui/material";
// import { NavLink } from "react-router-dom";

// export function HomeNavbar() {
//   const authMember = null;
//   return (
//     <div className="home-navbar">
//       <div className="navbar-wrapper">
//         <Container sx={{ mt: "55px" }}>
//           <Stack
//             sx={{ height: "50px", paddingBottom: "40px" }}
//             flexDirection={"row"}
//             justifyContent={"space-between"}
//             alignItems={"center"}
//           >
//             <Box>
//               <NavLink to="/">
//                 <img
//                   src="/icons/eduease-logo.png"
//                   style={{ width: "125px", height: "30px", color: "green" }}
//                 />
//               </NavLink>
//             </Box>
//             <Stack
//               flexDirection={"row"}
//               justifyContent={"space-between"}
//               minWidth={"700px"}
//               alignItems={"center"}
//             >
//               <Box className={"hover-line"}>
//                 <NavLink to="/" activeClassName={"underline"}>
//                   Home
//                 </NavLink>
//               </Box>
//               <Box className={"hover-line"}>
//                 <NavLink to="/products" activeClassName={"underline"}>
//                   Products
//                 </NavLink>
//               </Box>
//               {authMember ? (
//                 <Box className={"hover-line"}>
//                   <NavLink to="/orders" activeClassName={"underline"}>
//                     Orders
//                   </NavLink>
//                 </Box>
//               ) : null}
//               {authMember ? (
//                 <Box className={"hover-line"}>
//                   <NavLink to="/member-page" activeClassName={"underline"}>
//                     My Page
//                   </NavLink>
//                 </Box>
//               ) : null}
//               <Box className={"hover-line"}>
//                 <NavLink to="/help" activeClassName={"underline"}>
//                   Help
//                 </NavLink>
//               </Box>
//               {/** BASKET */}
//               {!authMember ? (
//                 <Box>
//                   <Button
//                     variant="contained"
//                     style={{ background: "#3776CC", color: "#f8f8ff" }}
//                   >
//                     Login
//                   </Button>
//                 </Box>
//               ) : (
//                 <img />
//               )}
//             </Stack>
//           </Stack>
//           <Stack className={"header-frame"}>
//             <Stack className={"detail"}>
//               <Box className={"head-main-txt"}>
//                 World's Most Delicious Cousine
//               </Box>
//               <Box className={"welcome-txt"}>The Choice, not just a choice</Box>
//               <Box className={"service-txt"}>24 hours service</Box>
//               <Box className={"signup"}>
//                 {!authMember ? (
//                   <Button className={"signup-button"} variant={"contained"}>
//                     SIGN UP
//                   </Button>
//                 ) : null}
//               </Box>
//             </Stack>
//             <Stack>
//               <Box>
//                 <img
//                   width={500}
//                   height={300}
//                   className="home-navber-img"
//                   src="img/onlineLearners.jpg"
//                   alt=""
//                 />
//               </Box>
//             </Stack>
//           </Stack>
//         </Container>
//       </div>
//       <div className="home-navbar-cont">
//         <Container></Container>
//       </div>
//     </div>
//   );
// }
import { Button, Box, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function HomeNavbar() {
  const authMember = true;
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
            <Basket />

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
            {/* <Box className={"service-txt"}>24 hours service</Box> */}
            <Box className={"signup"}>
              <Button className={"signup-button"} variant={"contained"}>
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
