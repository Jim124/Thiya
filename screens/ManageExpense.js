import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isExisted = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isExisted ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isExisted]);

  function deleteExpenseHandler() {}
  return (
    <View style={styles.container}>
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
