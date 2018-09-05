import { addExpense, removeExpense, editExpense} from '../../actions/expenses';

test("should setup removeExpense Action", () => {
    expect(removeExpense({id:'12'})).toEqual({
        type:'REMOVE_EXPENSE',
        id: '12'
    })
}) 

test("should setup editExpense Action", () => {

    const updates = {note:'A new note'};
    expect(editExpense('123a', updates)).toEqual({
        type:'EDIT_EXPENSE',
        id: '123a',
        updates
    })
})

test("should setup addExpense action with provided value", () => {
    const expenseData = {
        description: 'rent expense',
        note: 'rent',
        amount: 300,
        createdAt: 45484654
    }

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
        id: expect.any(String)
        }
        
    })
})

test("should setup addExpense action with default values", () => {
    const action = addExpense();

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id: expect.any(String)
        }
    })
})