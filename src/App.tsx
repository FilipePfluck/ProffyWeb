import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'

import Landing from './pages/Landing'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
