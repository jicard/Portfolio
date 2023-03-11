import React from 'react'
import { BrowserRouter  as Router, Route} from 'react-router-dom';
//highlight navbar link on hover and when looking at that content
//link needs to be to same page, no page reloading
//About Me is selected by default (on page load)
//About me
    //picture and short bio
//Portfolio
    //6 projects
    //Link to deployed application and github
//Contact
    //Form
        //Fields for Name, Email, and Message
        //Validate form input exists
            //When field is empty and we tab out or submit, error message shows
            //"field must have value"
        //Regex check for email
//Resume
    //download link
    //pdf of resume is downloaded
export default function Header() {
  return (
    <div>
        <p>!!header starts here!!</p>
        <p>Josh Icard</p>
        <p>About Me</p>
        <p>Portfolio</p>
        <p>Contact</p>
        <p>Resume</p>
        <p>!!header ends here!!</p>


    </div>
  )
}
