import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";
import ContactInfoItem from "../components/ContactInfoItem";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 5rem;
  }

  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <a
              href="https://www.linkedin.com/in/orawee-chantravutikorn/"
              target="_blank"
              rel="noreferrer"
            >
              <ContactInfoItem icon={<BsLinkedin />} text="Linkedin" />
            </a>
            <a
              href="https://github.com/oraweechan"
              target="_blank"
              rel="noreferrer"
            >
              <ContactInfoItem icon={<BsGithub />} text="Github" />
            </a>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
