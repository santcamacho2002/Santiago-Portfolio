import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    }
                }

            );
        })

        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*LEFT*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src={`${import.meta.env.BASE_URL}images/logoJaveLab.png`} alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>
                                JaveLab — Educational Support Platform for Engineering Students
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                JaveLab is a mobile application developed as a capstone project to address the high failure rates in key courses of the Systems Engineering program at Pontificia Universidad Javeriana.
                            </p>

                        </div>

                    </div>

                    {/*RIGHT*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src= {`${import.meta.env.BASE_URL}images/portafolioWeb.png`}  alt="Tool and User Management Platform" />
                            </div>
                            <h2>Web Developer Portfolio</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src= {`${import.meta.env.BASE_URL}images/toolUser.png`} alt="Tool and User Management Platform" />
                            </div>
                            <h2>Tool and User Management Platform</h2>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection