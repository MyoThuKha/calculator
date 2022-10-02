import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addDigit, changeOperand } from "../datas/slice";

const NumPad = () => {
  const dispatch = useDispatch();

  const update = (num) => {
    dispatch(num != "+/-" ? addDigit(num) : changeOperand());
  };

  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <View style={styles.row}>
          <Key add={update}>7</Key>
          <Key add={update}>8</Key>
          <Key add={update}>9</Key>
        </View>
        <View style={styles.row}>
          <Key add={update}>4</Key>
          <Key add={update}>5</Key>
          <Key add={update}>6</Key>
        </View>
        <View style={styles.row}>
          <Key add={update}>1</Key>
          <Key add={update}>2</Key>
          <Key add={update}>3</Key>
        </View>
        <View style={styles.row}>
          <Key add={update}>.</Key>
          <Key add={update}>0</Key>
          <Key add={update}>+/-</Key>
        </View>
      </View>
    </View>
  );
};

const Key = ({ children, add }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        add(children);
      }}
    >
      <View style={styles.button}>
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
  button: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NumPad;
