import React from "react";
import "../styles/contact.css";
import ContactCard from "./ContactCard";
import "../styles/join-our-team.css"; // New style for join our team section
import teamImage from "../assets/img/ai.bitcoin.2.webp"; // Ensure the image exists

function ContactContent() {
  return (
    <>
      <br />
      <br />
      <br />

      <div style={{ textAlign: "center" }}>
        <h1>Contact</h1>
        <h3>We’d love to hear from you.</h3>
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

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Analytics Hub. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ContactContent;
