import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/styles";
import { View } from "react-native";

const LinearBackground = () => {
  return (
    <>
      <LinearGradient
        colors={["#00ffff", "#e6e6fa"]}
        style={styles.bgContainer}
      />
    </>
  );
};

export default LinearBackground;
