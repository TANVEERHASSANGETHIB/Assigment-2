import { About } from "./components/about"
import { Chooseus } from "./components/chooseus"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import { Menu } from "./components/menu"
import './main.css'
import { Chef_gallery } from "./components/chef_gallery"

function App() {
 

  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Chooseus/>
      <Menu/>
      <Chef_gallery/>
    </div>
  )
}

export default App
