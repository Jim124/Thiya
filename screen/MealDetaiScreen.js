import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import { useContext, useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/mealDetail/Subtitle';
import List from '../components/mealDetail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorite-context';
function MealDetaiScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const id = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === id);
  const isExisted = favoriteMealsCtx.ids.includes(id);
  function headButtonPressHandler() {
    if (isExisted) {
      favoriteMealsCtx.removeFavorite(id);
    } else {
      favoriteMealsCtx.addFavorite(id);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={isExisted ? 'star' : 'staro'}
            color='white'
            onPress={headButtonPressHandler}
          />
        );
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
