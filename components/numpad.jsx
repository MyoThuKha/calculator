import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addDigit, changeData } from "../datas/slice";
const NumPad = () => {
  const dispatch = useDispatch();
  const [operand, setOperand] = useState("");
  //
  const NumberKey = ({ num }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(addDigit(operand, num));
        }}
      >
        <Text style={{ fontSize: 28 }}>{num}</Text>
      </TouchableOpacity>
    );
  };
  const ChangeOperand = ({ num }) => {
    return (
      <TouchableOpacity onPress={() => setOperand()}>
        <Text style={{ fontSize: 28 }}>{num}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
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
        <ChangeOperand num="+/-" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyBar: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "gold",
  },
});

export default NumPad;
