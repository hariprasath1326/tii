import React from 'react'
import './Contact.css'
import mail_icon from '../../src/assets/Vector2.svg';
import phone_icon from '../../src/assets/Vector.svg';
import location_icon from '../../src/assets/Vector1.svg';
import white_arrow from '../../src/assets/white-arrow.png';

const Contact = () => {

    
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "a030e611-d8d4-438b-9d02-0d85de65cd0f");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Contact Information <img src="" alt="" /></h3>
            <p>Say something to start a live chat!</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contct@hari.dev</li>
                <li><img src={phone_icon} alt="" />+91-9940-6478-45</li>
                <li><img src={location_icon} alt="" />77 Masschusetts Ave, Cambridge<br/> MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col contactform">
            <form onSubmit={onSubmit}>
                <label>Your name:</label>
                <input type="text" name='name' placeholder='Enter yor name' required/>
                <label>Phone Number:</label>
                <input type="tel" name='phone' placeholder='Enter yor mobile number' required/>
                <label>Write your message here,</label>
                <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>   
    </div>
  )
}

export default Contact


