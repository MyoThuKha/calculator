import { Ionicons, Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { handleClear, handlePercent, removeDigit } from "../datas/slice";

const TitleActions = ({ headColor, textColor }) => {
  const dispatch = useDispatch();
  return (
    <View style={[styles.titleActions, { backgroundColor: headColor }]}>
      <Ionicons
        name="trash-outline"
        size={25}
        color={textColor}
        onPress={() => dispatch(handleClear())}
      />
      <Ionicons
        name="backspace-outline"
        size={25}
        color={textColor}
        onPress={() => dispatch(removeDigit())}
      />
      <Feather
        name="percent"
        size={20}
        color={textColor}
        onPress={() => dispatch(handlePercent())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    borderRadius: 20,
  },
});
export default TitleActions;
