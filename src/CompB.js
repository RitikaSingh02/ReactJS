import	React from 'react'	;
import { Consumer,Consumer1 } from './useContext'
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

            }
        </Consumer>      
        <Consumer1>{
            
            value=>{
                console.log("yes")
                return (
                <p>hey this is {value} !</p>
                )
            }

            }
        </Consumer1>     
         </div>)	
}

export default B;