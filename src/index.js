import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <div className='bg-slate-200 h-screen w-screen'>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </div>,
  document.getElementById('root')
);

