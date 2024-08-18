import axios, { AxiosRequestConfig } from "axios";

export const get = async <T> (url: string, config?: AxiosRequestConfig) : Promise<T> =>{
    const { data } = await axios.get<T>(url, config);
    return data;
}

export const post = async <T> (url: string, model?: any,  config?: AxiosRequestConfig) : Promise<T> =>{
    const { data } = await axios.post<T>(url, model, config);
    return data;
}

export const put = async <T> (url: string, model?: any, config?: AxiosRequestConfig) : Promise<T> =>{
    const { data } = await axios.put<T>(url, model, config);
    return data;
}