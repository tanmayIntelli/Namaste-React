import React from "react";

class Child2Class extends React.Component {
  constructor(props) {
    console.log("CHild 2 -> constructor");
    super(props);
    this.state = {
      count: 0,
      day: false,
    };
    this.intervalId = 0;
  }

  componentDidMount() {
    console.log("Child 2 -> componentDidMount");

    this.intervalId = setInterval(function () {
      console.log("From setInterval");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child 2 -> componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child 2 -> componentWillUnmount");
    clearInterval(this.intervalId);
  }

  render() {
    console.log("Child 2 -> Render");
    return (
      <div
        className="child-class"
        style={{ backgroundColor: this.state.day ? "#98D6FF" : "#000000" }}
      >
        <h1>Second Child component</h1>
        <h4>Age: {this.props.userage}</h4>
        <h4>Counter - </h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <br />

        <button
          onClick={() => {
            this.setState({ day: !this.state.day });
          }}
        >
          Make it a {this.state.day ? "Night" : "Day"}
        </button>
      </div>
    );
  }
}
export default Child2Class;
