import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import ConfirmScreen from "./screens/Confirm";
import Register from "./screens/Starting";
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
