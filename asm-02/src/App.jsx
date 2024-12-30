import { About } from "./components/about"
import { Chooseus } from "./components/chooseus"
import { Hero } from "./components/hero"
import  Navbar  from "./components/Navbar.jsx"
import { Event } from "./components/Event.jsx"
import { Menu } from "./components/menu"
import './main.css'
import './main.js'

import { Chef_gallery } from "./components/chef_gallery"
import { Book_Table } from "./components/Book_Table"
import { Contact } from "./components/contact"
import { Testimonials } from "./components/Testimonials"
import { Gallery } from "./components/gallery"
import Footer from "./Footer.jsx"
import Stats from "./components/stats.jsx"

function App() {
 

  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Chooseus/>
      <Gallery/>
      <Menu/>
      <Stats/>
      {/* <Event/> */}

      <Chef_gallery/>
      <Book_Table/>
      <Testimonials/>
      {/* <Map_admin/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
