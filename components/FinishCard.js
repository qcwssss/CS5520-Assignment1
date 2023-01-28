import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import TextDisplayed from "../components/TextComponent";

const FinishCard = ({ phone }) => {
  let source = {
    uri: "https://picsum.photos/id/1024/100/100",
  };

  const message =
    "Thank you for signing up. \n" +
    "Here's a picture for you " +
    "(based on the last digit of your phone number).";

  return (
    <View style={styles.finsihCard}>
      <TextDisplayed text={message} />
      <View style={imgStyles.center}>
        <Image style={imgStyles.image} source={source} />
      </View>
    </View>
  );
};

const imgStyles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  center: {
    padding: 15,
    alignSelf: "center",
    alignItems: "center",
  },
});

export default FinishCard;
