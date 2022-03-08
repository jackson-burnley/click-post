import React from "react";
import { Text, View } from "react-native";
import { Title, TextTitle } from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function Header({}) {
  return (
    <Title>
      <View>
        <TextTitle>Click-post</TextTitle>
        <Text>Deixe sua postagem!</Text>
      </View>

      <AntDesign
        onPress={() => {
          // navigation.navigate("comment");
        }}
        name="plus"
        size={24}
        color="black"
      />
    </Title>
  );
}
