import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import HomePage from "./screens/home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: StatusBar.currentHeight,
  },
});
