import { useState } from "react";
import './cal.css';
function Cal() {
    const [result,setresult] = useState(null);
    const [input, setinput] = useState('');
    return(
        <div className="buttons">
            <h1>Calculator</h1>
            <h2>{result}</h2>
            <input type="number" value={input} onChange={(e) => setinput(e.target.value)} />
            {console.log(input)}
            <button id="btn1" onClick={()=>{setresult(result+parseFloat(input));setinput('');}}>+</button>
            <button id="btn2" onClick={()=>{setresult(result-parseFloat(input));setinput('');}}>-</button>
            <button id="btn3" onClick={()=>{setresult(result*parseFloat(input));setinput('');}}>*</button>
            <button id="btn4" onClick={()=>{setresult(result/parseFloat(input));setinput('');}}>/</button>
        </div>
    )
}

export default Cal;