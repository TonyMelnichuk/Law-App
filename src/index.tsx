import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './i18n';
import App from './App'
import Preloader from './components/common/Preloader';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

