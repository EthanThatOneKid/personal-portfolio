import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
      <h1>Welcome to My Portfolio</h1>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
