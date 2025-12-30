import {useState} from 'react';
export default function Counter() {
    let count = useState(0);

    function increment() {
        count += 1;
        console.log(count);
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}