import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import {
  Content,
  Label,
  SmallInput,
  LargeInput,
  TextComment,
  ButtonSubmit,
  TextSubmit,
  ViewForm,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewComment = (props: any) => {
  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [post, setPost] = React.useState("");
  const [counter, setCounter] = React.useState("1");

  const asyncReq = async () => {
    try {
      if (name && post) {
        await AsyncStorage.setItem(
          counter,
          JSON.stringify({ name, post, title })
        );
        setCounter(String(Number(counter) + 1));
        Keyboard.dismiss();
        Alert.alert(
          `Seu nome é: ${name} com titulo ${title} e sua postagem é ${post}`
        );
        setName("");
        setPost("");
        setTitle("");
      }
    } catch {
      Alert.alert("Carregando...");
    }
  };

  return (
    <Content>
      <AntDesign name="arrowleft" size={28} color="black" />

      <ViewForm>
        <TextComment>Escreva sua postagem</TextComment>
        <Label>Seu nome</Label>
        <SmallInput
          placeholder="Digite aqui"
          onChangeText={(newText) => setName(newText)}
          defaultValue={name}
        />
        <Label>Título da postagem</Label>
        <SmallInput
          placeholder="Digite aqui"
          onChangeText={(newText) => setTitle(newText)}
          defaultValue={title}
        />
        <Label>Postagem</Label>
        <LargeInput
          onChangeText={(newPost) => setPost(newPost)}
          defaultValue={post}
        />
        <ButtonSubmit>
          <TextSubmit onPress={asyncReq}>Submeter</TextSubmit>
        </ButtonSubmit>
      </ViewForm>
    </Content>
  );
};

export default NewComment;
