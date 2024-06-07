import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/ui/IconButton';
import Colors from './constants/colors';
import Map from './screens/Map';
import { init } from './util/database';
import PlaceDetails from './screens/PlaceDetails';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
            headerBackTitle: 'Back',
          }}
        >
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon='add'
                  color={tintColor}
                  size={24}
                  onPress={() => navigation.navigate('Add a Place')}
                />
              ),
            })}
          />
          <Stack.Screen
            name='Add a Place'
            component={AddPlace}
            options={{
              title: 'Add a New Place',
            }}
          />
          <Stack.Screen name='Map' component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await init();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
            headerBackTitle: 'Back',
          }}
        >
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon='add'
                  color={tintColor}
                  size={24}
                  onPress={() => navigation.navigate('Add a Place')}
                />
              ),
            })}
          />
          <Stack.Screen
            name='Add a Place'
            component={AddPlace}
            options={{
              title: 'Add a New Place',
            }}
          />
          <Stack.Screen name='Map' component={Map} />
          <Stack.Screen
            name='PlaceDetails'
            component={PlaceDetails}
            options={{ title: 'Loading Place...' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
