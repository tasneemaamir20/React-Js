// ! ===== useCallback() Hook ====

import React from "react";

const ButtonComponent = props => {
  console.log("I am ButtonComponent -", props.children);
  return (
    <div>
      <button onClick={props.fn}>{props.children}</button>
    </div>
  );
};

export default React.memo(ButtonComponent);
