import { useState } from "react";
import './counter.css';
const Counter = () => {
    const [count,setcount] = useState(0);
    return(
        <div className="counter">
            <h1>Counter</h1>
            {count}<br/>

            <button className="btn1" onClick={()=>setcount(count+1)}>Increament</button>
            <button className="btn2" onClick={()=>setcount(count-1)}>Decrement</button>

        </div>
    );
};

export default Counter;