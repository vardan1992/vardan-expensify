import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description:'Gum',
    note:'',
    amount:200,
    createdAt:0
},{
    id: '2',
    description:'Rent',
    note:'',
    amount:600,
    createdAt:-4545
},{
    id: '3',
    description:'Electricity',
    note:'',
    amount:400,
    createdAt:98989897
}
]

test("should filter by text", () => {
 const filters = {
     text: 'e',
     sortBy:'date',
     startDate: undefined,
     endDate: undefined
 }

 expect(selectExpenses(expenses,filters)).toEqual([expenses[0], expenses[2]]);
})