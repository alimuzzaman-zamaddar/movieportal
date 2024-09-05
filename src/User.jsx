import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3001/tasks');
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        } else {
          console.error('Failed to fetch tasks');
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks(tasks.filter((task) => task._id !== id));
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full bg-white rounded p-3">
        <div className="w-full flex justify-start p-4">
          <Link
            to="/create"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create User
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Email</th>
                <th className="text-left p-2">Age</th>
                <th className="text-left p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id} className="border-b">
                  <td className="p-2">{task.name}</td>
                  <td className="p-2">{task.email}</td>
                  <td className="p-2">{task.age}</td>
                  <td className="p-2 flex space-x-2">
                    <button
                      onClick={() => handleEdit(task._id)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
