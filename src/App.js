import React,{useEffect, useState} from 'react'
import './App.css'
const App = () => {
  const [input,setInput]=useState("")
  const [mainData,setMaindata]=useState("")
  const handler=e=>{
    setInput(e.target.value)
  }
//   function evil(fn) {
//     return new Function('return ' + fn)();
//   }
// console.log( evil('12/2+5') ); // => 11

//alternative for each onClick() in button -->function()---><button onClick={handClick} />
// const handClick = e=>{
//   setInput(input.concat(e.target.name));
// }
useEffect(()=>{
  localStorage.setItem("data",JSON.stringify(input))
},[input])
useEffect(()=>{
  const mainData=JSON.parse(localStorage.getItem("data"))
  setMaindata("usha")
},[])

const backSpace=()=>{
  setInput(input.slice(0,-1));
}
const calculate=()=>{
  try{
  setInput(eval(input).toString());
}
catch(err){
  setInput("Error")
}
}
  return (
    <div>
      <div className='data'>
      {mainData}
      </div>
      
      <center><br/><br/><br/><br/><br/><br/><br/><br/>
      <div  className="container"><br/>
        <input type="text" name="input" value={input} onChange={handler}/><br/><br/>
        {/* <button name="input" onClick={calculate}>Result</button><br/>
        <h3>Result is :{input}</h3> */}
        <div className='keypad'>
        <button onClick={()=>setInput('')} id="clear">clear</button>
        <button onClick={backSpace}>c</button>
        <button onClick={()=>setInput(input+'/')}>&divide;</button>

        <button onClick={()=>setInput(input+'7')}>7</button>
        <button onClick={()=>setInput(input+'8')}>8</button>
        <button onClick={()=>setInput(input+'9')}>9</button>
        <button onClick={()=>setInput(input+'*')}>&times;</button>

        <button onClick={()=>setInput(input+'4')}>4</button>
        <button onClick={()=>setInput(input+'5')}>5</button>
        <button onClick={()=>setInput(input+'6')}>6</button>
        <button onClick={()=>setInput(input+'-')}>&ndash;</button>

        <button onClick={()=>setInput(input+'1')}>1</button>
        <button onClick={()=>setInput(input+'2')}>2</button>
        <button onClick={()=>setInput(input+'3')}>3</button>
        <button onClick={()=>setInput(input+'+')}>+</button>

        <button onClick={()=>setInput(input+'0')}>0</button>
        <button onClick={()=>setInput(input+'.')}>.</button>
        <button onClick={calculate} id="result">=</button>
        </div>
        </div>
      </center>
    </div>
  )
}

export default App
