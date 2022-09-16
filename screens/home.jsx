import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialCommunityIcons as MCIcon,
} from "@expo/vector-icons";

const HomePage = () => {
  const signColor = "#16b862";
  const numCol = [
    [7, 4, 1, "."],
    [8, 5, 2, 0],
    [9, 6, 3, "+/-"],
  ];
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Calculator</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.numpad}>
          {/* titleBar */}
          <View style={styles.titleActions}>
            <Ionicons name="trash-outline" size={25} color="black" />
            <Ionicons name="backspace-outline" size={25} color="black" />
            <Feather name="percent" size={20} color="black" />
          </View>

          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <View style={styles.keyBar}>
              <NumberKey num={7} />
              <NumberKey num={4} />
              <NumberKey num={1} />
              <NumberKey num="." />
            </View>
            <View style={styles.keyBar}>
              <NumberKey num={8} />
              <NumberKey num={5} />
              <NumberKey num={2} />
              <NumberKey num={0} />
            </View>
            <View style={styles.keyBar}>
              <NumberKey num={9} />
              <NumberKey num={6} />
              <NumberKey num={3} />
              <NumberKey num="+/-" />
            </View>
          </View>
        </View>

        {/* operations */}
        <View style={styles.operation}>
          <View style={styles.operator}>
            <MCIcon name="division" size={25} color={signColor} />
            <AntDesign name="close" size={24} color={signColor} />
            <AntDesign name="minus" size={24} color={signColor} />
            <AntDesign name="plus" size={24} color={signColor} />
          </View>
          <View style={styles.equal}>
            <MCIcon name="equal" size={24} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};
const NumberKey = ({ num }) => {
  return (
    <TouchableOpacity>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 28 }}>{num}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  body: {
    flex: 2,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 30,
    flexDirection: "row",
  },
  numpad: {
    flex: 1,
  },
  titleActions: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    borderRadius: 20,
  },
  keyBar: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  operation: {
    marginLeft: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  operator: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 20,
    width: 70,
  },
  equal: {
    marginTop: 30,
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: "#1fc96f",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePage;
