import React, { Suspense, useEffect, useState } from 'react';

import './index.css';


import Seat from '../Seat';


function SeatSelection({ allSeats, fetchAvailabilities, selectedSeats, handleSeatSelection, totalCost,setTotalCost, bookSelectedSeats, lockSelectedSeats, releaseSelectedSeats, isBookingComplete }) {
    const [isModalOpen, openModal] = useState(false);

    useEffect(() => {
        fetchAvailabilities();
    }, []);

    const onSeatClick = (seatNumber) => {
        console.log(seatNumber);
        handleSeatSelection(seatNumber);
    }

    const renderSeats = () => {
        return allSeats.map((seat) => <Seat key={seat.seatNumber} {...seat} onSeatClick={() => onSeatClick(seat.seatNumber)} />);
    }

    

    const onPayClick = () => {
        bookSelectedSeats();
    }

    const buttonColor = {
        backgroundColor: totalCost > 0 ? "#006600" : "lightgray"
    }

    return (
        <div>
            {isModalOpen ?
                <Suspense fallback={<div className="seatSelection-msg">Loading...</div>}>

                </Suspense>
                : null}
            
            {
                    <div className="seatSelection-container">
                        <div className="seatSelection-screen">Screen this way!</div>
                        <div className="seatSelection-seatsParent">
                            {renderSeats()}
                        </div>
                        <div className="seatSelection-sampleSeats">
                            <div className="seatSelection-sampleSeatWrapper">
                                <Seat seatStatus="empty" /> Available
                            </div>
                            <div className="seatSelection-sampleSeatWrapper">
                                <Seat seatStatus="reserved" /> Unavailable
                            </div>
                            <div className="seatSelection-sampleSeatWrapper">
                                <Seat seatStatus="selected" /> Selected
                            </div>
                        </div>
                        <div className="seatSelection-cost">
                            Total Price: {totalCost}
                        </div>
                        <button style={buttonColor} disabled={totalCost === 0} onClick={bookSelectedSeats}>Make Payment</button>
                    </div>
            }
        </div>
    );
}


export default SeatSelection
