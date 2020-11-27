import	React ,{ useEffect, useState}from 'react'
import Hookmouse from "./hookmouse"	

function Mousecontainer(){	
    const [display,setdisplay]=useState(true);
    const [count,setCount]=useState(0);
    const tick =()=>{
        setCount(count+1);
    }

    useEffect(()=>{

        const interval=setInterval(tick,1000);
        console.log(interval);
        return ()=>{
            clearInterval(interval);
        }
    },[])

    return (<div>
        <button onClick={()=>setdisplay(!display)}> TOGGLE display</button>
        {display && <Hookmouse/>}
        THIS IS THE COUNT {count}
         </div>)	
}
export default Mousecontainer;