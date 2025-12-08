import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="font-sans text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
export default App;