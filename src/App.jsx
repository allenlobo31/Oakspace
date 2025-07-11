import {React} from 'react'
import './App.css'
import IntroVideo from './Components/IntroVideo'
import Navbar from './Components/Navbar'
import IntroImage from './Components/IntroImage'
import SortByRoom from './Components/SortByRoom'
import BestOffers from './Components/BestOffers'  
import SofaIntro from './Components/SofaIntro'
import LightIntro from './Components/LightIntro'
import BedRoomIntro from './Components/BedRoomIntro'
import Company from './Components/Company'
import ExploreFurniture from './Components/ExploreFurniture'

function App() {

  return (
    <>
      <Navbar />
      <IntroImage />
      <BestOffers />
      <IntroVideo />
      <SortByRoom />
      <SofaIntro />
      <LightIntro />
      <BedRoomIntro />
      <Company />
      <ExploreFurniture />
    
    </>
  )
}

export default App;
