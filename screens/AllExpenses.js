import { useContext } from 'react';
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expensesPeriod='total'
      expenses={expensesCtx.expenses}
      fallbackText='No registed expense found'
    />
  );
}

export default AllExpenses;
