import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import{
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom';

import Contatos from './routes/Contatos.jsx';
import Calçados from './routes/Calçados.jsx';
import Roupas from './routes/Roupas.jsx';
import Login from './routes/Login.jsx';
import Sacola from './routes/Sacola.jsx';
import Home from './routes/Home.jsx'
import SearchBar from './routes/SearchBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "contatos",
        element: <Contatos/>,
      },
      {
        path: "calçados",
        element: <Calçados/>,
      },
      {
        path: "roupas",
        element: <Roupas/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "sacola",
        element: <Sacola/>,
      },
      {
        path: "searchBar",
        element: <SearchBar/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
