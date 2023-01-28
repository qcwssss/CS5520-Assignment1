import { View } from "react-native";
import TextDisplayed from "./TextComponent";
import React from "react";

const ConfirmInfo = ({ email, phone }) => {
  return (
    <View>
      <TextDisplayed text={"You have entered:"} />
      <TextDisplayed text={email} />
      <TextDisplayed text={phone} />
      <TextDisplayed text={"Please confirm they are correct."} />
    </View>
  );
};

export default ConfirmInfo;
