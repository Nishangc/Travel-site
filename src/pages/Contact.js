import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <>
     <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>Tilottama-11, Rupandehi</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder='FullName'/>
             
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" placeholder='Email'/>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" placeholder='Contact No'/>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder='Message'></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
