import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import NumPad from "../components/numpad";
import Operators from "../components/operators";
import TitleActions from "../components/actions";

const HomePage = () => {
  const input = useSelector((state) => state.root.data);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Calculator</Text>
        <Text>{input}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.numpad}>
          <TitleActions />
          <NumPad />
        </View>
        <Operators />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 30,
    flexDirection: "row",
  },
  numpad: {
    flex: 1,
  },
});

export default HomePage;
