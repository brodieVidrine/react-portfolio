import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { HttpLink } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';
import About from './pages/About';
import HomePage from './pages/Home';
import Resume from './pages/Resume';
import WebPortfolio from './pages/WebPortfolio';
import BrokemonArena from './pages/BrokemonArena';

import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

import './App.css';


Amplify.configure(config);

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://graphqlpokemon.favware.tech/v8'
});

export const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  name: 'graphql-pokemon-client',
  version: '1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
});

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
  },{
    path: "webPortfolio",
    element: <WebPortfolio/>
  },{
    path: "brokemonArena",
    element: <BrokemonArena/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client} link={link}> 
      <RouterProvider router={router}/>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
