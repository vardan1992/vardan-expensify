import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './Routers/AppRouter';

import configureStore from './store/configureStore';

import { Provider } from 'react-redux';

import { addExpense } from './actions/expenses';

import { setTextFilter, sortByAmount } from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();



const jsx = (
    <Provider store ={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx ,document.getElementById('app'));