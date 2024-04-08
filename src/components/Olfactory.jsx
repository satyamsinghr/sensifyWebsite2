import React from "react";
import styled from "styled-components";
import new_missions from "../assets/new_missions.png";
import Brainmobileimage from "../assets/Brainmobileimage.png";
import { isMobile } from "react-device-detect";

// import ScriptTag from "react-script-tag";
// import $ from "jquery";

const Olfactory = () => {
  let options = {
    startAngle: 1.5,
    size: 80,
    value: 0.6,
    thickness: 10,
    fill: { gradient: ["#fff"] },
  };
  // $(".circle .bar").circleProgress(options).on("circle-animation-progress");

  let options1 = {
    startAngle: 1.5,
    size: 80,
    value: 0.9,
    thickness: 10,
    fill: { gradient: ["#fff"] },
  };
  // $(".circle1 .bar1").circleProgress(options1).on("circle-animation-progress");
  return (
    <>
      {/* <section class="mission-section" id="mission">
        <div class="mission-img">
          <div class="container-fluid p-0 ">
            <div class="mission-content">
              <div class="row ">
                <div class="col"></div>
                <div class="col-lg-7 col-md-8 col-sm-6 mission-header">
                  <p>
                    Our senses define <br /> who we are.
                  </p>
                  <span>
                    The brain processes sensory inputs while coordinating core
                    body functions, both consciously and unconsciously.
                  </span>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 mission-side-content">
                  <p class="mobile-padding">
                    <b> 13 million people in America</b> experience anosmia, a
                    partial or complete loss of smell.
                  </p>

                  <img src={Group} />
                  <p style={{ paddingTop: "45px" }}>
                    Approximately<b> 1 in 8 Americans</b> over age 40 has
                    measurable smell dysfunction.
                  </p>

                  <div
                    class="d-flex"
                    style={{ paddingTop: "50px", paddingBottom: "50px" }}
                  >
                    <span>
                      <div class="wrapper">
                        <div class="circle">
                          <div class="bar"></div>
                        </div>
                      </div>
                    </span>
                    <span style={{ paddingRight: "50px" }}>
                      <img src={Ellipse1} />
                    </span>
                    <p>
                      Over 50% of subjects between 65-80 years of age suffer
                      from anosmia.
                    </p>
                  </div>
                  <div class="d-flex">
                    <span>
                      <div class="wrapper">
                        <div class="circle1">
                          <div class="bar1"></div>
                        </div>
                      </div>
                    </span>
                    <span style={{ paddingRight: "30px" }}>
                      <img src={Ellipse2} alt="" />
                    </span>
                    <p>
                      80% of subjects above 80 years of age suffer from anosmia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section class="solution">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="card_title pe-lg-5">
                            <h2 class="mb-3 pb-lg-1">Our solutions</h2>
                            <p class="m-0 text-start">Sensify Inc. offers
                                olfactory health solutions, including Scentaware
                                smell testing kits, IntelliVista, a data
                                management suite for smell tests, and custom
                                software development for research
                                applications.</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-lg-5 mt-md-4 mt-4 g-3">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="solution_card">
                            <div class="card_title">
                                <h2 class="mb-4 pb-lg-1">Scentaware</h2>
                                <p class="text-start">Smell Evaluation kits for
                                    induviduals and researchers.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="solution_card">
                            <div class="card_title">
                                <h2 class="mb-4 pb-lg-1">IntelliVista</h2>
                                <p class="text-start">Data management software
                                    for research and clinical trials.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="solution_card">
                            <div class="card_title">
                                <h2 class="mb-4 pb-lg-1">Bespoke</h2>
                                <p class="text-start">We offer custom software
                                    solutions for large group clinical trials as
                                    well as academic research.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

// const Wrapper = styled.section`
//   .container-fluid {
//     width: 63%;
//   }
//   .mission-img {
//     background-image: url(${!isMobile ? new_missions : Brainmobileimage});
//     background-size: cover;
//     background-repeat: no-repeat;
//     position: var(--position-relative);
//     background-position: center;
//     width: 100%;
//     height: 70vw;
//     margin-top: -7vw;
//   }
//   .mission-content .mission-header p {
//     color: white;
//     font-weight: 700;
//     font-size: 50px;
//     line-height: 56px;
//     font-family: "WorkSans";
//   }
//   .mission-content {
//     padding-top: 80px;
//   }

//   .mission-des {
//     margin: 0px 0px 0px 40px;
//     font-weight: 300;
//     font-size: var(--font-size-16px);
//     line-height: 19px;
//     color: #fff;
//     padding-top: 40px;
//     padding-bottom: 100px;
//   }
//   .mission-side-content p {
//     font-weight: 300;
//     font-size: var(--font-size-16px);
//     line-height: 19px;
//     color: #fff;
//   }
//   .mission-side-content {
//     padding-left: 30px;
//   }
//   .mission-des b {
//     font-weight: 600;
//   }

//   .mission-header span {
//     font-weight: 600;
//     font-size: 40px;
//     line-height: 48px;
//     color: #fff;
//     font-family: "WorkSans";
//     padding-top: 90px;
//     display: block;
//   }
//   .mission-header {
//     padding-left: 80px;
//   }

//   @media screen and (min-width: 1100px) {
//     .mission-content .mission-header {
//       margin: 170px 0px 0px 0px;
//     }
//     .mission-des {
//       margin: 0px 0px 0px 80px;
//     }
//   }
//   @media screen and (min-width: 767px) and (max-width: 900px) {
//     .mission-content .mission-header {
//       margin: 0px 0px 0px 80px;
//       font-size: 28px;
//       font-weight: 400;
//       line-height: 30px;
//     }
//     .mission-des {
//       margin: 0px 0px 0px 80px;
//       // margin: 0px 0px 0px 80px;
//       font-size: 18px;
//       font-weight: 400;
//       line-height: 20px;
//     }
//   }

//   @media screen and (min-width: 320px) and (max-width: 767px) {
//     .mission-img {
//       background-position: initial;
//       height: 228vw;
//       margin-top: -18vw;
//     }
//     .mission-content .mission-header p {
//       display: none;
//     }
//     .mission-header {
//       padding-left: 0px;
//       display: flex;
//       justify-content: center;
//       align-items: self-end;
//     }
//     .mission-header span {
//       font-weight: 600;
//       font-size: 20px;
//       line-height: 30px;
//       padding-top: 0px !important;
//       padding-bottom: 40px;
//     }
//     .container-fluid {
//       width: 78%;
//       height: 100%;
//     }
//     .mission-content {
//       height: 100%;
//     }
//     .mission-content .row {
//       height: 100% !important;
//   }  
//   }
// `;

export default Olfactory;
