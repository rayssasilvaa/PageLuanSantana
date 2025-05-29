import { useContext } from 'react';
import { ScrollContext } from '../App';

const Hero = () => {
  const scrollY = useContext(ScrollContext);

  // Ajusta o fator de opacidade e escala
  const opacity = Math.max(0, 1 - scrollY / 350);
  const scale = 1 + scrollY * 0.0008; // Mais sutil também

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <img
        src="/assets/img1.webp"
        alt="Imagem de fundo"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{
          opacity: opacity,
          transform: `scale(${scale})`,
          transition: 'all 0.3s ease-out',
        }}
        loading='lazy'
      />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-10" />
    </section>
  );
};

export default Hero;
