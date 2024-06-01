import { View, Text } from 'react-native';
function ExpenseSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, currentNum) => sum + currentNum, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expenseSum}</Text>
    </View>
  );
}

export default ExpenseSummary;
