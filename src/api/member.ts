import { get, post, put } from "./axiosSource";

const devAddress = 'https://localhost:5000'

export interface UpdateMember {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  memberId: string;
}

export interface TeamMember extends UpdateMember{
    teamId: string;
    avatar: string;
    isActive: boolean;
  }

  export interface TeamMemberDto extends TeamMember{
    createdOn: string
  }

export const getMember = (memberId: string): Promise<TeamMemberDto> => 
    get(`${devAddress}/teams/members/${memberId}`);

export const updateMember = (member: UpdateMember): Promise<any> => 
  put(`${devAddress}/teams/members/${member.memberId}`, member);

export const getMembers = (teamId: string): Promise<TeamMemberDto[]> => 
    get(`${devAddress}/teams/${teamId}/members`);

export const createMember = (member: TeamMember): Promise<string> => 
    post(`${devAddress}/teams/${member.teamId}/members`, member);