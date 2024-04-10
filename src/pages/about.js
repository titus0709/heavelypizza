import AboutBanner from '../assets/multiplePizzas.jpeg'
import '../styles/about.css'

const About = () => {
    return ( 
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${AboutBanner})`}}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Welcome to Heavenly Slice, where every slice is a taste of heaven! Established with a passion for crafting delicious, high-quality pizzas, Heavenly Slice is your go-to destination for satisfying your cravings and indulging in a culinary experience like no other.<br></br>
                <br></br>

                At Heavenly Slice, we believe in the power of great food to bring joy and create unforgettable moments. Our journey began with a simple yet profound mission: to elevate the art of pizza-making by using only the finest, freshest ingredients combined with time-honored techniques and recipes passed down
                through generations.<br></br>
                

                <br></br>What sets us apart is our unwavering commitment to excellence in every aspect of what we do. From meticulously sourcing the best ingredients to handcrafting each pizza with care and precision, we strive for perfection in every bite. Our dough is made fresh daily, our sauces are bursting with flavor, and our toppings are carefully selected to ensure a symphony of tastes and textures with every mouthful.</p>
            </div>
        </div>
     );
}
 
export default About;