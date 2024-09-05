import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  // Fetch the existing user data to pre-fill the form
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/tasks/${id}`);
        if (response.ok) {
          const user = await response.json();
          setFormData(user);
        } else {
          console.error('Failed to fetch user');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle form submission to update the user
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User updated successfully");
        navigate('/'); // Redirect to the homepage or another page after successful update
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="flex h-screen bg-blue-500 justify-center items-center">
      <div className="w-1/2 bg-white rounded p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Update User</h2>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name" 
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email" 
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700">Age</label>
            <input 
              type="number" 
              id="age" 
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Age" 
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
