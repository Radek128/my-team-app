import { Reducer } from 'react';
import { TeamMemberDto } from '../api/member';
import { ADD_MEMBER_TO_LIST, ADD_MEMBER_TO_LIST_STARTED, CHANGE_MEMBER_STATUS, EDIT_MEMBER_IN_LIST, LOAD_MEMBER_LIST, LoadMembersListAction } from '../actions/member';

interface TeamState {
  members: TeamMemberDto[];
  isAddedLoading: boolean
}

export const initialState: TeamState = {
  members: [],
  isAddedLoading: false
};

export const teamReducer: Reducer<TeamState, LoadMembersListAction> = 
 (state: TeamState = initialState, action: LoadMembersListAction) => {
  switch(action.type){
    case LOAD_MEMBER_LIST: {
      return{
        ...state,
        members: [...action.payload]
      }
    }
    case ADD_MEMBER_TO_LIST: {
      return{
        ...state,
        members: [action.payload, ...state.members]
      }
    }
    case EDIT_MEMBER_IN_LIST: {
      return{
        ...state,
        members: state.members.map((member) =>
          member.memberId === action.payload.memberId
            ? { ...member, 
              email: action.payload.email, 
              firstName: action.payload.firstName,
               lastName: action.payload.lastName, 
               phoneNumber:action.payload.phoneNumber 
              }
            : member
        ),
      }   
    }
    case CHANGE_MEMBER_STATUS: {
      return{
        ...state,
        members: state.members.map((member) =>
          member.memberId === action.payload.memberId
            ? { ...member, 
              isActive: action.payload.isActiveStatus
              }
            : member
        ),
      }   
    }
    case ADD_MEMBER_TO_LIST_STARTED: {
      return{
        ...state,
        isAddedLoading: action.payload
      }   
    }
    default: 
    return state;
  }
}
