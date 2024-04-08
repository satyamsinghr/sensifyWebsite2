import React from "react";
import styled from "styled-components";
import scan_a_vial from "../assets/scan_a_vial.svg";
import smell_the_sample from "../assets/smell_the_sample.svg";
import identify_the_odor from "../assets/identify_the_odor.svg";
import check_your_result from "../assets/check_your_result.svg";
import nextIcon from "../assets/nextIcon.png";
import prevIcon from "../assets/prevIcon.png";

const Tutorials = () => {
  return (
    <>
    <section class="get_in_touch">
            <div class="container">
                <div class="row g-3">
                    <div
                        class="col-lg-5 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                        <div class="card_title pe-lg-5">
                            <h2 class="mb-0">Let’s get in touch.</h2>
                            <p class="mt-4 pt-lg-2 mb-0 text-start">We are open
                                for collaboration with researchers in the
                                industry, academia and the government. Take your
                                research to the next level with us and
                                accomplish your research objectives.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 ps-lg-5 col-md-6 col-sm-12 col-12 ms-lg-5">
                        <form action class="query_form">
                            <div class="form_input mb-3 pb-lg-1">
                                <input type="text" placeholder="Your name"
                                    class="form-control"/>
                            </div>
                            <div class="form_input mb-3 pb-lg-1">
                                <input type="text" placeholder="Organization"
                                    class="form-control"/>
                            </div>
                            <div class="form_input mb-3 pb-lg-1">
                                <input type="email" placeholder="Email"
                                    class="form-control"/>
                            </div>
                            <div class="form_input mb-3 pb-lg-1">
                                <textarea name="challenging" id
                                    class="form-control"
                                    placeholder="What’s challenging you?"></textarea>
                            </div>
                            <div
                                class="d-flex align-items-end justify-content-end">
                                <button class="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
    // <Wrapper>
    //   <section class="tutorials-section" id="tutorials">
    //     <div class="container-fluid p-0">
    //       <div class="tutorials-content">
    //         <div class="row ">
    //           <div class="col-lg-12 col-md-12 col-sm-12">
    //             <h2 class="minutes">
    //               Evaluate your sense of smell in
    //               <br /> under
    //               <span>
    //                 {" "}
    //                 <u>
    //                   {" "}
    //                   <b>20 minutes.</b>
    //                 </u>
    //               </span>
    //             </h2>
    //           </div>
             
    //           <div
    //             class="col-lg-12 carousel slide"
    //             id="trailers"
    //             data-bs-ride="carousel"
                
    //             data-interval="1000"
    //           >
    //             <div class="carousel-indicators">
    //               <button
    //                 type="button"
    //                 data-bs-target="#trailers"
    //                 data-bs-slide-to="0"
    //                 class="active"
    //                 aria-current="true"
    //                 aria-label="Slide 1"
    //               ></button>
    //               <button
    //                 type="button"
    //                 data-bs-target="#trailers"
    //                 data-bs-slide-to="1"
    //                 aria-label="Slide 2"
    //               ></button>
    //               <button
    //                 type="button"
    //                 data-bs-target="#trailers"
    //                 data-bs-slide-to="2"
    //                 aria-label="Slide 3"
    //               ></button>
    //               <button
    //                 type="button"
    //                 data-bs-target="#trailers"
    //                 data-bs-slide-to="3"
    //                 aria-label="Slide 4"
    //               ></button>
    //             </div>
    //             <div
    //               class="trailerSlider carousel-inner"
    //             >
    //               <div class="carousel-item active">
    //                 <div class="row order tutorial-1-alignment">
    //                   <div class="col-lg-6 col-md-6 col-sm-12">
    //                     <img src={scan_a_vial} class="img-fluid" />
    //                   </div>
    //                   <div class="col-lg-6 col-md-6 col-sm-12 side-desc">
    //                     <div>
    //                       <h6>Step 1</h6>
    //                       <h4>Scan the Inhaler tube</h4>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div class="carousel-item">
                   
    //                 <div class="row order tutorial-3-alignment">
    //                   <div class="col-lg-6 col-md-6 col-sm-12">
    //                     <img src={smell_the_sample} class="img-fluid" />
    //                   </div>
    //                   <div class="col-lg-6 col-md-6 col-sm-12 side-desc">
    //                     <div>
    //                       <h6>Step 2</h6>
    //                       <h4>Smell the sample</h4>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div class="carousel-item">
    //                 <div class="row order tutorial-3-alignment">
    //                   <div class="col-lg-6 col-md-6 col-sm-12">
    //                     <img src={identify_the_odor} class="img-fluid" />
    //                   </div>
    //                   <div class="col-lg-6 col-md-6 col-sm-12 side-desc">
    //                     <div>
    //                       <h6>Step 3</h6>
    //                       <h4>Identify the odor</h4>
    //                     </div>
    //                   </div>
    //                 </div>

    //               </div>
    //               <div class="carousel-item">
    //                 <div class="row order tutorial-3-alignment">
    //                   <div class="col-lg-6 col-md-6 col-sm-12">
    //                     <img src={check_your_result} class="img-fluid" />
    //                   </div>
    //                   <div class="col-lg-6 col-md-6 col-sm-12 side-desc">
    //                     <div>
    //                       <h6>Step 4</h6>
    //                       <h4>Check your result</h4>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>

    //           <button class="carousel-control-prev" type="button" data-bs-target="#trailers" data-bs-slide="prev">
    //             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //           </button>
    //           <button class="carousel-control-next" type="button" data-bs-target="#trailers" data-bs-slide="next">
    //             <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //           </button>
    //           </div>
            
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .carousel-indicators [data-bs-target] {
    background-color: black;
  }
  .side-desc {
    display: flex;
    align-items: center;
  }
  h2.minutes {
    font-weight: 300;
    font-size: 40px;
    font-family: "WorkSans";
    padding-top: 100px;
  }
  .side-desc h6 {
    font-weight: 700;
    font-size: 40px;
    font-family: "WorkSans";
    color: #9c9c9c;
  }
  .carousel-indicators-btn {
    background-color: #26649d;
  }
  .carousel-indicators {
    justify-content: flex-end;
    margin-right: 0px;
    margin-left: 0px;
  }
  .tutorials-content h4 {
    line-height: 38px;
    padding-bottom: 33px;
    font-weight: 700;
    font-size: 40px;
    font-family: "WorkSans";
  }
  .tutorial-1-alignment {
    padding-top: 100px;
  }
  .tutorial-1 {
    padding-bottom: 70px;
  }
  .tutorial-2 {
    padding-top: 150px;
    padding-bottom: 120px;
  }
  .tutorial-3 {
    padding-top: 80px;
    padding-bottom: 130px;
  }
  .tutorial-4 {
    padding-top: 100px;
    padding-bottom: 200px;
  }
  .tutorial-3-alignment {
    padding-top: 100px;
  }
  .tutorials-content p {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-300);
    line-height: 20px;
    // font-family: "Inter", sans-serif;
  }
  .tutorial-1 .minutes {
    font-weight: 300;
    font-size: 40px;
    line-height: 47px;
    // padding-bottom: 70px;
    // padding-left: 40px;
  }

  .carousel-indicators [data-bs-target] {
    background-color: #26649D;
    border: 1px solid;
    width: 58px;
}
  .carousel .carousel-control-prev-icon {
    background-image: url('${prevIcon}');
  }
  .carousel .carousel-control-next-icon {
      background-image: url('${nextIcon}');
  }
  .carousel-control-next-icon, .carousel-control-prev-icon {
      width: 40px;
      height: 40px;
  }
  .carousel-control-next{
    right:-25%;
  }
  .carousel-control-prev{
    left:-25%;
  }
.tutorials-content{
  position: relative;
}
.arrow-style{
  position: absolute;
  top: 65%;
}
.left-arrow{
  left: -15%;
}
.right-arrow{
  right: -15%;
}
.carousel-control-prev, .carousel-control-next{
  opacity: 1 !important;
}

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .tutorial-1 .minutes {
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      padding: 0px 20px 40px;
    }
    .tutorial-1-alignment {
      padding-top: 20px;
    }
    .tutorial-3-alignment {
      padding-top: 30px;
    }
    .tutorials-section .container-fluid {
      width: 85%;
    }
    .order {
      flex-direction: column-reverse;
    }
    .tutorial-1 {
      padding-top: 40px;
      padding-bottom: 48px;
    }
    .tutorial-2 {
      padding-top: 70px;
      padding-bottom: 48px;
    }
    .tutorial-3 {
      padding-top: 80px;
      padding-bottom: 50px;
    }
    .tutorial-4 {
      padding-top: 80px;
      padding-bottom: 50px;
    }
    .tutorials-content h2 {
      font-weight: var(--font-weight-600);
      font-size: var(--font-size-24px);
      line-height: 28px;
      padding-top: 64px;
    }
    .tutorials-content h4 {
      font-size: var(--font-size-24px);
      font-weight: var(--font-weight-300);
      line-height: 28px;
      padding-bottom: 24px;
      margin-left: 0px;
    }
    .tutorials-content p {
      font-size: var(--font-size-14px);
      line-height: 16px;
      line-height: 17px;
      // font-family: "Inter", sans-serif;
    }

    .carousel-indicators {
      display: flex;
      justify-content: center !important;
      position: absolute;
      bottom: -82px;
    }
    .carousel-control-prev{
      left: 25%;
      top: 122%;
    }
    .carousel-control-next{
      right: 25%;
      top: 122%;
    }
  }
`;

export default Tutorials;
