import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

const RepetitionExercise = ({ route, navigation }) => {
  const { name, suggested } = route.params;
  const [count, setCount] = useState(0);

  // styling button
  const PinkButtonStyle = {
    backgroundColor: "#FFC0CB",
    padding: 12,
    borderRadius: 8,
  };

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      {/* title */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        {name}
      </Text>

      {/* suggestion */}
      <Button
        title={`Suggested: ${suggested}`}
        onPress={() =>
          navigation.navigate(
            suggested === "Bicycling"
              ? "DurationExercise"
              : "RepetitionExercise",
            { name: suggested, suggested: name }
          )
        }
        containerStyle={{ marginBottom: 15, width: 200 }}
        buttonStyle={{
          backgroundColor: "#E37383",
          padding: 9,
          borderRadius: 8,
        }}
      />

      {/* repetition */}
      <Text style={{ fontSize: 24, marginVertical: 10 }}>
        Repetitions: {count}
      </Text>

      {/* rep and reset */}
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
        <Button
          title="Complete Rep"
          onPress={() => setCount(count + 1)}
          containerStyle={{ width: 150 }}
          buttonStyle={PinkButtonStyle} // Reused style
        />
        <Button
          title="Reset"
          onPress={() => setCount(0)}
          containerStyle={{ width: 150 }}
          buttonStyle={PinkButtonStyle} // Reused style
        />
      </View>

      {/* home */}
      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
        containerStyle={{ marginTop: 10, width: 150 }}
        buttonStyle={PinkButtonStyle}
      />
    </View>
  );
};

export default RepetitionExercise;
