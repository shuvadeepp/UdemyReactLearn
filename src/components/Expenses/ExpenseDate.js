import React from 'react';

import './ExpenseItemstyle.css';

// export default function ExpenseDate (props) {
const ExpenseDate = (props) => {

    const Day       = props.date.toLocaleString('en-IN', { day: '2-digit' });
    const Month     = props.date.toLocaleString('en-IN', { month: 'long' });
    const Year      = props.date.getFullYear();

    return(
        //jsx:
            <div className='expense-date'>
                <div className='expense-date__day'>{ Day }</div>
                <div className='expense-date__month'>{ Month }</div>
                <div className='expense-date__year'>{ Year }</div>
            </div>
    );
}
export default ExpenseDate;