import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/userApi';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">User List</h2>
      <div className="space-y-4">
        {users.map(user => (
          <div key={user._id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-lg">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
