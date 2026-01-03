import { useState } from "react";
export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    
    let updateBlue = (color) => {
        // console.log(`Blue moves = ${moves.blue}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 };
        });
    }
    let updateYellow = (color) => {
        // console.log(`Yellow moves = ${moves.yellow}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };
        });
    }
    return (
        <div>
            <h2>Ludo Board</h2>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{ backgroundColor: 'blue' }} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={updateYellow}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{ backgroundColor: 'green'}}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{ backgroundColor: 'red'}}>+1</button>
            </div>
        </div>
    )
}