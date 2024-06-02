import { useContext, useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/ui/Button';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/manageExpense/ExpenseForm';
function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isExisted = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isExisted ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isExisted]);

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(expenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isExisted) {
      expenseCtx.updateExpense(expenseId, {
        description: 'test update',
        amount: 57.12,
        date: new Date(),
      });
    } else {
      expenseCtx.addExpense({
        description: 'test add',
        amount: 12.33,
        date: new Date(),
      });
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isExisted ? 'Update' : 'Add'}
        onCancel={cancelHandler}
      />

      {isExisted && (
        <View style={styles.buttonContainer}>
          <IconButton
            icon='delete'
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  buttonContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
