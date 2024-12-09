import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Quiz from './pages/Quiz';
import AboutUs from './pages/AboutUs';
import ProjectConfirmation from './pages/ProjectConfirmation';
import NewProjectPost from './pages/NewProjectPost';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/projectconfirmation" element={<ProjectConfirmation />} />
        <Route path="/newprojectpost" element={<NewProjectPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
