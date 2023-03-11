import React, { useState } from 'react'
import './Contact.css'

//contact form for sending me email
//Contact
    //Form
        //Fields for Name, Email, and Message
        //Validate form input exists
            //When field is empty and we tab out or submit, error message shows
            //"field must have value"
        //Regex check for email
const ContactForm = () => {
    /*
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
    e.preventDefault();
        setStatus("Sending...");
            const { name, email, message } = e.target.elements;
            let details = {
              name: name.value,
              email: email.value,
              message: message.value,
            };
            let response = await fetch("http://localhost:3000/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(details),
            });
            setStatus("Submit");
            let result = await response.json();
            alert(result.status);
          };
          */
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm;
