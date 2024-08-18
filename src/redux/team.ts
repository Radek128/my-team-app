import { Reducer } from 'react';
import { TeamMemberDto } from '../api/member';
import { LOAD_MEMBER_LIST, LoadMembersListAction } from '../actions/member';

interface TeamState {
  members: TeamMemberDto[];
}

export const initialState: TeamState = {
  members: []
};

export const teamReducer: Reducer<TeamState, LoadMembersListAction> = 
 (state: TeamState = initialState, action: LoadMembersListAction) => {
  switch(action.type){
    case LOAD_MEMBER_LIST: {
      return{
        ...state,
        members: action.payload
      }
    }
    default: 
    return state;
  }
}
