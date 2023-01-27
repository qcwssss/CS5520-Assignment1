import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/styles";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
    // console.log(emailError, email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign up</Text>
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
          <TextInput style={styles.inputField} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={"red"} />
          </View>
          <View style={styles.button}>
            <Button title="Sign up" onPress={() => validateEmail(email)} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
