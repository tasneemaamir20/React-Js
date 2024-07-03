// ! =====  Context API using useContext() Hook ======
/*
import { MyContext } from "./App";
import { useContext } from "react";

const ChildComponentB = () => {
  let val = useContext(MyContext);
  console.log(val);

  let { name, age, sal, skills } = val;

  return (
    <>
      <h1>I am ChildComponentB</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Salary: {sal}</h2>
      <h2>
        Skills:
        {skills.map((val, ind) => {
          return <li key={ind}> {val}</li>;
        })}
      </h2>
    </>
  );
};
export default ChildComponentB;
*/

// ! ========= Higher Order Components =========
/*
import HOC from "./HOC";

const ChildComponentB = (props) => {
  console.log(props);
  return (
    <>
      <h1>I am ChildComponentB</h1>

      <h2>Name : {props.name}</h2>
      <h2>Course: {props.course}</h2>
    </>
  );
};

export default HOC(ChildComponentB);
*/


//? Example 2
import HOC from "./HOC";
const ChildComponentB = (props) => {
  console.log(props);
  let { name, count, handleIncrement, handleDecrement, handleReset } = props;

  return (
    <>
      <h1>I am { name}</h1>
      <h2>CounterB : {count}</h2>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}
export default HOC(ChildComponentB);