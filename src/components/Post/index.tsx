import React from "react";
import { View, Text } from "react-native";
import { Posts, PostUser, PostComment } from "./styles";

interface Props {
  name: string;
  comment: string;
}

export default function PostCard({ name, comment }: Props) {
  return (
    <Posts>
      <PostUser>{name}</PostUser>
      <PostComment>{comment}</PostComment>
    </Posts>
  );
}
