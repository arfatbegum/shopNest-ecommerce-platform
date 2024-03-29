import axios from "axios";
import { base_url } from "../../../utils/baseUrl";
import { config } from "../../../utils/axiosconfig";


const signin = async (user) => {
  const response = await axios.post(`${base_url}user/signin-admin`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/all-orders`, config);
  return response.data;
};

const getOrder = async (id) => {
  const response = await axios.get(
    `${base_url}user/order/${id}`,
    config
  );

  return response.data;
};

const updateOrderStatus = async (id, orderStatus) => {
  const response = await axios.put(
    `${base_url}user/orders/update-order/${id}`,
    { orderStatus },
    config
  );
  return response.data;
};

const authService = {
  signin,
  getOrders,
  getOrder,
  updateOrderStatus
};

export default authService;