import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="min-h-screen snap-y snap-mandatory">
      <Navbar/>
      <section id="home" className="snap-start">
      <Hero/>
      </section>
      <section id="about" className="snap-start">
      <About/>
      </section>
      <section id="services">
      <Services/>
      </section>
      <section id="projects">
      <Projects/>
      </section>
      <section id="contact">
      <Contact/>
      </section>
      <Footer/>
    </div>
      
  )
}

export default App
