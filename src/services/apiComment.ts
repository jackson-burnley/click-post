import axios from "axios";

const apiComment = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default apiComment;
