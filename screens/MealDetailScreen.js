import { StyleSheet, Text, View } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return <Text>This is the meal detail page / screen ({mealId})</Text>;
}

export default MealDetailScreen;

const styles = StyleSheet.create({});
