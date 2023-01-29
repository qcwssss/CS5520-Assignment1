import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import TextDisplayed from "../components/TextComponent";
import ImageInFinishScreen from "./FinalImage";

const getFinishContent = (isLater) => {
  let message;
  if (isLater) {
    message = "Sorry to see you go.";
  } else {
    message =
      "Thank you for signing up. \n" +
      "Here's a picture for you " +
      "(based on the last digit of your phone number).";
  }
  return message;
};

const FinishCard = ({ isLater, phone }) => {
  const message = getFinishContent(isLater);

  return (
    <View style={styles.finsihCard}>
      <TextDisplayed text={message} />
      <ImageInFinishScreen phone={phone} />
    </View>
  );
};

export default FinishCard;
