import axios from "axios";

const API_URL =
    "https://crudcrud.com/api/edac6a3cd186420483ed4d7c10fdd233/users";

const getAllUsers = async() => {
    const result = await axios.post(`/`);
    return result;
};

export { getAllUsers };