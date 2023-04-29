import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import AboutUs from "@/scenes/about";
import Listing from "@/scenes/listing";
import OurBusiness from "@/scenes/business";
import OurServices from "@/scenes/services";
import ContactUs from "@/scenes/contact";
function App() {


  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Listing/>
      <OurServices/>
      <OurBusiness/>
      <ContactUs/>
    </div>
  )
}

export default App
