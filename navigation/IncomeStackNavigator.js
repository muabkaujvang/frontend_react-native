import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IncomeScreen from "../screens/IncomeScreen";
import AddIncomeScreen from "../screens/AddIncomeScreen";

const Stack = createNativeStackNavigator();

const IncomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Income" component={IncomeScreen} />
      <Stack.Screen name="AddIncome" component={AddIncomeScreen} />
    </Stack.Navigator>
  );
};

export default IncomeStackNavigator;
