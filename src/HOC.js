import React from "react";
import Spinner from "./Spinner";

const HOC = WrappedComponent => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        timeup: true
      };

      setTimeout(
        () =>
          this.setState({
            timeup: false
          }),
        3000
      );
      console.log(this.state.timeup);
    }

    render() {
      return this.state.timeup ? (
        <Spinner />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default HOC;
