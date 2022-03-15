import axios from "axios";
const KEY = "AIzaSyCbA6ZTTp5KLer3drS0uWHn81Dg-_VCMwo";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});
