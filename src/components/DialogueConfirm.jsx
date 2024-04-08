import React, { useState } from 'react'
import styled from 'styled-components'
import Hero_blue from '../assets/Hero_blue.svg'
import resetPasswordLink from '../assets/resetPasswordLink.svg';
import pattern1 from '../assets/Pattern1.svg';
import pattern2 from '../assets/pattern2.svg';
import { useNavigate, useLocation } from 'react-router-dom'
import Axios from 'axios';
import Swal from 'sweetalert2';
import outline from "../assets/outline.svg";
import { isMobile } from 'react-device-detect';
// import Confirmation from './Login Pages/Confirmation'
// import Navbar from './Navbar'


function DialogueConfirm() {
  const [Number, setNumber] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();



  function handleClickSignIn() {
    setLoad(true);
    var stat;
    var obj = {
      "EmailAddress": "xaidi.zaidi.ali@gmail.com",
      "Url": "/confirmsignup",
      "UserId": 5,
      "ConfirmationCode": "881932"
    }

    obj["ConfirmationCode"] = Number;
    var newuserid = parseInt(location.state.userid);
    obj["EmailAddress"] = location.state.email;
    obj["UserId"] = newuserid;

    console.log("obj", obj);

    var api = 'https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/confirm-user'
    setLoad(true);
    Axios.post(api, obj).then(res => {
      console.log("Axios Response Confirmation: ", res.data);
      stat = res.data;
      console.log("stat", stat["StatusCode"]);
      if (stat["StatusCode"] === 0) {
        Swal.fire({
          icon: 'success',
          title: 'Confirmed!',
          text: `${location.state.email} has been Confirmed.`,
          showConfirmButton: false,
          timer: 3500,
        });
        var useridval = stat.Data.UserId;
        console.log("userid", useridval);
        setLoad(false);
        navigate('/');
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: 'Confirmation Failed',
          text: "Invalid Code, Please Enter Again!",
          showCancelButton: false,
          confirmButtonText: 'Try Again!',
        });
        setLoad(false);
      }


    })



    //navigate('/Signup');
  }

  const Clickback = () => {
    navigate('/Signup');

  }
  return (
    <Wrapper>


      {/* <div class="background-img">
        <div class="containercheck">
        <Confirmation />
        </div>
        </div> */}

      <section class="thankyou-section" id="shop">
        <div class="container-fluid p-0 ">
          <div>
            <div className="card">
              <div className="col col-sm-1">

              </div>
              <div className="row text-center">
                <div className="col left-container">
                  <section className="col-md-6 new">
                    <img src={resetPasswordLink} alt="Cart_icon" className="img-here" />
                  </section>

                  <section className="col-md-6 new">
                    <img
                      src={pattern2}
                      alt="Cart_icon"
                      className="img-Pattern2"
                    />
                  </section>
                </div>

                <div className="col">
                  <div className="title">
                    <h4> Enter Confirmation Code</h4>
                  </div>

                  <div className="discription">
                    We have sent a email confirmation code you your email,
                    Enter the code below and begin your sensify experience today!
                  </div>

                  <div class="row email-section">
                    <div className="col col-md-12 col-sm-12 col-xs-12 ">
                      <label for="Email" class="label-align word">
                        Code :
                      </label>
                    </div>
                    <div className="col col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        name="Code"
                        placeholder=""
                        value={Number}
                       // onChange={(e) => setNumber(e.target.value)}
                       onChange={(e) => e.target.value.length <= 6 && setNumber(e.target.value)}
                       maxLength={6}
                      />
                    </div>
                  </div>

                  <div class="alignment-order">
                    <div class="col continue">
                      <button onClick={handleClickSignIn} type="submit" value="Submit">
                        <a style={{ textDecoration: "none", color: "white", textAlign: "center" }}>
                          Next
                        </a>
                      </button>
                      {isMobile ? (
                        <div>
                          {load ? (
                            <h1
                              className={load ? "loading-spinner" : "LoginBtn"}
                              disabled={load}
                              style={{
                                color: "blue",
                                margin: "10px 0 150px 80px",
                              }}
                            ></h1>
                          ) : (
                            ""
                          )}
                        </div>
                      ) : (
                        <div>
                          {load ? (
                            <h1
                              className={load ? "loading-spinner" : "LoginBtn"}
                              disabled={load}
                              style={{
                                color: "blue",
                                margin: "10px 0 150px 140px",
                              }}
                            ></h1>
                          ) : (
                            ""
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <section className="col-md-6 new">
                    <img
                      src={pattern1}
                      alt="Cart_icon"
                      className="img-Pattern1"
                    />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Wrapper>
  )
}

const Wrapper = styled.div`
.card {
  // position: absolute;
  width: 968px;
  height: 580px;
  left: 0;
  // top: 151px;

  background: #ffffff;
  box-shadow: 0px 4px 32px 16px rgba(30, 30, 30, 0.25);
  border-radius: 8px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
}
.container-fluid {
  width: 63%;
}
.btn-close {
  margin-left: 10px;
  margin-top: 10px;
}

.thankyou-section {
  padding-top: 150px;
}

.title {
  // position: absolute;
  height: 28px;
  font-family: "WorkSans";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: start;
  color: #4e4e4e;
  margin-top:50px;
}
input[type="number"] {
  box-sizing: border-box;
  width: 320px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #26649d;
  border-radius: 8px;
  margin-bottom: 40px;
}

.discription {
  // position: absolute;
  width: 307px;
  height: 76px;
  // left: 530px;
  // top: 100px;

  font-family: "WorkSans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-top: 40px;
  margin-bottom: 40px;
  color: #4e4e4e;
  text-align: start;
}

.label-align {
  width: 178px;
  height: 19px;
  font-family: "WorkSans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #4e4e4e;
}

input[type="email"] {
  box-sizing: border-box;
  //    position: absolute;
  width: 320px;
  height: 48px;
  // left: 510px;
  // top: 375px;
  background: #ffffff;
  border: 1px solid #26649d;
  border-radius: 8px;

  margin-bottom: 40px;
}

.alignment-order {
  // position: absolute;
  width: 320px;
  height: 48px;
  // left: 545px;
  // top: 350px;

  filter: drop-shadow(0px 16px 24px rgba(38, 100, 157, 0.3));
}
.continue {
  // margin-top: 10px;
  // margin-left: 20px;
}
.continue button {
  background-color: #22669c;
  /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */

  border: none;
  padding: 10px 0px;
  color: white;
  width: 100%;
}

.img-here {
  position: absolute;
  width: 370px;
  height: 300px;
  left: 80px;
  top: 100px;
}

.img-Pattern2 {
  position: absolute;
  width: 165px;
  height: 150px;
  left: 2px;
  top: 450px;

  mix-blend-mode: normal;
  border-radius: 8px 0px 0px 8px;
  transform: rotate(0deg);
}

.img-Pattern1 {
  position: absolute;
  width: 480px;
  height: 148px;
  left: 470px;
  top: 424px;
  mix-blend-mode: normal;
  opacity: 0.5;
  border-radius: 8px 0px 0px 8px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.email-section {
  text-align: start;
}
@media Screen and (min-width: 996px) and (max-width: 1150px) {
  .container-fluid {
    width: 75%;
  }
  .card {
    width: auto;
  }
  .img-here {
    width: 320px;
    height: 200px;
  }
  .img-Pattern1 {
    width: 372px;
    height: 148px;
    left: 480px;
    top: 440px;
  }
}

@media Screen and (min-width: 320px) and (max-width: 995px) {
  .text-center {
    text-align: center;
  }
  .left-container {
    display: none;
  }

  .card {
    // position: absolute;
    width: auto;
    height: auto;
    left: auto;
    box-shadow: unset;
    border: none;
  }
  .new {
    display: none;
  }
  input[type="email"] {
    box-sizing: border-box;
    //    position: absolute;
    width: 290px;
    height: 48px;
    left: 0px;
    top: 375px;
    background: #ffffff;
    border: 1px solid #26649d;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .title {
    //   width: 307px;
    width: auto;
    height: 28px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: "WorkSans";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #4e4e4e;
  }
  .discription {
    width: 307px;
    //   width: auto;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;

    color: #4e4e4e;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .label-align {
    //   width: 178px;
    text-align: start;
    width: 290px;
    height: 19px;
    margin-top: 0px;
    font-family: "WorkSans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    color: #4e4e4e;
  }

  .alignment-order {
    //   position: absolute;
    //   width: 306px;
    //   height: 48px;
    //   left: 75px;
    //   top: 350px;
    width: auto;

    filter: drop-shadow(0px 16px 24px rgba(38, 100, 157, 0.3));
  }

  .continue {
    //   margin-top: 10px;
    //   position: absolute;
    margin-left: 0px;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */

    border: none;
    padding: 10px 0px;
    color: white;
    width: 290px;
  }

  .thankyou-section {
    padding-top: 100px;
  }
  .email-section {
    text-align: center;
  }
}

`

export default DialogueConfirm