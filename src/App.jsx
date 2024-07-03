/*!
// ! Component:
    Component is a logical block of code. 
    Rules:
        1. Component name should start with uppercase only.
        2. we can use .js or .jsx extension but .jsx is recommended.

    //? Types:
        1. Class based Components
        2. Function based Components
*/

// import React from "react";

// ? 1. Class based Components
/*
import React from "react";

class App extends React.Component{
    render() {
        return <h1>Hii, I am Class Based Component</h1>
    }
}
export default App;
*/

// ? Function based Components
/*
const App = () => {
    
    return <h1>Hii, I am Function based Component</h1>

}
export default App;
*/

// ! ===== JSX =======
/*
    It stands for JavaScriptXML.
    It is a combination of javascript and XML.
    Rules:
        1. It should return only one element.
            If we have more than one, we have to enclose in one parent element and parenthesis.
            Else we can use <React.Fragment> </React.Fragment> / <> </>
        2. Elements were Case sensitive.
        3. we can use js code in jsx by using expression.
        4. Common keywords in js and html will be changed in JSX.
            for ---> htmlFor
            class --> className
        5. It follows lowerCamelCase Conventions.
        6. Every Element should be closed
            a. paired way --> <hr> </hr>
            b. self closing way --> <hr />

*/
/*! //? Rule 1 case 1 
const App = () => {
  return (
    <div>
      <h1>Hii, I am Element one</h1>
      <h2>Hii, I am Element Two</h2>
    </div>
  );
};
export default App;
*/

/* //? Rule 1 case 2
const App = () => {
  return (
    <React.Fragment>
      <h1>Hii, I am Element one</h1>
      <h2>Hii, I am Element Two</h2>
    </React.Fragment>
  );
};
export default App;
*/

/* //? Rule 1 case 3
const App = () => {
  return (
    <>
      <h1>Hii, I am Element one</h1>
      <h2>Hii, I am Element Two</h2>
    </>
  );
};
export default App;
*/

/*//? Rule 2
// uppercase elements were not defined
const App = () => {
  return (
    <>
      <H1>Hii, I am Element one</H1>
      <H2>Hii, I am Element Two</H2>
    </>
  );
};
export default App;
*/

/* //? Rule 3
const App = () => {
    let sname = "Atul";
    let course = "React JS";
    let sal = 150;

  return (
    <>
          <h1>Hii,I am {sname}</h1>
          <h1>I opted for {course}</h1>
          <h1>I am earning {sal}$</h1>
      </>
  );
};
export default App;
*/

/* // ? Rule 4 & 5
const App = () => {

  return (
    <>
      <section id="conatiner">
        <div className="items" onClick={}>Item1</div>
        <div className="items">Item2</div>
        <div className="items">Item3</div>
        <div className="items">Item4</div>
      </section>
      <form onSubmit={}>
        <label htmlFor="">Name:</label>
        <input type="text" value="Raj" />
      </form>
    </>
  );
};
export default App;
*/

//? Rule 6
/*
const App = () => {
  return (
    <>
      <h1>React JS Course</h1>
      <hr></hr>
      <hr />
      <h1>I am Section 1</h1>
      <h1>I am Section 2</h1>
      <h1>I am Section 3</h1>
    </>
  );
};
export default App;
*/

// ! ========== Props ===========
/*
import ChildComponent from "./ChildComponent";

const App = () => {
  
  return (
    <>
      <ChildComponent image="firstImage" Description="info1" price={100} discount={99} isAvailable={true} totalOrders={20} rating={4.9} />
      
      <ChildComponent image="secondImage" Description="info2" price={200} discount={88} isAvailable={false} totalOrders={null} rating={ 1.5} />
      
      <ChildComponent image="thirdImage" Description="info3" price={300} discount={77} isAvailable={true} totalOrders={10} rating={undefined} />
    </>
  );

}
export default App;
*/

