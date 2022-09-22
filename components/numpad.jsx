import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../datas/slice";
const NumPad = () => {
  const input = useSelector((state) => state.root.data);
  const dispatch = useDispatch();
  const NumberKey = ({ num }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          dispatch(
            changeData(() => {
              return input + num;
            })
          )
        }
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 28 }}>{num}</Text>
        </View>
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
        <NumberKey num="+/-" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyBar: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue",
  },
});

export default NumPad;
