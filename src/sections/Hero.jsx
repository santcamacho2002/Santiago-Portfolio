import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    // Animación del texto
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power1.out",
            }
        )
            .fromTo(
                ".hero-text h2",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power1.out",
                },
                "-=0.5"
            )
    }, []);


    return (
        <section
            id="hero"
            className="section-wrapper relative overflow-hidden"
        >
            {/* Contenido centrado */}
            <div className="hero-layout ">
                <header className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-7 mt-20">
                        {/* Eslogan animado */}
                        <div className="hero-text">
                            <h1>
                                Shapping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span
                                                key={`${word.text}-${index}`}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={`${import.meta.env.BASE_URL}${word.imgPath}`}
                                                    alt={word.text}
                                                    className="xl:size-14 md:size-12 size-8 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h2>into Real Projects that Deliver Results</h2>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I’m Santiago Camacho, a developer with a passion for coding!
                        </p>

                        {/* Botón CTA */}
                        <Button
                            text="About me"
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                        />
                    </div>
                </header>
            </div>

        </section>
    );
};

export default Hero;
