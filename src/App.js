// import logo from './logo.svg';
import './App.css';
import Car from "./New.js";
import {New} from "./New";
import A from "./CompA.js";
import  { Provider } from "./useContext.js";
import {Provider1} from "./useContext.js";
import Postlist from "./Postlist"
import Hookcounter from "./useEffecthook"
import Mousecontainer from "./Mousecontainer"
import Counterone from "./useReducer"

function App() {
  return (
    <div className="App">
      <Counterone/>
      <Car/>
      <Postlist value="none"/>
      <New/>
      <Provider value="ritika" >
        <A/>
      </Provider>
      <Provider1 value="shivansh">
        <A/>
        </Provider1>
      <Hookcounter/>
      <Mousecontainer/>
    </div>
  );
}

export default App;
