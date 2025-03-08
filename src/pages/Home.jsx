import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUserPlus, FaLink, FaUsers, FaRobot } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to JobQuest
        </h1>
        <p className="text-xl text-gray-600">
          Your AI-powered career advancement platform
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          icon={<FaBriefcase />}
          title="Post Jobs"
          description="Create and manage job postings with ease"
        />
        <FeatureCard
          icon={<FaUserPlus />}
          title="Referral Program"
          description="Refer candidates and earn rewards"
        />
        <FeatureCard
          icon={<FaLink />}
          title="Import External Jobs"
          description="Import and optimize your CV for external positions"
        />
        <FeatureCard
          icon={<FaUsers />}
          title="Connect with Executives"
          description="Build valuable professional connections"
        />
        <FeatureCard
          icon={<FaRobot />}
          title="AI Interview Preparation"
          description="Get personalized interview coaching"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="text-blue-600 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Home;