//! === Props Children ===
/*
import ChildComponent from "./ChildComponent";

const App = () => {
  
  return (
    <>
      <ChildComponent>
        <h1>I a Child One</h1>
        <h1>I a Child Two</h1>
        <h1>I a Child Three</h1>
      </ChildComponent>
    </>
  );

}
export default App;
*/

// ! ========== Props Destructuring ===========
/*
import ChildComponent from "./ChildComponent";
import ChildComponent from './ChildComponent';

const App = () => {
  
  return (
    <>
      <ChildComponent image="firstImage" Description="info1" price={100} discount={99} isAvailable={true} totalOrders={20} rating={4.9} />
      
      <ChildComponent image="secondImage" Description="info2" price={200} discount={88} isAvailable={false} totalOrders={null} rating={ 1.5} />
      
      <ChildComponent image="thirdImage" Description="info3" price={300} discount={77} isAvailable={true} totalOrders={10} rating={undefined} />
    </>
  );

}
export default App;
*/

// ! ========== Deafult Props =======
/*
import ChildComponent from "./ChildComponent";
import ChildComponent from './ChildComponent';

const App = () => {
  console.log(ChildComponent);
  return (<>
    
    <ChildComponent name="Shivam Chauhan" age={24} course="React JS" />
  
    <ChildComponent name="Prem" course="Node JS" gender="male" />
    
    <ChildComponent name="Daksh" age={24}  gender="male" />
  </>)
}

export default App;
*/

// ! ============== Props Drilling =============
/*
import ChildComponent from "./ChildComponent";
import ChildComponent from './ChildComponent';

const App = () => {
  console.log("I am Parent Component");
  return (<>
    
    <h1>I am parent component</h1>  
    <ChildComponent data="I am the main Info"/>

  </>)
}

export default App;
*/

// ! =============== PropTypes =================
/*
import ChildComponent from "./ChildComponent";

const App = () => {
  return (
    <>
      <h1>I am Parent Component</h1>

      <ChildComponent
        name="shivam"
        age={18}
        skills={["html", "css", "Js"]}
        hobbies={{ hobby1: "Insta Scrolling", hobby2: "reading" }}
        isPlaced={false}
        clickFn={() => {
          console.log("Click Function triggered");
        }}
      />
    </>
  );
};
export default App;
*/

// ! ============== CSS ==================

// ? 1. Inline CSS
/*
const App = () => {
  return (
    <>
      <section style={{ display: "flex",fontSize:"25px"}}>
        <div style={{ border: "1px solid gray", padding: "20px", flex: "1", textAlign:"center" , background:"teal" , color:"#fff" }}>
          Home
        </div>
        <div style={{ border: "1px solid gray", padding: "20px", flex: "1", textAlign:"center" , background:"teal" , color:"#fff" }}>
          About
        </div>
        <div style={{ border: "1px solid gray", padding: "20px", flex: "1", textAlign:"center" , background:"teal" , color:"#fff" }}>
          Careers
        </div>
        <div style={{ border: "1px solid gray", padding: "20px", flex: "1", textAlign:"center" , background:"teal" , color:"#fff" }}>
          Contact US
        </div>
        <div style={{ border: "1px solid gray", padding: "20px", flex: "1", textAlign:"center" , background:"teal" , color:"#fff" }}>
          Login
        </div>
      </section>
    </>
  );
}

export default App;
*/

// ? Module CSS
/*
import style from "./Appcode.module.css";

const App = () => {
  
  return (
    <>
      <section className={style.container}>
        <div className={style.items}>Home </div>
        <div className={style.items}>About </div>
        <div className={style.items}>Careers </div>
        <div className={style.items}>Contact US </div>
        <div className={style.items}>Login </div>
      </section>
    </>
  );

}
export default App;
*/

