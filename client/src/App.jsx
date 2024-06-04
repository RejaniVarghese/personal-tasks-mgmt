import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import TaskPage from './pages/TaskPage'
import { useContext } from 'react'
import { UserContext } from './contexts/userContext'

//axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.baseURL = window.location.origin;
axios.defaults.withCredentials = true

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/tasks" element={<TaskPage />}></Route>
      </Route>
    </Routes>

  )
}

export default App
