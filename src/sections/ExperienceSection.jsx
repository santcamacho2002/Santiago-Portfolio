import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-wrapper py-20 scroll-mt-20"
    >
      <TitleHeader
        title="Professional Work Experience"
      />
      <div className="mt-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10 auto-rows-fr">
          {expCards.map((card, index) => (
            <GlowCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
