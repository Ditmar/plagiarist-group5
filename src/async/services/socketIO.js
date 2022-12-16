import { get } from "../api";
import { post } from "../api";

const apiUri = process.env.REACT_APP_API_URL;
const socketIoEndpoint = async() => {
    return await get(`${apiUri}/server/getUri`, {});
}

const socketIoEndpointR = async() => {
    return await post(`${apiUri}/server/getUri`, {});
}
export default {socketIoEndpoint, socketIoEndpointR};

