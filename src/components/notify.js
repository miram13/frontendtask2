import React, { useState, useEffect } from "react";
import "../styles/notify.css";
import Button from '@mui/material/Button';
const Notify = ({ notify, setNotify, handleChange }) => {
  const [price, setPrice] = useState(0);
 


  const handlePrice = () => {
    let ans = 0;
    notify.map((item) => (ans += item.quantity * item.product.price));
    console.log("Total: "+ans);
    setPrice(ans);
   
 
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {notify.map((item) => (
        <div className="notify_box" key={item.id}>
          <div className="notify_img">
            <img src={item.movie.img} alt="" />
            <p>{item.movie.title}</p>
          </div>
          <div>
          
            <Button>{item.quantity}</Button>
            
          </div>
          <div>
            <span>{item.movie.price}</span>
           
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price:</span>
        <span>Rs : {price}</span>
        
      
      </div>
     
      
       
     
        
      

    </article>
  );
};

export default Notify;
