import React from "react";
import Child1Class from "./classBasedChild";
import Child2Class from "./classBasedChild2";

class ParentClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Parent component</h1>
        <Child1Class username="Tanmay" />
        <Child2Class userage="24" />
      </div>
    );
  }
}
export default ParentClass;
