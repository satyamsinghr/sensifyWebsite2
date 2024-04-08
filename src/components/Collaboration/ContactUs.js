/** @format */

import { message } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Analysist from "../../assets/Analysist.png";
const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [organisation, setOrganisation] = useState();
  const [messagee, setMessagee] = useState();
  function submitHandler(e) {
    const data = {
      Name: name,
      Email: email,
      Organisation: organisation,
      Message: messagee,
    };
    e.preventDefault();
    message.open({
      type: "success",
      content: "Thank you for submitting Query",
      style: {
        marginTop: "150px",
      },
    });
    axios.post(
      "https://bpdxx4bra9.execute-api.us-east-1.amazonaws.com/Prod/contact-form",
      data
    );
  }
  return (
    <>
      <Wrapper>
        <section id="contactUs">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12 heading">
                <p>
                  Collaborate <br />
                  with us.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 text">
                <p>
                  Our mission is to find a better way for early screening of
                  patients with Alzheimer's, Parkinson's and other
                  neurodegenerative diseases. <br /> <br /> <br /> We are open
                  for collaboration with researchers in the industry, academia
                  and the government. Take your research to the next level with
                  SensifyAware and accomplish your research objectives.
                </p>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-6 form">
                <form onSubmit={submitHandler}>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <label>Your name :</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      name="Name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <label>Email address :</label>
                    <input
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      name="Email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <label>Organization :</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setOrganisation(e.target.value);
                      }}
                      name="Organization"
                      placeholder="Organization"
                      required
                    />
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <label>Message :</label>
                    <textarea
                      name="Message"
                      placeholder="Message"
                      onChange={(e) => {
                        setMessagee(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 form-button">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .heading {
    line-height: 75.07px;
    font-weight: 700;
    font-size: 64px;
    font-family: "WorkSans";
  }
  .text p {
    line-height: 32px;
    font-weight: 300;
    font-size: 24px;
    font-family: "WorkSans";
    color: #4e4e4e;
  }

  .form label {
    font-family: "WorkSans";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
    display: block;
    margin: 10px 0px;
  }
  .form input {
    width: 100%;
    height: 56px;
    border-radius: 5px;
    border: 1px solid #26649d;
    padding: 10px;
    background-color: #fff;
  }
  .form textarea {
    width: 100%;
    height: 116px;
    border-radius: 5px;
    border: 1px solid #26649d;
    padding: 10px;
  }
  .form-button button {
    width: 143px;
    height: 56px;
    left: 1057px;
    top: 2710px;
    background: #26649d;
    box-shadow: 0px 8px 16px rgb(38 100 157 / 25%);
    border-radius: 8px;
    color: #fff;
    border: 0px solid;
    font-family: "WorkSans";
    margin-top: 45px;
  }
  .form-button {
    display: flex;
    justify-content: flex-end;
  }
  .form {
    padding-left: 95px;
    margin-top: 20px;
  }
  .text {
    margin-top: 70px;
  }
  section#contactUs {
    padding: 50px 0px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .container-fluid {
      width: 76%;
    }
    .heading {
      line-height: inherit;
      font-size: 24px;
    }
    .text {
      margin-top: 16px;
    }
    .text p {
      font-size: 16px;
    }
    .form {
      padding-left: 0px;
    }
  }
`;

export default ContactUs;
