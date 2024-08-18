import { useState } from 'react';
import { getUser } from '../api/user';
import { TeamMember } from '../api/member';

export interface UseFetchUserProps {
    teamId: string
}

export const useFetchUser = ({ teamId }: UseFetchUserProps): () => Promise<TeamMember> => {

    const fetchUser = async (): Promise<TeamMember> => {
      try {
        const response = await getUser();
        const userData = response.results[0];
        const user: TeamMember = {
          memberId: crypto.randomUUID(), 
          firstName: userData.name.first,
          lastName: userData.name.last,
          teamId: teamId,
          isActive: true,
          email: userData.email,
          phoneNumber: userData.phone,
          avatar: userData.picture.large
        };
        
        return user;
      } catch (error) {
        console.error('Failed to fetch user:', error);
        throw error; 
      }
    };
  
    return fetchUser;
  };
