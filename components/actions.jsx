import { Ionicons, Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../datas/slice";

const TitleActions = () => {
  const input = useSelector((state) => state.root.data);
  const dispatch = useDispatch();
  return (
    <View style={styles.titleActions}>
      <Ionicons
        name="trash-outline"
        size={25}
        color="black"
        onPres={() => dispatch(changeData(""))}
      />
      <Ionicons
        name="backspace-outline"
        size={25}
        color="black"
        onPress={() =>
          dispatch(
            changeData(() => {
              return input.slice(0, input.length - 1);
            })
          )
        }
      />
      <Feather name="percent" size={20} color="black" />
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
