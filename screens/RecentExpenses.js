import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
function RecentExpenses() {
  return <ExpensesOutput expensesPeriod='last 7 days' />;
}

export default RecentExpenses;
