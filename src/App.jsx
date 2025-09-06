import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import Skills from "./sections/Skills"
import Footer from "./sections/Footer"
import About from "./sections/About"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <ShowcaseSection />
      <ExperienceSection />
      <Skills />
      <FeatureCards />
      <Footer />
    </>
  )
}

export default App