// ? Global CSS
/*
const App = () => {
  return (
    <>
      <section className="container">
        <div className="items">Home </div>
        <div className="items">About </div>
        <div className="items">Careers </div>
        <div className="items">Contact US </div>
        <div className="items">Login </div>
      </section>
    </>
  );
};
export default App;
*/

// ! ==== Task on Components , Props , CSS =====
/*
import React from "react";
import assests_data from "./assets/assests";
import ChildComponent from './ChildComponent';

const App = () => {

  console.log(assests_data);
  
  return (
    <>
      <ChildComponent collectionName="Mens Collection" data={assests_data.mens_wear } />
      <ChildComponent collectionName="Women's Collection" data={assests_data.womens_wear } />
    </>
  );
}
export default App;
*/

// !  =======  useState() Hook   ========

/*//? Example 1
import { useState } from "react";

const App = () => {

  let [status, setStatus] = useState("single");

  return (
    <>
      <h1>Status : {status}</h1>
      <button onClick={ () => {setStatus("Married")} }>Change Status</button>
    </>
  );
}

export default App;
*/

//? Example 2
/*
import { useState } from "react";

const App = () => {

  let [status, setStatus] = useState("Single");

  return (
    <>
      <h1>Status : {status}</h1>
      <button onClick={ () => {setStatus("Single");} }>Single</button>
      <button onClick={ () => {setStatus("Married")} }>Married</button>
    </>
  );
}

export default App;
*/

/*// ? Example 3

import { useState } from "react";

const App = () => {

  let [name, setName] = useState("Chetna");

  return (
    <>
      <h1>Name : {name}</h1>
      <button onClick={ () =>{setName("Chetna Narvane")} }>Display Full Name</button>
    </>
  );
}

export default App;
*/

// ? Example 4
/*
import React, { useState } from "react";

const App = () => {

  let [count, setCount] = useState(0);

  let handleIncrement = () => {
        setCount(count + 1);
  }
  
  let handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      // <h1>Count : {count}</h1>
      // <button onClick={handleIncrement}>Increment</button>
      // <button onClick={handleDecrement}>Decrement</button>

      <button onClick={handleDecrement}>Decrement</button>
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>

    </>
  );
}

export default App;
*/

// ? Example 5
/*
import React from "react";
import { useState } from "react";
const App = () => {

  let [list, setList] = useState(
    ["Python", "SQL", "WEB", "Django", "Numpy", "Pandas"]
  );

  let handleList = () => {
    setList(
      ["Java","SQL","WEB","JDBC","Springboot"]
    )
  }

  return (<>
    {
      list.map(
        (val , ind) => {
          return (<React.Fragment key={ind}>
            <li>{ val}</li>
          </React.Fragment>)
        }
      )
    }
    <button onClick={handleList}>ChangeList</button>

  </>)
}
export default App;
*/

// ? Example 6
/*
import React, { useState } from "react";
const App = () => {

  let [obj, setObj] = useState({
    name: "Shivam",
    age: 69,
    skills: "JFS"
  })

  let handleStudent = () => {
    setObj({
      name: "Hrithik",
      age: 22,
      skills: "MERN STACK",
    });
  }

  return (<>
    <h1>Name: {obj.name}</h1>
    <h1>Age: {obj.age}</h1>
    <h1>Skills: {obj.skills}</h1>

    <button onClick={handleStudent}>ChangeStudent</button>
  </>)
}
export default App;
*/

// ? Example 7
/*
import React, {useState} from "react";
const App = () => {
  let [gender, setGender] = useState(true);

  let changeGender = () => {
    setGender(!gender);
  }

  return (<>
    <h1>Gender: {gender ? "Male" : "Female"}</h1>
    <button onClick={changeGender}>{ gender ? "Female" : "Male"}</button>
  </>)
}
export default App;
*/

