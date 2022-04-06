import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/app/App';
import { AppProvider } from './context/MsgsContext';



ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
        <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


