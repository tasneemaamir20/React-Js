// ! ========== Props ===========
/*
const ChildComponent = (props) => {
    console.log(props);

  return (
    <>
      <h1>Image: {props.image}</h1>
      <h1>Description: {props.Description}</h1>
      <h1>Price: {props.price}</h1>
      <h1>Discount: {props.discount}</h1>
      <h1>Availability: {props.isAvailable ? "YES" : "NO"}</h1>
      <h1>Total Orders: {props.totalOrders === null ? "NA" : props.totalOrders}</h1>
       <h1>Rating: {props.rating === undefined ? "NA" : props.rating}</h1>
      <hr />
    </>
  );
    
};
export default ChildComponent;
*/

//! === Props Children ===
/*
const ChildComponent = props => {
  console.log(props);

  return (
    <>
      <h1>I am ChildComponent</h1>
      {props.children}
    </>
  );
};
export default ChildComponent;
*/

// ! ========== Props Destucturing ===========
/*
const ChildComponent = (props) => {
  console.log(props);
  
  let { image, Description, price, discount, isAvailable, totalOrders,rating } = props;

  return (
    <>
      <h1>Image: {image}</h1>
      <h1>Description: {Description}</h1>
      <h1>Price: {price}</h1>
      <h1>Discount: {discount}</h1>
      <h1>Availability: {isAvailable ? "YES" : "NO"}</h1>
      <h1>Total Orders: {totalOrders === null ? "NA" : totalOrders}</h1>
       <h1>Rating: {rating === undefined ? "NA" : rating}</h1>
      <hr />
    </>
  );
    
};
export default ChildComponent;
*/

// ! ========== Deafult Props =======
//? Case 1
/*
const ChildComponent = props => {
  let { name = "No Name", age = 18, course = "JFS", gender = "Not Prefered to say" } = props;

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Age:{age} </h1>
      <h1>Course: {course}</h1>
      <h1>Gender: {gender}</h1>
      <hr />
    </>
  );
};
export default ChildComponent;
*/

//? Case 2
/*
const ChildComponent = props => {
  let { name, age, course, gender } = props;

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Age:{age} </h1>
      <h1>Course: {course}</h1>
      <h1>Gender: {gender}</h1>
      <hr />
    </>
  );
};

ChildComponent.defaultProps = {
  name: "No Name",
  age: 18,
  course: "JFS",
  gender: "Not preferred to say"
}

export default ChildComponent;
*/

// ! ============== Props Drilling =============
/*
import GrandChildComponent from "./GranChildComponent";
import ChildComponent from './ChildComponent';
import ChildComponent from './ChildComponent';

const ChildComponent = (props) => {
  console.log("I am Child Component");
  console.log(props);
  return (<>
    
    <h1>I am ChildComponent</h1>
    <h1>{props.data}</h1>
    <GrandChildComponent information={ props} />

  </>)
}

export default ChildComponent;
*/

// ! =============== PropTypes =================
/*
import React from "react";
import Proptype from "prop-types";
import ChildComponent from './ChildComponent';

const ChildComponent = props => {
  console.log(props);
  let { name, age, skills , hobbies , clickFn , isPlaced} = props;
  return (
    <>
      <h1 onClick={clickFn}>I am Child Component</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>
        Skills:
        {skills.map((val, ind) => {
          // console.log(val);

          return (
            <React.Fragment key={ind}>
              <li>{val}</li>
            </React.Fragment>
          );
        })}
      </h2>
    </>
  );
};

ChildComponent.propTypes = {
  name: Proptype.string,
  age: Proptype.number,
  skills: Proptype.array,
  isPlaced: Proptype.bool,
  hobbies: Proptype.object,
  clickFn: Proptype.func
};

export default ChildComponent;
*/

// ! ==== Task on Components , Props , CSS =====
/*
import React from "react";

const ChildComponent = props => {
  console.log(props);

  let { collectionName, data } = props;
  return (
    <>
      <hr /> <h1>{collectionName}</h1> <hr />
      {data.map((val, ind) => {
        console.log(val, ind);
        return (
          <React.Fragment key={ind}>
            <img src={val.src} alt="" />
            <h1>Price: {val.price} </h1>
            <h1>Discount: {val.discount} </h1>
            <h1>Rating: {val.rating} </h1>
          </React.Fragment>
        );
      })}
    </>
  );
};
export default ChildComponent;
*/

// !  =============================== Life Cycle Methods ====================
// ! ======= UnMounting Phase ======
/*
import React, { Component } from "react";

class ChildComponent extends Component {

  constructor(props) {
    super(props);

    console.log("ChildComponent is Mounting");
  }

  componentWillUnmount() {
    console.log("ChildComponent is UnMounting");
  }

  render() {
    return (
      <>
        <h2>I am ChildComponent</h2>
      </>
    );
  }
}
export default ChildComponent;
*/

// ! ==== useEffect() Hook ====
import React, { useEffect } from "react";

const ChilComponent = () => {
  // useEffect(() => {
  //   console.log("I am ChilComponent Mounting Phase");
  //   console.log("Server Connection Connected");
  // },[]);

  // useEffect(() => {
  //   return () => {
  //     console.log("I am ChilComponent UnMounting Phase");
  //     console.log("Server Connection Disconnected");
  //   }
  // }, []);

  useEffect(() => {
    console.log("I am Mounting Phase");
    console.log("If dependency was changing then this code will work");
    return () => {
      console.log("I am UnMounting Phase");
    };
  }, []);

  return (
    <>
      <h1>I am ChildComponent</h1>
    </>
  );
};
export default ChilComponent;
