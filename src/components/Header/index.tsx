import React from "react";
import { Text, View } from "react-native";
import { Title, TextTitle } from "./styles";
import { AntDesign } from "@expo/vector-icons";

const Header = (props: any) => {
  return (
    <Title>
      <View>
        <TextTitle>Click-post</TextTitle>
        <Text>Deixe sua postagem!</Text>
      </View>

      <AntDesign
        onPress={() => {
          props.navigation.navigate("comment");
        }}
        name="plus"
        size={24}
        color="black"
      />
    </Title>
  );
};

export default Header;
