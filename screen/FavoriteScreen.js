import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/mealList/MealList';
import { useSelector } from 'react-redux';
function FavoriteScreen() {
  const favoriteMealIds = useSelector((state) => state.favorite.ids);
  const items = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));
  if (items.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet!</Text>
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
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});
