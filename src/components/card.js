import React from "react";
import Button from '@mui/material/Button';



const Cards = ({ item, handleAddtoNotify }) => {
  const { title, price, img } = item;


  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>


        <p>Price - Rs{price}</p>
        <Button onClick={() => handleAddtoNotify(item)} >BOOK TICKET</Button>


      </div>
    </div>
  );
};

export default Cards;