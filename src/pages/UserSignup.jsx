import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// Import Firebase functions
import { googleLogin } from '../firebase/auth';
import { addUserWithRole } from '../firebase/db';

const UserSignup = () => {
  const { loginUser } = useApp();
  const navigate = useNavigate();
  
  const [error, setError] = useState('');

  const handleGoogleSignup = async () => {
    try {
      setError('');
      const res = await googleLogin();

      // Save user in Firestore with role = "user"
      await addUserWithRole(res.user.uid, res.user.email, 'user');

      // Save user in context
      loginUser({
        id: res.user.uid,
        name: res.user.displayName || res.user.email,
        email: res.user.email,
        type: 'user'
      });

      navigate('/', { replace: true });
    } catch (err) {
      setError(err.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pt-32 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <PersonAddIcon className="text-green-600 text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600">Join OakSpace with Google</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={handleGoogleSignup}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-gray-200 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-xs text-gray-600 text-center">
            By signing up, you agree to our{' '}
            <a href="#" className="text-green-600 hover:text-green-700 font-medium">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="text-green-600 hover:text-green-700 font-medium">Privacy Policy</a>
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-green-600 hover:text-green-700 font-semibold">Sign in</Link>
          </p>
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-xl">
          <p className="text-sm text-green-800 text-center">
            <strong>Quick & Easy:</strong> Sign up instantly with your Google account
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;