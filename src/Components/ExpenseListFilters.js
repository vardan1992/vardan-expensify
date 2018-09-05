import React from 'react';

import {connect} from 'react-redux';

import {setTextFilter , sortByAmount ,  sortByDate, setStartDate, setEndDate } from '../actions/filters';

import {DateRangePicker} from 'react-dates';

class ExpenseListFilters extends React.Component  {

    state = {
        calenderFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
       this.props.dispatch(setStartDate(startDate));

       this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calenderFocused) =>{
        this.setState(() => {
            return {
                calenderFocused
            }
        })
    }
    render() {

        const {props} = this;
        return (
            <div>
                <input type="text" placeholder="Search Expense" value={props.filters.text} onChange = {(e) => {
                props.dispatch(setTextFilter(e.target.value));
        }} />
        <select value={props.filters.sortBy} onChange = {(e) => {
            const selectedOption = e.target.value;

            selectedOption === 'amount' ? props.dispatch(sortByAmount()) : props.dispatch(sortByDate());
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>

        <DateRangePicker
            startDate={props.filters.startDate} // momentPropTypes.momentObj or null,
            startDateId="startDate" // PropTypes.string.isRequired,
            endDate={props.filters.endDate} // momentPropTypes.momentObj or null,
            endDateId="endDate" // PropTypes.string.isRequired,
            onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
            focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
            showClearDates={true}
            numberOfMonths = {1}
            isOutsideRange = {() => false}
        />
    </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps) (ExpenseListFilters);