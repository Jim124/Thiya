import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpenses';
import { GlobalStyles } from './constants/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import IconButton from './components/ui/IconButton';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomNavigator() {
  function onPressHandler() {}
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            color={tintColor}
            size={24}
            icon='plus'
            onPress={onPressHandler}
          />
        ),
      }}
    >
      <BottomTabs.Screen
        name='RecentExpenses'
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='ExpensesOverview'
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Manage Expense' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
