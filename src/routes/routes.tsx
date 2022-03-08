import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import newComment from "../screen/newComment";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="comment">
        <Stack.Screen
          options={{ headerShown: false }}
          name="comment"
          component={newComment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
