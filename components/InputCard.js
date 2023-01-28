import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/styles";
import BasicButton from "./ButtonComponent";
import InputField from "./InputField";

const alertMessage = (type) => {
  return `Please enter a valid ${type}.`;
};

const InputCard = ({ onSignup, email, phone, setEmail, setPhone }) => {
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) setEmailError(alertMessage("email"));
    else setEmailError("");
  };

  const validatePhoneNumber = (phoneNumber) => {
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber))
      setPhoneError(alertMessage("phone number"));
    else setPhoneError("");
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
      <InputField
        label={"Email Address"}
        enteredText={email}
        error={emailError}
        setValue={setEmail}
      />
      <InputField
        label={"Phone Number"}
        enteredText={phone}
        error={phoneError}
        setValue={setPhone}
      />
      <View style={styles.buttonContainer}>
        <BasicButton btnTitle={"Reset"} btnColor={"red"} onClick={reset} />
        <BasicButton btnTitle={"Sign Up"} onClick={onClickSignup} />
      </View>
    </View>
  );
};

export default InputCard;
