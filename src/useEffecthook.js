import	React ,{useState,useEffect} from 'react'	

function Hookcounter(){	
    const [count,setCount]=useState(0);
    const [count1,setName]=useState(
    {
        name:"ritika",
        sname:"singh",

    }
    );

    useEffect(()=>{
        document.title= `you clicked ${count} time`;
        console.log("hook counter has been called")
    }
    // ,[] this param is added only when we want use effect to be called only once not at each render
    )

    return (
        <div>
            <button onClick={()=>setCount(count+1)}> click {count} times</button>
            <button onClick={()=>setName({name:"vartika"})}>click me</button>

    <p>{count1.name}</p>
        </div>
    )

}

export default Hookcounter;