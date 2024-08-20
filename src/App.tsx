import React, { useEffect, useState } from 'react';
import TeamList from './components/team/TeamList';
import { createStore } from './redux/store';
import { Provider } from 'react-redux';
import { createTeam } from './api/team';
import './styles.scss';

const App: React.FC = () => {
  const [store] = useState(createStore())
  const [teamId, setTeamId] = useState<string | null>(null)
  useEffect(() => {
    const model = {teamId: crypto.randomUUID()}
    createTeam(model).then(x => setTeamId(x));
  }, [])

  return (
    <Provider store={store}>
    <div className="app-container">
      {teamId && <TeamList teamId={teamId}/>}
    </div>
    </Provider>
  );
};

export default App;

