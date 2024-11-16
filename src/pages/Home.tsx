import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Home.scss";
import { createTeam, CreateTeam } from "../api/team";

const Home: React.FC = () => {
  const [teamName, setTeamName] = useState("");
  const navigate = useNavigate();
  const teams = ["Zespół 1", "Zespół 2", "Zespół 3"]; // Przykładowe dane zespołów
  
  const createTeamHandler = async () => {
    const model = {teamId: crypto.randomUUID(), name:teamName}
    createTeam(model)
  }
  return (
    <div className="home-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Wprowadź nazwę zespołu"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <button onClick={createTeamHandler} className="create-team-button">
          Utwórz zespół
        </button>
      <div className="teams-list">
        {teams.map((team, index) => (
          <div
            key={index}
            className="team-tile"
            onClick={() => navigate(`/team/${index}`)}
          >
            {team}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;