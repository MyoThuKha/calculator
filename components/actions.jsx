import { Ionicons, Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { handleClear, handlePercent, removeDigit } from "../datas/slice";

const TitleActions = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.titleActions}>
      <Ionicons
        name="trash-outline"
        size={25}
        color="black"
        onPress={() => dispatch(handleClear())}
      />
      <Ionicons
        name="backspace-outline"
        size={25}
        color="black"
        onPress={() => dispatch(removeDigit())}
      />
      <Feather
        name="percent"
        size={20}
        color="black"
        onPress={() => dispatch(handlePercent())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleActions: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    borderRadius: 20,
  },
});
export default TitleActions;
