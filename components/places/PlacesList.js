import { FlatList, View, Text, StyleSheet } from 'react-native';
import PlaceItem from './PlaceItem';

function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No places added yet - start to add a place
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
