import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../components/Firebase/UserProvider';
import { auth } from '../components/Firebase/firebase';

const HomePage = () => {
  const user = useContext(UserContext);
  console.log(user);
  return !user ? (
    <Redirect to='/login' />
  ) : user.role === 'INS' || user.role === 'admin' ? (
    <Redirect to='/home-instructor' />
  ) : (
    <div>
      <p>hello student</p>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Wyloguj
      </button>
    </div>
  );
};

export default HomePage;
