import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/ui/Button';
function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isExisted = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isExisted ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isExisted]);

  function deleteExpenseHandler() {}
  function cancelHandler() {}
  function confirmHandler() {}
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isExisted ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 150,
    marginHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
