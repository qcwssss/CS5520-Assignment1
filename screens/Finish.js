import { View, Modal, StyleSheet } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import FinishCard from "../components/FinishCard";
import BasicButton from "../components/ButtonComponent";
import LinearBackground from "../components/backgroud";

const FinishScreen = ({ modalVisible, isLater, phone, onStartAgain }) => {
  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <LinearBackground />
        <FinishCard phone={phone} isLater={isLater} />
        <BasicButton btnTitle={"Start Again"} onClick={onStartAgain} />
      </View>
    </Modal>
  );
};

export default FinishScreen;
