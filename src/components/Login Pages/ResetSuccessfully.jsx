import React, { useState } from "react";
import styled from "styled-components";
import successfullyReset from '../../assets/resetSuccessfully.svg';
import pattern1 from '../../assets/Pattern1.svg';
import passwordResetSuccessfully from '../../assets/password-reset-successful.png';
import { useNavigate } from 'react-router-dom';


const ResetSuccessfully = () => {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    return (
      <>
      <section class="login_page reset_success sign_up_outer d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div
                        class="col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                        <div class="card_title w-100">
                            <h2 class="mb-lg-4 mb-md-3 mb-3">Voila! Password
                                successfully reset!</h2>
                            <p class="text-start m-0">Now, guard this new
                                password like it's the last slice of pizza
                                –<br />top secret and all yours.</p>
                            <div class="mt-4 form_feild">
                                <div class="row">
                                    <div
                                        class="col-lg-7 col-md-10 col-sm-12 col-12">
                                        <button type="submit"
                                            class="btn btn-primary mb-0" onClick={(e) => { navigate('/') }}>Take
                                            me home</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-lg-7 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-4 mt-4">
                        <div class="forgot_img">
                            <img src={passwordResetSuccessfully} alt/>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      </>
        // <Wrapper>




        //     <section class="thankyou-section" id="shop">
        //         <div class="container-fluid p-0 ">
        //             <div>
        //                 <div className="card">
        //                     <div className="col col-sm-1">

        //                     </div>
        //                     <div className="row text-center">
        //                         <div className="col left-container">
        //                             <section className="col-md-6 new">
        //                                 <img src={successfullyReset} alt="Cart_icon" className="img-here" />
        //                             </section>

        //                             <section className="col-md-6 new">
        //                                 <img
        //                                     src={pattern2}
        //                                     alt="Cart_icon"
        //                                     className="img-Pattern2"
        //                                 />
        //                             </section>
        //                         </div>

        //                         <div className="col">
        //                             <div className="title">
        //                                 <h4>Password reset successful!</h4>
        //                             </div>

        //                             <div className="discription">
        //                                 You’ve successfully reset your password. Don’t worry, if you lose it again, we’ve got your back.
        //                             </div>


        //                             <div class="alignment-order">
        //                                 <div class="col continue">
        //                                 <button onClick={(e) => { navigate('/') }} type="submit" value="Submit">
        //                                 <a style={{ textDecoration: "none", color: "white", textAlign: "center" }}>
        //                                     Back to home page
        //                                 </a>
        //                             </button>
        //                                 </div>
        //                             </div>

        //                             <section className="col-md-6 new">
        //                                 <img
        //                                     src={pattern1}
        //                                     alt="Cart_icon"
        //                                     className="img-Pattern1"
        //                                 />
        //                             </section>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </Wrapper>
    )
}

const Wrapper = styled.section`
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
    // left: 530px;
    // top: 50px;

    font-family: "WorkSans";
margin-top:50px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: start;
    color: #4e4e4e;
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
    // position: absolute;
    width: 178px;
    height: 19px;
    // left: 533px;
    // top: 220px;

    font-family: "WorkSans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    color: #4e4e4e;
    margin-top: 40px;
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
`;

export default ResetSuccessfully