import { View } from "react-native";
import InputCard from "../components/InputCard";
import { useState } from "react";
import { styles } from "../styles/styles";
import SignupHeader from "../components/Header";
import ConfirmScreen from "./Confirm";
import FinishScreen from "./Finish";
import LinearBackground from "../components/backgroud";
import { LinearGradient } from "expo-linear-gradient";

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
  };

  const onClickLater = () => {
    setLater(true);
    onGoback();
  };

  const onStartAgain = () => {
    setEmail("");
    setPhone("");
    onGoback();
    setConfirmClicked(false);
    setLater(false);
  };

  return (
    <LinearGradient colors={["#00ffff", "#e6e6fa"]} style={styles.bgContainer}>
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
          onClickLater={onClickLater}
        />
        <FinishScreen
          modalVisible={confirmClicked || later}
          isLater={later}
          phone={phone}
          onStartAgain={onStartAgain}
        />
      </View>
    </LinearGradient>
  );
};

export default StartingScreen;
