import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isExisted = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isExisted ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isExisted]);
  return (
    <View>
      <Text>manage expense</Text>
    </View>
  );
}

export default ManageExpense;
