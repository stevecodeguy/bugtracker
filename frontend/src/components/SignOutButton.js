import React, { useContext } from 'react';

import { SessionContext } from '../context/Session';

export default function SignOutButton() {
  const { setToken } = useContext(SessionContext);

  const signOut = () => {
    localStorage.removeItem('token');
    setToken('');
  }

  return (
    <button onClick={() => signOut()}>Sign Out</button>
  );
}