// import Container from "../../components/wrappers/Container"
import AboutIndoGlobal from "./AboutIndoGolbal"
import Events from "./Events"
import Hero from "./Hero"
import LatestBlogsAndEvents from "./LatestBlogsAndEvents"
import Placements from "./Placements"
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
    <Placements/>
    <Events/>
    <LatestBlogsAndEvents/>
    </div>
  )
}

export default Landing