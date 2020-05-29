import axios from "axios";
const KEY = "AIzaSyAF0DlAGbnmwnyP7aPjEU3Eu12Qrh0BE_Q";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`,
  },
});
