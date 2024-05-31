import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/mealDetail/Subtitle';
import List from '../components/mealDetail/List';
function MealDetaiScreen({ route, navigation }) {
  const id = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === id);
  function headButtonPressHandler() {
    console.log('press button');
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title='Tap me' onPress={headButtonPressHandler} />;
      },
    });
  }, [navigation, headButtonPressHandler]);
  return (
    <ScrollView style={styles.rootScreen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        textStyle={styles.detailText}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetaiScreen;
const styles = StyleSheet.create({
  rootScreen: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
