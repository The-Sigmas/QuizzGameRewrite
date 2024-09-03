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
            <Route index element={<h2 className="font-mono"></h2>} />
              <Route path="autos" element={<Quiz 
            q1="Sigma?" 
            a1="Sigma" 
            o11="sigma" 
            o12="SIGMA" 
            o13="Sigma" 
            
            q2="Sigma?" 
            a2="Sigma" 
            o21="sigma" 
            o22="SIGMA" 
            o23="Sigma" 
            
            q3="Sigma?" 
            a3="Sigma" 
            o31="sigma" 
            o32="SIGMA" 
            o33="Sigma" />} />
              {/*<Route path="cpu" element={<Quiz />} />
              <Route path="gpu" element={<Quiz />} />*/}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>)
}

export default App
