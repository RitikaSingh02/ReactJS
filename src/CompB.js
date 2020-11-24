import	React from 'react'	
import { Consumer } from './useContext'
//context type can not be used with functional components
function B(){	
    return (
    <div>
        <p>this is comp b</p>
        <Consumer>{
            
            value=>{
                console.log("yes")
                return (
                <p>hey this is {value} !</p>
                )
            }
            // value1=>{
            //     console.log("yes");
            //     return (
            //     <p>hey this is {value1} !</p>
            //     )
            // }
            }
        </Consumer>         
         </div>)	
}

export default B;