import React from 'react';

import moment from 'moment';



import {Link} from 'react-router-dom';
const ExpenseListItem = (props) => (
    <div>
    <Link to={`/edit/${props.id}`}>
        <h3>{props.description}  </h3></Link>
       
            <p>Amount: {props.amount}  Created AT: {moment(props.createdAt).format('DD MM, YYYY')}</p>
        
        
    </div>
);

export default ExpenseListItem;