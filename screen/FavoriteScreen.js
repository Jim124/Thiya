import { View, Text, StyleSheet } from 'react-native';
import { FavoritesContext } from '../store/context/favorite-context';
import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/mealList/MealList';
function FavoriteScreen() {
  const favoritesMealsCtx = useContext(FavoritesContext);
  const items = MEALS.filter((meal) => favoritesMealsCtx.ids.includes(meal.id));
  if (!items) {
    return (
      <View style={styles.rootContainer}>
        <Text>My favorite Screen</Text>
      </View>
    );
  }
  return <MealList items={items} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
});
