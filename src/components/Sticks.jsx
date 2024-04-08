/** @format */

import React from "react";
import styled from "styled-components";
import Get_app from "../assets/Get_app.svg";
import new_sensify_app from "../assets/new_sensify_app.png";
import sensifyware_mobile from "../assets/sensifyware_mobile.png";
import { isMobile } from "react-device-detect";
import play_icon1 from "../assets/play_icon1.png";
import macIcon from "../../src/assets/macIcon.png";
import GetAppIcon from "../assets/getAppIcon.png";
import { getMobileOperatingSystem } from "../utils/helper";
import essential from "../assets/essential_img.png";

const Sticks = () => {

  const deviceName = getMobileOperatingSystem();

  console.log('deviceName',deviceName);

  return (
    <Wrapper>
      {/* <section class="about-section" id="about">
        <div class="about-img col-lg-6 col-md-6 col-sm-12">
          <div class="home-page-text digi-block">
            <div class="container-fluid p-0">
              <div class="col">
                <p class="home-heading">
                  A digital biomarker platform <br />
                  that evaluates your <br />
                  senses and cognition.
                </p>
              </div>
              <div class="col home-sub-heading">
                <p>
                  SensifyAware is a suite of digital tests to help <br />
                  detect the pre-clinical stages of neurocognitive <br />{" "}
                  disorders for early therapeutic intervention.
                </p>

                <div className="two-buttons">                 
                    <img src={macIcon} onClick={() => {
                      window.open(
                        "https://apps.apple.com/in/app/sensifyaware/id1638890466"
                      );
                    }} />                    
                  
                    <img src={play_icon1} className="google-play" onClick={() => {
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.sensifyaware"
                      );
                    }}/>                   
                </div>
                <div className="one-buttons">  
                  <img src={GetAppIcon} onClick={() => {
                      window.open(
                       deviceName === 'iOS' ? "https://apps.apple.com/in/app/sensifyaware/id1638890466" : "https://play.google.com/store/apps/details?id=com.sensifyaware"
                      );
                    }}/> </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section class="daily_lives">
            <div class="container-fluid">
                <div class="row">
                    <div
                        class="col-lg-5 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                        <div class="card">

                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <div class="card_title">
                                        <h2 class="mb-3 pb-lg-1">The essential
                                            role of
                                            the sense of smell in
                                            our daily lives.</h2>
                                        <p class="text-start m-0">A
                                            well-functioning
                                            olfactory system is not
                                            just about quality of life; it's
                                            about
                                            staying alert to the dangers that
                                            one cannot
                                            see or hear but can only be sensed
                                            through
                                            smell.</p>
                                        <h6
                                            class="mt-4 pt-lg-3 mb-0">Firefighters
                                            and
                                            Emergency Responders</h6>
                                        <p
                                            class="mb-0 mt-3 pt-lg-1 text-start">Detecting
                                            smoke and hazardous chemicals is
                                            vital for timely response and
                                            evacuation.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="card_title">
                                        <h2 class="mb-3 pb-lg-1">The essential
                                            role of
                                            the sense of smell in
                                            our daily lives.</h2>
                                        <p class="text-start m-0">A
                                            well-functioning
                                            olfactory system is not
                                            just about quality of life; it's
                                            about
                                            staying alert to the dangers that
                                            one cannot
                                            see or hear but can only be sensed
                                            through
                                            smell.</p>
                                        <h6
                                            class="mt-4 pt-lg-3 mb-0">Firefighters
                                            and
                                            Emergency Responders</h6>
                                        <p
                                            class="mb-0 mt-3 pt-lg-1 text-start">Detecting
                                            smoke and hazardous chemicals is
                                            vital for timely response and
                                            evacuation.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="card_title">
                                        <h2 class="mb-3 pb-lg-1">The essential
                                            role of
                                            the sense of smell in
                                            our daily lives.</h2>
                                        <p class="text-start m-0">A
                                            well-functioning
                                            olfactory system is not
                                            just about quality of life; it's
                                            about
                                            staying alert to the dangers that
                                            one cannot
                                            see or hear but can only be sensed
                                            through
                                            smell.</p>
                                        <h6
                                            class="mt-4 pt-lg-3 mb-0">Firefighters
                                            and
                                            Emergency Responders</h6>
                                        <p
                                            class="mb-0 mt-3 pt-lg-1 text-start">Detecting
                                            smoke and hazardous chemicals is
                                            vital for timely response and
                                            evacuation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                        <div class="daily_img">
                            <img src={essential} width="100%"
                                alt/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .digi-block{
    margin-top: -3px;
  }
  .home-heading {
    font-size: 40px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    color: var(--font-color-for-content);
    padding-top: 80px;
    color: white;
    font-family: "WorkSans";
  }
  .home-text {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-300);
    line-height: 19px;
    letter-spacing: 0em;
    color: var(--font-color-for-header);
    padding-bottom: 15px;
    color: white;
  }
  .about-img {
    background-image: url(${isMobile ? sensifyware_mobile : new_sensify_app});
    background-size: cover;
    // position: absolute;
    background-repeat: no-repeat;
    // position: var(--position-relative);
    background-position: center;
    width: 100%;
    height: auto;
    padding-bottom: 7vw;
    // object-fit: cover;
  }

  .about-content {
    padding-top: 198px;
    color: var(--font-color-for-content);
  }
  .about-content h3 {
    font-weight: var(--font-weight-600);
    font-size: var(--font-size-32px);
    line-height: 38px;
    color: var(--color-white);
    padding-bottom: 50px;
  }

  .about-content p,
  ul {
    font-weight: var(--font-weight-300);
    font-size: var(--font-size-16px);
    color: var(--color-white);
    line-height: 19px;
  }
  .home-sub-heading p {
    font-weight: 500;
    font-size: 20px;
    font-family: "WorkSans";
    color: #fff;
    margin: 0px;
    padding-top: 60px;
  }
  .ripple1 {
    color: #26649d;
    font-weight: bold;
    top: 602px;
    left: 240px;
    width: 165px;
    height: 56px;
    border-radius: 8px;
    box-shadow: 0px 8px 16px 1px rgba(30, 30, 30, 0.3);
    background: rgba(128, 221, 239, 1);
    border: 0px;
    margin-top: 70px;
  }
  .ripple1:hover {
    background: #4b68b8 radial-gradient(circle, transparent 1%, #4b68b8 1%)
      center/15000%;
  }
  .ripple1:active {
    background-color: #e8e8e8;
    background-size: 100%;
    transition: background 0s;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .about-img {
      background-position: revert !important;
      height: 178vw;
      background-size: cover;
    }
    .about-section .container-fluid {
      width: 85%;
    }

    p.home-heading {
      line-height: 31px !important;
      font-weight: 700 !important;
      font-size: 24px !important;
      padding-top: 0px;
    }

    p.home-heading br {
      display: block !important;
    }
    .home-sub-heading {
      padding-left: 0px;
      padding-top: 40px;
    }
    .home-sub-heading p {
      padding-top: 30px !important;
    }
    .ripple1 {
      margin-top: 50px;
    }
    p.home-heading {
      width: 100%;
    }
  }
`;

export default Sticks;
