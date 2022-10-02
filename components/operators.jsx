import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { handleEvaluate, handleOperate } from "../datas/slice";

const Operators = ({ headColor }) => {
  const signColor = "#16b862";
  const input = useSelector((state) => state.root.data);
  const dispatch = useDispatch();
  return (
    <View style={styles.operation}>
      <View style={[{ backgroundColor: headColor }, styles.operator]}>
        <MaterialCommunityIcons
          name="division"
          size={25}
          color={signColor}
          onPress={() => dispatch(handleOperate("/"))}
        />
        <AntDesign
          name="close"
          size={24}
          color={signColor}
          onPress={() => dispatch(handleOperate("*"))}
        />
        <AntDesign
          name="minus"
          size={24}
          color={signColor}
          onPress={() => dispatch(handleOperate("-"))}
        />
        <AntDesign
          name="plus"
          size={24}
          color={signColor}
          onPress={() => dispatch(handleOperate("+"))}
        />
      </View>
      <TouchableOpacity onPress={() => dispatch(handleEvaluate())}>
        <View style={styles.equal}>
          <MaterialCommunityIcons name="equal" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  operation: {
    marginLeft: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  operator: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
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

export default Operators;
