import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import{
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom';

import Home from './routes/Home.jsx';
import Masculino from './routes/Masculino.jsx';
import Feminino from './routes/Feminino.jsx';
import Calçados from './routes/Calçados.jsx'
import Roupas from './routes/Roupas.jsx';
import Login from './routes/Login.jsx';
import Sacola from './routes/Sacola.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"masculino",
    element: <Masculino/>,
  },
  {
    path:"feminino",
    element: <Feminino/>,
  },
  {
    path:"calçados",
    element: <Calçados/>,
  },
  {
    path:"roupas",
    element: <Roupas/>,
  },
  {
    path:"login",
    element: <Login/>,
  },
  {
    path:"sacola",
    element: <Sacola/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
