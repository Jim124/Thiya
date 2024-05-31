import { View, Text, StyleSheet } from 'react-native';
function Subtitle({ children }) {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
