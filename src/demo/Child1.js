import Context from '../react-redux-simple/Context';
import React from 'react';

export default class Child extends React.Component {
    
    // this variable is very important!!
    static contextType = Context;

    render() {
        return <h1>{this.context}</h1>;
    }
}
