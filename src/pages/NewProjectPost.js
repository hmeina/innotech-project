import React, { useState } from 'react';
import './NewProjectPost.css'; 

const NewProjectPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    status: '',
    overview: '',
    skills: '',
    duration: '',
    startDate: '',
    teamSize: '',
    deliverables: '',
    applyInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Post Data:', formData);
  };

  return (
    <div className="project-details-page">
      <div className="container">
        <h1 className="title">POST A NEW PROJECT</h1>
        <div className="details-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">PROJECT TITLE:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">COMPANY:</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">STATUS:</label>
              <input
                type="text"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="overview">PROJECT OVERVIEW:</label>
              <textarea
                id="overview"
                name="overview"
                value={formData.overview}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="skills">SKILLS REQUIRED:</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">DURATION:</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="startDate">START DATE:</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="teamSize">TEAM SIZE:</label>
              <input
                type="number"
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="deliverables">PROJECT DELIVERABLES:</label>
              <textarea
                id="deliverables"
                name="deliverables"
                value={formData.deliverables}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="applyInfo">HOW TO APPLY:</label>
              <textarea
                id="applyInfo"
                name="applyInfo"
                value={formData.applyInfo}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="apply-now-btn">POST PROJECT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProjectPost;
