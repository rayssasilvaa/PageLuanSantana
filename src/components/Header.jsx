import { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-full flex items-center justify-between p-6 z-50 text-white'>
      <h1 className='text-3xl md:text-4xl font-bold mx-auto font-sans tracking-wider'>
        LUAN SANTANA
      </h1>

      {/* Botão para abrir o menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='absolute right-6 top-6 text-white text-4xl transition-transform duration-300 hover:scale-110 cursor-pointer'
      >
        <IoMenuSharp />
      </button>

      {/* Menu */}
      {isOpen && (
        <div className='absolute top-20 right-6 bg-black bg-opacity-90 text-white rounded-2xl shadow-2xl p-6 w-52 flex flex-col gap-4 items-start animate-fade-in'>
          <ul className='w-full text-lg space-y-2 font-medium'>
            <li>
              <a href="#inicio" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#bio" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition-colors">
                Bio
              </a>
            </li>
            <li>
              <a href="#premios" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition-colors">
                Premiações
              </a>
            </li>
            <li>
              <a href="#sociais" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition-colors">
                Redes Sociais
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
