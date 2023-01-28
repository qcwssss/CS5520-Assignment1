import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import TextDisplayed from "./TextComponent";

const InputField = ({ label, enteredText, error, setValue }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.text, { marginVertical: 10 }]}>{label}</Text>
      <TextInput
        style={styles.inputField}
        value={enteredText}
        onChangeText={(changedText) => {
          setValue(changedText);
        }}
      />
      {error !== "" && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default InputField;
