import { useState } from 'react'
import './Square.css'


export default function Square({value, onSquareClick } ){
    return(
        <div className="square">
            <button onClick={onSquareClick } className="button">{value}</button>
        </div>
    )
}