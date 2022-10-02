import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import NumPad from "../components/numpad";
import Operators from "../components/operators";
import TitleActions from "../components/actions";
import { useState } from "react";

const HomePage = () => {
  const current = useSelector((state) => state.root);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Calculator</Text>
        <View>
          <Text style={styles.previous}>{current.previous}</Text>
          <View style={styles.display}>
            <Text style={styles.current}>{current.operator}</Text>
            <Text style={styles.current}>{current.current}</Text>
          </View>
        </View>
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
    flex: 2,
    marginHorizontal: 30,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
  },
  body: {
    flex: 3,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 30,
    flexDirection: "row",
  },
  numpad: {
    flex: 1,
  },
  previous: {
    textAlign: "right",
    color: "gray",
    fontSize: 18,
    marginBottom: 20,
  },
  display: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },

  current: {
    fontSize: 40,
  },
});

export default HomePage;
