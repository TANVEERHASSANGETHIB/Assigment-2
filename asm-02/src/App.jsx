import { About } from "./components/about"
import { Chooseus } from "./components/chooseus"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import './main.css'

function App() {
 

  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Chooseus/>
    </div>
  )
}

export default App
