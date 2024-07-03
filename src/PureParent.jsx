// ! ===== Pure Components =====
/*
import React, { Component } from "react";
import RegularChild from "./RegularChild";
import PureChild from "./PureChild";

class PureParent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    // console.log("I am from Pure Parent Component");
    return (
      <>
        <h1>Counter Value: {this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Update
        </button>

        <RegularChild />
        <PureChild />
      </>
    );
  }
}
export default PureParent;
*/

// ! ====== React.memo ======
/*
import React, { useState } from "react";
import RegularChild from "./RegularChild";
import PureChild from "./PureChild";

const PureParent = () => {
//   console.log("I am Pure Parent Component");

  let [counter, setCounter] = useState(0);
  return (
    <>
      <h3>Counter Value: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Update</button>

      <RegularChild />
      <PureChild />
    </>
  );
};

export default PureParent;
*/
