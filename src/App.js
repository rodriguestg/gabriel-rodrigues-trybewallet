import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <div>Hello, TrybeWallet!</div>
      <Route exact path="/" component={ Login } />
      <Route exact path="/carteira" component={ Wallet } />
    </>
  );
}

export default App;
