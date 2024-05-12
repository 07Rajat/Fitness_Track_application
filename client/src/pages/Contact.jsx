import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const StyledContactForm = styled.div`
  width: 400px;
  margin: 0 auto;
  overflow-y: auto;
  
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 8px;
    font-size: 16px;
  }

  input, textarea {
    width: 100%;
    height: 35px;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);

    &:focus {
      border: 2px solid rgba(0, 206, 158, 1);
    }
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 100px;
    min-height: 100px;
  }

  label {
    margin-top: 1rem;
  }

  input[type="submit"] {
    margin-top: 2rem;
    cursor: pointer;
    background: rgb(249, 105, 14);
    color: white;
    border: none;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  padding: 8px;
`;
const Span = styled.div`
  font-size: 17px;
  font-weight: 400;
  padding: 8px;
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pjorxbb",
        "template_5i7cw4c",
        form.current, {
        publicKey: "JtBHaTLdIG5YDfg_X"
       })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm >
      <Title>Connect Us</Title>
      <Span>Connect us for information</Span>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {/* Contact information */}
      <p>Address: Fitness Club</p>
      <p>Place: Pune</p>
      <p>Phone: +91-12345678</p>
      <p>Connect to get more information on fitness group and plan structure.</p>
    </StyledContactForm>
  );
};

export default Contact;

