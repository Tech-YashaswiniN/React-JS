import React from 'react'
import './BgChanger.css'
import { useState } from 'react'

function BgChanger() {

    let [color, setColor] = useState("olive");

  return (
    <div className='Container' style={{backgroundColor:color}}>
        <div className="btn-container">
            <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("purple")} style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>setColor("black")} style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>setColor("skyBlue")} style={{backgroundColor:"skyblue"}}>Skyblue</button>
            <button onClick={()=>setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>setColor("violet")} style={{backgroundColor:"violet"}}>violet</button>
            <button onClick={()=>setColor("white")} style={{backgroundColor:"white", color:"black"}}>White</button>
        </div>
    </div>
  )
}

export default BgChanger
