import { FaInstagram, FaTwitter, FaYoutube, FaSpotify } from 'react-icons/fa';
import { MdEmail, MdWhatsapp } from 'react-icons/md';

const Sociais = () => {
  // Array de links das redes sociais
  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com/luansantana', label: 'Instagram', hover: 'hover:text-pink-500' },
    { icon: <FaTwitter />, url: 'https://twitter.com/luansantana', label: 'Twitter', hover: 'hover:text-blue-400' },
    { icon: <FaYoutube />, url: 'https://youtube.com/luansantana', label: 'YouTube', hover: 'hover:text-red-500' },
    { icon: <FaSpotify />, url: 'https://open.spotify.com/artist/luansantana', label: 'Spotify', hover: 'hover:text-green-500' },
  ];

  return (
    <section 
      id="sociais"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center py-20"
      data-aos="fade-up"
    >
      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-12 tracking-wide text-gray-100" data-aos="fade-up">
        Fique por Dentro
      </h2>

      {/* Mídias Sociais */}
      <div 
        className="flex flex-col md:flex-row items-center md:justify-center gap-10 text-4xl mb-16"
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col items-center gap-3 text-gray-300 ${social.hover} transition-all duration-300 hover:scale-110`}
          >
            <div className="p-5 border border-gray-700 rounded-full shadow-md group-hover:shadow-xl transition-shadow duration-300">
              {social.icon}
            </div>
            <span className="text-sm font-light tracking-wider uppercase">{social.label}</span>
          </a>
        ))}
      </div>

      {/* Linha divisória */}
      <div className="w-1/2 border-t border-gray-700 mb-10" data-aos="zoom-in"></div>

      {/* Contato */}
      <div className="flex flex-col items-center gap-6 text-gray-300" data-aos="fade-up" data-aos-delay="400">
        <div className="flex items-center gap-3">
          <MdEmail className="text-xl text-gray-400" />
          <span className="text-sm">contato@luansantana.com</span>
        </div>
        <div className="flex items-center gap-3">
          <MdWhatsapp className="text-xl text-green-500" />
          <span className="text-sm">+55 11 99999-9999</span>
        </div>

        <a 
          href="mailto:contato@luansantana.com" 
          className="mt-6 px-6 py-3 border border-gray-700 rounded-lg text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
        >
          Entrar em Contato
        </a>
      </div>
    </section>
  );
};

export default Sociais;
