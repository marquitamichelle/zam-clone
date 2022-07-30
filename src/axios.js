import axios from "axios"; //fetching library

const instance = axios.create({
  baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api", //THE API (cloud function) URL
});

export default instance;
