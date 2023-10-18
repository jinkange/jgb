import axios from "axios";

const aduino = axios.create({
  baseURL: "http://27.124.206.159:100",
});

const api = axios.create({
  baseURL: "43.200.94.18:3000",
});

const stream1 = axios.create({
  baseURL: "http://27.124.206.159:200",
});

export {aduino, api, stream1};
