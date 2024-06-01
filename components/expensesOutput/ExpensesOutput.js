import { View, StyleSheet } from 'react-native';
import ExpenseSummary from './ExpenseSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

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
  {
    id: 'e8',
    description: 'a pair of shoes',
    amount: 59.99,
    date: new Date('2024-05-28'),
  },
  {
    id: 'e9',
    description: 'a pair of tourses',
    amount: 89.99,
    date: new Date('2024-05-29'),
  },
  {
    id: 'e10',
    description: 'some bananas',
    amount: 5.99,
    date: new Date('2024-05-30'),
  },
  {
    id: 'e11',
    description: 'a Book',
    amount: 12.99,
    date: new Date('2024-05-31'),
  },
  {
    id: 'e12',
    description: 'another book',
    amount: 59.99,
    date: new Date('2024-06-01'),
  },
  {
    id: 'e13',
    description: 'A fancy food',
    amount: 59.99,
    date: new Date('2024-06-02'),
  },
];
function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary periodName={expensesPeriod} expenses={DummyExpense} />
      <ExpensesList expenses={DummyExpense} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 0,
    paddingHorizontal: 12,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
