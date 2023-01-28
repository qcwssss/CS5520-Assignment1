import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import InputCard from "../components/InputCard";
import { useState } from "react";
import { styles } from "../styles/styles";
import SignupHeader from "../components/Header";
import ConfirmScreen from "./ConfirmScreen";

const Register = () => {
  const [sigupClicked, setSigupClicked] = useState(false);
  const onSignup = () => {
    setSigupClicked(true);
  };

  const onGoback = () => {
    setSigupClicked(false);
  };

  return (
    <View style={styles.container}>
      <SignupHeader />
      <InputCard onSignup={onSignup} />
      <ConfirmScreen modalVisible={sigupClicked} onGoback={onGoback} />
    </View>
  );
};

export default Register;
