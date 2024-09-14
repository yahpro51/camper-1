import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Navbarcomponent from './components/navbar/navbar';
import Routercomponent from './router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbarcomponent/>
<Routercomponent/>
</BrowserRouter>
);


