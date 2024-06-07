import { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Colors from '../../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../ui/Button';
import { Place } from '../../models/place';

function PlaceForm({ onCreatePlace }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [takeImage, setTakeImage] = useState('');
  const [pickedPlace, setPickedPlace] = useState();

  function changeTitleHandler(enteredTitle) {
    setEnteredTitle(enteredTitle);
  }

  function takeImageHandler(imageUri) {
    setTakeImage(imageUri);
  }

  const pickPlaceHandler = useCallback(
    (pickedLocation) => {
      setPickedPlace(pickedLocation);
    },
    [setPickedPlace]
  );

  function savePlaceHandler() {
    const placeData = new Place(enteredTitle, takeImage, pickedPlace);
    onCreatePlace(placeData);
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={enteredTitle}
          onChangeText={changeTitleHandler}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickedLocation={pickPlaceHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
