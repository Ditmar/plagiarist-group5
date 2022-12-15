import { get } from "../api";

const apiUri = process.env.REACT_APP_API_URL;
const socketIoEndpoint = async(credentials) => {
    return await get(`${credentials}&limit=25&offset=0&rating=g&lang=en`, {});
}
export default socketIoEndpoint;