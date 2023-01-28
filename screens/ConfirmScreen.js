import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import SignupHeader from "../components/Header";

const ConfirmScreen = ({ modalVisible }) => {
  return (
    <Modal visible={modalVisible}>
      <View style={[styles.container, { justifyContent: "center" }]}>
        <View style={styles.card}>
          <Text>You have entered:</Text>
          <Text>Email</Text>
          <Text>phone</Text>
          <Text>Please confirm they are correct</Text>
          <View style={confirmStyles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Go back" color={"red"} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" />
            </View>
            <View style={styles.button}>
              <Button title="Finish later" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const confirmStyles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default ConfirmScreen;
