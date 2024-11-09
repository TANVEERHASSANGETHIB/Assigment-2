import { About } from "./components/about"
import { Chooseus } from "./components/chooseus"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import { Menu } from "./components/menu"
import './main.css'
import { Chef_gallery } from "./components/chef_gallery"
import { Book_Table } from "./components/Book_Table"
import { Contact } from "./components/contact"

function App() {
 

  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Chooseus/>
      <Menu/>
      <Chef_gallery/>
      <Book_Table/>
      <Contact/>
    </div>
  )
}

export default App
