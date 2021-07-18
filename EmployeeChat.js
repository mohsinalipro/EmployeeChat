import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

function EmployeeChat() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Employee Chat</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  loginFormView: {
    justifyContent: "center",
  },
  employeeIdInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 4,
  },
  loginButton: {
    width: 70,
    alignSelf: "center",
  },
});

export default EmployeeChat;
