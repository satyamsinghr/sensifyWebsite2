import React from "react";
import styled from "styled-components";
import new_hero_img from "../../assets/CollabrationHero.png";
import MobileHeroCollbration from "../../assets/MobileHeroCollbration.png";
import { isMobile } from "react-device-detect";

const Hero = () => {
  return (
    <Wrapper>
      <section class="home-section" id="home">
        <div class="background-img">
          <div class="container-fluid p-0">
            <div class="col-lg-12 col-md-12 col-sm-12 home-heading">
              <p>
                Our goals and <br /> objectives.
              </p>
            </div>
            <div class="row content">
              <div class="col-lg-3 col-md-12 col-sm-12 hero-description">
                <p>Easily accessible cognitive and sensory acuity tests.</p>
              </div>
              <div
                class="col-lg-3 col-md-12 col-sm-12 hero-description"
                style={{ marginTop: "100px" }}
              >
                <p>Remote monitoring and longitudinal analysis.</p>
              </div>
              <div
                class="col-lg-3 col-md-12 col-sm-12 hero-description"
                style={{ marginTop: "200px" }}
              >
                <p>
                  Predictive analytics to detect pre-clinical stages of
                  neurodegenerative diseases.
                </p>
              </div>
              <div
                class="col-lg-3 col-md-12 col-sm-12 hero-description"
                style={{ marginTop: "300px" }}
              >
                <p>
                  Change the course of the progression of neurodegenerative
                  diseases.
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
  .container-fluid {
    width: 63%;
  }
  .content {
    padding-bottom: 50px;
  }
  .background-img {
    background-image: url(${isMobile ? MobileHeroCollbration : new_hero_img});
    background-size: cover;
    background-position: top;
  }
  .home-heading {
    display: flex;
    justify-content: flex-end;
  }
  .home-heading p {
    font-size: 64px;
    line-height: 72px;
    letter-spacing: 0em;
    padding-top: 240px;
    color: white;
    font-weight: 700;
    font-family: "WorkSans";
  }

  .hero-description {
    font-weight: 700;
    font-family: "WorkSans";
    font-size: 22px;
    line-height: 32px;
    color: #fff;
    padding: 0px;
  }


  @media screen and (min-width: 320px) and (max-width: 767px) {
    .home-heading p {
      font-size: 35px !important;
      line-height: 40px !important;
      margin-bottom: 20px;
      padding-top: 170px;
    }
    .home-heading {
      display: flex;
      justify-content: flex-start !important;
    }
    .container-fluid {
      width: 76%;
    }
    .hero-description {
      padding: 0px 100px 0px 11px;
      margin: 10px 0px 12px 0px !important;
      font-size: 18px;
    }
    .background-img {
      height: 260vw;
  }
  }

  
  @media screen and (min-width:1150px) and (max-width:1350px)
  {
    .hero-description {
      font-size: 19px;
      line-height: 29px;
  }
  }
  @media screen and (min-width:992px) and (max-width:1150px)
  {
  .hero-description {
    font-size: 16px;
    line-height: 24px;
}
}
`;

export default Hero;
