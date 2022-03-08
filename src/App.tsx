import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import PostCard from "./components/Post";

export default function App() {
  const [comments, setComments] = React.useState({});

  return (
    <View>
      <Header />

      <PostCard name="Artuhr" comment="heyyy" />
      <PostCard name="Lisa" comment="Feliz dia das mulheres" />
      <PostCard name="Elton" comment="blabla" />
      <PostCard name="Arthr" comment="heyyy" />
      <PostCard name="Arthr" comment="heyyy" />

      <StatusBar style="auto" />
    </View>
  );
}
