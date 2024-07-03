// ! ===== Pure Components =====
/*
import React, { PureComponent } from 'react'

class PureChild extends PureComponent {
  render() {
    console.log("I am from Pure Child Component");
    return (
      <div>PureChild</div>
    )
  }
}

export default PureChild;
*/

// ! ====== React.memo ======
/*
import React from 'react'

const PureChild = () => {
    console.log("I am from Pure Child Component");
  return (
    <div>PureChild</div>
  )
}

export default React.memo(PureChild);
*/