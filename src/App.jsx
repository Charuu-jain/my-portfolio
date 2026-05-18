import './index.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default App