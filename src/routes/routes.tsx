import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewComment from "../screen/newComment";
import App from "../App";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen
          options={{ headerShown: false }}
          name="comment"
          // component={newComment}
        >
          {(props) => <NewComment {...props} />}
        </Stack.Screen>

        <Stack.Screen
          options={{ headerShown: false }}
          name="App"
          // component={newComment}
        >
          {(props) => <App {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
