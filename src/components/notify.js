import React, { useState, useEffect } from "react";
import "../styles/notify.css";
import Button from '@mui/material/Button';
import { render } from "@testing-library/react";
import Checkbox from '@mui/material/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';
const Notify = ({ notify, setNotify, handleSubmit, item }) => {
  const [price, setPrice] = useState(0);
  const [rows, setRows] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  const [bookedrows, setBookedrows] = useState([]);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handlebooking = () => {
    console.log(bookedrows)
    let msg = "";
    bookedrows.map((element) => {
      msg = msg + "row:" + element.row + "col:" + element.col
    })
    
    msg +=  "TITLE:" + notify[0].title 
    console.log(msg)
    alert(msg)
    
  }
  const handlePrice = () => {
    let ans = 0;
    // notify.map((item) => (ans += item.movie.price));
    console.log("Total: " + ans);
    setPrice(ans);


  };

  useEffect(() => {
    handlePrice();
    // booking();
  });
  // const booking = () => {
  //   let temp = []
  //   for (let i = 0; i < 10; i++) {
  //     temp.push(i)
  //   }
  //   setRows(temp)
  // }
  const handlerow = (row, col) => {
    console.log(row, col)
    let temprows = bookedrows
    let flag = false
    bookedrows.map((element) => {
      if (element.row == row && element.col == col) {
        flag = true

      }
    })
    if (flag == true) {
      temprows = temprows.map((item) => {
        if (item.row == row && item.col == col) {

          // return item
        }
        else {
          return item
        }
      })
      console.log(temprows)
      temprows = temprows.filter(item => item)
    }


    if (flag == false) {
      temprows.push({
        row: row, col: col
      })
    }

    setBookedrows(temprows)
    console.log("updatedrows", bookedrows)
  }
  return (
    <article>

      <h1> SELECT YOUR SEATS HERE </h1>
        <form className="seat-pick" style={{ background: '#	808000', marginTop: "10%", marginLeft: "-750px" }}>
          <div class="seatStructure">
            <center>
              
             

                <tr>


                  {rows.map((element, index) => {
                    return (
                      <div key={index} className="row" style={{ marginTop: "-10px" }}  >
                        <div className="col"  >

                          <Checkbox onClick={() => handlerow(index + 1, 1)} {...label} />
                        </div>
                        <div className="col" >

                          <Checkbox onClick={() => handlerow(index + 1, 2)} {...label} />
                        </div>
                        <div className="col">

                          <Checkbox onClick={() => handlerow(index + 1, 3)} {...label} />
                        </div>
                        <div className="col">

                          <Checkbox onClick={() => handlerow(index + 1, 4)} {...label} />
                        </div>
                        <div className="col">

                          <Checkbox onClick={() => handlerow(index + 1, 5)} {...label} />
                        </div>
                        <div className="col">
                          <Checkbox onClick={() => handlerow(index + 1, 6)} {...label} />
                        </div>


                      </div>
                    )

                  })}
                  <br />
                </tr>

                

              
              <Button variant="contained" style={{ color: 'white', marginLeft: '-400px' }} onClick={() => handlebooking()} >Submit</Button>
              {/* <br /><input type="button" value="Confirm Selection" className="confirm-selection" id="con-select" onClick={confirmSelection} onclick="updateTextArea()" /> */}
            </center>
          </div>
        </form>

        <div>
          {notify.map((item) => (

            <div className="notify_box">
              <div className="notify_img">
                {/* <img src={item.movie.img} alt="" /> */}

                <p>Movie Name:{item.title}</p>
              </div>

              <div>
                <span>Total Price:</span>
                <span>Rs: {item.price}</span>


              </div>
            </div>

          ))}

        </div>

    </article>
  );
};

export default Notify;
