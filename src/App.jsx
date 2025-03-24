import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './pages/UserList.jsx'; // ✅
import CreateUser from './pages/CreateUser.jsx'; // ✅


function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-600">✅ Tailwind is now working!</h1>
      <div style={{ padding: '2rem' }}>
        <h1>🚀 BetWidely Frontend</h1>
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>User List</Link>
          <Link to="/create">Create User</Link>
        </nav>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
