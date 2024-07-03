// ! ===== useCallback() Hook ====

import React from "react";

const Title = props => {
  console.log("Title");
  return (
    <>
      <h1>{props.children}</h1>
    </>
  );
};

export default React.memo(Title);
