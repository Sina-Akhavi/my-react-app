import React from "react";
import "../styles/contact-card.css"; // Import the CSS file for styling

function ContactCard({ header, explanation, buttonText, onButtonClick }) {
  return (
    <div className="contact-card">
      {header && <div className="card-header">{header}</div>}
      {explanation && <p className="card-explanation">{explanation}</p>}
      {buttonText && (
        <button className="card-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default ContactCard;
