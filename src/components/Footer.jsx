const Footer = () => {
  return (
    <footer 
      className="w-full bg-black text-gray-400 py-8 flex flex-col items-center justify-center gap-2 border-t border-gray-800"
      data-aos="fade-up"
    >
      <p className="text-sm text-gray-500">
        Desenvolvido especialmente para,
      </p>
      <h3 className="text-lg font-semibold tracking-wide text-gray-100">
        Luan Santana
      </h3>
      <p className="text-xs text-gray-600 mt-2">
        Desenvolvido por <strong>Rayssa Silva</strong>
      </p>
    </footer>
  );
};

export default Footer;
