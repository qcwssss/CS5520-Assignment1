import { View, Text } from "react-native";
import TextDisplayed from "./TextComponent";
import React from "react";

const ConfirmInfo = () => {
  return (
    <View>
      <TextDisplayed text={"You have entered:"} />
      <TextDisplayed text={"Email"} />
      <TextDisplayed text={"phone"} />
      <TextDisplayed text={"Please confirm they are correct."} />
    </View>
  );
};

export default ConfirmInfo;
