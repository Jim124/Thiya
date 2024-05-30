import { View, Text, StyleSheet, Pressable } from 'react-native';
function CategoryItem({ title, color }) {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}

export default CategoryItem;
const styles = StyleSheet.create({});
