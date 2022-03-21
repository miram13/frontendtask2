import React, { useState, useEffect } from "react";
import Movie from "./movie";
import Navbar from "./navbar";
import Notify from "./notify";
import axios from 'axios';
import { createBrowserHistory } from 'history';
import SeatSelection from "./SeatSelection";


const history = createBrowserHistory();

const Home = () => {
  const authToken = localStorage.getItem('AuthToken');
  const [show, setShow] = useState(true);
  const [seatShow, setSeatShow] = useState(false);
  const [notify, setNotify] = useState([]);

  const [luser, setUser] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allSeats,setAllSeats] = useState([]);
  const [selectedSeats,setSelectedSeats] = useState([]);
  const [selectedMovie,setSelectedMovie] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [isBookingComplete, setBookingComplete] = useState(false);
  
  const fetchAvailabilities = (movie) =>{

  }; 
  
  const bookSelectedSeats = () =>{
    console.log("Booking");
    var movie_id = selectedMovie.id;
    console.log(selectedSeats);
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .post("/ticketbooking/book/"+movie_id, selectedSeats)
      .then((response) => {
        console.log(response.data);
       
          setSeatShow(false);
        setSelectedMovie('');
        setSelectedSeats([]);
        window.location.reload();
       
      })
      .catch((error) => {

        console.log(error);

        
        
      });

  };
  const lockSelectedSeats = (movie) =>{

  };
  const releaseSelectedSeats = (movie) =>{

  };
  

  const handleSeatSelection = (seatNumber) => {
    if (selectedSeats.indexOf(seatNumber) !== -1) return;
    setSelectedSeats([...selectedSeats, seatNumber]);
    var selseats = selectedSeats.length + 1;
    setTotalCost(selectedMovie.price * selseats);

  };
  const handleClick = (item) => {
    if (notify.indexOf(item) !== -1) return;
    setNotify([...notify, item]);
  };

  const handleTotalCost = (selectedSeats) => {
    console.log("TOT"+ selectedSeats.length);
    if(selectedSeats.length == 0)
    {
      setTotalCost(0);
    }
    else{
       setTotalCost(selectedMovie.price * (selectedSeats.length+1));
    }
  };

  useEffect(() => {
    handleTotalCost(selectedSeats);
}, []);

  const logoutHandler = (event) => {
    console.log("Logout");
    setShow(true);
    localStorage.removeItem('AuthToken');
    history.push('/login');
    window.location.reload();
  };


const accountHandler = (event) => {
  const authToken = localStorage.getItem('AuthToken');
  console.log(authToken);
  const headers = { Authorization: `${authToken}` };
  event.preventDefault();
  setLoading(true);
  const UserData = {
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
      email: email,
      password: password,
  };
  console.log(UserData);
  axios
  .get('/secured/claim',{headers:headers})
      .then((response) => {
          console.log(response);
          //localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
          setLoading(false);
        
  window.location.reload();
      })
      .catch((error) => {
          console.log("Error:"+error);
          setErrors(error.response.data);
          setLoading(false);
      });
};

  const getNotifyList = () => {
    const authToken = localStorage.getItem('AuthToken');
    console.log(authToken);
    setShow(true);
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

  const handlebooking = (item) => {
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

  if (!mounted) {
    const authToken = localStorage.getItem('AuthToken');
    console.log(authToken);
    const headers = { Authorization: `${authToken}` };
    axios
      .get('/secured/claim', { headers: headers })
      .then((response) => {
        console.log("Ares:" + response);
        if (response.data !== '') {
          setUser(true);
          getNotifyList();


        }
        else {
          setUser(false);
          history.push('/login');
          window.location.reload();
        }
      }).catch((error) => {

        console.log(error);

        history.push('/login');
        window.location.reload();
      });
  }
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={notify.length} luser={luser} logoutHandler={logoutHandler}  handleAddtoNotify={handleAddtoNotify}   />
      {seatShow? <SeatSelection handleSeatSelection={handleSeatSelection} selectedSeats={selectedSeats} setTotalCost={setTotalCost} allSeats={allSeats} isBookingComplete={isBookingComplete} fetchAvailabilities={fetchAvailabilities} totalCost={totalCost} bookSelectedSeats={bookSelectedSeats} lockSelectedSeats={lockSelectedSeats} releaseSelectedSeats={releaseSelectedSeats}></SeatSelection> :show ? (
        <Movie  handleAddtoNotify={handleAddtoNotify} setSelectedMovie={setSelectedMovie} setAllSeats={setAllSeats} setSeatShow={setSeatShow} />
      ) : (
        <Notify notify={notify} setShow={setShow} setNotify={setNotify} handleSubmit={handleSubmit} handlebooking={handlebooking} accountHandler={accountHandler}/>
      )}
    </React.Fragment>

  );
};

export default Home;
