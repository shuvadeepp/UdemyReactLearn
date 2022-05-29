import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// function App() { #This is basic js function
const App = () => { 
  
  const expenses = [
    {
      id: 'E1',
      title: 'Toilet Paper',
      amount: '51',
      date: new Date()
    },
    {
      id: 'E2',
      title: 'Car Insurance',
      amount: '251',
      date: new Date()
    },
    {
      id: 'E3',
      title: 'Bike Insurance',
      amount: '151',
      date: new Date()
    }
  ];

  const addExpenseHandler = expense => {
    console.log('In app.js');
    console.log(expense);
  }

  // console.log(expense);

/* React Object */
/* return React.createElement(
  'div', 
    {}, 
      React.createElement('h2',{},"Let's get started!"),
      React.createElement(Expenses, { items: expenses })
); */

/* This is jsx inline css */
const mystyle = {
  textAlign: "center"
};

/* JSX */
  return (
    <div>
      <h2 style={mystyle}>Let's Get Started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
  
}

export default App;
