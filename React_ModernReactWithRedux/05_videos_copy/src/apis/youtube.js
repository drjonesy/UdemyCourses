import axios from "axios";

const KEY = "AIzaSyAzQkUjKLkFQwXJyzvCozZlUYjcq7QJXD4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
