//component are javascript function

import React from 'react';
import './ExpenseItemstyle.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';


// export default function ExpenseItem(props) {
const ExpenseItem = (props) => {
   /*  const expenseDate = new Date();
    const expensTitle = 'Car Insurance';
    const expenseAmount = 194; */
    const indianCurrencySign = "₹";
    const ClickHandler = () => {
        alert(1111);
    };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                <h2> {props.title} </h2>
                    <div className='expense-item__price'> {indianCurrencySign}{props.amount} </div>
                </div>
                <button onClick={ ClickHandler }> Change Title </button>
            </Card>
        </li>
    );
}
export default ExpenseItem;