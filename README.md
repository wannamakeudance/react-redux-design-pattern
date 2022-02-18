# This artile is to explain how to design a simple react-redux step by step.

## Step0. You can refer to [this article](https://github.com/wannamakeudance/redux-design-pattern) to understand the basic of Redux

## Step1. Create a context named Context.js

```javascript
import React from 'react';
const Context = React.createContext('reduxContext');
export default Context;
```

## Step2.Realize the Provider component which can make all of the children components of it can get this store data via 'this.context'.

```javascript

import React from 'react';
import Context from './Context';

export default class Provider extends React.Component {
    render() {
        const {store, children} = this.props;
        return <Context.Provider value={store}>
            {children}    
        </Context.Provider>;
    }
}

```
*Tips:* When use 'this.context', we should also declare the static variable called `contextType`. You can refer to the [Child1.js](./src/demo/Child1.js).

## Step3.Realize the connect method which accepts map parameters and returns a function that accecpts a component as parameter.

```javascript
export default const connect = (mapStateToProps, mapDispatchToProps) => {
    return component => {
        class WrapperComponent extends React.Component {
            render() {
                return <component
                        {...this.props}
                        {...mapStateToProps(this.context)}
                        {...mapDispatchToProps(this.context.dispatch)}
                        ></component>
            }
        }
    }
};
```

## *You can refer to the entire [project](https://github.com/wannamakeudance/react-redux-design-pattern/tree/master/src/demo)*

https://codesandbox.io/s/xenodochial-ride-lgq8ov?file=/src/Child.js:0-439