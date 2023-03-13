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
const Contact = () => {
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
         const prevent = (event) => {
            event.preventDefault();
         }
  return (
  <div className='contactFormWrapper'>
    <form>      
      <input name="name" type="text" class="feedback-input" placeholder="Name" />   
      <input name="email" type="text" class="feedback-input" placeholder="Email" />
      <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
      <input type="submit" onClick={prevent} value="SUBMIT"/>
    </form>
  </div>
  )
}

export default Contact;
