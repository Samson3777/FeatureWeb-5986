import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaDollarSign, FaUsers, FaGlobe } from 'react-icons/fa';

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'full-time',
    category: '',
    experience: '',
    salary: '',
    currency: 'USD',
    description: '',
    requirements: '',
    benefits: '',
    deadline: '',
    workModel: 'onsite',
    skills: [],
    employmentType: 'permanent',
    positions: 1
  });

  const jobCategories = [
    'Technology',
    'Healthcare',
    'Finance',
    'Marketing',
    'Sales',
    'Engineering',
    'Education',
    'Design',
    'Customer Service',
    'Human Resources',
    'Legal',
    'Manufacturing',
    'Research',
    'Consulting'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posted:', jobData);
  };

  const handleSkillInput = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      setJobData({
        ...jobData,
        skills: [...jobData.skills, e.target.value]
      });
      e.target.value = '';
    }
  };

  const removeSkill = (skillToRemove) => {
    setJobData({
      ...jobData,
      skills: jobData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="flex items-center mb-6">
          <FaBriefcase className="text-3xl text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold">Post a New Job</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Job Title *</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-md"
                value={jobData.title}
                onChange={(e) => setJobData({...jobData, title: e.target.value})}
                placeholder="e.g., Senior Software Engineer"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Company Name *</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-md"
                value={jobData.company}
                onChange={(e) => setJobData({...jobData, company: e.target.value})}
              />
            </div>
          </div>

          {/* Category and Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Job Category *</label>
              <select
                required
                className="w-full p-2 border rounded-md"
                value={jobData.category}
                onChange={(e) => setJobData({...jobData, category: e.target.value})}
              >
                <option value="">Select a category</option>
                {jobCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Employment Type *</label>
              <select
                required
                className="w-full p-2 border rounded-md"
                value={jobData.type}
                onChange={(e) => setJobData({...jobData, type: e.target.value})}
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </div>

          {/* Location and Work Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Location *</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-md"
                value={jobData.location}
                onChange={(e) => setJobData({...jobData, location: e.target.value})}
                placeholder="e.g., New York, NY"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Work Model *</label>
              <select
                required
                className="w-full p-2 border rounded-md"
                value={jobData.workModel}
                onChange={(e) => setJobData({...jobData, workModel: e.target.value})}
              >
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
                <option value="remote">Remote</option>
              </select>
            </div>
          </div>

          {/* Experience and Positions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Experience Required</label>
              <select
                className="w-full p-2 border rounded-md"
                value={jobData.experience}
                onChange={(e) => setJobData({...jobData, experience: e.target.value})}
              >
                <option value="">Select experience level</option>
                <option value="entry">Entry Level (0-2 years)</option>
                <option value="intermediate">Intermediate (2-5 years)</option>
                <option value="senior">Senior (5-8 years)</option>
                <option value="expert">Expert (8+ years)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Number of Positions</label>
              <input
                type="number"
                min="1"
                className="w-full p-2 border rounded-md"
                value={jobData.positions}
                onChange={(e) => setJobData({...jobData, positions: e.target.value})}
              />
            </div>
          </div>

          {/* Salary Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Salary Range</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={jobData.salary}
                onChange={(e) => setJobData({...jobData, salary: e.target.value})}
                placeholder="e.g., 50,000 - 70,000"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Currency</label>
              <select
                className="w-full p-2 border rounded-md"
                value={jobData.currency}
                onChange={(e) => setJobData({...jobData, currency: e.target.value})}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CAD">CAD</option>
                <option value="AUD">AUD</option>
              </select>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-gray-700 mb-2">Required Skills</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mb-2"
              placeholder="Type a skill and press Enter"
              onKeyDown={handleSkillInput}
            />
            <div className="flex flex-wrap gap-2">
              {jobData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-2">Job Description *</label>
            <textarea
              required
              className="w-full p-2 border rounded-md h-32"
              value={jobData.description}
              onChange={(e) => setJobData({...jobData, description: e.target.value})}
              placeholder="Describe the role and responsibilities"
            />
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-gray-700 mb-2">Requirements *</label>
            <textarea
              required
              className="w-full p-2 border rounded-md h-32"
              value={jobData.requirements}
              onChange={(e) => setJobData({...jobData, requirements: e.target.value})}
              placeholder="List the requirements and qualifications"
            />
          </div>

          {/* Benefits */}
          <div>
            <label className="block text-gray-700 mb-2">Benefits</label>
            <textarea
              className="w-full p-2 border rounded-md h-32"
              value={jobData.benefits}
              onChange={(e) => setJobData({...jobData, benefits: e.target.value})}
              placeholder="List the benefits and perks"
            />
          </div>

          {/* Application Deadline */}
          <div>
            <label className="block text-gray-700 mb-2">Application Deadline</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              value={jobData.deadline}
              onChange={(e) => setJobData({...jobData, deadline: e.target.value})}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              onClick={() => setJobData({
                title: '',
                company: '',
                location: '',
                type: 'full-time',
                category: '',
                experience: '',
                salary: '',
                currency: 'USD',
                description: '',
                requirements: '',
                benefits: '',
                deadline: '',
                workModel: 'onsite',
                skills: [],
                employmentType: 'permanent',
                positions: 1
              })}
            >
              Clear Form
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Post Job
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PostJob;