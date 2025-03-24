import React, { useState } from 'react';
import { createUser } from '../api/userApi';

function CreateUser() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData);
      alert('✅ User created!');
      setFormData({ name: '', email: '', password: '' });
    } catch (error) {
      console.error(error);
      alert('❌ Failed to create user.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="name" placeholder="Name" value={formData.name} onChange={handleChange} required
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="email" placeholder="Email" value={formData.email} onChange={handleChange} required
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="password" placeholder="Password" value={formData.password} onChange={handleChange} required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
