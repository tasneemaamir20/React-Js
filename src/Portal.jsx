import React from "react";
import ReactDOM from "react-dom";

const Portal = props => {
  console.log(props);
  return ReactDOM.createPortal(
    <>
      <section>
        <div>
          I am from Portal
          <button onClick={props.onClose}>Close</button>
        </div>
      </section>
    </>,
    document.getElementById("portal")
  );
};

export default Portal;
