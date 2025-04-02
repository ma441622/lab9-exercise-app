import React from "react";
import { View, FlatList, Text } from "react-native";
import { Button } from "react-native-elements";

const exercises = [
  { name: "Push-ups", type: "Repetition", suggested: "Bicycling" },
  { name: "Bicycling", type: "Duration", suggested: "Jumping Jacks" },
  { name: "Jumping Jacks", type: "Repetition", suggested: "Sit-ups" },
  { name: "Sit-ups", type: "Repetition", suggested: "Push-ups" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Select an Exercise
      </Text>

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() =>
              navigation.navigate(
                item.type === "Repetition"
                  ? "RepetitionExercise"
                  : "DurationExercise",
                { name: item.name, suggested: item.suggested }
              )
            }
            buttonStyle={{
              backgroundColor: "#FFC0CB",
              padding: 12,
              borderRadius: 8,
            }}
            containerStyle={{ marginVertical: 10 }}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
