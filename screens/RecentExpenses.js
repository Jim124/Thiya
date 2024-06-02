import { useContext } from 'react';
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 3);
    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput expensesPeriod='last 7 days' expenses={recentExpenses} />
  );
}

export default RecentExpenses;
