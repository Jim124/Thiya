import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoryScreen from './screen/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavoriteContextProvider from './store/context/favorite-context';
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealDetaiScreen from './screen/MealDetaiScreen';
import FavoriteScreen from './screen/FavoriteScreen';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        drawerContentStyle: { backgroundColor: '#351401' },
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerActiveTintColor: '#351401',
        drawerInactiveTintColor: 'white',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star-outline' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name='Home'
              component={DrawerNavigator}
              options={{
                title: 'Home',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen name='Meal' component={MealDetaiScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoriteContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
