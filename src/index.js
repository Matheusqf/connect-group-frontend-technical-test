import React from 'react';
import ReactDOM from 'react-dom';
import './global-styles.scss';
import VehiclesPage from './pages/vehicles';

ReactDOM.render(
  <React.StrictMode>
    <VehiclesPage />
  </React.StrictMode>,
  document.querySelector('.root')
);
