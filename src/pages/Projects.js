import React, { useState } from "react";
import "./Projects.css";

const ProjectListing = () => {
  // Sample Project Data
  const projects = [
    { id: 1, title: "Project 1", provider: "Provider A", duration: "2 weeks", skills: "HTML, CSS", status: "Open" },
    { id: 2, title: "Project 2", provider: "Provider B", duration: "1 month", skills: "JavaScript", status: "Closed" },
    { id: 3, title: "Project 3", provider: "Provider C", duration: "3 weeks", skills: "React, Node.js", status: "Open" },
    { id: 4, title: "Project 4", provider: "Provider D", duration: "2 months", skills: "Python", status: "Ongoing" },
    { id: 5, title: "Project 5", provider: "Provider E", duration: "1 week", skills: "React", status: "Open" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  // Filter Projects based on search term
  const filteredProjects = projects
    .filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "duration") {
        // Convert duration to weeks for sorting
        const durationToWeeks = (duration) => {
          const match = duration.match(/(\d+)\s*(week|month)/);
          if (match) {
            return match[2] === "month" ? parseInt(match[1]) * 4 : parseInt(match[1]);
          }
          return 0;
        };

        const aWeeks = durationToWeeks(a.duration);
        const bWeeks = durationToWeeks(b.duration);
        return aWeeks - bWeeks;
      }
      return 0; // Default sorting by featured (no sorting logic)
    });

  // Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstRow, indexOfLastRow);

  // Handlers
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSort = (e) => setSortOption(e.target.value);
  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredProjects.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="project-container">
      <h1>PROJECTS</h1>

      {/* Search and Sort Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button>&gt;</button>
        <select value={sortOption} onChange={handleSort}>
          <option value="featured">SORT BY: FEATURED</option>
          <option value="duration">SORT BY: DURATION</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>PROVIDER</th>
              <th>DURATION</th>
              <th>SKILLS</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project) => (
              <tr key={project.id}>
                <td>{project.title}</td>
                <td>{project.provider}</td>
                <td>{project.duration}</td>
                <td>{project.skills}</td>
                <td>
                  <a href="#" className="learn-more-btn">
                    Learn More
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrevPage}>&lt;</button>
        <span>
          PAGE {currentPage} OF {Math.ceil(filteredProjects.length / rowsPerPage)}
        </span>
        <button onClick={handleNextPage}>&gt;</button>
      </div>
    </div>
  );
};

export default ProjectListing;
