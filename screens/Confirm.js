import { View, Modal, StyleSheet } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import BasicButton from "../components/ButtonComponent";
import ConfirmInfo from "../components/ConfirmInfo";

const ConfirmScreen = ({
  modalVisible,
  onGoback,
  email,
  phone,
  onConfirmInfo,
  onClickLater,
}) => {
  return (
    <Modal visible={modalVisible}>
      <View style={styles.centeredContainer}>
        <View style={styles.card}>
          <ConfirmInfo email={email} phone={phone} />
          <View style={confirmStyles.buttonContainer}>
            <BasicButton
              btnTitle={"Go back"}
              btnColor={"red"}
              onClick={onGoback}
            />
            <BasicButton btnTitle={"Confirm"} onClick={onConfirmInfo} />
            <BasicButton btnTitle={"Finish later"} onClick={onClickLater} />
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
