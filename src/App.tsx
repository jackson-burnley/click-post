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

interface Props {}

interface User {
  id: number;
  name: string;
  email: string;
}

const App = (props: any) => {
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
        <Header {...props} />

        {comments.map((comment, key) => (
          <PostCard
            key={key}
            name={users.find((u) => u.id === comment.userId)?.name || "Teste"}
            title={comment.title}
            comment={comment.body}
          />
        ))}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

export default App;
