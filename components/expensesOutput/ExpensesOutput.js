import { View } from 'react-native';
import ExpenseSummary from './ExpenseSummary';
import ExpensesList from './ExpensesList';

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpenseSummary periodName={expensesPeriod} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default ExpensesOutput;
