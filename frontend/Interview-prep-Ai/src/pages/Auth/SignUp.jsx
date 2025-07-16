import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { UserContext } from '../../context/userContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';
import toast from 'react-hot-toast';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import uploadImage from '../../utils/uploadimage'; // Assuming this is the correct path for your uploadImage function
const SignUp = ({ setCurrentPage }) => {
  const [profilePic,setProfilePic]=useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();


    // Frontend validation
    let profileimageUrl="";
    if (!name) return setError("Please enter your full name");
    if (!validateEmail(email)) return setError("Please enter a valid email");
    if (!password || password.length < 6) return setError("Password must be at least 6 characters");
    if (profilePic) {
      profileimageUrl = await uploadImage(profilePic);
    }

    setError('');

    try {
      if(profilePic){
        const imageUploadResponse = await uploadImage(profilePic);
        profileimageUrl = imageUploadResponse.url||" "; // Assuming the response contains the URL
      }
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
         name,
        email,
        password,
        profileimageUrl
      });

      // Optional: show toast
      toast.success("Account created successfully");
       const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data); 
      
        navigate('/dashboard');
      }
      // Store user and token
     
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-gray-800'>Create Account</h2>
      <form onSubmit={handleSignup} className='space-y-4'>
        {/* Profile Picture */}
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        {/* Full Name */}
        <div>
          <label className="text-sm text-black font-medium">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-black font-medium">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-black font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>

        

        {error && <p className='text-red-500 text-sm'>{error}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Sign Up
        </button>

        <p className='text-sm text-gray-600 mt-4 text-center'>
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => setCurrentPage('login')}
            className="text-indigo-600 hover:underline"
          >
            Log in here
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
