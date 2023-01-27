import React from "react";
import { View, Button } from "react-native";
import InputComponent from "../signup/EmailInput";
import { styles } from "../../styles/styles";

const SignUpComponent = () => {
  state = {
    username: "",
    password: "",
    email: "",
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      // here place your signup logic
      console.log("user successfully signed up!: ", success);
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };

  return (
    <View style={styles.card}>
      <InputComponent title={"Email Address"} />
      <InputComponent title={"Phone Number"} />
      <View style={styles.btnContainer}>
        <View style={styles.button}>
          <Button
            color="white"
            title="Confirm"
            // onPress={() => {
            //   textUpdateFunction(text);
            //   setText("");
            // }}
          ></Button>
        </View>
        <View style={styles.button}>
          <Button
            title="Cancel"
            color="white"
            // onPress={onCancel}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpComponent;
