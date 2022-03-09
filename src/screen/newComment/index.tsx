import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { TextTitle } from "../../components/Header/styles";
import { Label, SmallInput, LargeInput } from "./styles";

const NewComment = (props: any) => {
  return (
    <View>
      <TextTitle>Escreva sua postagem</TextTitle>
      <Label>Seu nome</Label>
      <SmallInput />
      <Label>Postagem</Label>
      <LargeInput />
      <Button title="Submeter" onPress={() => {}} />
    </View>
  );
};

export default NewComment;
