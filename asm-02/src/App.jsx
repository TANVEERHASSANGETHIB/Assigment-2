import { About } from "./components/about"
import { Chooseus } from "./components/chooseus"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import { Menu } from "./components/menu"
import './main.css'

function App() {
 

  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Chooseus/>
      <Menu/>
    </div>
  )
}

export default App
