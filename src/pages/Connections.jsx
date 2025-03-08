import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBuilding, FaUserTie } from 'react-icons/fa';

const Connections = () => {
  const [companyName, setCompanyName] = useState('');
  const [executives, setExecutives] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      company: 'TechCorp',
      connected: false
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'VP of Engineering',
      company: 'TechCorp',
      connected: false
    }
  ]);

  const handleConnect = (id) => {
    setExecutives(executives.map(exec => 
      exec.id === id ? {...exec, connected: !exec.connected} : exec
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="flex items-center mb-6">
          <FaUsers className="text-3xl text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold">Connect with Executives</h2>
        </div>

        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <FaBuilding className="text-xl text-gray-600" />
            <input
              type="text"
              className="flex-1 p-2 border rounded-md"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
            />
          </div>
        </div>

        <div className="space-y-4">
          {executives.map(executive => (
            <motion.div
              key={executive.id}
              className="border p-4 rounded-lg hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FaUserTie className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{executive.name}</h3>
                    <p className="text-gray-600">{executive.role}</p>
                    <p className="text-sm text-gray-500">{executive.company}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleConnect(executive.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    executive.connected
                      ? 'bg-gray-100 text-gray-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {executive.connected ? 'Connected' : 'Connect'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Connections;