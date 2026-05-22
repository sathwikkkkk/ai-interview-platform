import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Interview from './pages/Interview';
import Report from './pages/Report';
import InterviewHistory from './pages/InterviewHistory';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/interview/:interviewId" element={<Interview />} />
        <Route path="/history" element={<InterviewHistory />} />
        <Route path="/report/:interviewId" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
