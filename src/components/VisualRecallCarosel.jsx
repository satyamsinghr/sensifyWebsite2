import React, { useRef } from "react";
import styled from "styled-components";
import Visual_recall_img from "../assets/Visual_recall_img.png";
import Visual_recall_img_2 from "../assets/Visual_recall_img_2.png";
import Visual_recall_img_3 from "../assets/Group3662.png";
import MockupOne from "../assets/MockupOne.png";
import leftVideo from "../assets/left_video.png";
import video from "../assets/video_img.png";
import MockupForth from "../assets/Group1234.png";
import Visual_recall_img_4 from "../assets/Group3639.png";
import { Carousel, Button, } from "antd";

import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material';
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const contentStyle = {
  // margin: 0,
  // height: "160px",
  // color: "#fff",
  // lineHeight: "160px",
  // textAlign: "center",
  // background: "#364d79",
};
const VisualRecallCarosel = () => {
  const slider = useRef(null);
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <> <section class="video_section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="video">
              <img src={leftVideo} alt width="100%" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="video">
              <img src={video} alt width="100%" />
            </div>
          </div>
        </div>
      </div>
    </section></>
    // <Wrapper>
    //   {/* <LeftOutlined /> */}
    //   <div className="carosel-section">
    //   <span className="next-page">
    //     <ArrowCircleLeftOutlined className="left-arrow arrow-style" sx={{ color: "white", fontSize: 40}} onClick={() => slider.current.next()} >next</ArrowCircleLeftOutlined>
    //   </span>
    //   <Carousel ref={slider} dots={false} >

    //     <div className="first-slider" id="first-slides"> 
    //       <h3>Track your<br /> verbal memory with<br /> AudioAware.</h3>
    //     </div>

    //     <div className="second-slider">
    //       <h3>Track your<br /> associated memory<br /> with GlanceAware.</h3>
    //     </div>

    //     <div  className="third-slider">
    //       <h3>Track your olfactory<br /> senses with<br /> ScentAware.</h3>
    //     </div> 

    //     <div  className="fourth-slider">
    //       <h3>Track your spontaneous<br />speech and articulation <br /> with GrammarAware..</h3>
    //     </div>

    //     <div className="five-slider">
    //       <h3>Track your<br /> vocabulary and word<br /> retrieval with<br /> WordsAware.</h3>
    //     </div>
    //   </Carousel>
    //   {/* <RightOutlined /> */}
    //   <span className="next-page">
    //     <ArrowCircleRightOutlined className="right-arrow arrow-style" sx={{ color: "white", fontSize: 40}}  onClick={() => slider.current.prev()}>previous</ArrowCircleRightOutlined>
    //   </span>
    //   </div>
    //   {/* <div
    //     id="carouselExampleIndicators"
    //     class="carousel slide"
    //     data-bs-ride="carousel"
    //   >
    //     <div class="carousel-inner">
    //       <div class="carousel-item first-slider">
    //         <div class="container-fluid p-0 ">
    //           <div class="row ">
    //             <div class="col">
    //               <span class="slider-text">
    //                 Track your visual <br /> memory and fine <br /> motor skills
    //                 with <br /> <span>TraceAware.</span>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="carousel-item second-slider">
    //         <div class="container-fluid p-0 ">
    //           <div class="row ">
    //             <div class="col">
    //               <span class="slider-text">
    //                 Track your verbal <br /> memory with <br />{" "}
    //                 <span>AudioAware.</span>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="carousel-item third-slider">
    //         <div class="container-fluid p-0 ">
    //           <div class="row ">
    //             <div class="col">
    //               <span class="slider-text">
    //                 Track your visual <br /> memory and fine <br /> motor skills
    //                 with <br /> <span>TraceAware.</span>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="carousel-item forth-slider active">
    //         <div class="container-fluid p-0 ">
    //           <div class="row ">
    //             <div class="col">
    //               <span class="slider-text-forth">
    //                 Track your vocabulary <br />
    //                 and word retrieval with<br></br> WordsAware.
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    // </Wrapper>
  );
};

const Wrapper = styled.section`

.first-slider{
  background-slider{
    color: red;
  }
}
.arrow-style{
  position: absolute;
  z-index: 999;
  top: 50%;
}
.left-arrow{
  left:5%
}
.right-arrow{
  right:5%;
}
.carosel-section{
  justify-content: space-between;
  position: relative;
}

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .first-slider .col {
      align-items: center !important;
    }
    .first-slider span.slider-text {
      margin-bottom: 10px !important;
    }
    .second-slider .col {
      justify-content: flex-start;
      align-items: center;
    }
    .arrow-style{
      position: absolute;
      z-index: 999;
      top: 50%;
    }
    .left-arrow{
      left:3%
    }
    .right-arrow{
      right:3%;
    }

    span.slider-text {
      font-weight: 700;
      font-size: 30px !important;
      line-height: 38px !important;
      margin-bottom: 0px !important;
    }

    .olfaction-section .container-fluid {
      width: 85%;
    }
    .second-slider span.slider-text {
      margin-top: 466px;
    }
    span.slider-text {
      font-size: 23px;
      color: #fff;
    }

    .second-slider,
    .third-slider,
    .first-slider {
      height: 228vw;
    }
    .third-slider br {
      display: none;
    }
    .third-slider span.slider-text {
      margin-top: 410px;
    }
    .img {
      width: auto;
    }
    .olfaction-content h1 {
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      padding-top: 50px;
    }
    .olfaction-content p {
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      padding: 20px 0px 0px;
    }
    span.slider-text {
      font-weight: 700;
      font-size: 30px !important;
      line-height: 48px !important;
      margin-top: 380px !important;
    }
  }
`;

export default VisualRecallCarosel;
