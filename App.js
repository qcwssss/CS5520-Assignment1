import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Register from "./screens/register";
import { styles } from "./styles/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Register />
    </SafeAreaView>
  );
}
