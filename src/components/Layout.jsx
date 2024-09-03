import { Outlet } from 'react-router-dom'
import Category from './Category.jsx'
import '../App.css'
import Button from './Button.jsx'

export default function Layout() {
  const options = ["autos", "cpu", "gpu"]
  const option_buttons = options.map(a =>
    <Category key={a} s="m-8 p-4 font-mono text-6xl" name={a} />
  )

  return (<div className="App">
    <h1 className="">Waehlen sie ein Quiz</h1>
    <div className="answer-buttons m-1 absolute inset-y-2/4 -translate-y-1/2 -translate-x-1/2 left-1/2">
      {option_buttons}
    </div>
		<Outlet />
  </div>)
}
