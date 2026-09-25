import { useState } from "react";

function Increment() {
    let [count, setCount]= useState(0)

    function handleIncrement(){
        setCount(prev => prev + 1)
        console.log('button clicked!')
    }
  return <div className="flex flex-col items-center gap-8">
    <h2>{count}</h2>
    <div className="flex items-center gap-3">
        <button>-</button>
        <button onClick={handleIncrement}>+</button>
        <button>reset</button>
    </div>
  </div>;
}

export default Increment;
