import React, { useState, useEffect } from "react";
import Movie from "./movie";
import Navbar from "./navbar";
import Notify from "./notify";
import axios from 'axios';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

const Home = () => {
  const [show, setShow] = useState(true);

  const [notify, setNotify] = useState([]);

  const [luser, setUser] = useState(false);
  const [mounted, setMounted] = useState(false);
  const handleClick = (item) => {
    if (notify.indexOf(item) !== -1) return;
    setNotify([...notify, item]);
  };


  const logoutHandler = (event) => {
    console.log("Logout");
    setShow(true);
    localStorage.removeItem('AuthToken');
    history.push('/login');
    window.location.reload();
  };


  const getNotifyList = () => {
    const authToken = localStorage.getItem('AuthToken');
    console.log(authToken);
    const headers = { Authorization: `${authToken}` };
    axios
      .get('Notify/notify/items', { headers: headers })
      .then((response) => {
        if (response.data !== '') {
          setNotify(response.data);
        }
        else {
          setNotify([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setNotify([]);
      });

  };
  const handleSubmit = (item) => {

    const authToken = localStorage.getItem('AuthToken');

    axios.defaults.headers.common = { Authorization: `${authToken}` };
    let url = `/Notify/notify/${item.id}`;
    let data = [];
    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        if (response.data != '') {

        }
        else {

        }
        window.location.reload();
      })
      .catch((error) => {

        console.log(error);

      });
    window.location.reload();
    console.log(data);
  };

  const handleAddtoNotify = (item) => {
    console.log(item)
    const authToken = localStorage.getItem('AuthToken');

    axios.defaults.headers.common = { Authorization: `${authToken}` };
    let url = `/Notify/notify/${item.id}`;
    let data = [];
    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        if (response.data != '') {

        }
        else {

        }
        // window.location.reload();
      })
      .catch((error) => {

        console.log(error);

      });
    // window.location.reload();
    console.log(data);
  };


  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={notify.length} luser={luser} logoutHandler={logoutHandler} />
      {show ? (
        <Movie handleAddtoNotify={handleAddtoNotify} />
      ) : (
        <Notify notify={notify} setShow={setShow} setNotify={setNotify} handleSubmit={handleSubmit} />
      )}
    </React.Fragment>

  );
};

export default Home;
