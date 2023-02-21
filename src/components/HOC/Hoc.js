import React, { Component } from "react";

const Hoc = (InputComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    handleCount = () => {
      this.setState((prev) => {
        return { count: prev.count + 1 };
      });
    };

    render() {
      return (
        <InputComponent count={this.state.count} incriment={this.handleCount} />
      );
    }
  }
  return NewComponent;
};
export default Hoc;
