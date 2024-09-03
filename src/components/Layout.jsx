import { Outlet } from 'react-router-dom'
import Category from './Category.jsx'

export default function Layout() {
  const options = ["autos", "cpu", "gpu"]
  const option_buttons = options.map(a =>
    <Category key={a} s="" name={a} />
  )

  return (<div className="App">
    <h1 className="">Waehlen sie ein Quiz</h1>
    <div className="">
      {option_buttons}
    </div>
		<Outlet />
  </div>)
}
