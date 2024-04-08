import React, { useState } from "react";
import styled from "styled-components";
import ScentAwareIcon from "../../src/assets/ScentAwareIcon.png";
import TraceAwareIcon from "../../src/assets/TraceAwareIcon.png";
import AudioAwareIcon from "../../src/assets/AudioAwareIcon.png";
import GlanceAwareIcon from "../../src/assets/GlanceAwareIcon.png";
import comprehensive from "../../src/assets/comprehensive.png";
import double_col from "../../src/assets/double_col.png";

const Olfaction = () => {
  const [indexNo, setIndexNo] = useState(0);
  const ImageContainer = ({ Image, index }) => {
    return (
      <>
        <div
          class="col-lg-2 col-md-12 col-sm-12"
          onClick={() => setIndexNo(index)}
        >
          <div
            class={
              index == indexNo ? "image-container-active" : "image-container"
            }
          >
            <div>
              <img src={Image} />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {/* <section class="img olfaction-section">
        <div class="container-fluid p-0 ">
          <div class="olfaction-content">
            <div class="row ">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <h1>
                  Can your senses decline?
                  <br />
                  How do you even begin <br /> to keep a track of your senses?
                </h1>
                <p>
                  SensifyAware is a digital assessment toolkit, <br />
                  built to do just that.
                </p>
              </div>
              <div class="row olfaction-description">
                <ImageContainer Image={ScentAwareIcon} index={0} />
                <ImageContainer Image={TraceAwareIcon} index={1} />
                <ImageContainer Image={AudioAwareIcon} index={2} />
                <ImageContainer Image={GlanceAwareIcon} index={3} />
                <ImageContainer Image={text_icon} index={4} />
                <ImageContainer Image={double_col} index={5} />
              </div>

              <div class="row description">
                {indexNo == 0 ? (
                  <>
                    <h4>ScentAware</h4>{" "}
                    <span>This helps test your sense of smell.</span>
                  </>
                ) : indexNo == 1 ? (
                  <>
                    <h4>TraceAware</h4>
                    <span>
                      This helps test your fine motor skills, processing speed
                      and visual short term memory.{" "}
                    </span>
                  </>
                ) : indexNo == 2 ? (
                  <>
                    <h4>AudioAware</h4>{" "}
                    <span>This helps assess your verbal memory.</span>
                  </>
                ) : indexNo == 3 ? (
                  <>
                    <h4>WordsAware</h4>{" "}
                    <span>
                      This helps test your vocabulary and word retrieval.
                    </span>
                  </>
                ) : indexNo == 4 ? (
                  <>
                    <h4>GrammarAware</h4>{" "}
                    <span>
                      This helps test your spontaneous speech and articulation.
                    </span>
                  </>
                ) : (
                  <>
                    <h4>GlanceAware</h4>{" "}
                    <span>This helps test your associative memory.</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section class="comprehensive">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 ps-0">
                        <div class="comprehensive_img">
                            <img src={comprehensive} width="100%"
                                alt/>
                        </div>
                    </div>
                    <div
                        class="col-lg-6 px-lg-5 col-md-6 col-sm-12 col-12 d-flex align-items-center pb-lg-5">
                        <div class="card_title pb-lg-5 ps-lg-5">
                            <h2>A comprehensive solution for personal and
                                clinical smell evaluation.</h2>
                            <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                                    <p class="text-start mb-1 mt-4 pt-lg-1"><b>Diverse
                                            Range of Scents</b></p>
                                    <p class="text-start m-0">Our kit includes 16 unique
                                        aromas, selected to
                                        cover a broad spectrum of scent profiles.</p>
                                    <p
                                        class="text-start mb-1 mt-4 pt-lg-3"><b>Accessible
                                            and Convenient</b></p>
                                    <p class="text-start m-0">At-home
                                        solution for monitoring your sense of smell,
                                        anytime and anywhere.</p>
                                    <p
                                        class="text-start mb-1 mt-4 pt-lg-3"><b>Easy-to-Use
                                            Mobile App</b></p>
                                    <p class="text-start m-0">Available on both Android
                                        and iOS, our
                                        user-friendly app is free to download.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .row.description {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 57px;
  }
  element.style {
  }
  .description h4 {
    font-weight: 700;
    font-size: 40px;
    font-family: "WorkSans";
    color: #4e4e4e;
    width: auto;
  }
  .description span {
    font-weight: 300;
    font-size: 24px;
    font-family: "WorkSans";
    color: #4e4e4e;
    width: auto;
  }
  .row.olfaction-description .col-lg-3 {
    width: 165px;
  }
  .row.olfaction-description {
    margin-top: 70px;
  }
  .image-container-active img {
    filter: brightness(0) invert(1);
  }
  .olfaction-content h1 {
    padding-bottom: 20px;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    font-family: "WorkSans";
    color: #4e4e4e;
  }
  .olfaction-content {
    padding: 60px 0px;
  }
  .olfaction-content span {
    font-weight: 600;
  }
  .olfaction-content p {
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    color: #4e4e4e;
    font-family: "WorkSans";
  }

  .image-container-active img,
  .image-container img {
    height: 45px;
  }
  .image-container-active {
    box-shadow: 0px 16px 24px rgb(38 100 157 / 75%);
    background-color: #26649d;
  }
  .image-container-active,
  .image-container {
    width: 135px;
    display: flex;
    justify-content: center;
    height: 135px;
    border-radius: 30px;
    align-items: center;
    cursor: pointer;
  }
  .image-container {
    box-shadow: 0px 8px 16px rgba(38, 100, 157, 0.25);
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .olfaction-content h1 {
      line-height: 38px;
      font-weight: 700;
      font-size: 32px;
      padding-top: 50px;
    }

    .container-fluid {
      width: 80%;
    }

    .olfaction-content p {
      font-size: 16px;
      line-height: 24px;
      padding-top: 20px;
    }
    .row.olfaction-description {
      display: none;
    }
    .row.description {
      display: none !important;
    }
    .olfaction-content br {
      display: none;
    }
  }
`;

export default Olfaction;
