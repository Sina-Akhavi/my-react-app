import React from "react";
import "../styles/contact.css";
import ContactCard from "./ContactCard";

function ContactContent() {
    return (
        <>
            <br />
            <br />
            <br />
            
            <div style={{ textAlign: 'center' }}>
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
        </>
    );
}

export default ContactContent;
