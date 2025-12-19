import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Link Agency</a>
        <nav className="nav">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <Hero />
      <Services />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Link Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}