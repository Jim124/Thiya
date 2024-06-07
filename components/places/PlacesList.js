import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PlaceItem from './PlaceItem';
import Colors from '../../constants/colors';

function PlacesList({ places }) {
  const navigation = useNavigation();
  if (!places || places.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No places added yet - start to add a place
        </Text>
      </View>
    );
  }

  function onSelectHandler(selectedId) {
    navigation.navigate('PlaceDetails', { placeId: selectedId });
  }
  return (
    <FlatList
      alwaysBounceVertical={false}
      style={styles.listItem}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={onSelectHandler} />
      )}
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
  listItem: {
    padding: 24,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary200,
  },
});
