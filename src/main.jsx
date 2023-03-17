import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@fontsource/public-sans';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

import Home from './pages';
import Students from './pages/students';
import CreateStudent from './pages/create-student';
import EditStudent from './pages/edit-student';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'students',
        element: <Students />,
        loader: async () => (await axios.get('/students')).data.reverse(),
      },
      {
        path: 'students/create',
        element: <CreateStudent />,
      },
      {
        path: 'students/:id/edit',
        element: <EditStudent />,
        loader: async ({ params }) =>
          (await axios.get(`/students/${params.id}`)).data,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CssVarsProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </CssVarsProvider>
);
