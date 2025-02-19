import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [timer, setTimer] = useState(0)

  const timerRef = useRef(null);

  function start(){
    timerRef.current = setInterval(()=>{
      setTimer(timer => timer+1)
    }, 1000)
  }

  function stop(){
    clearInterval(timerRef.current)
  }

  function reset(){
    stop();
    setTimer(0);
  }
  
return(
  <>
  <h1>StopWatch: {timer}</h1>
  <button onClick={start}>Start</button><br /><br />
  <button onClick={stop}>Stop</button><br /><br />
  <button onClick={reset}>Reset</button>
  </>
)

}

export default App
