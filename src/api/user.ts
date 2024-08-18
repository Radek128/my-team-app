import { get } from "./axiosSource";

export const getUser = (): Promise<any> => 
    get(`https://randomuser.me/api/`);