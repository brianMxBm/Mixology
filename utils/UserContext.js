import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../client/firebase-config';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try {
        setCurrentUser(user);
      } catch (error) {}
    });
  }, []);

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};
