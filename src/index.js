import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CalculatorContainer from './Containers/CalculatorContainer'
import reducer from './Reducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

//reducerによって変更された状態（store）をcontainerに渡す
ReactDOM.render(
    <Provider store={store}>
    <CalculatorContainer />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
