import { Pressable, StyleSheet, View, Text } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
      {/* making the view clikable*/}
    </View>
  );
}

export default CategoryGridTile;
