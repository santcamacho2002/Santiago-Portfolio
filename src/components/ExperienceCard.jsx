import { useRef } from "react";

const GlowCard = ({ card, index }) => {
  const cardRefs = useRef([]);

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      className="group relative h-full rounded-2xl border border-white/10 
                 bg-black-100 p-8 transition-all duration-300 
                 hover:-translate-y-1 hover:shadow-xl dark:bg-[#161414]"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            {card.title}
          </h3>
          <p className="mt-1 text-sm text-white/50">
            {card.date}
          </p>
        </div>

        {/* Responsibilities */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-white/40">
            Responsibilities
          </p>
          <ul className="list-disc pl-5 space-y-3 text-sm text-white-50 leading-relaxed">
            {card.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlowCard;
