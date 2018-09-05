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


store.dispatch(addExpense({
    description: 'water bill',
    amount: 200,
    createdAt: 15422
}))

store.dispatch(addExpense({
    description: 'gas bill',
    amount: 400,
    createdAt: -4554545
}))

store.dispatch(addExpense({
    description: 'electricity bill',
    amount: 1000,
    createdAt: 4554445457884
}))
//store.dispatch(setTextFilter('bill'));


const state = store.getState();

console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store ={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx ,document.getElementById('app'));