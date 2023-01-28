import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import ConfirmScreen from "./screens/ConfirmScreen";
import Register from "./screens/SignupScreen";
import { styles } from "./styles/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Register />
      {/* {isConfirm && <ConfirmScreen />} */}
    </SafeAreaView>
  );
}
