// src/components/Cards/ProfileInfoCard.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    navigate('/');
  };

  return user ? (
    <div className="flex items-center gap-3">
      <img
        src={user?.profileImageUrl || 'https://via.placeholder.com/150'}
        alt="Profile"
        className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
      />

      <div className="text-right">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-1 max-w-[120px]">
          {user?.name || 'Guest User'}
        </h2>
        <button
          onClick={handleLogout}
          className="text-xs text-red-500 hover:text-red-700 mt-1"
        >
          Logout
        </button>
      </div>
    </div>
  ) : null;
};

export default ProfileInfoCard;