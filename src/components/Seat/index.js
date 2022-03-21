import { useState } from 'react';
import './index.css';

const seatColors = {
    empty: "white",
    selected: "#006600",
    reserved: "lightgray",
    locked: "lightgray"

}

const styles={
    textAlign: "center",
}

const Seat = (props) => {
    //console.log(props);
    const [seatStatus, setStatus] = useState(props.seatStatus);

    const seatStyle = {
        backgroundColor: seatColors[seatStatus]
    };

    const onSeatSelection = () => {
        console.log("Seat Clicked");
        console.log(seatStatus);
        props.onSeatClick();
        if (seatStatus === "empty") {
            setStatus("selected");
        } else if (seatStatus === "selected") {
            setStatus("empty");
        }
        console.log(seatStatus);
    }

    return (
        <div className="seat" style={seatStyle} onClick={onSeatSelection} ><p style={styles}>{props.seatNumber}</p></div>
    )
};

export default Seat;