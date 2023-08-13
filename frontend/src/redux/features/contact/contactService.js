import axios from "axios";
import { base_url } from "../../../utils/baseUrl";
import { config } from "../../../utils/axiosconfig";

const createEnquiry = async (contact) => {
    const response = await axios.post(`${base_url}enquiry`, contact, config);
    if (response.data) {
        return response.data;
    }
};

const contactService = {
    createEnquiry
};

export default contactService;
