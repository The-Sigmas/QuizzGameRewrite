import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Category from './components/Category.jsx'

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
