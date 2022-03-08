import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./components/Header";
import PostCard from "./components/Post";
import api from "./services/api";

interface Comments {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [comments, setComments] = React.useState<Comments[]>([]);
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data);
    });
    api.get("/posts").then((response) => {
      setComments(response.data);
    });
  }, []);

  return (
    <ScrollView>
      <View>
        <Header />

        {comments.map((comment) =>
          users.map((user) => {
            <PostCard
              name={comment.id === user.id}
              title={comment.title}
              comment={comment.body}
            />;
          })
        )}

        {/* <PostCard name="Artuhr" comment="heyyy" />
      <PostCard name="Lisa" comment="Feliz dia das mulheres" />
      <PostCard name="Elton" comment="blabla" />
      <PostCard name="Arthr" comment="heyyy" />
      <PostCard name="Arthr" comment="heyyy" /> */}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

export default App;
