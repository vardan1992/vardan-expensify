import moment from 'moment';

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
const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt),'day') : true;
const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt),'day') : true;
const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

 return startDateMatch && endDateMatch && textMatch;
})
}

export default getVisibleExpenses;