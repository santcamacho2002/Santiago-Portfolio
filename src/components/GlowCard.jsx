import React, { useRef } from 'react';

const GlowCard = ({ card, children, index }) => {

  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    // get the current card
    const card = cardRefs.current[index];
    if (!card) return;

    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    card.style.setProperty("--start", angle + 60);
  }

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 h-full flex flex-col justify-between">
      <div className="glow" />

      <div className="mb-5">
        <h1 className="font-semibold text-3xl">{card.title}</h1>
        <p className="my-5 text-white-50">
          🗓️&nbsp;{card.date}
        </p>
        <p className="text-[#839CB5] italic">
          Responsibilities
        </p>
        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
          {card.responsibilities.map(
            (responsibility, index) => (
              <li key={index} className="text-lg">
                {responsibility}
              </li>
            )
          )}
        </ul>
      </div>


    </div>

  )
}

export default GlowCard