import {
  Button,
  Box,
  Container,
  Stack,
  Menu,
  MenuItem,
  ListItemIcon,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { useState } from "react";
import { CartItem } from "../../../lib/data/types/search";
import { Logout } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";

interface OtherNavberProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  handleLogutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLoogoutRequest: () => void;
}
export default function OtherNavbar(props: OtherNavberProps) {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setSignupOpen,
    setLoginOpen,
    handleLogutClick,
    anchorEl,
    handleCloseLogout,
    handleLoogoutRequest,
  } = props;
  const { authMember } = useGlobals();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeDrawer = () => setMobileOpen(false);

  const navItems: { label: string; to: string }[] = [
    { label: "Home", to: "/" },
    { label: "Courses", to: "/courses" },
    ...(authMember ? [{ label: "Purchase", to: "/purchase" }] : []),
    ...(authMember ? [{ label: "My Page", to: "/member-page" }] : []),
    { label: "Help", to: "/help" },
  ];

  return (
    <div className="other-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box className="brand">
            <NavLink to="/">
              <img className="brand-logo" src="/icons/eduease-logo.png" />
            </NavLink>
          </Box>

          <Stack className="links desktop-links">
            {navItems.map((item) => (
              <Box className={"hover-line"} key={item.to}>
                <NavLink to={item.to} exact={item.to === "/"} activeClassName={"underline"}>
                  {item.label}
                </NavLink>
              </Box>
            ))}
          </Stack>

          <Stack className="actions">
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />

            {!authMember ? (
              <Box className="desktop-only">
                <Button
                  onClick={() => setLoginOpen(true)}
                  className="login-button"
                  variant="contained"
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={
                  authMember?.memberImage
                    ? `${serverApi}/${authMember?.memberImage}`
                    : "/icons/default-user.svg"
                }
                aria-haspopup={"true"}
                onClick={handleLogutClick}
              />
            )}

            <IconButton
              className="burger-button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClose={handleCloseLogout}
              onClick={handleCloseLogout}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleLoogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={closeDrawer}
          PaperProps={{ className: "mobile-drawer-paper" }}
        >
          <Box className="mobile-drawer">
            <Stack className="drawer-head">
              <NavLink to="/" onClick={closeDrawer} className="drawer-brand">
                EduEase
              </NavLink>
              <IconButton onClick={closeDrawer} aria-label="Close menu">
                <CloseIcon />
              </IconButton>
            </Stack>
            <Divider />
            <List className="drawer-list">
              {navItems.map((item) => (
                <ListItem key={item.to} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={item.to}
                    exact={item.to === "/"}
                    activeClassName="drawer-active"
                    onClick={closeDrawer}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <Box className="drawer-footer">
              {!authMember ? (
                <>
                  <Button
                    fullWidth
                    variant="contained"
                    className="drawer-signup"
                    onClick={() => {
                      closeDrawer();
                      setSignupOpen(true);
                    }}
                  >
                    Sign up
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    className="drawer-login"
                    onClick={() => {
                      closeDrawer();
                      setLoginOpen(true);
                    }}
                  >
                    Login
                  </Button>
                </>
              ) : (
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Logout />}
                  onClick={() => {
                    closeDrawer();
                    handleLoogoutRequest();
                  }}
                >
                  Logout
                </Button>
              )}
            </Box>
          </Box>
        </Drawer>
      </Container>
    </div>
  );
}
