import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';
function renderCategory(itemData) {
  return (
    <CategoryItem title={itemData.item.title} color={itemData.item.color} />
  );
}
function CategoryScreen() {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;
const styles = StyleSheet.create({});
