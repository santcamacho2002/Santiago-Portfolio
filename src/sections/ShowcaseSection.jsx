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
      />

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-white/10 bg-black-100 dark:bg-[#161414]
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Imagen */}
            <div className="relative h-40 flex items-center justify-center bg-black/20 rounded-t-2xl">
              <img
                src={`${import.meta.env.BASE_URL}${project.image}`}
                alt={project.title}
                className="max-h-30 object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="text-sm text-white-50 leading-relaxed">
                {project.description}
              </p>

              {/* Link a proyecto */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase 
                       tracking-widest text-white/40 transition-all duration-300 
                       group-hover:text-white"
                >
                  View project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ShowcaseSection;
