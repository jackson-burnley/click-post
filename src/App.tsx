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

        {comments.map((comment, key) => (
          <PostCard
            key={key}
            // name="teste"
            name={users.filter((u) => u.id === comment.userId)}
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
