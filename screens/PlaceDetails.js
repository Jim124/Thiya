import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import OutlinedButton from '../components/ui/OutlinedButton';
import Colors from '../constants/colors';
import { useEffect, useState } from 'react';
import { fetchPlaceById } from '../util/database';

function PlaceDetails({ route, navigation }) {
  const [place, setPlace] = useState();
  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    //fetch data from db;
    async function getPlaceById(selectedId) {
      const place = await fetchPlaceById(selectedId);
      setPlace(place);
      navigation.setOptions({ title: place.titile });
    }
    getPlaceById(selectedPlaceId);
  }, [selectedPlaceId]);

  function showOnMapHandler() {
    navigation.navigate('Map', {
      initLat: place.location.lat,
      initLng: place.location.lng,
    });
  }

  if (!place)
    return (
      <View>
        <Text>Loading place data...</Text>
      </View>
    );
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <OutlinedButton icon='map' onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    paddingTop: 24,
  },
  image: {
    height: '35%',
    minHeight: 350,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
