import axios, {AxiosError} from "axios";

const API_URL = "http://localhost:1337/api";

export const getServices = async (url: string, params? : any) => {
    try {
        const response = await axios.get(`${API_URL}${url}`, { params });
        
        return{
            isSuccess: true,
            statusCode: response.status,
            data: response.data,
            message: null,
        }
    } catch (e: unknown) {
        if(e instanceof AxiosError){
            return{
                isSuccess: false,
                statusCode: e?.response?.status,
                data: null,
                message: e?.response?.data?.error,
            }
        }
        return{
            isSuccess: false,
            statusCode: 500,
            data: null,
            message: "Something went wrong",
        }
    }
}