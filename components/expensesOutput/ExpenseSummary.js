import { View, Text } from 'react-native';
function ExpenseSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expenseSum.toFixed()}</Text>
    </View>
  );
}

export default ExpenseSummary;
