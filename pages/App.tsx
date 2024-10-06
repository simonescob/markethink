import React from "react"
import Articles from "./sections/Articles"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import OurProcess from "./sections/OurProcess"
import Partner from "./sections/Partner"
import Services from "./sections/Services"

function App() {

  return (
    <div className="font-rubik">
      <Header/>
      <Partner/>
      <Services/>
      <OurProcess/>
      <Articles/>
      <Footer/>
    </div>
  )
}

export default App
