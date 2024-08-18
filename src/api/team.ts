import { post } from "./axiosSource";

const devAddress = 'https://localhost:5000'

export interface CreateTeam{
    teamId?: string;
}
export const createTeam = (team: CreateTeam): Promise<string> => 
    post(`${devAddress}/teams`, team);