import React from "react";
import "./contact.css";
import { FaEnvelope } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import Email from "../../../public/Animation/Email.json";
import Done from "../../../public/Animation/Done.json";

function Contact() {
  const [state, handleSubmit] = useForm("mdkljlny");
  return (
    <section className="contact" id="Contact">
      <div className="title">
        <h2>
          <span>
            <FaEnvelope />
          </span>
          contact us
        </h2>
        <p>
          Contact us for more information and Get notified when I publish
          something new.
        </p>
      </div>
      <div className=" lower flex">
        <div className="left">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="Name">Your Name:</label>
              <input
                type="name"
                name="name"
                id="Name"
                placeholder="full name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="phone">
              <label htmlFor="Phone">Your phone:</label>
              <input
                type="tel"
                name="phone"
                id="Phone"
                placeholder="phone number"
                required
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="email">
              <label htmlFor="Email">Email Adress:</label>
              <input
                type="email"
                name="email"
                id="Email"
                placeholder="Email Adress"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="message">
              <label htmlFor="Massege">Your message:</label>
              <textarea
                name="massege"
                id="Massege"
                placeholder="Message"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "submitting ..." : "submit"}
            </button>
          </form>
          {state.succeeded && (
            <div className="submitForm">
              <Lottie className="done" loop={false} animationData={Done} />
              <h1 style={{ color: "rgba(34, 166, 255, 1)" }}>
                Your massege has been sent successfully 🤞
              </h1>
            </div>
          )}
        </div>
        <div className="right">
          <Lottie style={{height:400}} animationData={Email} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
