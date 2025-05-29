const Bio = () => {
  return (
    <section
      id="bio"
      className="relative min-h-screen bg-black text-white px-6 md:px-20 py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute top-[-100px] left-[-80px] w-[200px] h-[200px] bg-red-500 rounded-full opacity-5 blur-xl mix-blend-screen animate-pulse-glow z-0" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[240px] h-[240px] bg-purple-500 rounded-full opacity-5 blur-xl mix-blend-screen animate-pulse-glow z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        <div
          className="flex-1 text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">Biografia</h2>
          <p className="text-lg leading-relaxed">
            Luan Rafael Domingos Santana, nascido em 13 de março de 1991, em Campo Grande, Mato Grosso do Sul,
            é um dos artistas mais influentes e inovadores da música brasileira contemporânea.
            <br /><br />
            Cantor, compositor e produtor musical, Luan começou sua trajetória artística ainda na adolescência,
            ganhando projeção nacional com o hit “Meteoro” em 2009.
            <br /><br />
            Desde então, sua carreira deslanchou, e ele se tornou um dos principais nomes do sertanejo,
            conquistando prêmios e reconhecimentos em todo o Brasil.
          </p>
        </div>

        <div
          className="flex-1 w-full max-w-md mx-auto relative"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <img
            src="/assets/img3.webp"
            alt="Foto de Luan Santana"
            width={500}
            height={700}
            className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-0 right-[-12px] h-full w-[4px] bg-gradient-to-b from-orange-500 to-red-500 rounded-full hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default Bio;
