
import styles from './App.module.css';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { HeaderUI } from './ui/header';
import './variables.css';


function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
