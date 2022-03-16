import React, { useState, useEffect } from "react";
import Cards from "./card";
import "../styles/movie.css";
import axios from 'axios';
import Notify from "./notify";
import { createBrowserHistory } from 'history';
import { PaginatedList } from 'react-paginated-list';
const history = createBrowserHistory();
const Movie = ({ handleAddtoNotify, handleSubmit }) => {
  const authToken = localStorage.getItem('AuthToken');
  //console.log(authToken);
  const [mlist, setMovieList] = useState([]);
  const [fmlist, setFMovieList] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [mounted1, setMounted] = useState(false);
  const [moviedetails, setMoviedetails] = useState([]);
  const [showbookingpage, setShowbookingpage] = useState(false);
  if (!mounted1) {
    axios.defaults.headers.common = { Authorization: `${authToken}` };
    axios
      .get('http://localhost:8080/movies/list')
      .then((response) => {
        console.log(response.data);
        if (response.data != '') {
          setMovieList(response.data);
        }
        else {
          setMovieList([]);

        }
      })
      .catch((error) => {

        console.log(error);

        history.push('/login');
      });
  }
  useEffect(() => {
    setMounted(true);
  }, []);

  const getmoviedetails = (movie) => {
    console.log(movie)
    setShowbookingpage(true)
    let movies = []
    movies.push(movie)
    setMoviedetails(movies)
    console.log(showbookingpage)
    handleAddtoNotify(movie)
    console.log(moviedetails)
  }

  return (
    <div>


      <div hidden={
        showbookingpage
      }>

        <span style={{ marginTop: '0', marginBottom: '1%' }}>

          {/* <input type="text" onChange={(event) =>handleSearch(event)} placeholder="Enter search text here" /> */}
        </span>
        <PaginatedList
          list={filtered ? fmlist : mlist}
          itemsPerPage={8}
          renderList={(list) => (
            <>
              {list.map((item, id) => {
                console.log(item);
                return (
                  <Cards key={item.id} item={item} handleAddtoNotify={handleAddtoNotify} handleSubmit={handleSubmit} getmoviedetails={getmoviedetails}
                  />
                );
              })}
            </>
          )}
        />

      </div>
      <div hidden={
        !showbookingpage
      }>
        <Notify notify={moviedetails} />

      </div>
    </div>
  );
};

export default Movie;
