import { get, post } from "./axiosSource";

const devAddress = 'https://localhost:5000'
export interface TeamMember {
    memberId: string;
    teamId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    avatar: string;
    isActive: boolean;
  }

  export interface TeamMemberDto extends TeamMember{
    createdOn: string
  }

export const getMember = (memberId: string): Promise<TeamMemberDto> => 
    get(`${devAddress}/teams/members/${memberId}`);

export const getMembers = (teamId: string): Promise<TeamMemberDto[]> => 
    get(`${devAddress}/teams/${teamId}/members`);

export const createMember = (member: TeamMember): Promise<string> => 
    post(`${devAddress}/teams/${member.teamId}/members`, member);