import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/mealList/MealList';
function MealsOverviewScreen({ navigation }) {
  const route = useRoute();
  const catId = route.params.categoryId;
  const dispalyMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealList items={dispalyMeals} />;
}

export default MealsOverviewScreen;
