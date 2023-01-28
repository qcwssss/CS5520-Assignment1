import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import BasicButton from "../components/ButtonComponent";

const ConfirmScreen = ({ modalVisible, onGoback }) => {
  return (
    <Modal visible={modalVisible}>
      <View style={[styles.container, { justifyContent: "center" }]}>
        <View style={styles.card}>
          <Text>You have entered:</Text>
          <Text>Email</Text>
          <Text>phone</Text>
          <Text>Please confirm they are correct</Text>
          <View style={confirmStyles.buttonContainer}>
            <BasicButton
              btnTitle={"Go back"}
              btnColor={"red"}
              onClick={onGoback}
            />
            <BasicButton btnTitle={"Confirm"} />
            <BasicButton btnTitle={"Finish later"} />
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
