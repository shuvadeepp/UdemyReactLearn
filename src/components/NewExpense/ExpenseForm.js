import React, { useState }  from 'react';
import './ExpenseForm.css';

    const ExpenseForm = (props) => {

        const [enteredTitle, setEnteredTitle] = useState('');
        const [enteredAmount, setEnteredAmount] = useState('');
        const [enteredDate, setEnteredDate] = useState('');

                                /* or */

        // const [userInput, setUserInput] = useState({

        //     enteredTitle: '',
        //     enteredAmount: '',
        //     enteredDate: ''

        // });

        /* Title Function */
        const titleChangeHandler = (event) => {
            // console.log("Title Working Fine!!!");
            console.log(event.target.value);
            setEnteredTitle(event.target.value);
            /* setUserInput({
                ...userinput,
                enteredTitle: event.target.value
            }) */
            /* setUserInput((preState) => {
                return(...preState, enteredTitle: event.target.value);
            }); */
                
        };

        /* Amount Function */
        const amountChangeHandler = (event) => {
            // alert(111);
            console.log(event.target.value);
            setEnteredAmount(event.target.value);
            /* setUserInput({
                ...userinput,
                enteredAmount: event.target.value
            }) */
            /* setUserInput((preState) => {
                return(...preState, enteredAmount: event.target.value);
            }); */

        };

        /* Date Function */
        const dateChangeHandler = (event) => {
            // alert(111);
            console.log(event.target.value);
            setEnteredDate(event.target.value);
            /* setUserInput({
                ...userinput,
                enteredDate: event.target.value
            }) */
            /* setUserInput((preState) => {
                return(...preState, enteredDate: event.target.value);
            }); */

        };

        /* When click on the submit button this function works */
        const submitHandler = (e) => {
            e.preventDefault();
            console.log('You clicked submit.');

            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            };
            // console.log(expenseData)
            props.onSaveExpenseData(expenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');

        };

        return (

            <form >
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label> Title </label>
                        <input type="text" placeholder='Title' value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label> Amount </label>
                        <input type="number" placeholder='Amount' value={enteredAmount} onChange={amountChangeHandler}  />
                    </div>
                    <div className='new-expense__control'>
                        <label> Date </label>
                        <input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                    </div>

                    <div className='new-expense__actions'>
                        <button type="submit" onClick={submitHandler}> Add Expense </button>
                    </div>
                </div>
            </form>

        );

    }

export default ExpenseForm;