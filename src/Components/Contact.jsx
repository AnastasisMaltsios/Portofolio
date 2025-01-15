import React, {useRef, useState} from "react";
import "../../styles/Contact.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import DoneIcon from '@mui/icons-material/Done';
function Contact() {    

    const [isModalVisible, setModal] = useState(false);
    const formRef = useRef(null);
    const year = new Date().getFullYear();
    const apiKey = import.meta.env.VITE_API_KEY;

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", apiKey);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          setModal(true);
          formRef.current.reset();
        }
      };

    return (
        <div id="contact" className="contact-info">
            <h1>Contact Me</h1>
            <p>I'm currently open to work, so feel free to contact me if you're interested in my portofolio. You can find my links below: </p>
            <div className="contact-container">
            <div className="links">
            <a href="https://github.com/AnastasisMaltsios" target="_blank" rel="noopener noreferrer"><GitHubIcon /> Github</a>
            <a href="https://www.linkedin.com/in/anastasis-maltsios/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a>
            <p><EmailIcon /> anastashsm1234@gmail.com</p>
            <p><LocationOnIcon /> Thessaloniki, Greece</p>
            <p><PhoneInTalkIcon /> +30 6977239519</p>
            </div>
            <form onSubmit={onSubmit} className="contact-details" ref={formRef}>
                <label htmlFor="">Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
                <label htmlFor="">Your email</label>
                <input type="email" name="email" placeholder="Enter your email" required/>
                <label htmlFor="">Your message</label>
                <textarea name="message" rows={6} placeholder="Write your message here" ></textarea>
                <button type="submit">Submit</button>
        </form>

        {isModalVisible && (
          <div className="modal-success">
            <div className="modal-content-success">
              <h2>Email Sent Successfully! <span><DoneIcon fontSize="2.5rem"/></span></h2>
              <p>Thank you for getting in touch.</p>       
              <button onClick={() => setModal(false)}>Close</button>                         
             </div>
           </div>
        )}

            </div>
            <footer>
        <p>Anastasis Maltsios ⓒ {year}</p>
      </footer>
        </div>
       
    )
}

export default Contact;