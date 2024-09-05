import React, { useState } from 'react';
import Swal from 'sweetalert2';


const CreatUser = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the response has content before parsing as JSON
      const result = response.headers.get('Content-Type')?.includes('application/json') 
        ? await response.json() 
        : {};
  
      console.log("User created:", result);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Is Created Successfully",
        showConfirmButton: false,
        timer: 1500
      });

    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  
  return (
    <div className="flex h-screen bg-blue-500 justify-center items-center">
      <div className="w-1/2 bg-white rounded p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Add User</h2>
          
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

export default CreatUser;
