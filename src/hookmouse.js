import	React ,{useState,useEffect} from 'react'	

function  Hookmouse(){
    const [x,setx]=useState(0)
    const [y,sety]=useState(0)
    const logMousePosition=e=>{
        console.log("mouse event");
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(()=>{
        console.log("useeffect called");
        window.addEventListener('mousemove',logMousePosition);
        //now this is called once and after that the Hookmouse is unmounted 
    //but even after unmouonting of that container the event is listening as the mouse moves 
    //so a warning is generATED 
    //index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    

    //ADDING AN CLEANING FUNC

    return ()=>{
        console.log("cleaning the listener");
        window.removeEventListener('mousemove',logMousePosition);
    }
},[])


    	return (<div>
            Hooks X-{x} Y-{y}
             </div>
             )
                }
export default Hookmouse;

