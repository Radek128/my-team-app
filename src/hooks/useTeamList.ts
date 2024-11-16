import { useReducer } from "react";
import { addImportStartedMember, addMemberStarted, addMemberToList, changeMemberStatus, editMemberInList, loadMembersList } from "../actions/member";
import { initialState, teamReducer } from "../redux/teamReducer";
import { TeamMember, TeamMemberDto, UpdateMember, UpdateMemberStatus } from "../api/member";

export const useTeamMembers = () => { 
    const [state, dispatch] = useReducer(teamReducer, initialState);
    const loadMembers = (teamId: string) => loadMembersList(teamId, dispatch);
    const addMember = (member: TeamMemberDto) => addMemberToList(member, dispatch);
    const addMemberOnServerStarted = (member: TeamMember) => addMemberStarted(member, dispatch);
    const addImportMemberStarted = (teamId: string) => addImportStartedMember(teamId, dispatch);
    const updateMemberStatus = (member: UpdateMemberStatus) => changeMemberStatus(member, dispatch);
    const updateMember = (member: UpdateMember) => editMemberInList(member, dispatch);
    const members = state.members;

    return {members, loadMembers, addMember, addImportMemberStarted, addMemberOnServerStarted, updateMember, updateMemberStatus}
}