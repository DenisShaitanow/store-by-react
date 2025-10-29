
import styles from './App.module.css'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './rourer'
import { HeaderUI } from './ui/header'
import './variables.css';


function App() {


  return (
    <div className={styles.app}>
      <HeaderUI isModal={false} isAuth={false} isNotification={false} theme={'light'}/>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
