import moment from 'moment';

import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';

test("should generate setStartDate action object", () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
})

test("should generate endStartDate action object", () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
})

test("should generate textFilter action object with provided values", () => {
    const action = setTextFilter("rent");

    expect(action).toEqual({
        type:'FILTER_TEXT',
        text: 'rent'
    })
})

test("should generate textFilter action object with default values", () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type:'FILTER_TEXT',
        text: ''
    })
})


test("should generate sortByAmount action object", () => {
    const action =  sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test("should generate sortByDate action object", () => {
    const action =  sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

