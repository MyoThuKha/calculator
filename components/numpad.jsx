import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addDigit, changeData } from "../datas/slice";
const NumPad = () => {
  const dispatch = useDispatch();
  const [operand, setOperand] = useState("");
  //

  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <View style={styles.row}>
          <Key>7</Key>
          <Key>8</Key>
          <Key>9</Key>
        </View>
        <View style={styles.row}>
          <Key>4</Key>
          <Key>5</Key>
          <Key>6</Key>
        </View>
        <View style={styles.row}>
          <Key>1</Key>
          <Key>2</Key>
          <Key>3</Key>
        </View>
        <View style={styles.row}>
          <Key>.</Key>
          <Key>0</Key>
          <Key>0</Key>
        </View>
      </View>
    </View>
  );
};

const Key = ({ children }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text style={{ fontSize: 30 }}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  col: {
    flex: 1,
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default NumPad;
