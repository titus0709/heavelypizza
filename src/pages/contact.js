
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/contact.css";
import { Link ,useNavigate } from "react-router-dom";

function Contact() {

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

  navigate('/')
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" onSubmit={handleSubmit} >
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
         
         <button type="submit" > Send Message</button>
         
        </form>
      </div>
    </div>
  );
}

export default Contact;