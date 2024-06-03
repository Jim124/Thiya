import { useContext, useEffect } from 'react';
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpense } from '../util/http';
function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenseData() {
      const expenses = await fetchExpense();
      expensesCtx.sendExpense(expenses);
    }
    getExpenseData();
  }, []);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expensesPeriod='last 7 days'
      expenses={recentExpenses}
      fallbackText='No registed expenses found in 7 days ago'
    />
  );
}

export default RecentExpenses;
