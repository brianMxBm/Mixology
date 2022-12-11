import React, { useState, useEffect } from 'react';
import RootNavigation from './navigation/RootNavigation';
import { UserProvider } from './utils/UserContext';

export default function App() {
  return (
    <UserProvider>
      <RootNavigation />
    </UserProvider>
  );
}
