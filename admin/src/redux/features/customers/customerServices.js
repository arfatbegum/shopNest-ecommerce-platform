import axios from "axios";
import { base_url } from "../../../utils/baseUrl";

const getUsers = async () => {
  const response = await axios.get(`${base_url}user/all-users`);

  return response.data;
};
const deleteUser = async (id) => {
  const response = await axios.delete(`${base_url}user/${id}`);

  return response.data;
};

const customerServices = {
  getUsers,
  deleteUser
};

export default customerServices;