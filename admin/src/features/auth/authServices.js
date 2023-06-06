import axios from "axios";
import { base_url } from "../../utils/baseUrl";
const signin = async (user) => {
  const response = await axios.post(`${base_url}user/signin-admin`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};


const authService = {
  signin,
};

export default authService;