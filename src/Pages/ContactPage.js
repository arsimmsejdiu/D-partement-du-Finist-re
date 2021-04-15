import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"Departmental Council of Finistère"} span={"Departmental Council of Finistère"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="finistere"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d680434.0423869368!2d-4.824346375234096!3d48.226924427249635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816cc717f347f47%3A0x30ca5cd36df2730!2sFinistere!5e0!3m2!1sen!2sfr!4v1618408721431!5m2!1sen!2sfr"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+33 02 98 76 20 20"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"contact@finistere.fr"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"32, boulevard Dupleix CS 29029"}
            text2={"France"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
