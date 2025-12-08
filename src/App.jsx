import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <div className="font-sans text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}
export default App;