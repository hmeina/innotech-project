import React from 'react';
import './ProjectDetails.css'; 

const ProjectDetails = () => {
  return (
    <div className="project-details-page">
      {/* Main Content */}
      <div className="container">
        <h1 className="title">PROJECTS</h1>
        <div className="details-box">
          <p><strong>PROJECT ID:</strong></p>
          <p><strong>PROJECT TITLE:</strong></p>
          <p><strong>COMPANY:</strong></p>
          <p><strong>STATUS:</strong></p>
          <p><strong>PROJECT OVERVIEW:</strong></p>
          <p><strong>SKILLS REQUIRED:</strong></p>
          <p><strong>DURATION:</strong></p>
          <p><strong>START DATE:</strong></p>
          <p><strong>TEAM SIZE:</strong></p>
          <p><strong>PROJECT DELIVERABLES:</strong></p>
          <p><strong>HOW TO APPLY:</strong></p>
          <button className="apply-now-btn">APPLY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

