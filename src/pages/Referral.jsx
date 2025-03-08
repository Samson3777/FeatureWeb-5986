import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaCoins } from 'react-icons/fa';

const Referral = () => {
  const [referralData, setReferralData] = useState({
    candidateName: '',
    email: '',
    position: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle referral submission
    console.log('Referral submitted:', referralData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="flex items-center mb-6">
          <FaUserPlus className="text-3xl text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold">Refer a Candidate</h2>
        </div>

        <div className="bg-blue-50 p-4 rounded-md mb-6">
          <div className="flex items-center">
            <FaCoins className="text-yellow-500 mr-2" />
            <span className="text-blue-800">Earn 500 points for successful referrals!</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Candidate Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={referralData.candidateName}
              onChange={(e) => setReferralData({...referralData, candidateName: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              value={referralData.email}
              onChange={(e) => setReferralData({...referralData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Position</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={referralData.position}
              onChange={(e) => setReferralData({...referralData, position: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Resume</label>
            <input
              type="file"
              className="w-full p-2 border rounded-md"
              onChange={(e) => setReferralData({...referralData, resume: e.target.files[0]})}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Referral
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Referral;