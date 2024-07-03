// ! ===== useCallback() Hook ====

import React from "react";

const CounterComponent = props => {
  console.log("I am CounterComponent - ", props.children);
  return (
    <>
      <h2>
        {props.children} - {props.data}
      </h2>
    </>
  );
};

export default React.memo(CounterComponent);
