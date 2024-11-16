import { useEffect, useState } from 'react';
import { MembersListHeader } from './MembersListHeader';
import { MembersListContent } from './MembersListContent';
import AddMemberModal from '../member/AddMemberModal';
import '../../styles.scss';
import { useTeamMembers } from '../../hooks/useTeamList';
import * as signalR from "@microsoft/signalr";
import { TeamMemberDto } from '../../api/member';

export interface MembersListProps{
  teamId: string
  name: string
}

const MembersList = ({teamId, name}: MembersListProps) => {
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState<boolean>(false);
  const {members, loadMembers, addImportMemberStarted, addMember, addMemberOnServerStarted, updateMember, updateMemberStatus} = useTeamMembers();
  const [connection, setConnection] = useState<signalR.HubConnection |  null>(null);

useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5001/newTeamMember")
    .withAutomaticReconnect()
    .build();

newConnection
    .start()
    .then(() => {
        console.log("Connected to SignalR hub");

        newConnection.invoke("JoinTeamGroup", name)
            .then(() => console.log(`Joined group: ${teamId}`))
            .catch(err => console.error("Error joining group:", err));
    })
    .catch(err => console.error("Connection failed:", err));
    setConnection(newConnection);

if(connection){
  newConnection.on("NotifyNewMember", (member: TeamMemberDto) => {
     addMember(member).then(() => console.log(`NotifyNewMember group: ${teamId}`))
  });
}


loadMembers(teamId)

return () => {
  if(connection)
    newConnection.invoke("LeaveTeamGroup", teamId)
        .then(() => console.log(`Left group: ${teamId}`))
        .catch(err => console.error("Error leaving group:", err));

    newConnection.stop().then(() => console.log("Disconnected from SignalR hub"));
};
  }, [teamId]) 

const handleImportMember =() => {
  addImportMemberStarted(teamId)
}

const handleAddMemberModal = () => {
  setAddMemberModalOpen(true);
}

const handleCloseModal =  () => {
  setAddMemberModalOpen(false);
}

  return (
    <div className="team-list">
      <MembersListHeader onClickAddHandler={handleAddMemberModal} onClickImportHandler={handleImportMember}/>
      <MembersListContent members={members} onUpdateMemberStatus={updateMemberStatus} onUpdateMember={updateMember}/>
      <AddMemberModal isOpen={isAddMemberModalOpen} teamId={teamId} onClose={handleCloseModal} addMemberOnServerStarted={addMemberOnServerStarted}/>
    </div>
  );
};

export default MembersList;
