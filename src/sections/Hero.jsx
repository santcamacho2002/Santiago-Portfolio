import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Hero = () => {
    // Animación del texto
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power1.out",
            }
        );
    }, []);

    return (
        <section
            id="hero"
            className="relative overflow-hidden scroll-mt-20" 
        >
            {/* Fondo */}
            <div className="absolute top-0 left-0 z-10">
                <img
                    src={`${import.meta.env.BASE_URL}images/bg.png`}
                    alt="background"
                />
            </div>

            {/* Contenido centrado */}
            <div className="section-wrapper">
                <div className="hero-layout">
                    <header className="flex justify-between items-center  w-full">
                        <div className="flex flex-col gap-7 mt-20"> {/* mt-20 evita que toque el navbar */}
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

                            {/* Info personal */}
                            <div>
                                <h1 className="text-2xl mt-4 font-semibold">
                                    Hi, I’m Santiago Camacho!
                                </h1>
                                <p className="text-white-50 md:text-lg mt-4">
                                    Soon to graduate Systems Engineering student from Pontificia Universidad Javeriana,
                                    with hands-on experience in software development and a strong foundation in building scalable, reliable, and efficient solutions.
                                </p>
                                <p className="text-white-50 md:text-lg mt-2">
                                    I’m passionate about continuous improvement, problem solving, and collaborative work,
                                    always eager to contribute and grow as a developer.
                                </p>

                                {/* Contacto */}
                                <div className="mt-6 flex flex-col gap-2 text-sm text-white-50">
                                    <div className="flex items-center gap-2">
                                        <FaLinkedin className="text-blue-600" />
                                        <a
                                            href="https://www.linkedin.com/in/santiago-camacho-villegas-a9a6a6349"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            LinkedIn
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaGithub />
                                        <a
                                            href="https://github.com/santcamacho2002"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaEnvelope />
                                        <span>santcamacho2002@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaPhone />
                                        <span>+57 320 218 6515</span>
                                    </div>
                                </div>
                            </div>

                            {/* Botón */}
                            <Button
                                text="See My Work"
                                className="md:w-80 md:h-16 w-60 h-12"
                                id="button"
                            />
                        </div>
                    </header>
                </div>

            </div>
        </section>
    );
};

export default Hero;
