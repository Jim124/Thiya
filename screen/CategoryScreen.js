import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';
// function renderCategory(itemData) {
//   return (

//   );
// }
function CategoryScreen({ navigation }) {
  function pressHandler(id) {
    navigation.navigate('MealsOverview', { categoryId: id });
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CategoryItem
            title={itemData.item.title}
            color={itemData.item.color}
            id={itemData.item.id}
            onPress={pressHandler}
          />
        )}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;
const styles = StyleSheet.create({});
