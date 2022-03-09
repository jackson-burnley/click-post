import styled from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";

export const Content = styled.View`
  margin-top: 30px;
  margin-left: 14px;
  flex-direction: row;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #33acab;
  width: 250px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const ViewForm = styled.View`
  margin-top: 50px;
`;

export const TextSubmit = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const TextComment = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #33acab;
`;

export const Label = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const SmallInput = styled.TextInput`
  width: 340px;
  height: 50px;
  border: 3px solid #4f388b;
  padding: 15px;
  font-size: 20px;
`;

export const LargeInput = styled.TextInput`
  width: 340px;
  height: 310px;
  margin-bottom: 20px;
  border: 3px solid #4f388b;
  padding: 15px;
  font-size: 20px;
`;
