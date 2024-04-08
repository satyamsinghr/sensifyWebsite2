import React from "react";
import styled from "styled-components";
import new_hero_img from "../assets/new_hero_img.png";
import Hero_mobile_img from "../assets/Hero_mobile_img.png";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import infection from "../assets/infection.png";
import nasal from "../assets/nasal.png";
import headInjury from "../assets/head-injury.png";
import age from "../assets/age.png";
import damage from "../assets/damage.png";
import medication from "../assets/medication.png";
import smoking from "../assets/smoking.png";
import exposure from "../assets/exposure.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section class="medically-known">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div class="card_title text-start">
                            <h2 class="mb-3 pb-lg-1">Smell loss, medically known
                                as anosmia, can
                                occur due to various factors. </h2>
                            <p class=" text-start mb-0">While some viral
                                infections might temporarily
                                impair your sense of smell, permanent anosmia
                                often results when the neurons responsible for
                                scent detection are damaged.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 offset-lg-1 col-sm-12 col-12">
                        <div
                            class="medically_card card_title d-flex align-items-start gap-3 pe-lg-4 pb-3 pt-2">
                            <div class="medically_img">
                                <img src={infection} alt/>
                            </div>
                            <div>
                                <p class="text-start mb-1"><b>Viral
                                        Infections</b></p>
                                <p class="text-start m-0">Such as the common
                                    cold or flu.</p>
                            </div>
                        </div>
                        <div
                            class="medically_card card_title d-flex align-items-start gap-3 pe-lg-4 pb-3 pt-2">
                            <div class="medically_img">
                                <img src={nasal} alt/>
                            </div>
                            <div>
                                <p class="text-start mb-1"><b>Nasal and Sinus
                                        Issues</b></p>
                                <p class="text-start m-0">Conditions like
                                    allergies, sinusitis, or nasal polyps.</p>
                            </div>
                        </div>
                        <div
                            class="medically_card card_title d-flex align-items-start gap-3 pe-lg-4 pb-3 pt-2">
                            <div class="medically_img">
                                <img src={headInjury} alt/>
                            </div>
                            <div>
                                <p class="text-start mb-1"><b>Head Injuries
                                    </b></p>
                                <p class="text-start m-0">Trauma to the head can
                                    damage the olfactory nerves.</p>
                            </div>
                        </div>
                        <div
                            class="medically_card card_title d-flex align-items-start gap-3 pe-lg-4 pb-3 pt-2">
                            <div class="medically_img">
                                <img src={age} alt/>
                            </div>
                            <div>
                                <p class="text-start mb-1"><b>Age</b></p>
                                <p class="text-start m-0">As we age, our sense
                                    of smell may naturally decline.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 offset-lg-1 col-sm-12 col-12">
                        <div
                            class="medically_card card_title d-flex align-items-start gap-3 pe-lg-4 pb-3 pt-2">
                            <div class="medically_img">
                                <img src={damage} alt/>
                            </div>
                            <div>
                                <p class="text-start mb-1"><b>Damage to nervous
                                        system</b></p>
                                <p class="text-start m-0">Degeneration or
                                    inflammation in the nervous system.</p>
                            </div>
                        </div>
                        <div
                            class="medically_card card_title d-flex align-items-start gap-3 pe-lg-4 pb-3 pt-2">
                            <div class="medically_img">
                                <img src={medication} alt/>
                            </div>
                            <div>
                                <p class="text-start mb-1"><b>Medication</b></p>
                                <p class="text-start m-0">Certain medications
                                    can alter the sense of smell.</p>
                            </div>
                        </div>
                        <div
                            class="medically_card card_title d-flex align-items-start gap-3 pe-lg-0 pb-3 pt-2">
                            <div class="medically_img">
                                <img src={smoking} alt/>
                            </div>
                            <div>
                                <p class="text-start mb-1"><b>Smoking</b></p>
                                <p class="text-start m-0">Smoking or vaping can
                                    negatively impact your ability to smell.</p>
                            </div>
                        </div>
                        <div
                            class="medically_card card_title d-flex align-items-start gap-3 pe-lg-0 pb-3 pt-2">
                            <div class="medically_img">
                                <img src={exposure} alt/>
                            </div>
                            <div>
                                <p class="text-start mb-1"><b>Exposure to toxic
                                        chemicals</b></p>
                                <p class="text-start m-0">Occupational exposure
                                    to numerous individual chemicals has been
                                    associated with smell loss.</p>
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
//   .background-img {
//     background-image: url(${isMobile ? Hero_mobile_img : new_hero_img});
//     background-size: cover;
//     background-position: top;
//     height: 100vh;
//   }
//   .home-button {
//     background-color: #22669c;
//     box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3);
//     border-radius: 8px;
//     border: none;
//     padding: 15px 20px;
//     color: white;
//     margin-top: 130px;
//   }
//   .home-heading {
//     font-size: 56px;
//     font-weight: 700;
//     line-height: 64px;
//     letter-spacing: 0em;
//     padding-top: 300px;
//     color: rgba(255, 255, 255, 0.5);
//     font-family: "WorkSans";
//   }
//   p.home-heading span {
//     color: #fff;
//   }
//   .home-text {
//     font-size: var(--font-size-16px);
//     font-weight: var(--font-weight-300);
//     line-height: 19px;
//     letter-spacing: 0em;
//     color: var(--font-color-for-header);
//     padding-bottom: 15px;
//     color: white;
//   }
//   @media screen and (min-width: 320px) and (max-width: 767px) {
//     p.home-heading {
//       font-size: 36px !important;
//       line-height: 55px !important;
//       padding-top: 100px;
//       width : 100%
//     }
//     .container-fluid {
//       height: 97vw;
//       width: 84%;
//     }
//     .background-img {
//       height: auto;
//     }
//     p.home-heading br {
//       display: block !important;
//   }
//   }
// `;

export default Hero;
