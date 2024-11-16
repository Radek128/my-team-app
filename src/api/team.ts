import { post } from "./axiosSource";

const devAddress = 'http://localhost:5001'

export interface CreateTeam{
    teamId?: string;
    name: string;
}
export const createTeam = (team: CreateTeam): Promise<string> => 
    post(`${devAddress}/teams`, team);