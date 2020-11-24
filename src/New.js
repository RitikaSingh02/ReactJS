import	React ,{ useState } from 'react'

class Car extends React.Component {
    constructor(props) {
      super(props);
//super() is used to call the parent constructor.
// super(props) would pass props to the parent constructor.
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }

 export const New=()=>{
    const [count, setCount] = useState(0);//Normally, variables “disappear” when the function exits but state variables are preserved by React
     return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
     )
 }
 
  export default Car;
//   export const  New;