"use client";
import { useEffect, useState } from 'react';
import styles from './contact.module.css'

const Contact = () => {
  const [message, setMassage] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d2f0f11a-d8df-4406-a45d-6ca12ba521a0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setMassage(result.message);
    }
  }
  
  
    setTimeout(() => {
      setMassage(" ");
    },2000);



  
  return (
    <section className="container h-70">
      <div className={styles.contact}>
        <h3 className={styles.title}>Contact Us</h3>
        <p className={styles.kbdtext}>Any question and remarks ? just write us a message</p>

        <div className={styles.contactformbox}>
          <div className={styles.contactleft}>
            <div className={styles.gap}>
              <h4>Contact Information</h4>
              <kbd>Fill up the form our team get back to you within 24 hours</kbd>
            </div>
            <ul className={styles.contactinfo}>
              <li><i className="bi bi-telephone-fill"></i>  +91-9520859696</li>
              <li><i className="bi bi-envelope-check-fill"></i>  locatervikas@gmail.com</li>
              <li><i className="bi bi-geo-fill"></i>  120 8B sas Nager</li>
            </ul>

            <div className={styles.socailicon}>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-skype"></i>
            </div>
          </div>
          <div className={styles.contactright}>
            <form onSubmit={handleSubmit} className='contact-form'>
              <div className={styles.grid}>
                <div className={styles.inputContainer}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="FirstName" />
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="LastName">Last Name</label>
                  <input type="text" name="LastName" />
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="Email">Mail</label>
                  <input type='email' name="Email" />
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="Phone">Phone</label>
                  <input type="tel" name="Phone"/>
                </div>
              </div>
              <div className={styles.msgContainer}>
                <label htmlFor="Message">Message</label>
                <textarea name="Message" autoCorrect='false' ></textarea>
              </div>
             <button type='submit' className={styles.sendbtn}>Send Message</button>
            </form>
            <p className={styles.message}>{message}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact