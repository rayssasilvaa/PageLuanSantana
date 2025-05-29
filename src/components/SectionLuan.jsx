const SectionLuan = () => {
  return (
    // imagem de fundo com gradiente
      <section
      id="inicio"
      className="relative h-screen w-full bg-black bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage: "url('/assets/img4.webp')"
      }}
    >
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-20" />
    </section>
  );
};

export default SectionLuan;
