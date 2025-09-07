import Header from "./Header"
import Hero from "./Hero"
import Work from "./Work" 
import Experience from "./Experience"
import Footer from "./Footer"



function App() {
  

  return (
    <>
     
   
    <Header/>
    <Hero/>
    <hr id="after_hero" />
    <Work />
    <Experience id="experience"/>
    <hr id="after_work"/>
    <Footer/>
   
    </>
    
  )
}

export default App
