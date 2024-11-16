import React from "react";
import { useParams } from "react-router-dom";
import "./TeamDetails.scss";

const TeamDetails = () => {
  const { teamId } = useParams();

  return (
    <div className="team-details-container">
      <h1>Zespół {teamId}</h1>
      <div className="team-details-table">
        {/* Tabela członków zespołu */}
      </div>
    </div>
  );
};

export default TeamDetails;