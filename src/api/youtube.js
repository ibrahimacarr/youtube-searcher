import axios from "axios";

const API_KEY = "AIzaSyCbA_4g5P-jxkKnmGp0Xah7Or9uqqeyWJU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY,
  },
});
