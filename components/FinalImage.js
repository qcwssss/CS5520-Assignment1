import { View, StyleSheet, Image } from "react-native";
import React from "react";

const getLastFourDigits = (phoneNumber) => {
  if (typeof phoneNumber === "string" && phoneNumber.length === 10) {
    return phoneNumber.slice(-1);
  } else {
    // test only, this line won't execute from starting screen.
    return "10";
  }
};

const getImageUrl = (phone) => {
  const lastDigit = getLastFourDigits(phone);
  return { uri: `https://picsum.photos/id/${lastDigit}/100/100` };
};

const ImageInFinishScreen = ({ phone }) => {
  const img = getImageUrl(phone);
  //   console.log(img);
  return (
    <View style={imgStyles.imageContainer}>
      <Image
        style={imgStyles.image}
        source={img}
        //   source={require("../assets/images/smile.png")}
      />
    </View>
  );
};

const imgStyles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  imageContainer: {
    padding: 15,
    alignSelf: "center",
    alignItems: "center",
  },
});

export default ImageInFinishScreen;
