import React from 'react';
import Context from './Context';

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Component) => {
    return class WrapperComponent extends React.Component {
      static contextType = Context;
      render() {
        console.log(this.context);

        return (
          <Component
            {...this.props}
            // Don't forget to use getState
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          ></Component>
        );
      }
    };
  };
};
export default connect;
