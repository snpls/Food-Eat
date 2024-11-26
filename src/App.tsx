
import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import OurService from "./components/OurService/OurService"
import TopList from "./components/TopList.jsx/TopList"
import { bgImage } from "./constants"




const App = () => {
  return (
    <main style={bgImage}>
      <div className="bg-white/50 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <TopList />
        <Banner />
        <OurService />
      </div>
    </main>
  )
}

export default App