import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
export default function App() {
  useEffect(() => {
    async function configurationPushNofication() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;
      if (finalStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        Alert.alert(
          'Permission required',
          'Push notifications need the appropriate permissions'
        );
        return;
      }
      const pushTokenData = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      });
      console.log(pushTokenData);
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    }
    configurationPushNofication();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log('notification received');
      }
    );
    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log('Notification response received');
      }
    );
    return () => {
      subscription.remove();
      subscription2.remove();
    };
  }, []);

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'my first local notificaton',
        body: 'this is the body of the notification',
        data: { username: 'Jim' },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  function sendPushNotification() {
    fetch(`https://exp.host/--/api/v2/push/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        to: 'ExponentPushToken[yyyyyyyyyyyyyyyyyyyyyy]',
        title: 'test push notification',
        body: 'this is a test',
      }),
    });
  }
  return (
    <View style={styles.container}>
      <Button
        title='Shedule Notification'
        onPress={scheduleNotificationHandler}
      />
      <Button title='Send Push Notification' onPress={sendPushNotification} />
      <StatusBar style='auto' />
    </View>
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
