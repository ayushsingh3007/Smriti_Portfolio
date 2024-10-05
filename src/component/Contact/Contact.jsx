import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <>
      <div className="container contact">
        <h1>Contact Me</h1>
        <p>Contact Me
          I'm a passionate graphic designer with over 2.5 years of experience in creating visually compelling designs that bring ideas to life. From branding to digital illustrations, my work reflects creativity, attention to detail, and a deep understanding of design principles.

          If you're looking to collaborate or have any project inquiries, feel free to reach out. I’m always excited to connect with clients who appreciate thoughtful design and innovative solutions.</p>
          <span>
          Let's Create Something Together!
          <p>
          Email: smritisingh0003@gmai.com
          </p>
          <p>
          Phone: +91-9369908300
          </p>
          <p>
          LinkedIn: https://www.linkedin.com/in/smriti-singh-859225278/
          </p>
          Instagram: https://www.instagram.com/smriti_singh___?igsh=c2RwYnE3YWE2aHhk
          </span>
        <div className="contact-icons">
          <div className="item">
            <FaInstagram className="icon"/>
            </div>
          <div className="item">
          <FaFacebookSquare className="icon"/>
          </div>
          <div className="item">
          <FaLinkedin className="icon"/>

          </div>
          <div className="item">
          <FaSquareXTwitter className="icon"/>

          </div>
          <div className="item">
          <FaGithub className="icon"/>
          </div>
          <div className="item">
          <IoMdMail />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
