/**
 * @file realize a Provider component
 * @author jingxiangzheng
 */
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