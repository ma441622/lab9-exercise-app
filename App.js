import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/components/Home";
import RepetitionExercise from "./src/components/RepetitionExercise";
import DurationExercise from "./src/components/DurationExercise";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="RepetitionExercise"
          component={RepetitionExercise}
        />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
