// ! =============  Context API ============
/*
import { MyContext } from "./App";

const ChildComponentA = () => {
  return (
    <>
      <h1>I am ChildComponentA</h1>
      { //! Step 3  }
      <MyContext.Consumer>
        {val => {
          return <h1>{val}</h1>;
        }}
      </MyContext.Consumer>
    </>
  );
};
export default ChildComponentA;
*/

// ! ========= Higher Order Components =========
/*
import HOC from "./HOC";

const ChildComponentA = (props) => {
  console.log(props);
  return (<>
    <h1>I am ChildComponentA</h1>

    <h2>Name : {props.name}</h2>
    <h2>Course: {props.course}</h2>
  
  </>)
}

export default HOC(ChildComponentA);
*/


//? Example 2
import HOC from "./HOC";
const ChildComponentA = (props) => {
  console.log(props);
  let {name ,  count, handleIncrement, handleDecrement, handleReset } = props;
  return (<>
    <h1>I am { name  }</h1>
    <h2>CounterA : { count}</h2>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleIncrement}>Increment</button>
  </>)
}
export default HOC(ChildComponentA);