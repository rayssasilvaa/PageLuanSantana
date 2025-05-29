import React, { useEffect, useState, useRef } from "react";
import {
  FaTrophy,
  FaCompactDisc,
  FaStar,
  FaMusic,
  FaPenFancy,
  FaMicrophoneAlt,
  FaGlobeAmericas,
} from "react-icons/fa";
import { GiGuitarBassHead } from "react-icons/gi";

const iconMap = {
  FaTrophy,
  FaCompactDisc,
  FaStar,
  FaMusic,
  FaPenFancy,
  FaMicrophoneAlt,
  FaGlobeAmericas,
  GiGuitarBassHead,
};

const useIntersection = (ref, threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref.current, threshold]);

  return isVisible;
};

const AwardCard = ({ award }) => {
  const cardRef = useRef(null);
  const isVisible = useIntersection(cardRef);

  const IconComponent = iconMap[award.icon];

  return (
    <div
      ref={cardRef}
      style={{ willChange: "transform, opacity" }}
      className={`award-card bg-gradient-to-br ${award.color} rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer select-none
        shadow-lg transform transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,69,0,0.7)]`}
    >
      {IconComponent && (
        <IconComponent className="text-white text-8xl mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-6" />
      )}
      <h3 className="text-3xl font-extrabold mb-2 select-text transition-colors duration-300">
        {award.title}
      </h3>
      <p className="text-gray-300 font-semibold mb-4">{award.year}</p>
      <p className="text-white max-w-xs">{award.desc}</p>
    </div>
  );
};

const Awards = () => {
  const [awards, setAwards] = useState([]);
  const h2Ref = useRef(null);
  const titleVisible = useIntersection(h2Ref);

  useEffect(() => {
    const loadAwards = async () => {
      try {
        const res = await fetch("/awards.json");
        if (!res.ok) throw new Error("Erro ao carregar awards.json");
        const data = await res.json();
        setAwards(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadAwards();
  }, []);

  return (
    <section
      id="premios"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-20 flex flex-col items-center"
    >
      <h2
        ref={h2Ref}
        className={`text-5xl font-extrabold text-red-600 mb-16 tracking-wide drop-shadow-lg transition-all duration-700 ease-out
        ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
      >
        Premiações
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl w-full">
        {awards.length === 0 ? (
          <p className="text-center text-gray-400">Carregando premiações...</p>
        ) : (
          awards.map((award) => (
            <AwardCard
              key={award.id || award.title} // Use id se tiver, senão title
              award={award}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Awards;
