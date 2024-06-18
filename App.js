import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile/Profile';

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.container}>
        <Profile />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
