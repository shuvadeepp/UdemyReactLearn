
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpenseList';
import './Expenses.css';

const Colour = {
    color: "white",
    textAlign: "center"
};
// function Expenses (props) {
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const FilterChangeHandler = selectedYear => {
        console.log("Expenses.js");
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    /* Year Filter Condition */
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter 
                    selected={filteredYear} 
                    onChangeFilter={FilterChangeHandler} 
                />

                <ExpensesList items={filteredExpenses} />

                {/* This is Dynamic method and using turnary oparetor */}
                {/* {filteredExpenses.length === 0 ? <p style={Colour}> Sorry in this year no expenses found! </p> : filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                    />

                ))}  */}

                {/* This is Static method */}
                {/* <ExpenseItem 
                    title={props.items[0].title} 
                    amount={props.items[0].amount} 
                    date={props.items[0].date} 
                />
                <ExpenseItem 
                    title={props.items[1].title} 
                    amount={props.items[1].amount} 
                    date={props.items[1].date} 
                />
                <ExpenseItem 
                    title={props.items[2].title} 
                    amount={props.items[2].amount} 
                    date={props.items[2].date} 
                /> */}
            </Card>
        </div>
    );
}

export default Expenses;