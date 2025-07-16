import React from 'react';
import { Link } from 'react-router-dom';
import ProfileInfoCard from '../Cards/ProfileInfoCard';

const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200/50 backdrop-blur flex items-center justify-between px-4">
      <Link to="/dashboard">
        <h2 className="text-xl font-semibold text-gray-800">Ace interview</h2>
      </Link>
      <ProfileInfoCard />
    </div>
  );
};

export default Navbar;
