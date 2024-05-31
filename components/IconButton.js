import { Pressable, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

function IconButton({ name, color, onPress }) {
  return (
    <Pressable
      android_ripple={{ color: '#ccc' }}
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <AntDesign name={name} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
