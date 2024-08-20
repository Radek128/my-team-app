import { useEffect, useReducer, useState } from 'react';
import { initialState, teamReducer } from '../../redux/teamReducer';
import { loadMembersList } from '../../actions/member';
import { createMember } from '../../api/member';
import { useFetchUser } from '../../hooks/useCreateUser';
import { TeamListHeader } from './TeamListHeader';
import { TeamListContent } from './TeamListContent';
import AddMemberModal from '../member/AddMemberModal';
import '../../styles.scss';

export interface TeamListProps{
  teamId: string
}

const TeamList = ({teamId}: TeamListProps) => {
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(teamReducer, initialState);
  const loadMembers = () => loadMembersList(teamId, dispatch);
  const newMember = useFetchUser({teamId}); 

useEffect(() => {
    loadMembers()
  }, [teamId]) 

const handleImportMember = async () => {
  const member = await newMember();
  await createMember(member)
  loadMembers();
}

const handleAddMember = () => {
  setAddMemberModalOpen(true);
}

const handleCloseModal =  () => {
  setAddMemberModalOpen(false);
  loadMembers();
}

  return (
    <div className="team-list">
      <TeamListHeader onClickAddHandler={handleAddMember} onClickImportHandler={handleImportMember}/>
      <TeamListContent members={state.members}/>
      <AddMemberModal isOpen={isAddMemberModalOpen} teamId={teamId} onClose={handleCloseModal}/>
    </div>
  );
};

export default TeamList;
