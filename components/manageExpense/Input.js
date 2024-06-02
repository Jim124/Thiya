import { TextInput } from 'react-native';

function Input({ label, textConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textConfig} />
    </View>
  );
}

export default Input;
