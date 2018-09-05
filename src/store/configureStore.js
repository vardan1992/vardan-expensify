import {createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';

import filterReducer from '../reducers/filters';


// Store :  which holds the state

export default () => {
    const store =  createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        })
    );

    return store;
    
}

