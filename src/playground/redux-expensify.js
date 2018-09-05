import {createStore, combineReducers } from 'redux';

import uuid from 'uuid';

// Action Generators : functions which return the action object

const addExpense = ({description='', note='', amount=0,createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})

// Reducers"  pure functions which returns state

const expensesReducerDefaultState = [];
const expensesReducer = (state=expensesReducerDefaultState,action) => {
        switch(action.type) {
            case 'ADD_EXPENSE':
                return [
                    ...state, action.expense
                ];
            case 'REMOVE_EXPENSE':
                return state.filter((expense) => {
                    return expense.id !== action.id;
                })
            case 'EDIT_EXPENSE':
                return state.map((expense) => {
                    if(expense.id === action.id){
                        return {
                            ...expense,
                            ...action.updates
                        }
                    } else {
                        return expense
                    }
                })
            default:
                return state;
        }
}


// Actions for filter Reducer

const setTextFilter = (text = '') => ({
    type:'FILTER_TEXT',
    text
})


const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
})

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState,action) =>{
  switch(action.type) {
      case 'FILTER_TEXT':
            return {
                ...state,
                text: action.text
            }
       case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
      default:
        return state;
  }
}
// Store :  which holds the state

const store =  createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

const getVisibleExpenses = (expenses,{ text , sortBy , startDate , endDate}) => {

            switch(sortBy) {
                case 'amount':
                  expenses.sort((a,b) => {
                      if(a.amount < b.amount) {
                          return 1
                      } else if (a.amount > b.amount) {
                          return -1
                      } else {
                          return 0;
                      }
                  })
                  break;
                case 'date':
                  expenses.sort((a,b) =>  a.createdAt < b.createdAt ? 1 : -1)
            }
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

         return startDateMatch && endDateMatch && textMatch;
    })
}

store.subscribe(() => {
    const state = store.getState();

    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

    console.log(visibleExpenses);
 })

const expense1 = store.dispatch(addExpense({
    description: 'rent',
    note: 'rent expense',
    amount: 10000,
    createdAt: -4545
}))

const expense2 = store.dispatch(addExpense({
    description: 'coffee',
    note: 'coffeeexpense',
    amount: 50,
    createdAt: 5454
}))

//store.dispatch(removeExpense({id: expense1.expense.id}));

//store.dispatch(editExpense(expense2.expense.id, {amount:400}))

store.dispatch(setTextFilter());

//store.dispatch(setTextFilter('co'));

store.dispatch(sortByAmount());

//store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

