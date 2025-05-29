import { useEffect, useState, createContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import throttle from 'lodash.throttle';

import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Awards from './components/Awards';
import SectionLuan from './components/SectionLuan';
import Sociais from './components/Sociais';
import Footer from './components/Footer';

export const ScrollContext = createContext(0);

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
        AOS.refresh();
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollY}>
      <Header />
      <Hero />
      <Bio />
      <Awards />
      <SectionLuan />
      <Sociais />
      <Footer />
    </ScrollContext.Provider>
  );
}

export default App;
