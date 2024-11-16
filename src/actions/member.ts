import { createMember, getMembers, TeamMember, TeamMemberDto, updateMember, UpdateMember, updateMemberStatus, UpdateMemberStatus } from "../api/member";
import { fetchUser } from "../hooks/useCreateUser";

export const LOAD_MEMBER_LIST = 'LOAD_MEMBER_LIST';
export type LOAD_MEMBER_LIST = typeof LOAD_MEMBER_LIST;

export const ADD_MEMBER_TO_LIST = 'ADD_MEMBER_TO_LIST';
export type ADD_MEMBER_TO_LIST = typeof ADD_MEMBER_TO_LIST;

export const ADD_MEMBER_TO_LIST_STARTED = 'ADD_MEMBER_TO_LIST_STARTED';
export type ADD_MEMBER_TO_LIST_STARTED = typeof ADD_MEMBER_TO_LIST_STARTED;

export const EDIT_MEMBER_IN_LIST = 'EDIT_MEMBER_IN_LIST';
export type EDIT_MEMBER_IN_LIST = typeof EDIT_MEMBER_IN_LIST;

export const CHANGE_MEMBER_STATUS = 'CHANGE_MEMBER_STATUS';
export type CHANGE_MEMBER_STATUS = typeof CHANGE_MEMBER_STATUS;

export interface LoadMembersList {
    type: LOAD_MEMBER_LIST;
    payload: TeamMemberDto[];
}

export interface AddMemberToList {
    type: ADD_MEMBER_TO_LIST;
    payload: TeamMemberDto;
}

export interface AddMemberToListStarted {
    type: ADD_MEMBER_TO_LIST_STARTED;
    payload: boolean;
}

export interface EditMemberInList {
    type: EDIT_MEMBER_IN_LIST;
    payload: UpdateMember;
}

export interface ChangeMemberStatus {
    type: CHANGE_MEMBER_STATUS;
    payload: UpdateMemberStatus;
}

type Dispatch = (value: LoadMembersList | AddMemberToList | EditMemberInList | ChangeMemberStatus | AddMemberToListStarted) => void

export type LoadMembersListAction = LoadMembersList | AddMemberToList | EditMemberInList | ChangeMemberStatus | AddMemberToListStarted;

export const loadMembersList =
    async (teamId: string, dispatch: Dispatch) => {
    const response : TeamMemberDto[] = await getMembers(teamId);
    return dispatch({ type: LOAD_MEMBER_LIST, payload: response })
};

export const addMemberToList =
    async (member: TeamMemberDto, dispatch: Dispatch) => {
    return dispatch({ type: ADD_MEMBER_TO_LIST, payload: member })
};

export const addMemberStarted =
    async (member: TeamMember, dispatch: Dispatch) => {
    await createMember(member);
    return dispatch({ type: ADD_MEMBER_TO_LIST_STARTED, payload: true })
};

export const addImportStartedMember =
    async (teamId: string, dispatch: Dispatch) => {
    const newMember = fetchUser({teamId}); 
    const member = await newMember();
    await createMember(member);
    return dispatch({ type: ADD_MEMBER_TO_LIST_STARTED, payload: true })
};

export const editMemberInList =
    async (member: UpdateMember, dispatch: Dispatch) => {
    await updateMember(member);
    return dispatch({ type: EDIT_MEMBER_IN_LIST, payload: member })
};

export const changeMemberStatus =
    async (member: UpdateMemberStatus, dispatch: Dispatch) => {
    await updateMemberStatus(member);
    return dispatch({ type: CHANGE_MEMBER_STATUS, payload: member })
};