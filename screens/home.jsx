import {
  useColorScheme,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import NumPad from "../components/numpad";
import Operators from "../components/operators";
import TitleActions from "../components/actions";

const HomePage = () => {
  const current = useSelector((state) => state.root);

  const deviceTheme = useColorScheme();
  const headColor = deviceTheme === "light" ? "#f8f8f8" : "#14171e";
  const bodyColor = deviceTheme === "light" ? "#ffffff" : "#1a1d24";
  const textColor = deviceTheme === "light" ? "#000000" : "#ffffff";
  return (
    <View style={[styles.container, { backgroundColor: headColor }]}>
      <View style={styles.head}>
        <Text style={[styles.title, { color: textColor }]}>Calculator</Text>
        <View>
          <Text style={styles.previous}>{current.log}</Text>
          <View style={styles.display}>
            <Text style={[styles.current, { color: textColor }]}>
              {current.operator}
            </Text>
            <Text style={[styles.current, { color: textColor }]}>
              {current.current}
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.body, { backgroundColor: bodyColor }]}>
        <View style={styles.numpad}>
          <TitleActions headColor={headColor} textColor={textColor} />
          <NumPad textColor={textColor} />
        </View>
        <Operators headColor={headColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  head: {
    flex: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
  },
  body: {
    flex: 3,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 30,
    flexDirection: "row",
  },
  numpad: {
    flex: 1,
  },
  previous: {
    textAlign: "right",
    color: "gray",
    fontSize: 18,
    marginBottom: 20,
  },
  display: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },

  current: {
    fontSize: 40,
  },
});

export default HomePage;
