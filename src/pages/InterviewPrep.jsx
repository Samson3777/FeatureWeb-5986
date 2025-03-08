import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaPlay } from 'react-icons/fa';

const InterviewPrep = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [experience, setExperience] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleStartPrep = () => {
    setIsGenerating(true);
    // Simulate AI preparation
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="flex items-center mb-6">
          <FaRobot className="text-3xl text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold">AI Interview Preparation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Role</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                placeholder="e.g., Software Engineer"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Experience Level</label>
              <select
                className="w-full p-2 border rounded-md"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="">Select Experience Level</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>
            </div>

            <button
              onClick={handleStartPrep}
              disabled={!selectedRole || !experience}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <FaPlay className="mr-2" />
              Start Preparation
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">What you'll get:</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Personalized interview questions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Role-specific preparation tips
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Common technical questions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Behavioral interview guidance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Mock interview scenarios
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InterviewPrep;