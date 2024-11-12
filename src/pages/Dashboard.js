import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome back, Meina!</h1>

      <div className="dashboard-grid">
        <div className="dashboard-card project-stats">Project Stats</div>
        <div className="dashboard-card tasks">Tasks</div>
        <div className="dashboard-card user-stats">User Stats</div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card active-projects">Active Projects</div>
        <div className="dashboard-card upcoming">
          Upcoming
          <button className="find-new-project-btn">Find New Project</button>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="dashboard-card projects">Projects</div>
        <div className="dashboard-card feedbacks">Feedbacks</div>
        <div className="dashboard-card notifications">Notifications</div>
      </div>
    </div>
  );
};

export default Dashboard;
