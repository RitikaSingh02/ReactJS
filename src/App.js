// import logo from './logo.svg';
import './App.css';
import Car from "./New.js";
import {New} from "./New";
import A from "./CompA.js";
import  { Provider } from "./useContext.js"
import Postlist from "./Postlist"
function App() {
  return (
    <div className="App">
      <Car/>
      <Postlist value="none"/>
      <New/>
      <Provider value="ritika" >
        <A/>
      </Provider>
    </div>
  );
}

export default App;
