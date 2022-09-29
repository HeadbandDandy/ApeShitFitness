//this file will hold elements into DOM



//below contains the modules to import react and react-dom

import React from 'react';
import ReactDOM from 'react-dom';

// below contains the module for the Browser Router
import { BrowserRouter } from 'react-router-dom';


//below imports app file in src folder
import App from './App'



//below holds the root that is created through ReactDOM module
const root = ReactDOM.createRoot(document.getElementById('root'));



//below will render the application
root.render(
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
    
)
