import NavBar from '../Components/NavBar/NavBar'
import Header from '../Components/Header/Header'
import CardsSection from '../Components/OurServices/OurServices'
import FreshFruit from '../Components/FreshFruit/FreshFruit'
import TestimonialSection from '../Components/TestimonialSection/TestimonialSection'
import ContactUs  from '../Components/ContactUs/ContactUs'
import Footer from '../Components/Footer/Footer'
import FreshFruitImg1 from '../Images/orange.png'
import FreshFruitImg2 from '../Images/grapes.png'
import FreshFruitImg3 from '../Images/gauva.png'



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
        <FreshFruit scr={FreshFruitImg1} />
        <FreshFruit scr={FreshFruitImg2} />
        <FreshFruit scr={FreshFruitImg3} />

        <br />
        <br />

        <TestimonialSection />
        <ContactUs />


        <br />
        <br />

        <Footer />
        
      

    </div>
  )
}
