import { View, Text, StyleSheet } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import Button from '../ui/Button';
import { getDateFormate } from '../../util/date';

function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultExpense,
}) {
  const [inputValues, setInputValues] = useState({
    amount: defaultExpense ? defaultExpense.amount.toString() : '',
    date: defaultExpense ? getDateFormate(defaultExpense.date) : '',
    description: defaultExpense ? defaultExpense.description : '',
  });

  function inputChangedHandler(inputIdentify, enteredValue) {
    setInputValues((currentInputValues) => {
      return { ...currentInputValues, [inputIdentify]: enteredValue };
    });
  }
  function submitHandler() {
    const expenseData = {
      amount: +inputValues['amount'],
      date: new Date(inputValues['date']),
      description: inputValues['description'],
    };
    onSubmit(expenseData);
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label='Amount'
          style={styles.rowInput}
          textConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputValues['amount'],
          }}
        />
        <Input
          label='Date'
          style={styles.rowInput}
          textConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValues['date'],
          }}
        />
      </View>
      <Input
        label='Description'
        textConfig={{
          multiline: true,
          autoCorrect: true,
          autoCapitalize: 'sentences',
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues['description'],
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginVertical: 24,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
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
});
