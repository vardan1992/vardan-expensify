import React from 'react';

import moment from 'moment';

import 'react-dates/initialize';

import { SingleDatePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';


class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description :'',
            note: props.expense ? props.expense.note : '',
            amount: props.expense? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt):moment(),
            focused: false,
            error: ''
        }
    }

    
    handleDescription = (e) => {
        const description = e.target.value;

        this.setState(() => {
            return {
                description
            }
        })
    }

    handleNote = (e) => {
        const note = e.target.value;

        this.setState(() => {
            return {
                note
            }
        })
    }

    handleAmount = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }

    handleDate = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}))
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error:'Please Provide description and amount.'}))
        } else {
            this.setState(() => ({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount,10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error  && <p>{this.state.error }</p>}
                <form onSubmit = {this.onFormSubmit}>
                <ul>
                    <li>
                        <input 
                          type="text" 
                          placeholder="Description" 
                          autoFocus
                          value={this.state.description}
                          onChange = {this.handleDescription}
                           />
                    </li>
                    <li>
                     <input type="text" placeholder="Amount" 
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.handleAmount}
                     /> 
                     </li>
                     <li>
                        <textarea 
                            placeholder="Enter a note (optional)" 
                            value = {this.state.note}
                            onChange ={ this.handleNote}

                           />
                    </li>
                    <li>
                        <SingleDatePicker
                                date={this.state.createdAt} // momentPropTypes.momentObj or null
                                onDateChange={this.handleDate} // PropTypes.func.isRequired
                                focused={this.state.focused} // PropTypes.bool
                                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                id="1" // PropTypes.string.isRequired,
                                numberOfMonths= {1}
                                isOutsideRange = {() => false}
                                />
                    </li>
                    <button>{this.props.expense ? 'Edit Expense': 'Add Expense' }</button>
                </ul>
                </form>
                
            </div>
        )
    }
}

export default ExpenseForm;