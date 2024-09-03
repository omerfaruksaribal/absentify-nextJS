'use client';

import Login from '@/components/Login';
import Register from '@/components/Register';
import React, { useState } from 'react';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <div>{isLoggedIn ? <p>Welcome, User!</p> : <Register />}</div>;
};

export default Profile;
