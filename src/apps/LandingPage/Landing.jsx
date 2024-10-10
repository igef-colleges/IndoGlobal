// import Container from "../../components/wrappers/Container"
import AboutIndoGlobal from "./AboutIndoGolbal"
import Hero from "./Hero"
import Programs from "./Programs"
import RankSlider from "./RankSlider"
import Stats from "./Stats"

const Landing = () => {
  return (
    <div className="overflow-x-hidden">
    <Hero/>
    <RankSlider/>
    <Stats/>
    <Programs/>
    <AboutIndoGlobal />
    </div>
  )
}

export default Landing