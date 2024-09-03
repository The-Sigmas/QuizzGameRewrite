import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Category from './components/Category.jsx'
import Layout from './components/Layout.jsx'
import Quiz from './components/Quiz.jsx'

function App() {
  

  return (<BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Choose a quiz</div>} />
              <Route path="autos" element={<Quiz />} />
              <Route path="cpu" element={<Quiz />} />
              <Route path="gpu" element={<Quiz />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>)
}

export default App
