// import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Navbar.css";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillFlagFill } from "react-icons/bs";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
// import { NavLink } from "react-router-dom";
import "./Navbartwo.css"
import icon from "./asicon.png"



const theme = createTheme({
  components: {
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: "white",
          color: "red",
        },
      },
    },
  },
});
export default function Navbartwo() {

  const handleLogin  = () => {
    console.log("i am click")
  };
  return (
    <div className="font">
      <nav className="navbar navbar-expand-lg navcolor">
        <div className="container">
          <div>
            {" "}
           
              <img
                className="navimgclass"
                src= {icon}
                alt="First slide"
              />
          </div>
          <div className="buttons">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse  "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  centering ms-auto mb-2 mb-lg-0">
                <li className="nav-item marginright">
                 
                    Listing
                  
                </li>
                <li className="nav-item marginright">
                  
                    List Properties
                  
                </li>
                <li className="nav-item marginright">
                  
                    Final Deals
                  
                </li>
                <li className="nav-item marginright">
                 
                    How it Works
                 
                </li>
                <li className="nav-item marginright">
                  
                    Find an Agent
                 
                </li>
                <li className="nav-item marginright">
               
                    Pricing
                  
                </li>
                <li className="nav-item marginright">
                  
                    Contact us
                
                </li>
              </ul>

              <div className="heartmargin">
                
                  <ThemeProvider theme={theme}>
                    <Badge badgeContent={1} color="primary">
                      <FavoriteIcon sx={{ color: "red", fontSize: "30px" }} />
                    </Badge>
                  </ThemeProvider>
              
              </div>
              <ul className="navbar-nav mar ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown navborder">
                  <button
                    className="nav-link dropdown-toggle btn-link"
                    // role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BsFillFlagFill /> EN
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item">Urdu</button>
                    </li>
                    <li>
                      <button className="dropdown-item">Arabic</button>
                    </li>
                  </ul>
                </li>
              </ul>
              <button onClick={handleLogin} className="btn m-0 bton">
                  <AiOutlineUser /> Login
                </button>

            

              <div className="major"></div>

              {/*  */}
            </div>
          </div>
        </div>
      </nav>

      <div className="navborders"></div>
    </div>
  );
}