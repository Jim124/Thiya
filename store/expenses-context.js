import { createContext, useReducer } from 'react';

const DummyExpense = [
  {
    id: 'e1',
    description: 'a pair of shirts',
    amount: 59.99,
    date: new Date('2024-05-27'),
  },
  {
    id: 'e2',
    description: 'a pair of shoes',
    amount: 59.99,
    date: new Date('2024-05-28'),
  },
  {
    id: 'e3',
    description: 'a pair of tourses',
    amount: 89.99,
    date: new Date('2024-05-29'),
  },
  {
    id: 'e4',
    description: 'some bananas',
    amount: 5.99,
    date: new Date('2024-05-30'),
  },
  {
    id: 'e5',
    description: 'a Book',
    amount: 12.99,
    date: new Date('2024-05-31'),
  },
  {
    id: 'e6',
    description: 'another book',
    amount: 59.99,
    date: new Date('2024-06-01'),
  },
  {
    id: 'e7',
    description: 'A fancy food',
    amount: 59.99,
    date: new Date('2024-06-02'),
  },
];
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
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
  const [state, dispatch] = useReducer(expenseReducer, DummyExpense);
  function addExpense(expense) {
    dispatch({ type: 'ADD', payload: expense });
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
