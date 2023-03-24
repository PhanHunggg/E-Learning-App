import React from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom"
import Router from './routes/Router';
import { useLoading } from './contexts/loading/LoadingHook';
import LoadingIndicator from './contexts/loading/LoadingIndicator';


function App() {
  const { isLoading } = useLoading();
  return (
    <div className="App">
      <BrowserRouter>
        {
          isLoading ? <LoadingIndicator /> : <Router />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
