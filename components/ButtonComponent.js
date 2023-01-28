import { View, Button } from "react-native";
import { styles } from "../styles/styles";
import React from "react";

const BasicButton = ({ btnTitle, onClick, btnColor = "" }) => {
  return (
    <View style={styles.button}>
      <Button title={btnTitle} color={btnColor} onPress={onClick} />
    </View>
  );
};

export default BasicButton;
