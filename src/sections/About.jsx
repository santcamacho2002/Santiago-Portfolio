import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import TitleHeader from '../components/TitleHeader.jsx';

const About = () => {
    return (
        <section
            id="about"
            className="section-wrapper scroll-mt-20 py-20"
        >
            <TitleHeader title="About me"/>
            
            <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
                {/* Texto */}
                <div className="order-2 md:order-1 flex flex-col gap-6 md:text-left">

                    <p className="text-sm sm:text-base md:text-lg text-white-50 leading-relaxed max-w-xl mx-auto md:mx-0">
                        I’m a passionate software developer
                        that truly enjoys turning ideas into real world solutions through clean, scalable code.
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-white-50 leading-relaxed max-w-xl mx-auto md:mx-0">
                        I have a solid background working with technologies like
                        Java, Python, React, Spring Boot, and Docker.
                        What excites me most about tech is the endless opportunity to learn and grow.
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-white-50 leading-relaxed max-w-xl mx-auto md:mx-0">
                        On my portfolio, you'll find much of my journey as a developer, that reflects my growth, curiosity, and adaptability.
                        Every project is a chance to improve and learn, both technically and professionally.
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-white-50 leading-relaxed max-w-xl mx-auto md:mx-0">
                        I thrive in collaborative environments, adapt quickly, and bring a
                        problem solving mindset to every task.
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-white-50 leading-relaxed max-w-xl mx-auto md:mx-0">
                        I’m committed to delivering high quality, thoughtful work.
                    </p>

                    {/* Contacto */}
                    <div className=" grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 dark:bg-[#161414] px-3 py-2 rounded-xl shadow">
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
                        <div className="flex items-center gap-2 dark:bg-[#161414] px-3 py-2 rounded-xl shadow">
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
                        <div className="flex items-center gap-2 dark:bg-[#161414] px-3 py-2 rounded-xl shadow">
                            <FaEnvelope />
                            <span>santcamacho2002@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2 dark:bg-[#161414] px-3 py-2 rounded-xl shadow">
                            <FaPhone />
                            <span>+593 97 958 6421</span>
                        </div>
                    </div>
                </div>

                {/* Imagen de perfil */}
                <div className="order-1 md:order-2 grid place-items-center">


                    <img
                        src={`${import.meta.env.BASE_URL}images/profile2.jpg`}
                        alt="Santiago Camacho"
                        className=" w-70 sm:w-56 md:w-72 lg:w-96 rounded-full md:-mt-32 lg:-mt-32"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
