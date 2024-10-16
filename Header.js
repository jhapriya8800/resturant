import React,{useState} from 'react'
// import NoMealsIcon from "@mui/icons-material/NoMeals";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { Link , NavLink } from "react-router-dom";
// import "../styles/HeaderStyle.css";
// import "../../HeaderStyle.css";
import "../../styles/HeaderStyle.css"

import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/logo.svg"

const Header = () => {
  const [mobleOpen, setMobileOpen] = useState(false);
  // handle menu click
  const HandlerDrawerToggle = () => {
    setMobileOpen(!mobleOpen);
  };

  // menu drawer
  const drawer = (
    <Box onClick={HandlerDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 ,my:2}}
      >
        <img src={logo} alt="logo"  height={"70"} width="200"/>
      </Typography>
      <Divider/>
        <ul className="mobile-navigation">
          <li>
            <NavLink  to={"/"} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}

              onClick={HandlerDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {/* <NoMealsIcon /> My Resturant */}
              <img src={logo} alt="logo"  height={"70"} width="250"/>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navgation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
        <Drawer variant="temporary" open={mobleOpen} onClose={HandlerDrawerToggle} sx={{display:{sx:'block',sm:'none'},"& .MuiDrawer-paper":{
            boxSizing:"border-box",
            width:"240px"
        }}}>
            {drawer}
        </Drawer>

        </Box>
        <Box> <Toolbar/></Box>
       
      </Box>
    </>
  )
}

export default Header
