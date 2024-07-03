// ! ========= Higher Order Components =========
/*
const HOC = (WrapperComponent) => {
    return () => {
        return (
          <>
            <WrapperComponent name="Palak" course="PFS" percentage = {85} />
          </>
        );
   }
}
export default HOC;
*/

//? Example 2
import { useState } from "react";
const HOC = (ComponentName) => {
  return function Counters(props) {
    console.log(props);
     let [count, setCount] = useState(0);

     let handleIncrement = () => {
       setCount(count + 1);
     };

     let handleDecrement = () => {
       setCount(count - 1);
     };

     let handleReset = () => {
       setCount(0);
     };

    return (<>
      <ComponentName count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleReset={handleReset} name={props.name} />
      <br /><br />
      <hr />
  </>)
  }
}

export default HOC;