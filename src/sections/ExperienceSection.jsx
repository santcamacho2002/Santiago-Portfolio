import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";


const Experience = () => {


  return (
    <section
      id="experience"
      className="scroll-mt-28 flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >

      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-12 md:mt-16 xl:mt-20 relative">
          <div className="relative z-50 grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10 auto-rows-fr">
            {/* Experience Cards */}
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div>
                  <GlowCard card={card}></GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;