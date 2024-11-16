import React, { useEffect, useState } from 'react';
import { createStore } from './redux/store';
import { Provider } from 'react-redux';
import { CreateTeam, createTeam } from './api/team';
import './styles.scss';
import MembersList from './components/team/MembersList';

const App: React.FC = () => {
  const [store] = useState(createStore())
  const [teamId, setTeamId] = useState<CreateTeam | null>(null)
  useEffect(() => {
    const model = {teamId: crypto.randomUUID(), name:""}
    createTeam(model).then(x => setTeamId({teamId:x , name: model.name}));
  }, [])

  return (
    <Provider store={store}>
    <div className="app-container">
      {teamId?.teamId && <MembersList teamId={teamId.teamId} name={teamId.name}/>}
    </div>
    </Provider>
  );
};

export default App;

