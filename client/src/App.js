import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
