import {useState} from 'react';
export default function Counter() {
    let [count, setCount] = useState(0); //initialize count to 0
    
    let increment = () => {
        setCount(count+1);
        // setCount((currCount) => {
        //     return currCount + 1;
        // });
        // setCount((currCount) => {
        //     return currCount + 1;
        // });      
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increase count</button>
        </div>
    )
}