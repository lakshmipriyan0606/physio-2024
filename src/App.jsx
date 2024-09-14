import AboutUs from "./Pages/About/About.jsx"
import Home from "./Pages/Home.jsx"
import OurTeam from "./Pages/OurTeam/OurTeam.jsx"
import Service from "./Pages/Service/Service.jsx"
import Solution from "./Pages/Solution/Solution.jsx"
import ClientTestimonial from "./Pages/Testimonial/ClientTestimonial.jsx"
import WhyChooseUs from "./Pages/WhyUs/WhyUs.jsx"

const App = () => {
  return (
    <div>
      <Home/>
      <AboutUs/>
      <Service/>
      <Solution/>
      <WhyChooseUs/>
      <OurTeam/>
      <ClientTestimonial/>
    </div>
  )
}

export default App