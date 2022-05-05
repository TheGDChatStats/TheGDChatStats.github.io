import axios from "axios";
export default axios.create({
  baseURL: "https://gdbrowser.com/api/profile",
  headers: {
    "Content-type": "application/json"
  }
});