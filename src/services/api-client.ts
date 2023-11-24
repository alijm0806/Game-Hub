import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f627a0cf25cf4ef6bd9fcd04e69a8a0d'
  }
})