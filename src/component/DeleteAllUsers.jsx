import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AuthService from '../api/authService';

const DeleteAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Always use the latest token from localStorage
  const token = localStorage.getItem('shefund_token') || '';
  console.log(token);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await AuthService.getAllUsers({
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data || []);
      } catch (err) {
        // Check for token expiration error
        if (
          err?.response?.data?.message === 'Token has expired' ||
          err?.message?.includes('Token has expired')
        ) {
          localStorage.removeItem('shefund_token');
          toast.error('Session expired. Please log in again.');
          // Optionally, redirect to login page:
          // navigate('/login');
        } else {
          toast.error('Failed to fetch users');
        }
      }
      setLoading(false);
    };
    fetchUsers();
  }, [token]);

  const handleDeleteAll = async () => {
    if (!window.confirm('Are you sure you want to delete all users?')) return;
    setLoading(true);
    try {
      for (const user of users) {
        await AuthService.deleteUser(user.id, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      toast.success('All users deleted');
      setUsers([]);
    } catch (err) {
      toast.error('Failed to delete all users');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>All Users</h3>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email || user.username || user.name}</li>
        ))}
      </ul>
      <button
        onClick={handleDeleteAll}
        disabled={loading || users.length === 0}
      >
        Delete All Users
      </button>
    </div>
  );
};

export default DeleteAllUsers;
