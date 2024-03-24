import { Route, Routes } from "react-router-dom"


import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Testimonials from "./pages/Testimonials"
import Profile from "./pages/Profile"
import Footer from "./Components/Footer"
import Membership from "./pages/Membership"
import LandingPage from "./pages/LandingPage"
import ExploreBooks from "./pages/ExploreBooks"
import Cards from "./Components/Cards"



function App() {
  return (
    <>
      
      <Navbar />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/ExploreBooks" element={<ExploreBooks />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/LandingPage" element={<LandingPage />} />            
        </Routes>
      </div>
      <Footer />
        
    </>
  )
}

export default App