// ? Example 8
/*
import React, { useState } from "react";
import assests_data from './assets/assests';
import ChildComponent from './ChildComponent';

const App = () => {
  let [data, setData] = useState([]);

  let handleMen = () => {
    setData(assests_data.mens_wear);
  }

   let handleWomen = () => {
     setData(assests_data.womens_wear);
   };
  return (
    <>
      <nav>
        <button onClick={handleMen}>Men's Collection</button>
        <button onClick={handleWomen}>Women's Collection</button>
        <button>kid's Collection</button>
        <button>Clear</button>
      </nav>

      <ChildComponent info={data} />
    </>
  );
}
export default App;
*/

// ! =============  Context API ============
/*!
import React , {createContext} from "react";
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';

// ! Step 1
export let MyContext = createContext();

const App = () => {
  let myObj = {
    name: "Dipendra",
    age: 25,
    sal: 50000,
    skills: ["WEB", "JAVA", "JDBC"]
  };
  return (
    <>
      { //! Step 2  }
      <MyContext.Provider value={myObj}>
        {// <ChildComponentA /> }
        <ChildComponentB />
      </MyContext.Provider>
    </>
  );
}
export default App;
*/

// ! ========= Higher Order Components =========
/* //? Example 1
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

const App = () => {
  return (
    <>
      <h1>App</h1>

      <ChildComponentA />
      <ChildComponentB />
    </>
  );
}

export default App;
*/

//? Example 2
/*
import React, { useState } from "react";
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

const App = () => {
  return (
    <>
      <center>
        <ChildComponentA name="CounterFunctionOne" />

        <ChildComponentB name="CounterFunctionTwo" />
      </center>
    </>
  );
};
export default App;
*/

// ! ======= Conditional Rendering ========
// ? First way (if-else)
/*
import { useState } from "react";

const App = () => {
  let [condition, setCondition] = useState(true);

  let handleContent = () => {
    setCondition(!condition);
  };

  if (condition) {
    return (
      <>
        <h1>HTML</h1>
        <button onClick={handleContent}>ChangeContent</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Hyper Text Markup Language</h1>
        <button onClick={handleContent}>ChangeContent</button>
      </>
    );
  }
};
export default App;*/

// ? Second way (Ternary Operator)
/*
import { useState } from "react";

const App = () => {
  let [condition, setCondition] = useState(true);

  let handleContent = () => {
    setCondition(!condition);
  };

  return (
    <>
      <h1>
        {condition ? "HTML" : "Hyper Text MarkUp Language"}
      </h1>
      <button onClick={handleContent}>ChangeContent</button>
    </>
  );
  
};
export default App;
*/

// ? Third way ( Logical AND Operator)
/*
import { useState } from "react";

const App = () => {
  let [condition, setCondition] = useState(false);

  let handleContent = () => {
    setCondition(!condition);
  };

  return (
    <>
      <h1>
        {condition && "Hyper Text MarkUp Language"}
      </h1>
      <button onClick={handleContent}>ChangeContent</button>
    </>
  );
  
};
export default App;
*/

// ? Example 1
/*
import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  let handleIncrement = () => {
    setCount(count + 1);
  }

  return (<>
    <button onClick={handleIncrement}>{count} is : { (count %2 ==0) ? "Even": " Odd"}</button>
  </>)
}
export default App;
*/

// ! =========================== Forms in React JS =========================

// ! ===== Uncontrolled form / useRef() Hook ======
/*
import { useRef } from "react";

const App = () => {

  let nameRef = useRef();
  console.log(nameRef);

  let emailRef = useRef();
  console.log(emailRef);

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form output");
    // console.log(nameRef);
    // console.log(nameRef.current);
    // console.log(nameRef.current.value);
    // console.log(emailRef.current.value);

    let name = nameRef.current.value;
    let email = emailRef.current.value;
    console.log({ userName: name, userEmail: email });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} /> <br /> <br />
        <input type="text" ref={emailRef}/> <br /> <br /> 
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
*/

