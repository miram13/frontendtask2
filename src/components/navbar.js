import React from "react";
import "../styles/navbar.css";
import { Button } from "@mui/material";
import { createBrowserHistory } from 'history';
import MovieIcon from '@mui/icons-material/Movie';
const history = createBrowserHistory();
const btnstyle = { padding: 10, marginLeft: 30,  color: "black" }
const Navbar = ({ setShow,luser,setNotify, logoutHandler,accountHandler }) => {

  return (
    <nav>
      <div className="nav_box">
        <span className="cinema_name" onClick={() => { setShow(true); setNotify(true)  }}>
          IT'S SHOW TIME
        </span>
        <div className="notify"  onClick={() => { setShow(false);  } }>
          {/* <span>
            <MovieIcon />
          </span> */}
          {/* <span>{size}</span> */}

        </div>



        {
          <Button onClick={logoutHandler} style={btnstyle}>
            {"Logout"}
          </Button>}
          
       
      </div>
    </nav>
  );
};

export default Navbar;
