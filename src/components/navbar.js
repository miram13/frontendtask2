import React from "react";
import "../styles/navbar.css";
import { Button } from "@mui/material";
import Link from '@material-ui/core/Link';
import { createBrowserHistory } from 'history';
import MovieIcon from '@mui/icons-material/Movie';
const history = createBrowserHistory();
const btnstyle = { padding: 10, marginLeft: 30,  color: "black" }
const Navbar = ({ setShow,luser,setNotify, logoutHandler }) => {

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



        {luser ?
          <Button onClick={logoutHandler} style={btnstyle}>
            {"Logout"}
          </Button> : <Link href="login" variant="body2">
            {"Login"}
          </Link>}
      </div>
    </nav>
  );
};

export default Navbar;
