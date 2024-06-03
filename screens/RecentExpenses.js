import { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpense } from '../util/http';
import LoadingOverlay from '../components/ui/LoadingOverlay';
function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenseData() {
      setIsFetching(true);
      const expenses = await fetchExpense();
      setIsFetching(false);
      expensesCtx.sendExpense(expenses);
    }
    getExpenseData();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }
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
