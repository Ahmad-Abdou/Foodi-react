import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import { useProductContext } from "../store/ProductContext";
import Loading from "../components/Loading";
import Navigationbar from "../components/Navigationbar";
const Contact = () => {
  const { loading, setLoading } = useProductContext();
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const contactParams = {
    userName: contactInfo.firstName + " " + contactInfo.lastName,
    userEmail: contactInfo.email,
    userMessage: contactInfo.message,
  };
  const onChangeHandler = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_m8a3el1",
        "template_rv5qiwp",
        contactParams,
        "user_syaJzmGxi5KA5yTJpzSLM"
      )
      .then(
        (result) => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="contact-container">
          <Navigationbar></Navigationbar>
          <section className="contact-body">
            <article>
              <div className="contact-header-text-container">
                <span className="span-text">
                  Please Fill out your information{" "}
                </span>
              </div>
              <form className="contact-header" onSubmit={(e) => sendEmail(e)}>
                <div className="contact-grid-row-1">
                  <input
                    className="contact-form-input"
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    onChange={onChangeHandler}
                    value={contactInfo.firstName}
                    required
                  />
                  <span className="bottom-border-first"></span>
                </div>
                <div className="contact-grid-row-2">
                  <input
                    className="contact-form-input"
                    placeholder="Last Name "
                    type="text"
                    name="lastName"
                    onChange={onChangeHandler}
                    value={contactInfo.lastName}
                    required
                  />
                  <span className="bottom-border-last"></span>
                </div>
                <div className="contact-grid-row-3">
                  <input
                    className="contact-form-input"
                    placeholder="Email"
                    type="text"
                    name="email"
                    onChange={onChangeHandler}
                    value={contactInfo.email}
                    required
                  />
                  <span className="bottom-border-email"></span>
                </div>
                <div className="contact-grid-row-4">
                  <input
                    className="contact-form-input"
                    placeholder="Phone Number"
                    type="text"
                    name="phoneNumber"
                    onChange={onChangeHandler}
                    value={contactInfo.phoneNumber}
                    required
                  />
                  <span className="bottom-border-phone"></span>
                </div>
                <div className="contact-grid-row-5">
                  <textarea
                    className="contact-form-input-message"
                    placeholder="Message..."
                    type="text"
                    name="message"
                    onChange={onChangeHandler}
                    value={contactInfo.message}
                    required
                  />
                  <span className="bottom-border-message"></span>
                </div>
                <div className="contact-grid-row-6">
                  <button className="proceed-btn">Send</button>
                </div>
              </form>
            </article>
          </section>
        </div>
      )}
    </>
  );
};

export default Contact;
