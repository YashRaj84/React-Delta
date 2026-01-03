import {useState} from 'react';

function init() {
    console.log("Init function called");
    return Math.random();
}
export default function Counter() {
    let [count, setCount] = useState(init()); //initialize count to 0
    console.log("Counter rendered with count:", count);
    let increment = () => {
        // setCount(count+1);
        // setCount((currCount) => {
        //     return currCount + 1;
        // });
        setCount((currCount) => {
            return currCount + 1;
        });      
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increase count</button>
        </div>
    )
}