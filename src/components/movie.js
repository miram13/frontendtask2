import React, { useState,useEffect } from "react";
import Cards from "./card";
import "../styles/movie.css";
import axios from 'axios';
import { createBrowserHistory } from 'history';
import {PaginatedList} from 'react-paginated-list';
const history = createBrowserHistory();
const Movie = ({  handleAddtoNotify}) => {
  const authToken = localStorage.getItem('AuthToken');
  //console.log(authToken);
  const [mlist, setMovieList] = useState([]);
  const [fmlist, setFMovieList] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [mounted1, setMounted] = useState(false);
  if(!mounted1){
  axios.defaults.headers.common = { Authorization: `${authToken}` };
  axios
    .get('http://localhost:8080/movies/list')
    .then((response) => {
      console.log("Bresp:"+response.data);
      if(response.data != ''){
      setMovieList(response.data);
      }
      else{
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


  
  return (
    <section>
      
					<span style={{ marginTop: '0', marginBottom: '1%' }}>

{/* <input type="text" onChange={(event) =>handleSearch(event)} placeholder="Enter search text here" /> */}
</span>
      <PaginatedList
    list={filtered?fmlist:mlist}
    itemsPerPage={8}
    renderList={(list) => (
      <>
        {list.map((item, id) => {
          //console.log(item);
          return (
            <Cards key={item.id} item={item}  handleAddtoNotify={handleAddtoNotify} 
          />
          );
        })}
      </>
    )}
  />

    </section>
  );
};

export default Movie;
