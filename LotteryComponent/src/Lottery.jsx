import { useState } from "react"
import { genArray, Sum } from "./helper";
import Ticket from "./Ticket";


export default function Lottery({n=3, winningSum=15}){


    let [ticket, setTicket] = useState(genArray(n));
    let isWinning = Sum(ticket);

    let buyTicket = () =>{
        setTicket(genArray(n));
    }

    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/><br />
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{isWinning===winningSum?"Congratulations, you won":""}</h3>
        </div>
    )
}