import { createContext, useEffect, useReducer, useState } from 'react';
import { fetchExpense } from '../util/http';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  sendExpense: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'SET':
      const inversed = action.payload.reverse();
      return inversed;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  // initialize data from Firebase
  const [state, dispatch] = useReducer(expenseReducer, []);
  function addExpense(expense) {
    dispatch({ type: 'ADD', payload: expense });
  }
  function sendExpense(expenses) {
    dispatch({ type: 'SET', payload: expenses });
  }
  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }
  function updateExpense(id, expense) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expense } });
  }
  const value = {
    expenses: state,
    addExpense: addExpense,
    sendExpense: sendExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpenseContextProvider;
