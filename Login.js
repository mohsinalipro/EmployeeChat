import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

import { employees } from "./mockdata";
import { navigationRef } from "./RootNavigation";

function Login() {
  const [employeeIdValue, setEmployeeIdValue] = useState("");

  const textChangeHandler = (val) => {
    setEmployeeIdValue(val);
  };

  const isEmployeIDValid = (employeeId) => {
    return employees.find(
      (employee) => String(employee.employeeId) === String(employeeId)
    );
  };

  const loginPressHandler = () => {
    console.log("loginPressHandler");
    console.log({ employeeIdValue });

    if (employeeIdValue.trim().length === 0) {
      return Alert.alert("Error", "Please enter a valid Employee ID");
    }

    const employee = isEmployeIDValid(employeeIdValue.trim());
    if (!employee) {
      return Alert.alert("Error", "Employee ID is invalid");
    }

    navigationRef.current.navigate("EmployeeChat");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginFormView}>
        <TextInput
          style={styles.employeeIdInput}
          onChangeText={textChangeHandler}
          value={employeeIdValue}
          placeholder="Employee ID"
          required
        />
        <TouchableOpacity style={styles.loginButton}>
          <Button title="Login" onPress={loginPressHandler} />
        </TouchableOpacity>
      </View>
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

export default Login;
