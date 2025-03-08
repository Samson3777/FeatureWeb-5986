import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaSpinner } from 'react-icons/fa';

const JobImport = () => {
  const [jobUrl, setJobUrl] = useState('');
  const [resume, setResume] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="flex items-center mb-6">
          <FaLink className="text-3xl text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold">Import External Job</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Paste a job listing URL and upload your resume for AI-powered optimization
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Job Listing URL</label>
            <input
              type="url"
              className="w-full p-2 border rounded-md"
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
              placeholder="https://example.com/job-listing"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Your Resume</label>
            <input
              type="file"
              className="w-full p-2 border rounded-md"
              onChange={(e) => setResume(e.target.files[0])}
              accept=".pdf,.doc,.docx"
            />
          </div>

          <button
            type="submit"
            disabled={isAnalyzing}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            {isAnalyzing ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Analyzing...
              </>
            ) : (
              'Analyze and Optimize'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default JobImport;