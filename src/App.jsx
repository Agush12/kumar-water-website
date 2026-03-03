import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Products from './components/Products';
import Usage from './components/Usage';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Experience />
        <Usage />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
