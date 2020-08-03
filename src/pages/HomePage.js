import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../components/Firebase/UserProvider';
import { auth } from '../components/Firebase/firebase';

const HomePage = () => {
  const user = useContext(UserContext);
  console.log(user);

  return !user ? (
    <Redirect to='/login' />
  ) : (
    <div>
      <p>hello</p>
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
