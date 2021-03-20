import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="contact section-padding">
      <div className="contact_container">
        <h2 className="contact_title">contact us</h2>
        <form className="contact_form">
          <input type="email" className="contact_input" placeholder='example@email.com'/>
          <button type="submit" className="contact_submit">
            <FontAwesomeIcon icon={faPaperPlane}/> submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