// ! ========= Controlled Forms ==============
// ? Example 1
/*
import { useState } from "react";
const App = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleName = (e) => {
    // console.log("changing Name");
    // console.log(e.target.value);
    setName(e.target.value);
  }

  let handleEmail = (e) => {
    // console.log("Changing Email");
    setEmail(e.target.value);
  }

  let handlePassword = (e) => {
    // console.log("Changing Password");
    setPassword(e.target.value);
  }

  let handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      userName: name,
      userEmail: email,
      userPassword: password
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name: </label>
          <input type="text" value={name} onChange={handleName} />
        </div>

        <div>
          <label htmlFor="">Email:</label>
          <input type="text" value={email} onChange={handleEmail}/>
        </div>

        <div>
          <label htmlFor="">Password:</label>
          <input type="text" value={password} onChange={handlePassword} />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
};
export default App;
*/

// ? Example 2
/*
import { useState } from "react";

const App = () => {

  let [formData, setFormData] = useState({
    name: "",
    girlFriendName: "",
    email: "",
    password: ""
  });

  let { name, girlFriendName, email, password } = formData;
  
  let handleChange = (e) => {
    // console.log("I am changing the value");
    // console.log(e);
    let { name, value } = e.target;
    // console.log(name, value);

    setFormData({
      ...formData ,  [name]: value
    });

    console.log(formData);

  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">GirlFriend:</label>
          <input type="text" name="girlFriendName" value={girlFriendName} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="">Email:</label>
          <input type="text" name="email" value={email} onChange={handleChange} />
        </div>
        
        <div>
          <label htmlFor="">Password:</label>
          <input type="text" name="password" value={password} onChange={handleChange} />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}
export default App;
*/

// ! =======================  Life Cycle Methods   =================================
// ! Basics
// ? === Class based Components ===
/*
import React , {Component} from "react";
class App extends Component{
  state = { counter: 0 };

  render() {    
    return (
      <>
        <h1>I am Class Based Component</h1>
        <h3>Counter Value: {this.state.counter}</h3>
        <button onClick={
          () => {
             this.setState({ counter : this.state.counter - 1 });
          }
        }>Decrement</button>

        <button onClick={
          () => {
             this.setState({ counter : 0 });
          }
        }>Reset</button>
        
        <button onClick={
          () => {
             this.setState({ counter : this.state.counter + 1 });
          }
        }>Increment</button>
      </>
    );
  }
}
export default App;
*/

// ! ====== Mounting Phase ====
/*
  It is a process of creating an instance of a component and rendering into the DOM is called Mounting Phase.

  Mounting Phase method are:
    ? 1. constructor():
        This is first method to run in the mounting phase.
        It is the best place to do all the intializations.
        This method will execute only once before the instance rendered.
        Constructor() method should contain a parameter called props.
        and these props have to accessed by super() method.
        without super() method we cannot use "this" keyword.
        Do not make any side effects. Ex: HTTP requests.

    ? 2. getDerivedStateFromProps():
        It will run just before the render() method.
        It will receive the props and states as parameters.
        It will return a new state.
        It must return an object ( /null).
        It must be static. It will get the props and states which was belongs to current component. and cannot be accessed by their instances.
        Do not make any side effects. Ex: HTTP requests.

    ? 3. render():
        It will run on each update.
        It is the only mandatory method in CBC.
        Do not make any side effects. Ex: HTTP requests.

    ? 4. componentDidMount():
      It will run after the render() method.
      It will run only once.
      So, It is the best place to make api requests / side effects.

*/
/*
import React, { Component } from "react";
class App extends Component{

  constructor(props) {
    console.log("I am constructor() method");
    super(props);
    
    this.state = { counter: 0 };
    // console.log(this);
  }

  static getDerivedStateFromProps(props , prevState) {
    console.log("I am getDerivedStateFromProps() method");
    // console.log(prevState);
    return {counter : 10};
  }

  componentDidMount() {
    console.log("I am componentDidMount() method");

     let fetchData = async () => {
       let res = await fetch("https://fakestoreapi.com/products");
       let data = await res.json();
       console.log(data);
     };
     fetchData();
  }

  render() {
    console.log("I am render() method");

    return (
      <>
        <h1>I am Class Based Component</h1>
        <h2>Counter Value: {this.state.counter}</h2>
        <button onClick={
          () => {
            this.setState({ counter: this.state.counter + 1 });
          }
        }>Update</button>
      </>
    );
  }
}
export default App;
*/

