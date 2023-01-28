import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import BasicButton from "../components/ButtonComponent";
import TextDisplayed from "../components/TextComponent";
import ConfirmInfo from "../components/ConfirmInfo";

const ConfirmScreen = ({ modalVisible, onGoback }) => {
  return (
    <Modal visible={modalVisible}>
      <View style={[styles.container, { justifyContent: "center" }]}>
        <View style={styles.card}>
          {/* <TextDisplayed text={"You have entered:"} />
          <TextDisplayed text={"Email"} />
          <TextDisplayed text={"phone"} />
          <TextDisplayed text={"Please confirm they are correct."} /> */}
          <ConfirmInfo />
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
