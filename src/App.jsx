import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import Skills from "./sections/Skills"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <ExperienceSection />
      <Skills />
      <Footer />
    </>
  )
}

export default App