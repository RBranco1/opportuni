// App.tsx ou App.js

import React from 'react';
import Routes from './src/navigation/routes';
import { AuthProvider } from './authContext'; // Atualize o caminho conforme necessário

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
