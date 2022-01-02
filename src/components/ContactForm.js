import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormStyle = styled.form`
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--beige);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    // margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    color: var(--deep-dark);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 3rem;
    border-radius: 8px;
    cursor: pointer;
    background-color: var(--teal);
    float: right;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  const submitHandler = e => {
    // e.preventDefault();
    console.log(name);

    // axios.post('url', name)
    // .then(response => {
    //   console.log(response);
    // })
  }

    // axios.post("url", name, email, message).then((response) => {
    //   console.log(response);
    // });
  

  return (
    <>
      <FormStyle>
        <div className="form-container">
          <form onSubmit={submitHandler}> 
            <div className="form-group">
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Your message
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </FormStyle>
    </>
  );
}
