import NavBar from '../Components/NavBar/NavBar'
import Header from '../Components/Header/Header'
import CardsSection from '../Components/OurServices/OurServices'
import FreshFruit from '../Components/FreshFruit/FreshFruit'
import TestimonialSection from '../Components/TestimonialSection/TestimonialSection'
import ContactUs  from '../Components/ContactUs/ContactUs'

export default function HomePage() {
  return (
    <div>
        
        <NavBar />
        <Header />
        <CardsSection />
        <center>
                <h1>Fresh Fruits</h1><br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quia vero nobi</p>
            </center> <br />
        <FreshFruit />
        <FreshFruit />
        <FreshFruit />

        <br />
        <br />

        <TestimonialSection />
        <ContactUs />

        
      

    </div>
  )
}
