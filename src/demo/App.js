/**
 * @file App.js
 * @author jingxiangzheng
 */
import './styles.css';
import Provider from '../react-redux-simple/Provider';
import Child from './Child2';
import {createStore} from 'redux';

const store = createStore(state => state, {x: 1, y: 222});

export default function App() {
    return (
        <div className='App'>
        <Provider store={store}>
            test
            <Child f={1}></Child>
        </Provider>
        </div>
    );
}