// ! ========= Updating Phase =========
/*
  It is a process of re-rendering the component because of props / state changes.

  updating phase methods are:
    ? 1. getDerivedStateFromProps():
        It is just similar to getDerivedStateFromProps() in Mounting Phase.
    
    ? 2. shouldComponentUpdate():
        This method will work just before the render() method.
        Based on shouldComponentUpdate() output , React will decide to render or not.
        It accepts  2 parameters - prevProps , prevState.
        It must return a boolean value.
        By default it returns true.

    ? 3. render():
        It is just similar to render() method of Mounting Phase.
 
    ? 4. getSnapShotBeforeUpdate():
        It will keep a track of state variables.
        It have to return a state / null.
        It will work along with componnentDidUpdate() method.
        The returned value of getSnapShotBeforeUpdate() is passed to componnentDidUpdate() as snapshot.

    ? 5. componentDidUpdate():
        It will run after the getSnapShotBeforeUpdate() method.
        It will get props , states and snapshot as parameters.
        It is the best place to do side effects. like PUT / PATCH requests.
*/
/*
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    console.log("I am constructor() method");
    super(props);

    this.state = { counter: 0 };
    // console.log(this);
  }

  static getDerivedStateFromProps(props, prevState) {
    console.log("I am getDerivedStateFromProps() method");
    // console.log(prevState);
    return null;
  }

  componentDidMount() {
    console.log("I am componentDidMount() method");

    let fetchData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      // console.log(data);
    };
    fetchData();
  }

  shouldComponentUpdate(prevProps, prevStates) {
    console.log("I am shouldComponentUpdate() method");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevStates) {
    console.log("I am getSnapshotBeforeUpdate() method");
    // console.log(prevStates);
    return prevStates;
  }

  componentDidUpdate(props, state, snapShot) {
    console.log("I am componentDidUpdate() method");
    console.log(snapShot);
  }

  render() {
    console.log("I am render() method");

    return (
      <>
        <h1>I am Class Based Component</h1>
        <h2>Counter Value: {this.state.counter}</h2>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Update
        </button>
      </>
    );
  }
}
export default App;
*/

// ! ======= UnMounting Phase ======
/*
  It is process of removing the component from the DOM.

  UnMounting Phase methods are:
    1. componentDidUnMount()
        This method will work only if the component is removed from the DOM.
        It is the best place to remove events , side effects , cancel requests.
*/
/*
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { display: true };
  }

  render() {
    let handleDisplay = () => {
      this.setState({ display: false });
    };

    return (
      <>
        <h1>I am App Component</h1>
        {this.state.display ? <ChildComponent /> : null}
        <button onClick={handleDisplay}>UnMount</button>
      </>
    );
  }
}
export default App;

*/

