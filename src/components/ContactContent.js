import React from "react";
import "../styles/contact.css";
import ContactCard from "./ContactCard";
import "../styles/join-our-team.css"; // New style for join our team section
import teamImage from "../assets/img/ai.bitcoin.2.webp"; // Ensure the image exists
import Footer from "./Footer";  
import '../styles/footer.css'

function ContactContent() {
  return (
    <>
      <br />
      <br />
      <br />

      <div style={{ textAlign: "center" }}>
        <h1 className="contact-h1">Contact</h1>
        <h3 className="contact-h3">We’d love to hear from you.</h3>
      </div>

      <div className="contact-card-container">
        <ContactCard
          header="Subscription 1"
          explanation="Explanation for subscription 1"
          buttonText="Contact Sales"
          onButtonClick={() => console.log("Clicked subscription 1")}
        />
        <ContactCard
          header="Subscription 2"
          explanation="Explanation for subscription 2"
          buttonText="Contact Sales"
          onButtonClick={() => console.log("Clicked subscription 2")}
        />
        <ContactCard
          header="Subscription 3"
          explanation="Explanation for subscription 3"
          buttonText="Contact Sales"
          onButtonClick={() => console.log("Clicked subscription 3")}
        />
        <ContactCard
          header="Subscription 4"
          explanation="Explanation for subscription 4"
          buttonText="Contact Sales"
          onButtonClick={() => console.log("Clicked subscription 4")}
        />
      </div>

      <section className="join-team-section">
        <div className="join-team-content">
          <h2>Join Our Team</h2>
          <p>
            We are always looking for creative, talented individuals to join our
            dynamic team. Bring your skills and passion to work with us in a
            collaborative environment where your future starts now.
          </p>
          <button className="join-team-button">Join Us</button>
        </div>
        <div className="join-team-image">
          <img src={teamImage} alt="Join Our Team" />
        </div>
      </section>

      <Footer/>
      
    </>
  );
}

export default ContactContent;
