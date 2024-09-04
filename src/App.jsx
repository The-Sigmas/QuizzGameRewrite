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
            q1="BMW Steht fuer?" 
            a1="Bayerische Motorenwerke" 
            o11="Bayerische Motorenwerke" 
            o12="Berlin Nord West" 
            o13="Benziner Motorwerk" 
            
            q2="Welches ist eine Deutsche Automarke" 
            a2="Opel" 
            o21="Bugatti" 
            o22="Opel" 
            o23="Citroen" 
            
            q3="Welches ist kein Merzedes" 
            a3="Merzedes GTI" 
            o31="Merzedes Benz" 
            o32="Merzedes GTI" 
            o33="Merzedes AMG" />} />
              <Route path="cpu" element={<Quiz 
            q1="Fuer was steht CPU?" 
            a1="Central Processing Unit" 
            o11="Computer Power Unit" 
            o12="Computer Processing Unit" 
            o13="Central Processing Unit" 
            
            q2="Was ist eine ALU?" 
            a2="Arithmetic Logic Unit" 
            o21="Arithmetic Logic Unit" 
            o22="Arithmetic Language User" 
            o23="Arithmetic Logic User" 
            
            q3="Was ist UMBEDINGT gebraucht von der CPU?" 
            a3="Random Access Memory" 
            o31="Festplatte" 
            o32="Graffikkarte" 
            o33="Random Access Memory" />} />
              <Route path="gpu" element={<Quiz 
            q1="Was macht eine Grafikkarte besonderst?" 
            a1="Multithreading" 
            o11="Schneller rechnen" 
            o12="Multithreading" 
            o13="Braucht weniger Strom" 
            
            q2="Wie nennt man den Zwischenspeicher einer Grafikkarte?" 
            a2="VRAM" 
            o21="VRAM" 
            o22="DDR5" 
            o23="SDR5" 
            
            q3="Fuer was ist die GPU auch meistens zustaendig?" 
            a3="Video Anzeigen" 
            o31="Video Anzeigen" 
            o32="Betriebssystem laufen lassen" 
            o33="Zwischenspeicher" />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>)
}

export default App
