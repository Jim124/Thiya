import { View, Text, StyleSheet, Alert } from 'react-native';
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
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultExpense ? defaultExpense.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultExpense ? getDateFormate(defaultExpense.date) : '',
      isValid: true,
    },
    description: {
      value: defaultExpense ? defaultExpense.description : '',
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentify, enteredValue) {
    setInputs((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentify]: { value: enteredValue, isValid: true },
      };
    });
  }
  function submitHandler() {
    const expenseData = {
      amount: +inputs['amount'].value,
      date: new Date(inputs['date'].value),
      description: inputs['description'].value,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  }
  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
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
            value: inputs['amount'].value,
          }}
        />
        <Input
          label='Date'
          style={styles.rowInput}
          textConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs['date'].value,
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
          value: inputs['description'].value,
        }}
      />
      {formIsInvalid && (
        <Text>Invalid input value -please check your input data</Text>
      )}
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
    marginVertical: 16,
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
