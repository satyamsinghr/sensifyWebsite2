import React from "react";
import styled from "styled-components";
import Evaluation_kit from "../assets/Mockuprevised.png";
import Evaluation_Kit_mobile from "../assets/Mockup_revised.png";
import partner1 from "../assets/partner-1.png"
import partner2 from "../assets/partner-2.png"
import partner3 from "../assets/partner-3.png"
import partner4 from "../assets/partner-4.png"
import partner5 from "../assets/partner-5.png"
import { isMobile } from "react-device-detect";

const EvaluationKit = () => {
  return (
    //  <Wrapper>
    //   {/* <section class="img olfaction-section">
    //     <div class="container-fluid p-0 ">
    //       <div class="olfaction-content">
    //         <div class="row ">
    //           <div class="col-lg-12 col-md-12 col-sm-12">
    //             <h1>
    //               Detect <br />
    //               changes in <br /> your olfaction <br /> with the <br />{" "}
    //               <span>
    //                 ScentAware <br />
    //                 Evaluation kit
    //               </span>
    //             </h1>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="des">*To be used with SensifyAware app.</div>
    //     </div>
    //   </section> */}
    //  </Wrapper>
    <> <section class="research_partners">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                <div class="card_title">
                    <h2 class="mb-3 pb-lg-1">Our research partners</h2>
                    <p class="m-0 text-start">We're honored to work
                        alongside leading research partners, driving
                        innovation in sensory research and health
                        together.</p>
                </div>
            </div>
        </div>
        <div class="row mt-lg-5 mt-md-4 mt-4 g-3">
            <ul class="partner_icon">
                <li>
                    <div class="partner_img">
                        <img src={partner1} width="100%"
                            alt/>
                    </div>
                </li>
                <li>
                    <div class="partner_img">
                        <img src={partner2} width="100%"
                            alt/>
                    </div>
                </li>
                <li>
                    <div class="partner_img">
                        <img src={partner3} width="100%"
                            alt/>
                    </div>
                </li>
                <li>
                    <div class="partner_img">
                        <img src={partner4} width="100%"
                            alt/>
                    </div>
                </li>
                <li>
                    <div class="partner_img">
                        <img src={partner5} width="100%"
                            alt/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section></>
   
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 70%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .des {
    width: 100%;
    text-align: right;
    padding-right: 31px;
    font-family: "WorkSans";
    font-weight: 500;
    font-size: 16px;
  }
  .img {
    background-image: url(${!isMobile
      ? Evaluation_kit
      : Evaluation_Kit_mobile});
    background-size: cover;
    background-repeat: no-repeat;
    position: var(--position-relative);
    background-position: center;
    width: 100%;
    height: 70vw;
  }
  .olfaction-content span {
    color: #4e4e4e;
  }
  .olfaction-content h1 {
    line-height: 47px;
    padding-top: 260px;
    font-weight: 700;
    font-size: 48px;
    font-family: "WorkSans";
    color: rgba(78, 78, 78, 0.5);
  }
  .olfaction-content {
    display: flex;
    justify-content: flex-end;
  }
  .olfaction-content span {
    font-weight: 600;
  }
  .olfaction-content p {
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
    // text-align: center;
    // padding: 30px 100px 0px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .olfaction-section .container-fluid {
      width: 85%;
      display: flex;
      justify-content: center;
    }
    .img {
      height: 222vw;
    }
    .olfaction-content h1 {
      text-align: left;
      padding-top: 70px;
      font-weight: 700;
      font-size: 32px;
      line-height: 45px;
      padding-right: 50px;
    }
    .olfaction-content br {
      display: none;
    }
    .des {
    display: none;
}
  }
`;

export default EvaluationKit;