// ! ===== useEffect() Hook ======
/*!
import React, { useState, useEffect } from "react";
import ChildComponent from "./ChildComponent";

const App = () => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(10);
  let [isDisplay, setDisplay] = useState(true);

  let handleCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  let handleCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  let handleDisplay = () => {
    setDisplay(!isDisplay);
  };

  // ! === Case 1 ===
  //? useEffect() hook with function and empty dependency array will work as Mounting Phase(componentDidMount()).
  
  // useEffect(() => {
  //   console.log("I am useEffect() Hook");
  //   let getData = async () => {
  //     let response = await fetch("https://fakestoreapi.com/products");
  //     let data = await response.json();
  //     console.log(data);
  //   };
  //   getData();
  // }, []);
  

  // ! === Case 2 ===
  //? useEffect() hook with function and dependency array (including state variables) will work as Updating Phase(componentDidUpdate()).
  
  // useEffect(() => {
  //   console.log("I am useEffect() Hook");
  //   let getData = async () => {
  //     let response = await fetch("https://fakestoreapi.com/products");
  //     let data = await response.json();
  //     console.log(data);
  //   };
  //   getData();
  // }, [counter2]);
  

  // ! === Case 3 ===
  //? useEffect() hook with function (return function) and empty dependency array will work as unMounting Phase(componentWillUnmount()).
  
  // useEffect(() => {
  //   return () => {
  //     console.log("I am UnMounting");
  //   };
  // }, []);
  

  // ! === CASE 4 ===
  //? useEffect() hook with function (return function) and dependency array (including state variables) will work as all phases.
  useEffect(() => {
    console.log("I will work on Mounting / Updating Phase");

    return () => {
      console.log("I will work on UnMounting Phase");
    };
  }, [counter2]);

  return (
    <>
      <h2>Counter1 : {counter1}</h2>
      <h2>Counter2 : {counter2}</h2>
      <button onClick={handleCounter1}>ChangeCounter1</button>
      <button onClick={handleCounter2}> ChangeCounter2</button>
      <hr />
      <button onClick={handleDisplay}>Toggle ChildComponent</button>
      {isDisplay ? <ChildComponent /> : null}
    </>
  );
};
export default App;
*/

// ! ==== axios =====
/*
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  let [data, setData] = useState([]);

  let getData = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");

    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((val , ind) => {
        console.log(val);

        return (
          <React.Fragment key={ind}>
            <h1> {ind+1}. {val.title}</h1>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default App;
*/

// ! ========= Portals =========
/*
  1. create a div tag in html with id portal.
  2. ReactDOM.createPortal(content , container)
      content ==> string / jsx / component
      container ==> It is the targettd element
*/
// ? case 1
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// console.log(ReactDOM);

// const App = () => {
//   let [isOpen1, setOpen1] = useState(false);
//   let [isOpen2, setOpen2] = useState(false);

//   let handleOpen1 = () => {
//     setOpen1(true);
//   };

//   let handleOpen2 = () => {
//     setOpen2(true);
//   };

//   return (
//     <>
//       {/* //! without Portal */}
//       <section style={{ border: "solid" }}>
//         I will open without Portal
//         <button onClick={handleOpen1}>Open</button>
//         {isOpen1 ? <h1>I am from Without Portal <button onClick={() => setOpen1(false)}>Close</button> </h1> : null}
//       </section>

//       {/* //! with Portal */}
//       <section style={{ border: "solid" }}>
//         I will open with Portal
//         <button onClick={handleOpen2}>Open</button>
//         {isOpen2 ? ReactDOM.createPortal(
//               <h1>I am from Portal <button onClick={()=>setOpen2(false)}>Close</button></h1>,
//               document.getElementById("portal")
//             )
//           : null}
//       </section>
//     </>
//   );
// };

// export default App;

// ? Case 2
/*
import React, { useState } from "react";
import Portal from "./Portal";
import NonPortal from "./NonPortal";

const App = () => {
  let [isOpen1, setOpen1] = useState(false);
  let [isOpen2, setOpen2] = useState(false);

  return (
    <>
      <section>
        I will open without Portal{" "}
        <button onClick={() => setOpen1(true)}>Open</button>
        {isOpen1 ? <NonPortal /> : null}
      </section>

      <section>
        I will open with Portal{" "}
        <button onClick={() => setOpen2(true)}>Open</button>
        {isOpen2 ? (
          <Portal isOpen2={isOpen2} onClose={() => setOpen2(false)} />
        ) : null}
      </section>
    </>
  );
};

export default App;
*/

