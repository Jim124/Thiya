import { View, Text, Button } from 'react-native';
function ProfileScreen({ navigation }) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View>
      <Text>Person screen</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
    </View>
  );
}

export default ProfileScreen;
