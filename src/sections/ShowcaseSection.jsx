import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projects } from "../constants";
import TitleHeader from '../components/TitleHeader.jsx';

gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, scrollTrigger: sectionRef.current }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-wrapper py-20 scroll-mt-20">
      <TitleHeader
          title="Projects"
          sub="💻 Showcase"
        />

      <div className="mt-12 grid md:grid-cols-3 gap-10 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black-100 rounded-xl overflow-hidden shadow-lg border border-black-50 transform transition hover:scale-105 duration-300 dark:bg-[#161414]"
          >
            <img
              src={`${import.meta.env.BASE_URL}${project.image}`}
              alt={project.title}
              className="w-full h-56 object-contain p-5 bg-white"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white-50">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
