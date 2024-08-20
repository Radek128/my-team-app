import { getMembers, TeamMember, TeamMemberDto } from "../api/member";

export const LOAD_MEMBER_LIST = 'LOAD_MEMBER_LIST';
export type LOAD_MEMBER_LIST = typeof LOAD_MEMBER_LIST;

export interface LoadMembersList {
    type: LOAD_MEMBER_LIST;
    payload: TeamMemberDto[];
}
type Dispatch = (value: LoadMembersList) => void

export type LoadMembersListAction = LoadMembersList;

export const loadMembersList =
    async (teamId: string, dispatch: Dispatch) => {
      const response : TeamMemberDto[] = await getMembers(teamId);
      return dispatch({ type: LOAD_MEMBER_LIST, payload: response })
};