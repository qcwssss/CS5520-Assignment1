import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/styles";
import BasicButton from "./ButtonComponent";

const InputCard = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhoneNumber = (phoneNumber) => {
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError("Please enter a valid phone number");
    } else {
      setPhoneError("");
    }
  };

  const reset = () => {
    setEmailError("");
    setEmail("");
    setPhoneError("");
    setPhone("");
  };

  const onClickSignup = () => {
    validateEmail(email);
    validatePhoneNumber(phone);
    if (
      emailError === "" &&
      phoneError === "" &&
      email.length > 3 &&
      phone.length === 10
    ) {
      onSignup();
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput
          style={styles.inputField}
          value={email}
          onChangeText={(inputEmail) => {
            setEmail(inputEmail);
          }}
        />
        {emailError !== "" && <Text style={styles.error}>{emailError}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          style={styles.inputField}
          value={phone}
          onChangeText={(inputPhoneNumber) => {
            setPhone(inputPhoneNumber);
          }}
        />
        {phoneError !== "" && <Text style={styles.error}>{phoneError}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        {/* <View style={styles.button}>
          <Button title="Reset" color={"red"} onPress={reset} />
        </View> */}
        <BasicButton btnTitle={"Reset"} btnColor={"red"} onClick={reset} />
        {/* <View style={styles.button}>
          <Button title="Sign up" onPress={onClickSignup} />
        </View> */}
        <BasicButton btnTitle={"Sign Up"} onClick={onClickSignup} />
      </View>
    </View>
  );
};

export default InputCard;
