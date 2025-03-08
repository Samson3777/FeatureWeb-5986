import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaUserPlus, FaLink, FaUsers, FaRobot } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">JobQuest</Link>
          <div className="flex space-x-4">
            <NavLink to="/post-job" icon={<FaBriefcase />} text="Post Jobs" />
            <NavLink to="/import-job" icon={<FaLink />} text="Import Jobs" />
            <NavLink to="/connections" icon={<FaUsers />} text="Connections" />
            <NavLink to="/interview-prep" icon={<FaRobot />} text="AI Interview Prep" />
            <NavLink to="/referral" icon={<FaUserPlus />} text="Referral" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
  >
    <span className="mr-2">{icon}</span>
    <span>{text}</span>
  </Link>
);

export default Navbar;