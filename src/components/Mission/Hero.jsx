import React from "react";
import styled from "styled-components";
import new_hero_img from "../../assets/CollabrationHero.png";
import MissionHero from "../../assets/MissionHero.png";
import { isMobile } from "react-device-detect";

const Hero = () => {
  return (
    <Wrapper>
      <section class="home-section" id="home">
        <div class="background-img">
        <div class="row hero-section">
            <div class="container-fluid p-0">
              <div class="col-lg-6 col-md-12 col-sm-12 section-one">
                <p>
                  Alzheimer’s Disease, among the top ten causes of death, is the
                  only one without precise early diagnosis and treatment
                </p>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 sub-section">
                <p>
                  Over $40 billion in failed <br /> trials since 1995
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .background-img {
    background-image: url(${isMobile ? MissionHero : MissionHero});
    background-size: cover;
    background-position: top;
    height: auto;
    min-height: 100vh;
    padding-top: 90px;
  }
  .container-fluid {
    width: 100%;
    display: flex;
    height: 100%;
  }
  .hero-section {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  .hero-section .col-lg-6 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .sub-section p,
  .section-one p {
    font-style: normal;
    font-weight: 700;
    color: #fff;
    font-family: "WorkSans";
    margin: 0px;
    padding-bottom: 60px;
  }
  .sub-section p {
    font-size: 32px;
  }
  .section-one p {
    padding-left: 106px;
    font-size: 56px;
  }

  .sub-section {
    background-color: #153f67b0;
  }
  .section-one {
    background-color: #041f39e3;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .container-fluid.p-0 {
      flex-wrap: wrap;
    }
    .section-one p {
      padding-left: 0px;
      font-size: 24px;
      padding-top: 30px;
      padding-bottom: 70px;
    }
    .sub-section {
      width: 100%;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
    .section-one , .sub-section{
      padding: 0px 20px;
  }
    .sub-section p {
      padding : 0px;
      font-size: 26px;
    }
  }
`;

export default Hero;
