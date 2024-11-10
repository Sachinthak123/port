import React from "react";
import Button from "../Components/Button";
import { MdOutlineMessage } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Contact.module.css";
import contactImg from "../assets/contact.svg";

const Contact = () => {
  const phoneNumber = "My Contact Number 8806977066"; // Aapka phone number
  const email = "sachitnthak51@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy phone number: ", error);
      });
  };

  return (
    <>
      <div className={`${styles.con} container_width`}>
        <div className="contact_header">
          <h1>CONTACT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error,
            consequatur eligendi esse quos necessitatibus possimus doloremque
            fugiat libero cumque rem dolorem deleniti incidunt, nesciunt sequi
            commodi quo! Itaque, ipsum.
          </p>
        </div>

        <div className={`${styles.left_form}`}>
          <div className={styles.contact_form}>
            <div className={styles.contact_call_btn}>
              <a
                href={`mailto:${email}?subject=Connect&body=I%20would%20like%20to%20connect%20with%20you.`}
              >
                <Button
                  btnIcon={<MdOutlineMessage className="fs-3" />}
                  btnText="VIA CONNECT EMAIL"
                />
              </a>
              <Button
                onClick={copyToClipboard}
                btnIcon={<BsTelephone className="fs-3" />}
                btnText="VIA CONNECT CALL"
              />
            </div>
            <div className={styles.whatsApp}>
              <a
                href="https://wa.me/918806977066?text=Hello%20I%20want%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  btnIcon={<FaWhatsapp className="fs-3" />}
                  btnText="VIA CONNECT WHATSAPP"
                />
              </a>
            </div>

            <div className="my-3">
              <h2 className="text-center text-2xl font-bold">
                Please feel free to contact me!
              </h2>
            </div>
            {/* Contact Form */}

            <div>
              <form
                action="https://formspree.io/f/xblrlpgo"
                method="post"
                className={styles.form_group}
              >
                <div className={styles.inputs}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    autoComplete="off"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    required
                  />
                  <textarea
                    name="messages"
                    placeholder="Enter Your Message"
                    rows="8"
                    autoComplete="off"
                    required
                  ></textarea>
                </div>
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>

          <div className={styles.contact_image}>
            <img src={contactImg} alt="contact-image" />
          </div>
        </div>
        <hr />
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30225.684476185637!2d73.88446605!3d18.7441296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721117653074!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
