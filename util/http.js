import axios from 'axios';

const BACK_URL =
  'https://react-native-test-fb759-default-rtdb.asia-southeast1.firebasedatabase.app';

export function storeExpense(expenseData) {
  axios.post(BACK_URL + '/expense.json', expenseData);
}

export async function fetchExpense() {
  const response = await axios.get(BACK_URL + 'expense.json');
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
