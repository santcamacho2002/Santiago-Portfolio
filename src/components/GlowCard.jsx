import { useRef } from "react";

const GlowCard = ({ card, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (i) => (e) => {
    const card = cardRefs.current[i];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border rounded-xl p-10 h-full flex flex-col justify-between dark:bg-[#161414]"
    >
      <div className="glow" />

      <div className="mb-5">
        <h1 className="font-semibold text-3xl">{card.title}</h1>
        <p className="my-5 text-white-50">🗓️ {card.date}</p>
        <p className="text-[#839CB5] italic">Responsibilities</p>
        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
          {card.responsibilities.map((r, i) => (
            <li key={i} className="text-lg">
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GlowCard;
