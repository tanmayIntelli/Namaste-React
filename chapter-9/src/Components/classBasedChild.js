import React from "react";

class Child1Class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>First Child component</h1>
        <h4>Name: {this.props.username}</h4>
      </div>
    );
  }
}
export default Child1Class;
