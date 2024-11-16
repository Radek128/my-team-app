import React from 'react';
import './styles.scss';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamDetails from './components/team/TeamDetails';
const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:teamId" element={<TeamDetails/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;