// ! ===== Pure Components / React.memo =====
/*
import React from 'react'
import PureParent from './PureParent';

const App = () => {
  return (
    <>
      <PureParent />
    </>
  )
}

export default App;
*/

// ! ===== useCallback() Hook ====
/*
import React, { useCallback, useState } from "react";
import CounterComponent from "./CounterComponent";
import ButtonComponent from "./ButtonComponent";
import Title from "./Title";

const App = () => {
  let [age, setAge] = useState(20);
  let [salary, setSalary] = useState(50000);

  let handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  let handleSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <>
      <center>
        <Title> useCallback() Hook </Title>
        <CounterComponent data={age}>Age</CounterComponent>
        <ButtonComponent fn={handleAge}>Update Age</ButtonComponent>

        <CounterComponent data={salary}>Salary</CounterComponent>
        <ButtonComponent fn={handleSalary}>Update Salary</ButtonComponent>
      </center>
    </>
  );
};

export default App;
*/

// ! ======= useMemo() Hook ======
/*
import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  let handleCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  let handleCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  let isEven = useMemo(() => {
    console.log("isEven working");

    let num = 0;
    for (let i = 0; i <= 300000000; i++) {
      num += i;
    }

    return counter1 % 2 == 0;
  }, [counter1]);

  return (
    <>
      <center>
        <button onClick={handleCounter1}>Counter1: {counter1}</button>
        {isEven ? "Even" : "Odd"}
        <br />
        <button onClick={handleCounter2}>Counter2: {counter2}</button>
      </center>
    </>
  );
};

export default App;
*/

// ! ========= React - Router - DOM (Version 5) ==========
/*
import React from 'react'

// ? importing router dom in-built components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ? importing page components
import Home from './componentpages/Home';
import About from './componentpages/About';
import Contact from './componentpages/Contact';
import Login from './componentpages/Login';
import CommonNavBar from './componentpages/CommonNavBar';

const App = () => {
  console.log(BrowserRouter);
  console.log(Routes);
  console.log(Route);
  
  return (
    <>
      <BrowserRouter>
       <CommonNavBar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App
*/

// ! ========= Nested Routing using Version 5 ==========
/*
import React from "react";

// ? importing react-router-dom inbuilt components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ? importing Pages
import Home from "./componentpages/Home";
import About from "./componentpages/About";
import Contact from "./componentpages/Contact";
import Login from "./componentpages/Login";
import Layout from "./componentpages/Layout";
import Company from "./componentpages/aboutChildComponents/Company";
import Employees from "./componentpages/aboutChildComponents/Employees";
import Users from "./componentpages/aboutChildComponents/Users";
import ErrorPage from "./componentpages/ErrorPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />}>
              <Route path="company" element={<Company />} />
              <Route path="emp" element={<Employees />} />
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
*/

// ! ========= Nested Routing using Version 6 ==========
/*
import React from "react";

// ? importing react-router-dom inbuilt components
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// ? importing Pages
import Home from "./componentpages/Home";
import About from "./componentpages/About";
import Contact from "./componentpages/Contact";
import Login from "./componentpages/Login";
import Layout from "./componentpages/Layout";
import Company from "./componentpages/aboutChildComponents/Company";
import Employees from "./componentpages/aboutChildComponents/Employees";
import Users from "./componentpages/aboutChildComponents/Users";
import ErrorPage from "./componentpages/ErrorPage";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
          children: [
            {
              path: "company",
              element: <Company />,
            },
            {
              path: "emp",
              element: <Employees />,
            },
            {
              path: "users",
              element: <Users />,
            },
          ],
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
*/

// ! ========== useNavigate() hook =======

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./navigationhooks/Dashboard";
import HomePage from "./navigationhooks/HomePage";
import AboutPage from "./navigationhooks/AboutPage";
import ContactPage from "./navigationhooks/ContactPage";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
