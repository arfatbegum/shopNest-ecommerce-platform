import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const signin = async (user) => {
  const response = await axios.post(`${base_url}user/signin-admin`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/orders`, config);

  return response.data;
};

const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}user/order/${id}`,
    "",
    config
  );

  return response.data;
};



const authService = {
  signin,
  getOrders,
  getOrder
};

export default authService;