import React from "react";

function WithLogging(WrappedComponent) {
  const wrapped =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  class HOC extends React.Component {
    componentDidMount() {
      console.log(`Component ${wrapped} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${wrapped} is going to unmount`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  HOC.displayName = `WithLogging(${wrapped})`;
  return HOC;
}

export default WithLogging;