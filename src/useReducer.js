import	React ,{useReducer} from 'react'
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

const initialState=0;
const reducer=(state,action)=>{
    switch (action.type)
    {
        case 'increase':
                return state+action.value;
        case 'decrease':
                return state-1;
        case 'reset':
                return initialState;
        default:
            return state;
    }
}

function Counterone() 
    {
        const [newstate,dispatch]=useReducer(reducer,initialState);
        return (
            <div>
            {/* console.log(Counterone) */}
            Count={newstate}
            {/* a default call to reducer func */}
            <button onClick ={()=>dispatch({type:'increase',value:5})}>increase by 5</button>
            <button onClick={()=>dispatch({type:'decrease'})}>decrease</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
             </div>)
    }
export default Counterone
