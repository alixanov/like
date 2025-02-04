import eruda from 'eruda';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Update import

import App from './App.jsx';

eruda.init();

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
