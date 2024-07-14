import React from 'react'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Homepage from './pages/Homepage'
import CreateFood from './pages/CreateFood'
import UpdatePage from './pages/UpdatePage'
import axios from 'axios'


const App = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/> } />
        <Route path="/create" element={<CreateFood/> } />
        <Route path="/update/:id" element={<UpdatePage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App