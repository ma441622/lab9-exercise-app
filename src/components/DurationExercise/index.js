import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

const DurationExercise = ({ route, navigation }) => {
  const { name, suggested } = route.params;
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // styling button
  const PinkButtonStyle = {
    backgroundColor: "#FFC0CB",
    padding: 12,
    borderRadius: 8,
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const CalcTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(3, "0")}`;
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

      {/* timer */}
      <Text style={{ fontSize: 24, marginVertical: 10 }}>
        Time: {CalcTime(time)}
      </Text>

      {/* reset button */}
      <Button
        title={isRunning ? "Reset" : "Start"}
        onPress={() => {
          if (isRunning) {
            setTime(0);
            setIsRunning(false);
          } else {
            setIsRunning(true);
          }
        }}
        containerStyle={{ marginBottom: 10, width: 150 }}
        buttonStyle={PinkButtonStyle}
      />

      {/* Home Button */}
      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
        containerStyle={{ marginTop: 10, width: 150 }}
        buttonStyle={PinkButtonStyle}
      />
    </View>
  );
};

export default DurationExercise;
