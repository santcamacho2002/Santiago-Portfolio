/*El objetivo de estas cartas esmostar mis mejores habilidades como desarrollador
Cada carta es una representación de mis mejores habilidades*/

import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="section-wrapper ">
      <div className="grid md:grid-cols-3 gap-10 ">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] dark:bg-[#161414]"
          >
            <div className="flex items-center gap-4 dark:bg-[#161414]">
              <img
                src={`${import.meta.env.BASE_URL}${imgPath}`}
                alt={title}
                className="size-12 md:size-16 rounded-full p-2 "
              />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-white-50 text-lg leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
