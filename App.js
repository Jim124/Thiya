import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c06fb' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          drawerStyle: { backgroundColor: '#ccc' },
        }}
      >
        <Drawer.Screen
          name='Home'
          component={HomeScreen}
          options={{
            drawerLabel: 'Welcome to Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='home' color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            drawerLabel: 'Profile',
            drawerIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name='person-sharp' />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
