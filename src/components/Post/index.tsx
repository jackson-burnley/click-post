import React from "react";
import { View, Text } from "react-native";
import { Posts, PostUser, PostComment } from "./styles";

interface Props {
  name: string;
  comment: string;
  title: string;
}

export default function PostCard({ name, comment, title }: Props) {
  return (
    <Posts>
      <PostUser>
        {name}: {title}
      </PostUser>
      <PostComment>{comment}</PostComment>
    </Posts>
  );
}
