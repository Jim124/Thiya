import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='white' />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
