import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import About from './App';
import HomePage from './pages/Home';
import Resume from './pages/Resume';

import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

import './App.css';


Amplify.configure(config);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },{
    path: "about",
    element: <About/>
  },{
    path: "resume",
    element: <Resume/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
