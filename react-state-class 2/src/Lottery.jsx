import {useState} from "react";
import "./Lottery.css";
import {generateTicket, sum} from "./helper.js";

export default function Lottery() {
    let [ticket, setTicket] = useState(generateTicket(3));
    let isWinningTicket = sum(ticket) === 15;
    let buyTicket = () => {
        setTicket(generateTicket(3));
    }
    return (
        <div>
            <h2>Lottery Game!</h2>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket}>Buy New Ticket🎫</button>
            <h3>{isWinningTicket ? "Congratulations!🏆🎉 You Win😁" : "Better Luck Next Time!😞💔"}</h3>
        </div>
    );
}