import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectConfirmation.css';

const ProjectConfirmation = () => {
  const [projectName, setProjectName] = useState('Project One'); 
  const navigate = useNavigate();

  const handleGoToProjects = () => {
    navigate('/projects');
  };

  return (
    <div className="project-confirmation-container">
      <div className="confirmation-box">
        <h2>Project Posting Confirmation</h2>
        <p>Your project <strong>{projectName}</strong> has been successfully posted.</p>
        <p>Thank you for contributing! You can now manage your project from your dashboard.</p>
        <button className="go-to-projects" onClick={handleGoToProjects}>
          Go to Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectConfirmation;
