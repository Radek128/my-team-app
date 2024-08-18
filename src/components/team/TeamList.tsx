import { useEffect, useReducer, useState } from 'react';
import TeamMemberItem from './TeamMemberItem';
import { initialState, teamReducer } from '../../redux/team';
import { loadMembersList } from '../../actions/member';
import { AddButton } from '../buttons/AddButton';
import { createMember } from '../../api/member';
import { useFetchUser } from '../../hooks/useCreateUser';
import '../../styles.scss';
import AddMemberModal from '../member/AddMemberModal';

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
  }, []) 

const handleImportMember = async () => {
  const member = await newMember();
  await createMember(member)
  loadMembers();
}

const handleAddMember = async () => {
  setAddMemberModalOpen(true);
}

const handleCloseModal =  () => {
  setAddMemberModalOpen(false);
  loadMembers();
}

  return (
    <div className="team-list">
      <div className="team-list__header">
        <AddButton text={"Zaimportuj członka zespołu"} onClickHandler={handleImportMember}/>
        <AddButton text={"Dodaj członka zespołu"} onClickHandler={handleAddMember}/>
      </div>
      <ul className="team-list__header-item">
        {state.members.map(member => (
          <TeamMemberItem key={member.memberId} member={member} />
        ))}
      </ul>
      {isAddMemberModalOpen && <AddMemberModal teamId={teamId} onClose={handleCloseModal}/>}
    </div>
  );
};

export default TeamList;
