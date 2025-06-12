import {React} from 'react'
import './App.css'
import IntroVideo from './Components/IntroVideo'
import Navbar from './Components/Navbar'
import IntroImage from './Components/IntroImage'
import SortByRoom from './Components/SortByRoom'
import BestOffers from './Components/BestOffers'  
import SofaIntro from './Components/SofaIntro'

function App() {

  return (
    <>
      <Navbar />
      <IntroImage />
      <BestOffers />
      <IntroVideo />
      <SortByRoom />
      <SofaIntro />
    
    </>
  )
}

export default App;
