import { View } from "react-native";
import InputCard from "../components/InputCard";
import { useState } from "react";
import { styles } from "../styles/styles";
import SignupHeader from "../components/Header";
import ConfirmScreen from "./Confirm";
import FinishScreen from "./Finish";

const StartingScreen = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [sigupClicked, setSigupClicked] = useState(false);
  const [confirmClicked, setConfirmClicked] = useState(false);
  const [later, setLater] = useState(false);

  const onSignup = () => {
    setSigupClicked(true);
  };

  const onGoback = () => {
    setSigupClicked(false);
  };

  const onConfirmInfo = () => {
    setConfirmClicked(true);
    onGoback();
    // console.log("info confirmed", confirmClicked);
  };

  const onClickLater = () => {
    setLater(true);
  };

  const onStartAgain = () => {
    setEmail("");
    setPhone("");
    onGoback();
    setConfirmClicked(false);
    setLater(false);
  };

  return (
    <View style={styles.container}>
      <SignupHeader />
      <InputCard
        onSignup={onSignup}
        email={email}
        phone={phone}
        setEmail={setEmail}
        setPhone={setPhone}
      />
      <ConfirmScreen
        modalVisible={sigupClicked}
        email={email}
        phone={phone}
        onGoback={onGoback}
        onConfirmInfo={onConfirmInfo}
      />
      <FinishScreen
        modalVisible={confirmClicked || later}
        isLater={later}
        phone={phone}
        onStartAgain={onStartAgain}
      />
    </View>
  );
};

export default StartingScreen;
