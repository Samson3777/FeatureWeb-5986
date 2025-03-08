import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostJob from './pages/PostJob';
import JobImport from './pages/JobImport';
import Connections from './pages/Connections';
import InterviewPrep from './pages/InterviewPrep';
import Referral from './pages/Referral';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/import-job" element={<JobImport />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/interview-prep" element={<InterviewPrep />} />
            <Route path="/referral" element={<Referral />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;